import myPhoto from "<assets>/my_photo.jpg";
import MainSection from "<components>/MainSection";
import { CONTENT } from "<utils>/constants/text.ts";

const AboutPage = () => {
  return (
    <MainSection id="about-me">
      <div className="md:px-8 lg:px-32 items-baseline flex flex-col justify-center h-fit">

        <p className="text-5xl font-bold w-full text-center italic mb-8">ABOUT ME</p>

        <div className="flex flex-col md:flex-row-reverse md:ml-4 md:mr-0 mx-2 items-center">
          <div
            className="my-portrait flex-[1] mx-auto w-[50%] md:w-auto md:min-h-0 md:min-w-0 flex justify-center items-center">
            <img
              src={myPhoto}
              alt="Portrait photo of Ara Gamaliel Boanerges"
              className=" aspect-square rounded-full"
            />
          </div>
          <p
            className="text-justify mt-4 md:mr-4 lg:mr-8 lg:flex-[2] md:flex-[2] text-sm md:text-base lg:text-xl"
            dangerouslySetInnerHTML={{ __html: CONTENT.about.textContent }}
          />
        </div>

        <p className="mt-4 text-sm md:text-base lg:text-2xl">
          <em>Interests:<b>{CONTENT.about.interest.join(", ")}</b></em></p>
      </div>

    </MainSection>
  );
};

export default AboutPage;
