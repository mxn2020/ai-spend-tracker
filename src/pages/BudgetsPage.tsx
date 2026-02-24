import { BellRing, Plus, AlertTriangle } from "lucide-react";
const budgets = [
  { name: "Monthly Total Limit", limit: "$5,000", current: "$4,284", pct: 85, alert: true },
  { name: "Code Copilot Limit", limit: "$1,000", current: "$840", pct: 84, alert: false },
  { name: "Support Bot Limit", limit: "$1,000", current: "$1,420", pct: 142, alert: true },
];
export default function BudgetsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:900}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)"}}>Budgets & Alerts</h1>
      <button className="btn btn-primary"><Plus size={16}/> New Budget</button>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
      {budgets.map(b=>(<div key={b.name} className="card" style={{padding:"var(--space-5)",border:b.alert&&b.pct>100?"1px solid var(--color-error)":undefined}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-2)"}}>
          <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600,display:"flex",alignItems:"center",gap:"var(--space-2)"}}>{b.name} {b.alert&&b.pct>100&&<AlertTriangle size={16} style={{color:"var(--color-error)"}}/>}</h3>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"var(--font-size-sm)"}}><strong style={{color:b.pct>100?"var(--color-error)":"inherit"}}>{b.current}</strong> / {b.limit}</span>
        </div>
        <div style={{width:"100%",height:6,background:"var(--color-bg-tertiary)",borderRadius:3,overflow:"hidden"}}>
          <div style={{width:`${Math.min(b.pct,100)}%`,height:"100%",background:b.pct>100?"var(--color-error)":b.pct>80?"var(--color-warning)":"var(--color-accent-primary)"}}></div>
        </div>
      </div>))}
    </div>
  </div>);
}
