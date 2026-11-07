
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let preferredDark = false;

    try {
      const saved = localStorage.getItem("socialsaver-theme");

      if (saved === "dark") {
        preferredDark = true;
      } else if (saved === "light") {
        preferredDark = false;
      } else {
        preferredDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
      }
    } catch {
      // Use the default theme if storage is unavailable.
    }

    setDarkMode(preferredDark);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    document.documentElement.style.colorScheme =
      darkMode ? "dark" : "light";

    try {
      localStorage.setItem(
        "socialsaver-theme",
        darkMode ? "dark" : "light"
      );
    } catch {
      // Ignore unavailable browser storage.
    }
  }, [darkMode, initialized]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}
