import FaqList from "@/components/FaqList";
import { faqGroups } from "@/data/content";

/**
 * All FAQ groups (About TapTag, Services, Courses) in order. Used on /faq and /courses.
 * `level` is the heading level for group titles: 2 on /faq, 3 when placed under another section heading.
 */
export default function FaqGroups({ level = 2 }: { level?: 2 | 3 }) {
  const G = level === 2 ? "h2" : "h3";
  return (
    <>
      {faqGroups.map((group) => (
        <section key={group.title} id={group.title.toLowerCase().replace(/\s+/g, "-")} style={{ marginBottom: 48, scrollMarginTop: 96 }}>
          <G style={{ fontFamily: "'Nunito',sans-serif", fontSize: level === 2 ? 26 : 22, fontWeight: 700, margin: "0 0 12px", color: "#2b2733" }}>{group.title}</G>
          <FaqList items={group.items} questionTag={level === 2 ? "h3" : "h4"} />
        </section>
      ))}
    </>
  );
}
