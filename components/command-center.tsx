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
  const [notice, setNotice] = useState("The system has prioritized today’s portfolio work and isolated the decisions that need your judgment.");
  const visibleAccounts = useMemo(() => filter === "All" ? accounts : accounts.filter((item) => item.industry === filter), [filter]);
  const takeAction = (account: string, message?: string) => {
    setCompleted((current) => current.includes(account) ? current : [...current, account]);
    setNotice(message ?? `${account} moved forward. The system recorded the decision and updated the connected work.`);
  };
  const startInquiry = () => {
    setView("priorities"); setFilter("All"); setCompleted([]);
    setNotice("New portfolio inquiry started. The system reset the working queue to today’s highest-value enterprise decisions.");
  };
  const selected = viewCopy[view];

  return <main className="command-center">
    <header className="command-topbar"><span className="command-brand">ChatGPT Work</span><span className="command-topbar-title">Enterprise marketing</span><span className="command-avatar">M</span></header>
    <div className="command-desktop">
      <aside className="command-sidebar">
        <button className="command-new-chat" onClick={startInquiry}><span>＋</span> New chat</button><button className="command-thread-active" onClick={() => setNotice("You are in the enterprise command center: the portfolio-level operating view.")}><span>◫</span> Command center</button>
        <span className="command-sidebar-label">Project</span><button className="command-project" onClick={() => setNotice("Enterprise adoption scope: 386 accounts, 2,148 buying groups and the operating rules that connect marketing and sales.")}><span>▣</span> Enterprise adoption</button>
        <span className="command-sidebar-label">Recent</span><button onClick={onOpenMorgan}>Morgan’s workspace</button><button onClick={() => { setView("orchestration"); setNotice("Campaign brief opened in the work orchestration view, where its dependencies and account impact can be reviewed."); }}>Campaign brief</button>
      </aside>
      <div className="command-thread">
        <div className="command-thread-intro"><span>09:30 · Marketing operations</span><p>What needs to move across the enterprise today?</p></div>
        <div className="command-agent-reply"><span>✳</span><p><b>Marketing operations agent</b><br />{notice}</p></div>
        <section className="command-artifact" aria-label="Enterprise marketing operations command center">
          <section className="command-hero"><div><span className="command-eyebrow">Enterprise orchestration and intelligence</span><h1>Keep the highest-value work moving.</h1><p>This is the operating layer across accounts, buying groups, people, teams and channels. It prioritizes, connects, checks and routes work so the organization can act at enterprise scale.</p></div><aside className="command-brief"><span className="command-eyebrow">System recommendation</span><b>Unblock $6.0M in sponsor-path decisions</b><p>Two high-value buying groups are ready for a business-value decision. The underlying account work is assembled.</p><button onClick={onOpenMorgan}>Open Northstar’s workspace →</button></aside></section>
          <div className="command-scale">386 enterprise accounts <span>·</span> 2,148 buying groups <span>·</span> 31,602 people <span>·</span> 26 active coordinated workflows</div>
          <section className="command-metrics" aria-label="Business outcomes"><article><span>Value realization · AAR</span><strong>$38.4M</strong><small>Illustrative AAR created and realized</small></article><article><span>Pipeline value</span><strong>$486M</strong><small>Qualified enterprise pipeline, including expansion</small></article><article><span>Pipeline velocity</span><strong>42 days</strong><small>From engaged buying group to next decision</small></article><article className="command-metric-attention"><span>Release-ready cadence</span><strong>6.4 days</strong><small>Product release to approved enterprise action</small></article></section>
          <nav className="command-views" aria-label="Operations workflows">{(Object.keys(viewCopy) as View[]).map((item) => <button key={item} className={view === item ? "active" : ""} onClick={() => setView(item)}>{viewCopy[item].eyebrow}</button>)}</nav>
          <div className="command-filters" aria-label="Portfolio filters"><span>View by</span>{(["All", "Healthcare", "Financial services", "Logistics", "Software"] as Filter[]).map((item) => <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <section className="command-operation"><header className="command-operation-header"><div><span className="command-eyebrow">{selected.eyebrow}</span><h2>{selected.title}</h2><p>{selected.detail}</p></div><span className="command-attention-count">{completed.length ? `${completed.length} moved forward` : "5 decisions need attention"}</span></header>{view === "priorities" ? <PortfolioView accounts={visibleAccounts} completed={completed} onOpenMorgan={onOpenMorgan} onAction={takeAction} /> : view === "orchestration" ? <OrchestrationView onOpenMorgan={onOpenMorgan} onAction={takeAction} completed={completed} /> : view === "controls" ? <ControlsView onAction={takeAction} completed={completed} /> : view === "capacity" ? <CapacityView onNotice={setNotice} /> : <LearningView onNotice={setNotice} />}</section>
          <section className="command-system-log"><div><span className="command-eyebrow">What the system handled</span><b>41 routine decisions completed within policy today</b></div><p>Audience eligibility checks, duplicate-activity detection, owner routing and launch QA were completed automatically. Only consequential exceptions are in this queue.</p></section>
        </section>
        <div className="command-composer">Ask about portfolio performance, a specific account, or today’s operating decisions…</div>
      </div>
    </div>
  </main>;
}

function CapacityView({ onNotice }: { onNotice: (message: string) => void }) {
  const teams = [["Campaign operations", "18", "3", "74%", "Healthy"], ["Marketing automation", "14", "5", "91%", "At risk"], ["Analytics & data", "9", "2", "68%", "Healthy"], ["Field & regional", "22", "7", "84%", "Watch"]];
  return <div className="command-capacity"><div className="command-capacity-summary"><b>Three workflows are approaching their service-level threshold.</b><span>Shift approval capacity to marketing automation before the next product-release window.</span><button onClick={() => onNotice("Capacity plan applied: two approval specialists are reassigned to marketing automation for the next release window.")}>Rebalance capacity →</button></div>{teams.map(([team, people, workflows, load, status]) => <article key={team}><div><h3>{team}</h3><span>{people} people · {workflows} active workflows</span></div><div className="command-load"><i><em style={{ width: load }} /></i><b>{load} capacity</b></div><strong className={status === "At risk" ? "at-risk" : ""}>{status}</strong></article>)}</div>;
}

function LearningView({ onNotice }: { onNotice: (message: string) => void }) {
  return <div className="command-learning-grid"><article><span>Signal</span><h3>Business-value messaging earns the strongest sponsor response.</h3><p>Across 47 eligible buying groups, sponsor engagement is 18% higher when an operating outcome leads the plan.</p><button onClick={() => onNotice("Recommendation rule applied: sponsor-facing business-value messaging will lead eligible expansion plans.")}>Apply as a recommendation rule →</button></article><article><span>Friction</span><h3>Approval wait time is the main release-cadence constraint.</h3><p>Marketing automation is at 91% capacity. Rebalancing review work would recover an estimated 1.3 days.</p><button onClick={() => onNotice("Capacity plan opened: marketing automation review capacity is now the recommended intervention.")}>Open capacity plan →</button></article><article><span>Decision</span><h3>Increase priority for expansion groups with technical adoption.</h3><p>Technical engagement plus an identified sponsor gap is the strongest current signal for near-term expansion value.</p><button onClick={() => onNotice("Prioritization rule queued for review: technical adoption plus a sponsor gap will increase expansion priority.")}>Review prioritization rule →</button></article></div>;
}

function PortfolioView({ accounts: items, completed, onOpenMorgan, onAction }: { accounts: typeof accounts; completed: string[]; onOpenMorgan: () => void; onAction: (account: string, message?: string) => void }) {
  return <div className="command-portfolio"><div className="command-portfolio-scale"><span>Prioritized by combined enterprise impact</span><div><b>1</b> AAR potential <b>2</b> pipeline value <b>3</b> velocity risk <b>4</b> release urgency</div></div>{items.map((item, index) => <article key={item.account} className={completed.includes(item.account) ? "is-complete" : ""}><strong>{String(index + 1).padStart(2, "0")}</strong><div><span>{item.industry} · {item.groups} buying groups · {item.people} people</span><h3>{item.account}</h3><p>{item.need}</p></div><div className="command-impact"><span>Potential impact</span><b>{item.value}</b></div><div className="command-priority-action">{item.account === "Northstar Health" ? <button onClick={onOpenMorgan}>Open account plan →</button> : <button onClick={() => onAction(item.account, `${item.action} complete for ${item.account}. The affected buying-group plan has been reprioritized and routed.`)}>{completed.includes(item.account) ? "Moved forward →" : `${item.action} →`}</button>}</div></article>)}</div>;
}

function OrchestrationView({ onOpenMorgan, onAction, completed }: { onOpenMorgan: () => void; onAction: (account: string, message?: string) => void; completed: string[] }) {
  const plans = [{ account: "Northstar Health", trigger: "Sponsor gap + technical adoption", work: ["Account plan", "Sales outreach", "Sponsor brief"], owner: "Morgan Smith", action: "Open coordinated plan" }, { account: "Meridian Logistics", trigger: "Event follow-up + product release", work: ["Launch plan", "Event sequence", "Sales task"], owner: "Samira Jones", action: "Connect plans" }, { account: "Cedar & Finch", trigger: "Approved audience + pending review", work: ["Audience", "Brand review", "Legal review"], owner: "Alex Chen", action: "Release review" }];
  return <div className="command-orchestration"><div className="command-orchestration-key"><span><i /> Connected work</span><span><i /> Dependency</span><span><i /> Human decision</span></div>{plans.map((plan) => <article key={plan.account}><header><div><span>Buying-group play · {plan.trigger}</span><h3>{plan.account}</h3></div><b>{plan.owner}</b></header><div className="command-flow">{plan.work.map((step, index) => <div key={step}><span>{step}</span>{index < plan.work.length - 1 && <i>→</i>}</div>)}<em>→</em><strong>Coordinated next action</strong></div><footer><p>The system combined related work and checked for conflicting activity before routing this plan.</p>{plan.account === "Northstar Health" ? <button onClick={onOpenMorgan}>{plan.action} →</button> : <button onClick={() => onAction(plan.account, `${plan.action} complete for ${plan.account}. The connected account, sales and campaign work now share one coordinated path.`)}>{completed.includes(plan.account) ? "View routed work →" : `${plan.action} →`}</button>}</footer></article>)}</div>;
}

function ControlsView({ onAction, completed }: { onAction: (account: string, message?: string) => void; completed: string[] }) {
  const exceptions = [{ account: "Harborline Bank", type: "Identity and eligibility", severity: "High", detail: "18 people are held because their account match is incomplete. No activation can proceed until this is resolved.", system: "Paused affected audience and preserved the audit trail.", action: "Resolve data exception" }, { account: "Cedar & Finch", type: "Approval policy", severity: "Medium", detail: "The sponsor brief meets the content rule but is awaiting its required brand and legal reviews.", system: "Held release and notified both review owners.", action: "Review approval path" }, { account: "Meridian Logistics", type: "Activity collision", severity: "Medium", detail: "Two teams scheduled separate messages for the same buying group within 24 hours.", system: "Suppressed the duplicate send and proposed one coordinated plan.", action: "Confirm coordination" }];
  return <div className="command-controls"><div className="command-control-summary"><b>3 consequential exceptions</b><span>41 routine policy checks were completed automatically. These are the cases that need an accountable decision.</span></div>{exceptions.map((item) => <article key={item.account} className={completed.includes(item.account) ? "is-complete" : ""}><div className="command-exception-mark">!</div><div><span>{item.type}</span><h3>{item.account} <b className={item.severity === "High" ? "high" : ""}>{item.severity}</b></h3><p>{item.detail}</p><small><b>System action:</b> {item.system}</small></div><button onClick={() => onAction(item.account, `${item.action} complete for ${item.account}. The system logged the decision and released the safe downstream work.`)}>{completed.includes(item.account) ? "View decision →" : `${item.action} →`}</button></article>)}</div>;
}
