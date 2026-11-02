#!/usr/bin/env bash
# Deploy taptag.am: puts the latest pushed `main` live on the server.
# Usage: npm run deploy
# Needs the "taptag-server" SSH alias in ~/.ssh/config (key-based login as the deploy user).
set -euo pipefail

SERVER="taptag-server"
APP_DIR="/home/deploy/tap-tag"
PM2_APP="tap-tag-website"
SITE="https://taptag.am"

cd "$(dirname "$0")/.."

# 1. Safety checks: the server deploys what is on GitHub, so local work must be committed and pushed.
branch=$(git branch --show-current)
if [ "$branch" != "main" ]; then
  echo "✋ You are on branch '$branch'. Switch to main first: git switch main"; exit 1
fi
if [ -n "$(git status --porcelain)" ]; then
  echo "✋ You have uncommitted changes. Commit them (or stash them) first:"; git status --short; exit 1
fi
git fetch -q origin main
if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]; then
  echo "✋ Your main is not the same as GitHub. Run 'git push' (or 'git pull') first."; exit 1
fi

echo "🚀 Deploying $(git log --oneline -1) ..."

# 2. On the server: pull, install packages only if they changed, build, restart.
ssh "$SERVER" bash -s <<EOF
set -euo pipefail
cd "$APP_DIR"
before=\$(git rev-parse HEAD)
git pull --ff-only -q
if ! git diff --quiet "\$before" HEAD -- package-lock.json; then
  echo "📦 Packages changed, installing..."
  npm ci --no-audit --no-fund
fi
echo "🔨 Building..."
npm run build > /tmp/taptag-build.log 2>&1 || { tail -30 /tmp/taptag-build.log; echo "❌ Build failed. The site was NOT restarted."; exit 1; }
pm2 restart "$PM2_APP" > /dev/null
echo "✅ Server is on: \$(git log --oneline -1)"
EOF

# 3. Check the live site.
sleep 3
fail=0
for path in / /services /courses /about /contact /faq; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "$SITE$path")
  [ "$code" = "200" ] || { echo "⚠️  $SITE$path returned $code"; fail=1; }
done
[ $fail = 0 ] && echo "🌐 Live site OK: $SITE" || { echo "❌ Some pages failed, check the server: ssh $SERVER 'pm2 logs $PM2_APP --lines 50'"; exit 1; }
