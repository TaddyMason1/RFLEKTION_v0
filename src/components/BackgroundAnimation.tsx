"use client";

import React, { useEffect, useRef } from "react";

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = 1000;

    // Letters setup
    const letters = "あべしでふがひじかるもぬおぷくるすつうゔわやざいえんおぺきろすつうゔわやざいえんおぺきろすつうゔわやざいえんおぺきろすつうゔわやざいえんおぺきろすつうゔわやざいえんおぺきろすつうゔわやざ".split(
      ""
    );

    // Font size and columns setup
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);

    // Drops array setup
    const drops = Array(columns).fill(1);

    // Draw function
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#008080"; // Green color
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    };

    // Animation loop
    const intervalId = setInterval(draw, 33);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "black",
      }}
    />
  );
};

export default BackgroundAnimation;
