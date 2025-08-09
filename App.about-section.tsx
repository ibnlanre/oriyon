import { MantineProvider } from "@mantine/core";
import { AboutSection } from "./components/about";
import { theme } from "./components/theme";

export function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="min-h-screen bg-white">
        <AboutSection />
      </div>
    </MantineProvider>
  );
}

export default App;