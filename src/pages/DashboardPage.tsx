import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@geenius-ui/react-css";

const metrics = [
  { label: "Total Spend (30d)", val: "$4,284.12", change: "+12.4%", up: true },
  { label: "Projected Spend", val: "$5,100.00", change: "-2.1%", up: false },
  { label: "Avg Cost / Token", val: "$0.0014", change: "+0.5%", up: true },
  { label: "Total Tokens", val: "14.2M", change: "+18.2%", up: true },
];

export default function DashboardPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}><PieChartIcon /> Cost Dashboard</h1>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
      {metrics.map(m => (<Card key={m.label} padding="md">
        <div style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)", marginBottom: 8 }}>{m.label}</div>
        <div style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, fontFamily: "var(--font-mono)", marginBottom: 8 }}>{m.val}</div>
        <div style={{ fontSize: "12px", display: "flex", alignItems: "center", gap: 4, color: m.up ? "var(--color-error)" : "var(--color-success)" }}>
          {m.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{m.change}
        </div>
      </Card>))}
    </div>
    <Card padding="lg">
      <h3 style={{ fontSize: "var(--font-size-base)", marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><TrendingUp size={18} style={{ color: "var(--color-accent-primary)" }} /> Spend Trend (Last 7 Days)</h3>
      <div style={{ height: 200, display: "flex", alignItems: "flex-end", gap: 16, paddingTop: 20 }}>
        {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (<div key={i} style={{ flex: 1, height: `${h}%`, background: "var(--color-accent-primary)", borderRadius: "4px 4px 0 0", opacity: 0.8 }}></div>))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: "12px", color: "var(--color-text-tertiary)" }}>
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </Card>
  </div>);
}

function PieChartIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-accent-primary)" }}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>; }
