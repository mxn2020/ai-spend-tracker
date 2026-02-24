import { Server } from "lucide-react";
const providers = [
  { name: "OpenAI", spend: "$2,850.40", models: ["gpt-4o", "text-embedding-3-small"], pct: 66 },
  { name: "Anthropic", spend: "$1,200.00", models: ["claude-3-5-sonnet"], pct: 28 },
  { name: "Google", spend: "$233.72", models: ["gemini-1.5-pro"], pct: 6 },
];
export default function ProvidersPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:900}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",marginBottom:"var(--space-6)"}}>Provider Breakdown</h1>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
      {providers.map(p=>(<div key={p.name} className="card" style={{padding:"var(--space-5)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-3)"}}>
          <h3 style={{fontSize:"var(--font-size-lg)",fontWeight:600}}>{p.name}</h3>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"var(--font-size-lg)",fontWeight:700}}>{p.spend}</span>
        </div>
        <div style={{width:"100%",height:8,background:"var(--color-bg-tertiary)",borderRadius:4,marginBottom:"var(--space-4)",overflow:"hidden"}}>
          <div style={{width:`${p.pct}%`,height:"100%",background:"var(--color-accent-primary)"}}></div>
        </div>
        <div style={{display:"flex",gap:8}}>
          {p.models.map(m=><span key={m} className="badge badge-mint">{m}</span>)}
        </div>
      </div>))}
    </div>
  </div>);
}
