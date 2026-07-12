import { useEffect } from "react";
import { useNavigate } from "react-router";
import { supabase } from "@/lib/supabase";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/onboarding");
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f6f2ec] flex items-center justify-center">
      <p style={{ fontFamily: "'Inter', sans-serif", color: "#0b0a0c" }}>
        Signing you in...
      </p>
    </div>
  );
}