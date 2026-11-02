import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { SITE_URL, pageMetadata } from "@/data/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  const meta = pageMetadata({ title: `${post.title} | TapTag`, description: post.description, path: `/blog/${post.slug}` });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: { ...meta.twitter, images: [post.cover] },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const more = getPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: [`${SITE_URL}${post.cover}`],
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      author: { "@type": "Organization", name: post.author, url: SITE_URL },
      publisher: { "@type": "Organization", name: "TapTag", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.png` } },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div className="fade-up">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 64px" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: "#8a84a8", marginBottom: 28 }}>
          <Link href="/" className="hover:text-[#2b2733]">Home</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/blog" className="hover:text-[#2b2733]">Blog</Link>
        </nav>

        <h1 className="text-[32px] md:text-[42px] lg:text-[48px]" style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, margin: "0 0 18px", color: "#2b2733", lineHeight: 1.12 }}>
          {post.title}
        </h1>
        <div style={{ fontSize: 15, color: "#8a84a8", marginBottom: 32 }}>
          {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
          {post.draft && <span style={{ marginLeft: 8, color: "#e56a78", fontWeight: 700 }}>DRAFT (not visible on the live site)</span>}
        </div>

        <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", marginBottom: 40, background: "#f4f1fd" }}>
          <Image src={post.cover} alt={post.coverAlt} fill priority sizes="(min-width:800px) 760px, 100vw" style={{ objectFit: "cover" }} />
        </div>

        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.html }} />

        <div style={{ marginTop: 56, padding: "36px 32px", borderRadius: 16, background: "linear-gradient(120deg,#e9d5ff,#fde9eb)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 10px", color: "#2b2733" }}>Want TapTag to help you grow?</h2>
          <p style={{ fontSize: 16, color: "#57517a", margin: "0 0 22px", lineHeight: 1.6 }}>Tell us about your business or project, and we&rsquo;ll get back to you within one business day.</p>
          <Link
            href="/contact"
            className="hover:opacity-90 hover:-translate-y-0.5"
            style={{ display: "inline-block", background: "#e56a78", color: "#fff", padding: "15px 32px", borderRadius: 8, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "opacity .2s,transform .18s" }}
          >
            Book a Call
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px 88px" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontSize: 28, fontWeight: 700, margin: "0 0 24px", color: "#2b2733", textAlign: "center" }}>More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="bg-white border-[#e7e4f2] hover:border-[#e56a78] transition-colors" style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 12, padding: "20px 22px", textDecoration: "none", color: "#2b2733" }}>
                <div style={{ fontSize: 13, color: "#9b93ab", marginBottom: 8 }}>{formatDate(p.date)}</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 17, lineHeight: 1.35 }}>{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
