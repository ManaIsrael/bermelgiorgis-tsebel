"use client";

import { useEffect } from "react";

export default function TidioScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/your-unique-id.js"; // Replace with your unique Tidio script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
