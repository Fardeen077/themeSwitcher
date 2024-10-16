import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

// Define the context interface
interface ThemeContext {
  themeMode: string;
  darkTheme: () => void;
  lightTheme: () => void;
}

function App() {
  // State should be typed as a string, not ThemeContext
  const [themeMode, setThemeMode] = useState<string>("light");

  // Functions to toggle the theme
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  // Apply the theme to the <html> element
  useEffect(() => {
    let theme = document.querySelector("html");
    if (theme) {
      theme.classList.remove("light", "dark");
      theme.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme toggle buttons or controls */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
