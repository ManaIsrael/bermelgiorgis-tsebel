"use client";

import { useEffect } from "react";

export default function TidioScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/birktvauoepafzhhqrocwl7alcwd0xq9.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
