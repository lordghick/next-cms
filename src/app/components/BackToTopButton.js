"use client";
import { useEffect } from "react";

function BackToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      return (
        <button
          onClick={scrollToTop}
          className="p-2 border-2 border-slate-500 hover:border-slate-700 text-slate-500 hover:text-white hover:bg-slate-700 rounded-full transition-all">Back to Top
        </button>
  );
}

export default BackToTopButton;
