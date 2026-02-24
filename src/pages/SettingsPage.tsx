import { Settings } from "lucide-react";
export default function SettingsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:600}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",marginBottom:"var(--space-6)"}}>Settings</h1>
    <div className="card" style={{padding:"var(--space-5)"}}>
      <h3 style={{fontSize:"var(--font-size-base)",marginBottom:"var(--space-4)"}}>Alert Preferences</h3>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Slack Webhook URL</label><input type="password" placeholder="https://hooks.slack.com/..." className="input" /></div>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Email for Alerts</label><input type="email" placeholder="alerts@company.com" className="input" /></div>
        <button className="btn btn-primary" style={{alignSelf:"flex-start",marginTop:8}}>Save Preferences</button>
      </div>
    </div>
  </div>);
}
