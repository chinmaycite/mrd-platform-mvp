import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';

const trendData = [
  { time: 'W1', mrd: 18.2 },
  { time: 'W2', mrd: 12.6 },
  { time: 'W3', mrd: 8.4 },
  { time: 'W4', mrd: 4.9 },
  { time: 'W5', mrd: 1.7 },
  { time: 'W6', mrd: 0.6 }
];

const sampleCards = [
  { label: 'MRD status', value: 'Detected', tone: 'warning' },
  { label: 'Concordance', value: '94.2%', tone: 'success' },
  { label: 'LOD', value: '0.01%', tone: 'info' },
  { label: 'QC', value: 'Pass', tone: 'success' }
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">Allovista</div>
        <nav>
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Samples</button>
          <button className="nav-item">Pipelines</button>
          <button className="nav-item">Reports</button>
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Clinical MRD dashboard</p>
            <h1>Patient 1024 — MRD summary</h1>
          </div>
          <button className="primary-btn">Generate report</button>
        </header>

        <section className="stats-grid">
          {sampleCards.map((card) => (
            <div className={`stat-card ${card.tone}`} key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </div>
          ))}
        </section>

        <section className="chart-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>MRD trend over time</h2>
            </div>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="mrdfill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dfe6f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Area type="monotone" dataKey="mrd" stroke="#4f46e5" fill="url(#mrdfill)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Clonal tracking</h2>
            </div>
            <div className="mini-chart">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dfe6f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Line type="monotone" dataKey="mrd" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section className="panel report-panel">
          <div className="panel-header">
            <h2>Clinical summary</h2>
          </div>
          <div className="report-body">
            <p>
              Residual disease remains detectable at low level with a downward trend across serial measurements.
              Concordance between orthogonal assay results is strong and supports the reported signal.
            </p>
            <ul>
              <li>Variant burden: low but persistent</li>
              <li>QC threshold: pass</li>
              <li>Report confidence: moderate-high</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
