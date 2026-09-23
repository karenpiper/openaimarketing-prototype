"use client";

import { useMemo, useState } from "react";

type View = "priorities" | "orchestration" | "controls" | "capacity" | "learning";
type Filter = "All" | "Healthcare" | "Financial services" | "Logistics" | "Software";

const accounts = [
  { account: "Northstar Health", industry: "Healthcare", owner: "Morgan Smith", groups: 4, people: 18, value: "$4.2M", status: "Decision needed", need: "Sponsor path stalled while technical adoption grows.", action: "Approve coordinated plan" },
  { account: "Cedar & Finch", industry: "Financial services", owner: "Alex Chen", groups: 3, people: 14, value: "$1.8M", status: "Approval gate", need: "Brand and legal review is blocking a ready audience plan.", action: "Release approval" },
  { account: "Meridian Logistics", industry: "Logistics", owner: "Samira Jones", groups: 6, people: 43, value: "$2.6M", status: "Launch collision", need: "Event follow-up and product-release activity target the same group.", action: "Connect plans" },
  { account: "Harborline Bank", industry: "Financial services", owner: "Data operations", groups: 2, people: 18, value: "$1.1M", status: "Data exception", need: "Identity matching is holding eligible people from activation.", action: "Resolve exception" },
  { account: "Asteria Cloud", industry: "Software", owner: "Priya Shah", groups: 5, people: 31, value: "$3.7M", status: "Coverage gap", need: "A high-value buying group has no active business-owner path.", action: "Assign coverage" },
];

const viewCopy: Record<View, { eyebrow: string; title: string; detail: string }> = {
  priorities: { eyebrow: "Portfolio prioritization", title: "What must move today?", detail: "Rank enterprise work by value, urgency, risk and the capacity required to act." },
  orchestration: { eyebrow: "Work orchestration", title: "Connect the work before it collides.", detail: "Coordinate account plans, releases, campaigns and sales motions around each buying group." },
  controls: { eyebrow: "Exceptions and controls", title: "Resolve what cannot safely proceed on its own.", detail: "Surface policy, consent, data and approval exceptions that require human judgment." },
  capacity: { eyebrow: "Capacity and service levels", title: "Protect the team’s ability to deliver.", detail: "Balance work across campaign operations, marketing automation, analytics and regional teams." },
  learning: { eyebrow: "Performance and learning", title: "Turn outcomes into better operating rules.", detail: "See which decisions improve AAR, pipeline value, velocity and release-ready cadence." },
};

export default function CommandCenter({ onOpenMorgan }: { onOpenMorgan: () => void }) {
  const [view, setView] = useState<View>("priorities");
  const [filter, setFilter] = useState<Filter>("All");
  const [completed, setCompleted] = useState<string[]>([]);
  const visibleAccounts = useMemo(() => filter === "All" ? accounts : accounts.filter((item) => item.industry === filter), [filter]);
  const takeAction = (account: string) => setCompleted((current) => current.includes(account) ? current : [...current, account]);
  const selected = viewCopy[view];

  return <main className="command-center">
    <header className="command-topbar"><span className="command-brand">ChatGPT Work</span><span className="command-topbar-title">Enterprise marketing</span><span className="command-avatar">M</span></header>
    <div className="command-desktop">
      <aside className="command-sidebar">
        <button className="command-new-chat"><span>＋</span> New chat</button><button className="command-thread-active"><span>◫</span> Command center</button>
        <span className="command-sidebar-label">Project</span><button className="command-project"><span>▣</span> Enterprise adoption</button>
        <span className="command-sidebar-label">Recent</span><button onClick={onOpenMorgan}>Morgan’s workspace</button><button>Campaign brief</button>
      </aside>
      <div className="command-thread">
        <div className="command-thread-intro"><span>09:30 · Marketing operations</span><p>What needs to move across the enterprise today?</p></div>
        <div className="command-agent-reply"><span>✳</span><p><b>Marketing operations agent</b><br />I’ve prioritized today’s portfolio work, connected related plans and isolated the decisions that need your judgment.</p></div>
        <section className="command-artifact" aria-label="Enterprise marketing operations command center">
          <section className="command-hero"><div><span className="command-eyebrow">Enterprise orchestration and intelligence</span><h1>Keep the highest-value work moving.</h1><p>This is the operating layer across accounts, buying groups, people, teams and channels. It prioritizes, connects, checks and routes work so the organization can act at enterprise scale.</p></div><aside className="command-brief"><span className="command-eyebrow">System recommendation</span><b>Unblock $6.0M in sponsor-path decisions</b><p>Two high-value buying groups are ready for a business-value decision. The underlying account work is assembled.</p><button onClick={onOpenMorgan}>Open Northstar’s workspace →</button></aside></section>
          <div className="command-scale">386 enterprise accounts <span>·</span> 2,148 buying groups <span>·</span> 31,602 people <span>·</span> 26 active coordinated workflows</div>
          <section className="command-metrics" aria-label="Business outcomes"><article><span>Value realization · AAR</span><strong>$38.4M</strong><small>Illustrative AAR created and realized</small></article><article><span>Pipeline value</span><strong>$486M</strong><small>Qualified enterprise pipeline, including expansion</small></article><article><span>Pipeline velocity</span><strong>42 days</strong><small>From engaged buying group to next decision</small></article><article className="command-metric-attention"><span>Release-ready cadence</span><strong>6.4 days</strong><small>Product release to approved enterprise action</small></article></section>
          <nav className="command-views" aria-label="Operations workflows">{(Object.keys(viewCopy) as View[]).map((item) => <button key={item} className={view === item ? "active" : ""} onClick={() => setView(item)}>{viewCopy[item].eyebrow}</button>)}</nav>
          <div className="command-filters" aria-label="Portfolio filters"><span>View by</span>{(["All", "Healthcare", "Financial services", "Logistics", "Software"] as Filter[]).map((item) => <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <section className="command-operation"><header className="command-operation-header"><div><span className="command-eyebrow">{selected.eyebrow}</span><h2>{selected.title}</h2><p>{selected.detail}</p></div><span className="command-attention-count">{completed.length ? `${completed.length} moved forward` : "5 decisions need attention"}</span></header>{view === "priorities" || view === "orchestration" || view === "controls" ? <div className="command-work-items">{visibleAccounts.map((item) => { const isComplete = completed.includes(item.account); const currentAction = view === "orchestration" ? item.action : view === "controls" ? "Review exception" : item.action; return <article key={item.account} className={isComplete ? "is-complete" : ""}><div className="command-item-top"><div><span>{item.industry} · {item.groups} buying groups · {item.people} people</span><h3>{item.account}</h3></div><b className="command-status">{isComplete ? "Moved forward" : item.status}</b></div><p>{item.need}</p><footer><span><b>{item.value}</b> potential impact · Owner: {item.owner}</span>{item.account === "Northstar Health" ? <button onClick={onOpenMorgan}>Inspect account workflow →</button> : <button onClick={() => takeAction(item.account)}>{isComplete ? "View activity →" : `${currentAction} →`}</button>}</footer></article>; })}</div> : view === "capacity" ? <CapacityView /> : <LearningView />}</section>
          <section className="command-system-log"><div><span className="command-eyebrow">What the system handled</span><b>41 routine decisions completed within policy today</b></div><p>Audience eligibility checks, duplicate-activity detection, owner routing and launch QA were completed automatically. Only consequential exceptions are in this queue.</p></section>
        </section>
        <div className="command-composer">Ask about portfolio performance, a specific account, or today’s operating decisions…</div>
      </div>
    </div>
  </main>;
}

function CapacityView() {
  const teams = [["Campaign operations", "18", "3", "74%", "Healthy"], ["Marketing automation", "14", "5", "91%", "At risk"], ["Analytics & data", "9", "2", "68%", "Healthy"], ["Field & regional", "22", "7", "84%", "Watch"]];
  return <div className="command-capacity"><div className="command-capacity-summary"><b>Three workflows are approaching their service-level threshold.</b><span>Shift approval capacity to marketing automation before the next product-release window.</span><button>Rebalance capacity →</button></div>{teams.map(([team, people, workflows, load, status]) => <article key={team}><div><h3>{team}</h3><span>{people} people · {workflows} active workflows</span></div><div className="command-load"><i><em style={{ width: load }} /></i><b>{load} capacity</b></div><strong className={status === "At risk" ? "at-risk" : ""}>{status}</strong></article>)}</div>;
}

function LearningView() {
  return <div className="command-learning-grid"><article><span>Signal</span><h3>Business-value messaging earns the strongest sponsor response.</h3><p>Across 47 eligible buying groups, sponsor engagement is 18% higher when an operating outcome leads the plan.</p><button>Apply as a recommendation rule →</button></article><article><span>Friction</span><h3>Approval wait time is the main release-cadence constraint.</h3><p>Marketing automation is at 91% capacity. Rebalancing review work would recover an estimated 1.3 days.</p><button>Open capacity plan →</button></article><article><span>Decision</span><h3>Increase priority for expansion groups with technical adoption.</h3><p>Technical engagement plus an identified sponsor gap is the strongest current signal for near-term expansion value.</p><button>Review prioritization rule →</button></article></div>;
}
