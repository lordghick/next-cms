"use client";

function BackToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      return (
        <button
          onClick={scrollToTop}
          className="font-medium bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors">Back to Top
        </button>
  );
}

export default BackToTopButton;
