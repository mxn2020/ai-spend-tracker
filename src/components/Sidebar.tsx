import { Link, useLocation } from "react-router-dom";
import { DollarSign, PieChart, Server, BellRing, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: PieChart, label: "Dashboard" },
    { to: "/projects", icon: DollarSign, label: "Projects Cost" },
    { to: "/providers", icon: Server, label: "Providers" },
    { to: "/budgets", icon: BellRing, label: "Budgets & Alerts" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-card)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-5)",display:"flex",alignItems:"center",gap:"var(--space-3)",borderBottom:"1px solid var(--color-border)"}}>
      <div style={{background:"var(--color-accent-primary)",borderRadius:"var(--radius-sm)",padding:4,display:"flex",alignItems:"center",justifyContent:"center"}}><DollarSign size={18} style={{color:"var(--color-text-inverse)"}}/></div>
      <strong style={{fontSize:"var(--font-size-base)",letterSpacing:"0.5px"}}>Spend Tracker</strong>
    </div>
    <nav style={{padding:"var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-1)"}}>
      {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-accent-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-accent-soft)":"transparent",fontWeight:500,fontSize:"var(--font-size-sm)",transition:"all var(--transition-fast)"}}><l.icon size={18}/>{l.label}</Link>)}
    </nav>
    <div style={{padding:"var(--space-4)",borderTop:"1px solid var(--color-border)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <span style={{fontSize:"12px",color:"var(--color-text-tertiary)"}}>v1.0.0</span><ThemeToggle />
    </div>
  </aside>);
}
