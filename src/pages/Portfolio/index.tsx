import MainSection from "<components>/MainSection";
import ProjectTag from "<components>/ProjectTag";
import { PORTFOLIO_MANIFEST } from "<utils>/constants/portfolioManifest";
import { CONTENT_TEXT } from "<utils>/constants/text";

const PortfolioPage = () => {
  const { portfolio } = PORTFOLIO_MANIFEST;

  return (
    <MainSection id="portfolio">
      <p className="text-5xl font-bold w-full text-center italic mb-8">
        { CONTENT_TEXT.portfolio.pageName.toUpperCase() }
      </p>

      <div className="overflow-x-hidden w-[75vw] mx-auto">
        <div className="w-fit flex">
          {
            portfolio.map(project => {
              return (
                <article className="lg:px-8 md:px-4 px-2 mr-4 bg-gray-600/50 w-[75vw] h-full rounded-lg  p-4 overflow-x-hidden overflow-y-scroll">
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
                    <p dangerouslySetInnerHTML={ { __html: project.description } }/>
                  </p>

                  <p className="mt-8 text-sm md:text-base">
                    <strong>Tech Stacks:</strong>
                    <ul className="list-disc pl-4">
                      { project.tech_stacks.map((techStack) => <li>{ techStack }</li>) }
                    </ul>
                  </p>
                </article>
              );
            })
          }
        </div>
      </div>
    </MainSection>
  );
};

export default PortfolioPage;
