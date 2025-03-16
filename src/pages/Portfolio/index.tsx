import arrowLeft from "<assets>/svg/arrow-left.svg";
import arrowRight from "<assets>/svg/arrow-right.svg";
import MainSection from "<components>/MainSection";
import ProjectTag from "<components>/ProjectTag";
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

      <div className={ `overflow-x-hidden w-[90vw] h-[70vh] mx-auto` }>
        <div className="w-fit flex h-full">
          {
            portfolio.map((project, index) => {
              return (
                <article
                  ref={ (el) => {
                    if (selectedProjectIndex === index) {
                      el?.scrollIntoView({
                        inline: "end",
                        behavior: "smooth",
                        block: "nearest"
                      });
                    }
                  } }
                  className="lg:px-8 md:px-4 px-2 mr-4 bg-gray-600/50 w-[90vw] h-full rounded-lg  p-4 overflow-x-hidden overflow-y-scroll"
                >
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">{ project.name }</h1>
                  <div className="tags flex flex-wrap">
                    { project.tags.map(tag => (
                      <ProjectTag
                        key={ tag }
                        tagName={ tag }
                      />
                    )) }
                  </div>
                  <p className="mt-8 text-sm md:text-base">
                    <strong>Project Description:</strong>
                    <p dangerouslySetInnerHTML={ { __html: project.description } } className="text-align-justify"/>
                  </p>

                  <p className="mt-8 text-sm md:text-base">
                    <strong>Tech Stacks:</strong>
                    <ul className="list-disc pl-4">
                      { project.tech_stacks.map((techStack) => <li>{ techStack }</li>) }
                    </ul>
                  </p>

                  <div className="project-gallery mt-8 flex overflow-x-scroll">
                    {
                      Object.entries(project.gallery).map(([ imgPath, desc ]) => {
                        return (
                          <img
                            loading="lazy"
                            alt={ desc }
                            className="object-cover w-1/2 md:w-1/6 mx-4 rounded-lg first:ml-0"
                            src={ `/projects/${ imgPath }` }
                          />
                        );
                      })
                    }
                  </div>
                </article>
              );
            })
          }
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <button className="mr-4 hover:border-transparent active:border-transparent" onClick={handleScrollLeft}>
          <img
            src={ arrowLeft }
            className="md:w-10 md:h-10 w-6 h-6 invert"
            alt="Previous Project"
          />
        </button>
        <button className="ml-4 hover:border-transparent active:border-transparent" onClick={handleScrollRight}>
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
