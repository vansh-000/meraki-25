import { Button } from "@/components/ui/button";
import React from "react";

function BoardCard({ item }) {
  return (
    <div className="w-64 p-4 border border-white/20 rounded-lg backdrop-blur-md bg-transparent flex flex-col justify-between shadow-md">
      {/* Name */}
      <div className="text-lg font-semibold text-white">{item.name}</div>

      {/* Club and DevTeam Buttons */}
      <div className="flex justify-between gap-2 mt-3">
        <Button variant="outline" className="w-full border-white/40 text-white">
          Force
        </Button>
        <Button variant="outline" className="w-full border-white/40 text-white">
          Devteam
        </Button>
      </div>
      
      <div className="flex justify-between gap-2 mt-4">
        <Button variant="ghost" className="text-white hover:bg-white/10">
          Prev
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          Next
        </Button>
      </div>
    </div>
  );
}

export default BoardCard;
