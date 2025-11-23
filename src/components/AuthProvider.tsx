"use client";

import useAuthStore from "@/store/auth-store";
import { useEffect } from "react";

const AuthProvider = () => {
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const tokenRes = await fetch("/api/auth/get-token", {
          method: "GET",
          credentials: "include",
        });

        const tokenData = await tokenRes.json();
        setToken(tokenData.token || null);
      } catch (e: any) {
        console.error(e);
        setToken(null);
      }
    };
    fetchToken();
  }, [setToken]);
  return null;
};

export default AuthProvider;
