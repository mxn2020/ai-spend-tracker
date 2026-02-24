import { DollarSign } from "lucide-react";
const projects = [
  { name: "Support Bot (Prod)", total: "$1,420.50", tokens: "4.8M", trending: "up" },
  { name: "Code Copilot", total: "$840.20", tokens: "2.1M", trending: "up" },
  { name: "Doc Q&A (Internal)", total: "$125.00", tokens: "850K", trending: "down" },
  { name: "Data Extraction Pipeline", total: "$1,898.42", tokens: "6.4M", trending: "up" },
];
export default function ProjectsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",marginBottom:"var(--space-6)"}}>Projects Cost</h1>
    <div className="card">
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead>
          <tr style={{borderBottom:"1px solid var(--color-border)"}}>
            <th style={{textAlign:"left",padding:"var(--space-4)",fontSize:"12px",color:"var(--color-text-secondary)",textTransform:"uppercase"}}>Project Name</th>
            <th style={{textAlign:"left",padding:"var(--space-4)",fontSize:"12px",color:"var(--color-text-secondary)",textTransform:"uppercase"}}>Tokens Used</th>
            <th style={{textAlign:"right",padding:"var(--space-4)",fontSize:"12px",color:"var(--color-text-secondary)",textTransform:"uppercase"}}>Total Spend (30d)</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(p=>(<tr key={p.name} style={{borderBottom:"1px solid var(--color-border)"}}>
            <td style={{padding:"var(--space-4)",fontWeight:600}}>{p.name}</td>
            <td style={{padding:"var(--space-4)",fontFamily:"var(--font-mono)",fontSize:"14px"}}>{p.tokens}</td>
            <td style={{padding:"var(--space-4)",fontFamily:"var(--font-mono)",fontSize:"14px",textAlign:"right"}}>{p.total}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  </div>);
}
