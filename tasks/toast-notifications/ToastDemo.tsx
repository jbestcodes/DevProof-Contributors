import { useState } from "react";

export default function ToastDemo() {
  const [toasts, setToasts] = useState([]);

  const addToast = (type) => {
    const id = Date.now();
    const toast = { id, type, message: `${type} message` };

    setToasts((prev) => [...prev, toast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Toast Notifications</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => addToast("success")}>Success</button>
        <button onClick={() => addToast("error")}>Error</button>
        <button onClick={() => addToast("info")}>Info</button>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              color: "#fff",
              background:
                t.type === "success"
                  ? "#16a34a"
                  : t.type === "error"
                  ? "#dc2626"
                  : "#2563eb",
              animation: "fade-in 0.3s ease",
            }}
          >
            {t.message}
          </div>
        ))}
      </div>
    </div>
  );
}
