import Link from "next/link";
export default function ScenarioNav({ active }: { active: "northstar" | "finserv" }) {
  return <nav aria-label="Prototype scenario" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 18, padding: "14px 24px", background: "#eef3ef", borderBottom: "1px solid #cbd8cf", color: "#163c2b" }}><strong>Use case</strong><Link href="/" aria-current={active === "northstar" ? "page" : undefined} style={{ fontWeight: active === "northstar" ? 750 : 400 }}>Northstar · generic</Link><Link href="/finserv" aria-current={active === "finserv" ? "page" : undefined} style={{ fontWeight: active === "finserv" ? 750 : 400 }}>Finserv · Top 20 + broader market</Link></nav>;
}
