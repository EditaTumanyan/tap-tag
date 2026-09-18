type GlyphIconProps = {
  paths: string[];
  color?: string;
  size?: number;
  strokeWidth?: number;
};

export default function GlyphIcon({ paths, color = "#e56a78", size = 26, strokeWidth = 1.7 }: GlyphIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
