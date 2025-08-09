import { MantineProvider } from "@mantine/core";
import { MissionSection } from "./components/mission";
import { theme } from "./components/theme";

export function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="min-h-screen bg-gray-50">
        <MissionSection />
      </div>
    </MantineProvider>
  );
}