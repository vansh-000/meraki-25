"use client";
import React from "react";

export default function TrapezoidComponent() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Trapezoid Shape */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">MERRIKI - A+'25</h1>
        <p className="text-lg">
          Welcome to MERRIKI: Where Creativity Meets Technology, the annual
          celebration of innovation, creativity, and technology at 11IT UNR. We
          are more than just a technical Fest;
        </p>
      </div>
    </div>
  );
}