"use client";

const workflows = [
  {
    account: "Northstar Health",
    owner: "Morgan Piper · Growth & ABM",
    status: "Decision needed",
    detail: "Business sponsor path is ready for Morgan’s review.",
    value: "$4.2M expansion",
    scope: "4 buying groups · 18 people",
    action: "Open Morgan’s workspace",
  },
  {
    account: "Cedar & Finch",
    owner: "Alex Chen · Lifecycle marketing",
    status: "In approval",
    detail: "Sponsor brief is with brand and legal in Adobe Workfront.",
    value: "$1.8M pipeline",
    scope: "3 buying groups · 14 people",
  },
  {
    account: "Meridian Logistics",
    owner: "Samira Jones · Field marketing",
    status: "Activating",
    detail: "Event follow-up is routing into Adobe Marketo / AJO.",
    value: "$2.6M influenced",
    scope: "6 buying groups · 43 people",
  },
  {
    account: "Harborline Bank",
    owner: "Data operations",
    status: "Exception",
    detail: "Unmatched accounts remain held from audience activation.",
    value: "18 records held",
    scope: "2 buying groups · 18 people",
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
        <span className="command-brand">ChatGPT Work</span>
        <span className="command-topbar-title">Enterprise marketing</span>
        <span className="command-avatar">M</span>
      </header>
      <div className="command-desktop">
        <aside className="command-sidebar">
          <button className="command-new-chat"><span>＋</span> New chat</button>
          <button className="command-thread-active"><span>◫</span> Command center</button>
          <span className="command-sidebar-label">Project</span>
          <button className="command-project"><span>▣</span> Enterprise adoption</button>
          <span className="command-sidebar-label">Recent</span>
          <button onClick={onOpenMorgan}>Morgan’s workspace</button>
          <button>Campaign brief</button>
        </aside>
        <div className="command-thread">
          <div className="command-thread-intro">
            <span>09:30 · Marketing operations</span>
            <p>Show me the enterprise pipeline work that needs human attention today.</p>
          </div>
          <div className="command-agent-reply">
            <span>✳</span>
            <p><b>Marketing operations agent</b><br />I’ve assembled the portfolio view below. It combines active account workflows, decision gates and the latest learning signals.</p>
          </div>
          <section className="command-artifact" aria-label="Marketing operations command center">
      <section className="command-hero">
        <div>
          <span className="command-eyebrow">Portfolio command center</span>
          <h1>What needs the team’s attention now?</h1>
          <p>
            A shared view across hundreds of accounts, thousands of buying
            groups and the people within them. It elevates only the work that
            needs human judgment. Signals and actions shown here are illustrative.
          </p>
        </div>
        <aside className="command-brief">
          <span className="command-eyebrow">Recommended focus</span>
          <b>Unblock $6.0M in sponsor-path decisions</b>
          <p>Two buying groups are ready for a clear business-value decision.</p>
          <button onClick={onOpenMorgan}>Open Morgan’s workspace →</button>
        </aside>
      </section>

      <div className="command-scale" aria-label="Operating scale">
        386 enterprise accounts <span>·</span> 2,148 buying groups <span>·</span> 31,602 people
      </div>
      <section className="command-metrics" aria-label="Business outcomes">
        <article>
          <span>Value realization · AAR</span>
          <strong>$38.4M</strong>
          <small>Illustrative AAR created and realized</small>
        </article>
        <article>
          <span>Pipeline value</span>
          <strong>$486M</strong>
          <small>Qualified enterprise pipeline, including expansion</small>
        </article>
        <article>
          <span>Pipeline velocity</span>
          <strong>42 days</strong>
          <small>From engaged buying group to next decision</small>
        </article>
        <article className="command-metric-attention">
          <span>Release-ready cadence</span>
          <strong>6.4 days</strong>
          <small>Product release to approved enterprise action</small>
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
                  <span>{workflow.owner} · {workflow.scope}</span>
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
          </section>
          <div className="command-composer">Ask about portfolio performance or a specific account…</div>
        </div>
      </div>
    </main>
  );
}
