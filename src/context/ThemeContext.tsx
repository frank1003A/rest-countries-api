"use client";
import { createContext, useState } from "react";

// Define the type for the context
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context
export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

// Define the provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <body data-theme={theme} suppressHydrationWarning={true} >{children}</body>
    </ThemeContext.Provider>
  );
};
