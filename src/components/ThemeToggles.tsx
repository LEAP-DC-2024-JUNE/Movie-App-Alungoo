import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggles = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      )}
    </div>
  );
};

export default ThemeToggles;
