import { Settings } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";

export default function SettingsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 600 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", marginBottom: "var(--space-6)" }}>Settings</h1>
    <Card padding="lg">
      <h3 style={{ fontSize: "var(--font-size-base)", marginBottom: "var(--space-4)" }}>Alert Preferences</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div><Label style={{ marginBottom: 4 }}>Slack Webhook URL</Label><Input type="password" placeholder="https://hooks.slack.com/..." /></div>
        <div><Label style={{ marginBottom: 4 }}>Email for Alerts</Label><Input type="email" placeholder="alerts@company.com" /></div>
        <Button variant="primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>Save Preferences</Button>
      </div>
    </Card>
  </div>);
}
