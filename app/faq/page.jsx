"use client";
import { useState, useRef } from "react";
import data from "@/constants/faq";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const contentRefs = useRef({});

  const toggleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/faq.jpeg')" }}
    >
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="mb-2 p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white transition-all duration-300 shadow-md"
            >
              <button
                onClick={() => toggleSingleSelection(item.id)}
                className="flex justify-between items-center w-full cursor-pointer text-lg font-medium focus:outline-none"
                aria-expanded={selected === item.id}
              >
                <h3>{item.title}</h3>
                <span
                  className={`text-2xl font-bold transition-transform duration-300 ${
                    selected === item.id ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                ref={(el) => (contentRefs.current[item.id] = el)}
                className="overflow-hidden transition-[height,opacity] duration-300 ease-in-out"
                style={{
                  height: selected === item.id ? contentRefs.current[item.id]?.scrollHeight + "px" : "0px",
                  opacity: selected === item.id ? 1 : 0,
                }}
              >
                <p className="text-gray-200 mt-2">{item.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-center">No Data Found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
