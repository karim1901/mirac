"use client";
import { useEffect } from "react";

export default function ScrollY({ y = 200 }) {
  useEffect(() => {
    window.scrollTo({
      top: y,
      behavior: "smooth", // أو "auto"
    });
  }, [y]);

  return null;
}
