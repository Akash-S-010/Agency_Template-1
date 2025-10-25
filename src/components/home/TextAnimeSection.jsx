import React from "react";
import { TextReveal } from "../ui/TextReveal";

const TextAnimeSection = () => {
  return (
    <div className="flex flex-col min-h-[60vhitems-center justify-center border-t border-b border-primary/10 text-primary gap-8 bg-cover bg-center bg-no-repeat">
      <TextReveal
        text="Innovative Solutions Tailored for Your Success"
        className="text-center"
      />
    </div>
  );
};

export default TextAnimeSection;
