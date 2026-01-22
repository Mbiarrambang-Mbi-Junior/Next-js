"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the shape of the data
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

// 2. Create the Context object (using a specific name)
const ThemeInstance = createContext<ThemeContextType | undefined>(undefined);

// 3. The Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("lightTheme");

  return (
    <ThemeInstance.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeInstance.Provider>
  );
}

// 4. The Custom Hook (using the Instance)
export const useTheme = () => {
  const context = useContext(ThemeInstance);
  
  // If this error triggers, it means you forgot to wrap your 
  // layout.tsx with <ThemeProvider>
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
};