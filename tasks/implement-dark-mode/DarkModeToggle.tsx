import { useTheme } from "./mock-theme-context";
import { MouseEvent } from "react";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = theme === "light"
      ? "0 6px 20px 0 rgba(102, 126, 234, 0.6)"
      : "0 6px 20px 0 rgba(245, 87, 108, 0.6)";
  };
  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = theme === "light"
      ? "0 4px 15px 0 rgba(102, 126, 234, 0.4)"
      : "0 4px 15px 0 rgba(245, 87, 108, 0.4)";
  };
  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(0) scale(0.98)";
  };
  const handleMouseUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "translateY(-2px) scale(1)";
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 20px",
        borderRadius: "25px",
        border: "2px solid",
        borderColor: theme === "light" ? "#e5e7eb" : "#374151",
        cursor: "pointer",
        background: theme === "light" 
          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        boxShadow: theme === "light"
          ? "0 4px 15px 0 rgba(102, 126, 234, 0.4)"
          : "0 4px 15px 0 rgba(245, 87, 108, 0.4)",
        transition: "all 0.3s ease",
        outline: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span style={{ fontSize: "16px" }}>
        {theme === "light" ? "🌙" : "☀️"}
      </span>
      <span>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}

