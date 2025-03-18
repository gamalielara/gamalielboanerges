import arrowLeft from "<assets>/svg/arrow-left.svg";
import arrowRight from "<assets>/svg/arrow-right.svg";
import MainSection from "<components>/MainSection";
import PortfolioBox from "<components>/PortfolioBox";
import { PORTFOLIO_MANIFEST } from "<utils>/constants/portfolioManifest";
import { CONTENT_TEXT } from "<utils>/constants/text";
import { useState } from "react";

const PortfolioPage = () => {
  const [ selectedProjectIndex, setSelectedProjectIndex ] = useState(0);

  const { portfolio } = PORTFOLIO_MANIFEST;

  const handleScrollRight = () => {
    setSelectedProjectIndex(state => {
      if(state === portfolio.length - 1){
        return 0
      }

      return state + 1
    });
  };

  const handleScrollLeft = () => {
    setSelectedProjectIndex(state => {
      if(state === 0){
        return portfolio.length - 1;
      }

      return state - 1
    });
  }

  return (
    <MainSection id="portfolio">
      <p className="text-5xl font-bold w-full text-center italic mb-8">
        { CONTENT_TEXT.portfolio.pageName.toUpperCase() }
      </p>

      <div className={ `overflow-x-hidden w-[90vw] h-[70dvh] mx-auto` }>
        <div className="w-fit flex h-full">
          {
            portfolio.map((portfolioItem, index) => {
              // Scroll to the selected portfolio when the arrow button is clicked
              const articleRef = (el: HTMLDivElement | null) => {
                if (!el) return;

                if (selectedProjectIndex === index) {
                  el.scrollIntoView({
                    inline: "end",
                    behavior: "smooth",
                    block: "nearest"
                  });

                  el.scrollTo({ top: 0, behavior: "smooth" });
                }
              };

              return (
                <PortfolioBox { ...portfolioItem } ref={ articleRef }/>
              );
            })
          }
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <button
          className="mr-4 hover:border-transparent focus:outline-none active:outline-none"
          onClick={ handleScrollLeft }
        >
          <img
            src={ arrowLeft }
            className="md:w-10 md:h-10 w-6 h-6 invert"
            alt="Previous Project"
          />
        </button>
        <button
          className="ml-4 hover:border-transparent active:border-transparent focus:outline-none active:outline-none"
          onClick={ handleScrollRight }
        >
          <img
            src={ arrowRight }
            className="md:w-10 md:h-10 w-6 h-6 invert"
            alt="Next Project"
          />
        </button>
      </div>
    </MainSection>
  );
};

export default PortfolioPage;
