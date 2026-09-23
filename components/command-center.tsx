"use client";

const workflows = [
  {
    account: "Northstar Health",
    owner: "Morgan Piper · Growth & ABM",
    status: "Decision needed",
    detail: "Business sponsor path is ready for Morgan’s review.",
    value: "$4.2M expansion",
    action: "Open Morgan’s workspace",
  },
  {
    account: "Cedar & Finch",
    owner: "Alex Chen · Lifecycle marketing",
    status: "In approval",
    detail: "Sponsor brief is with brand and legal in Adobe Workfront.",
    value: "$1.8M pipeline",
  },
  {
    account: "Meridian Logistics",
    owner: "Samira Jones · Field marketing",
    status: "Activating",
    detail: "Event follow-up is routing into Adobe Marketo / AJO.",
    value: "$2.6M influenced",
  },
  {
    account: "Harborline Bank",
    owner: "Data operations",
    status: "Exception",
    detail: "Unmatched accounts remain held from audience activation.",
    value: "18 records held",
  },
];

export default function CommandCenter({
  onOpenMorgan,
}: {
  onOpenMorgan: () => void;
}) {
  return (
    <main className="command-center">
      <header className="command-topbar">
        <div>
          <span className="command-brand">OpenAI Frontier</span>
          <span className="command-brand-subtitle">Enterprise marketing operations</span>
        </div>
        <div className="command-topbar-meta">
          <span>Tuesday · 09:30</span>
          <b>Live operating view</b>
        </div>
      </header>

      <section className="command-hero">
        <div>
          <span className="command-eyebrow">Portfolio command center</span>
          <h1>What needs the team’s attention now?</h1>
          <p>
            A shared view of enterprise pipeline, work in motion and the few
            decisions that need human judgment. Signals and actions shown here
            are illustrative.
          </p>
        </div>
        <aside className="command-brief">
          <span className="command-eyebrow">Recommended focus</span>
          <b>Unblock $6.0M in sponsor-path decisions</b>
          <p>Two buying groups are ready for a clear business-value decision.</p>
          <button onClick={onOpenMorgan}>Open Morgan’s workspace →</button>
        </aside>
      </section>

      <section className="command-metrics" aria-label="Portfolio health">
        <article>
          <span>Pipeline influenced</span>
          <strong>$18.6M</strong>
          <small>Across 12 active account plays</small>
        </article>
        <article>
          <span>Buying groups advancing</span>
          <strong>7</strong>
          <small>3 have a decision path ready</small>
        </article>
        <article>
          <span>Workflows in motion</span>
          <strong>26</strong>
          <small>Signals, campaigns, reviews and learning</small>
        </article>
        <article className="command-metric-attention">
          <span>Needs human judgment</span>
          <strong>4</strong>
          <small>2 approvals · 1 data exception · 1 decision</small>
        </article>
      </section>

      <section className="command-grid">
        <section className="command-panel command-workflows">
          <header>
            <div>
              <span className="command-eyebrow">Work orchestration</span>
              <h2>Active account workflows</h2>
            </div>
            <button className="command-quiet-button">View all 26</button>
          </header>
          <div className="command-workflow-list">
            {workflows.map((workflow) => (
              <article key={workflow.account}>
                <div className="command-workflow-title">
                  <div>
                    <h3>{workflow.account}</h3>
                    <span>{workflow.owner}</span>
                  </div>
                  <b className={`command-status ${workflow.status.toLowerCase().replaceAll(" ", "-")}`}>
                    {workflow.status}
                  </b>
                </div>
                <p>{workflow.detail}</p>
                <footer>
                  <span>{workflow.value}</span>
                  {workflow.account === "Northstar Health" ? (
                    <button onClick={onOpenMorgan}>{workflow.action} →</button>
                  ) : (
                    <button>Inspect workflow →</button>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>

        <aside className="command-side-stack">
          <section className="command-panel command-queue">
            <span className="command-eyebrow">Decision queue</span>
            <h2>Four items need a person</h2>
            <ol>
              <li><b>Northstar</b><span>Choose sponsor-led plan</span></li>
              <li><b>Cedar & Finch</b><span>Approve brand and legal review</span></li>
              <li><b>Harborline</b><span>Resolve unmatched account records</span></li>
              <li><b>Meridian</b><span>Confirm event follow-up audience</span></li>
            </ol>
          </section>
          <section className="command-panel command-learning">
            <span className="command-eyebrow">Learning loop</span>
            <h2>Where to shift effort</h2>
            <p>
              Business-value messages are drawing the strongest sponsor response.
              Keep the technical path active, but move the next review toward
              operating outcomes.
            </p>
            <button>Open performance learning →</button>
          </section>
        </aside>
      </section>
    </main>
  );
}
