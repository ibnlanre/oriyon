import { MantineProvider } from "@mantine/core";
import { Header } from "../components/header";
import { theme } from "../components/theme";

export function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Demo content to show the header in context */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-[#1d6731] font-fredoka mb-4">
              Welcome to Oriyon
            </h1>
            <p className="text-gray-600 leading-relaxed">
              This is a demo page showing the responsive header component built
              from the Figma design. The header includes a top navigation bar
              with utility links and contact information, and a main navigation
              bar with the logo, primary navigation items, and a contact button.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 font-fredoka">
                    Feature {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </MantineProvider>
  );
}
