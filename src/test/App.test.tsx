import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import DashboardPage from "../pages/DashboardPage"; import ProjectsPage from "../pages/ProjectsPage";
import ProvidersPage from "../pages/ProvidersPage"; import BudgetsPage from "../pages/BudgetsPage"; import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Sidebar", () => { it("renders nav items", () => { wrap(<Sidebar/>); expect(screen.getByText("Spend Tracker")).toBeInTheDocument(); }); });
describe("Pages", () => {
  it("DashboardPage renders", () => { wrap(<DashboardPage/>); expect(screen.getByText("Cost Dashboard")).toBeInTheDocument(); });
  it("ProjectsPage renders", () => { wrap(<ProjectsPage/>); expect(screen.getByText("Projects Cost")).toBeInTheDocument(); });
  it("ProvidersPage renders", () => { wrap(<ProvidersPage/>); expect(screen.getByText("Provider Breakdown")).toBeInTheDocument(); });
  it("BudgetsPage renders", () => { wrap(<BudgetsPage/>); expect(screen.getByText("Budgets & Alerts")).toBeInTheDocument(); });
  it("SettingsPage renders", () => { wrap(<SettingsPage/>); expect(screen.getByText("Alert Preferences")).toBeInTheDocument(); });
});
