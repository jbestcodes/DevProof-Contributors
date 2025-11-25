
import DarkModeToggle from "./DarkModeToggle";
import { ThemeProvider } from "./mock-theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 40 }}>
        <h1>Dark Mode Task Demo</h1>
        <DarkModeToggle />
      </div>
    </ThemeProvider>
  );
}
