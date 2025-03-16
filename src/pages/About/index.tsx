import myPhoto from "<assets>/my_photo.jpg";
import MainSection from "<components>/MainSection";
import { MY_SKILLS, MY_SKILLS_ICON } from "<utils>/constants";
import { CONTENT_TEXT } from "<utils>/constants/text";

const AboutPage = () => {
  return (
    <MainSection
      id="about-me"
      className="md:px-8 lg:px-32"
    >
      <div className="flex flex-col h-screen">

        <p className="text-5xl font-bold w-full text-center italic mb-8">{ CONTENT_TEXT.about.pageName.toUpperCase() }</p>

        <div className="flex flex-col md:flex-row-reverse md:ml-4 md:mr-0 mx-2 items-center">
          <div
            className="my-portrait flex-[1] mx-auto w-[50%] md:w-auto md:min-h-0 md:min-w-0 flex justify-center items-center"
          >
            <img
              src={ myPhoto }
              alt="Portrait photo of Ara Gamaliel Boanerges"
              className=" aspect-square rounded-full"
            />
          </div>
          <p
            className="text-justify mt-4 md:mr-4 lg:mr-8 lg:flex-[2] md:flex-[2] text-sm md:text-base lg:text-xl"
            dangerouslySetInnerHTML={ { __html: CONTENT_TEXT.about.textContent } }
          />
        </div>

        <p className="mt-4 text-sm md:text-base lg:text-2xl md:ml-4 md:mr-0 mx-2">
          <em>Interests:<b>{ CONTENT_TEXT.about.interest.join(", ") }</b></em>
        </p>
      </div>


      <div className="flex relative items-start justify-center">
        <h1 className="text-lg md:text-3xl lg:text-5xl shink-0 mr-4 sticky top-[50%] h-[20px] md:h-[30px] lg:h-[48px]">
          I can do
        </h1>
        <ul>
          { MY_SKILLS.map((skill, i) =>
            <li className={ `text-lg md:text-3xl lg:text-5xl md:my-16 my-8 first:mt-0 last:mb-0 flex items-center` }><img className="object-contain h-[1em] md:h-[0.75em] mr-2" alt={skill} src={MY_SKILLS_ICON[i]}/>{ skill }</li>) }
        </ul>
      </div>

      <div className="w-full h-screen md:mt-56 mt-16 p-[12vh] flex justify-center items-center">
        <div>
          <h1 className="text-xl md:text-3xl lg:text-5xl shink-0 mr-4 text-center">Contact Me</h1>
          <ul className="mt-16">
            <li className="text-lg md:text-2xl lg:text-3xl my-4">Email:
              <a
                href="mailto:aragamalielboanerges@gmail.com"
                target="_blank"
                className="underline hover:cursor-pointer"
              >
                aragamalielboanerges@gmail.com
              </a>
            </li>

            <li className="text-lg md:text-2xl lg:text-3xl my-4">
              <a
                href="https://www.linkedin.com/in/aragamaliel/"
                target="_blank"
                className="hover:cursor-pointer"
              >
                LinkedIn
              </a>
            </li>

            <li className="text-lg md:text-2xl lg:text-3xl my-4">
              <a
                href="https://github.com/gamalielara"
                target="_blank"
                className="hover:cursor-pointer"
              >GitHub
              </a>
            </li>

            <li className="text-lg md:text-2xl lg:text-3xl my-4">
              <a
                href="https://www.gumrindelwald.com"
                target="_blank"
                className="hover:cursor-pointer"
              >
                My Personal Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

    </MainSection>
  );
};

export default AboutPage;
