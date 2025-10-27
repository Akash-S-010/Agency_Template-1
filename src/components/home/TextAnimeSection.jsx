import React from "react";
import { TextReveal } from "../ui/TextReveal";

const TextAnimeSection = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center border-t border-primary/10  gap-8 bg-cover bg-center bg-no-repeat">
      <TextReveal
        text="We believe in a world where technology fosters your everyday experiences and our mission is to make it happen!"
        className="text-center"
      />
    </div>
  );
};

export default TextAnimeSection;
