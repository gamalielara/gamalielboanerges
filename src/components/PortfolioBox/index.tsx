import linkImage from "<assets>/svg/link.svg";
import PortfolioGalleryItem from "<components>/PortfolioGalleryItem";
import ProjectTag from "<components>/ProjectTag";
import { IPortfolioItem } from "<utils>/types";
import { forwardRef } from "react";

const PortfolioBox = forwardRef<HTMLDivElement, IPortfolioItem>((props, ref) => {
  const {
    name,
    tags,
    description,
    my_contribution,
    tech_stacks,
    gallery,
    year,
    project_link,
    project_source_code
  } = props;

  return (
    <article
      ref={ ref }
      className="lg:px-8 md:px-4 px-2 mr-4 bg-gray-600/50 w-[90vw] h-full rounded-lg  p-4 overflow-x-hidden overflow-y-scroll"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-1">{ name }</h1>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{ year }</h3>
      <div className="tags flex flex-wrap">
        { tags.map(tag => (
          <ProjectTag
            key={ tag }
            tagName={ tag }
          />
        )) }
      </div>
      <p className="mt-8 text-sm md:text-base">
        <strong>Project Description:</strong>
        <p
          dangerouslySetInnerHTML={ { __html: description } }
          className="text-align-justify"
        />
      </p>

      <p className="mt-8 text-sm md:text-base">
        <strong>Tech Stacks:</strong>
        <ul className="list-disc pl-4">
          { tech_stacks.map((techStack) => <li>{ techStack }</li>) }
        </ul>
      </p>

      {
        my_contribution && (
          <p className="mt-8 text-sm md:text-base">
            <strong>My Contributions:</strong>
            <ul className="list-disc pl-4">
              { my_contribution.map((contribution) =>
                <li dangerouslySetInnerHTML={ { __html: contribution } }/>) }
            </ul>
          </p>
        )
      }

      {
        project_link && project_source_code && (
          <ul className="mt-8 list-disc pl-4 max-w-max">
            { project_link && (
              <li>
                <a
                  className="flex items-center"
                  target="_blank"
                  href={ project_link }
                >
                  <img
                    src={ linkImage }
                    className="w-[1em] h-[1em] object-contain mr-2 invert"
                  />Project Link</a>
              </li>)
            }

            { project_source_code && (
              <li>
                <a
                  className="flex items-center"
                  target="_blank"
                  href={ project_source_code }
                >
                  <img
                    src={ linkImage }
                    className="w-[1em] h-[1em] object-contain mr-2 invert"
                  />Project Source Code</a>
              </li>
            )
            }
          </ul>
        )
      }

      <div className="project-gallery mt-8 flex items-center overflow-x-scroll justify-evenly">
        {
          Object.entries(gallery).map(([ imgSrcPath, desc ]) => {
            return (
              <PortfolioGalleryItem
                imgSrc={ imgSrcPath }
                desc={ desc }
                standalone={ Object.keys(gallery).length === 1 }
              />
            );
          })
        }
      </div>
    </article>
  );
});

export default PortfolioBox;
