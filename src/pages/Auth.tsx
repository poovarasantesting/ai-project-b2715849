import { useState } from "react";
import { AuthForm } from "@/components/auth/AuthForm";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <AuthForm mode={mode} onModeToggle={toggleMode} />
    </div>
  );
}