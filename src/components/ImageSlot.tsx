import Image from "next/image";
import type { CSSProperties } from "react";

type ImageSlotProps = {
  src?: string;
  alt?: string;
  placeholder?: string;
  style?: CSSProperties;
  className?: string;
  sizes?: string;
  objectPosition?: string;
  scale?: number;
};

export default function ImageSlot({ src, alt = "", placeholder = "Image", style, className, sizes = "(max-width: 768px) 100vw, 50vw", objectPosition = "50% 50%", scale = 1 }: ImageSlotProps) {
  if (src) {
    return (
      <div className={className} style={{ position: "relative", overflow: "hidden", ...style }}>
        <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover", objectPosition, transform: scale !== 1 ? `scale(${scale})` : undefined }} />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#f3e8ff,#fde8d7)",
        color: "#8a7fb5",
        fontFamily: "'Nunito Sans',sans-serif",
        fontSize: 14,
        fontWeight: 600,
        textAlign: "center",
        padding: 12,
        ...style,
      }}
    >
      {placeholder}
    </div>
  );
}
