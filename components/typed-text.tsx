"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "How to develop a saas app?",
        "Generate an image of a cat astronaut.",
        "Explain quantum computing simply.",
        "Write a python script for web scraping.",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className="text-muted-foreground" />;
}