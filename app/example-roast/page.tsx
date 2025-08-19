import { Roast_Result } from "@/components/roastResult";
import React from "react";

const page = () => {
  const roastResult =
    "Wow, your resume is like a Netflix show — looks exciting at first glance, but halfway through I realized it's mostly filler. You've got three different fonts battling each other like a WWE match, 'hardworking' listed twice as if repetition makes it truer, and that 'expert in Microsoft Word' flex in 2025? Bold choice. Honestly, the only thing you've optimized here is word count, not impact.";

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Roast_Result roastResult={roastResult} />
    </div>
  );
};

export default page;
