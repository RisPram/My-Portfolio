import { mypicture,mynewpic } from "../Common/Assets";
import Container from "../Common/Container";
import { skills } from "../Common/RealData";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";

const AboutMe = ({ whiteMode }) => {
  return (
    <>
      <ScrollToTopOfPage />
      <Container whiteMode={whiteMode} inner="my-10 lg:my-20">
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-14 w-full mt-20">
          <figure className="bg-gray-100 w-full h-[300px] lg:h-[600px] rounded-xl flex items-center justify-center">
            <img
              src={mynewpic}
              alt="person"
              className="object-scale-down w-[90%] h-full rounded-xl"
            />
          </figure>
          <section className="flex flex-col items-start w-[95%]">
            <h2
              className={`py-3 !text-3xl lg:!text-4xl font-bold ${
                whiteMode ? "text-[#101010]" : "text-[#fff]"
              }`}
            >
              Hey, I'm Rishita Pramanick.
            </h2>
            <p
              className={`py-3 text-xl   ${
                whiteMode ? "text-[#525155]" : "text-[#C1C1C1]"
              } whitespace-pre-line`}
            >
              I'm a Frontend Developer from Bangalore, India, specializing in
              creating dynamic and responsive web applications. I thrive on
              transforming complex challenges into sleek, efficient, and
              user-friendly solutions.{`\n\n`} My focus is on building
              applications that are not only functional and intuitive but also
              visually appealing and engaging. I bring a personal touch to every
              project.
            </p>

            <section className="w-full flex py-4 items-start justify-start flex-wrap">
              {skills?.map((d, i) => {
                return (
                  <p
                    key={i}
                    className={`px-2 py-1 mr-2 lg:mr-4 my-1.5 w-max rounded-xl border-[1px] flex items-center justify-center
                        ${
                          whiteMode
                            ? "text-[#fff] border-gray-300"
                            : "text-[#101010] border-[#fff] bg-gray-100"
                        }
                        `}
                  >
                    <figure key={i} className="w-[40px] h-[40px]">
                      <img
                        src={d?.image}
                        alt="skills"
                        className="object-contain w-full h-full"
                      />
                    </figure>
                  </p>
                );
              })}
            </section>
          </section>
        </section>
      </Container>
    </>
  );
};

export default AboutMe;
