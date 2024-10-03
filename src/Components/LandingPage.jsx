import { useState, useEffect } from "react";
import {
  mypicture,
  homepageA,
  bgEffectA,
  homepageB,
  homepageC,
  gg,
  tcs,
} from "../Common/Assets";
import Container from "../Common/Container";
import { skills } from "../Common/RealData";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";
import MyProject from "./MyWork";
const LandingPage = ({ whiteMode }) => {
  const [state, setState] = useState({
    image: homepageA,
    index: 0,
  });
  let arr = [homepageA, homepageB, homepageC];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the heading index (loop back to 0 if it's the last heading)
      setState((prev) => {
        return { ...prev, index: (prev.index + 1) % arr?.length };
      });
      return () => clearInterval(interval);
    }, 2000);
  }, []); // Change every 2 seconds
  useEffect(() => {
    setState((prev) => {
      return { ...prev, image: arr[state.index] };
    });
  }, [state?.index]);
  return (
    <>
      <ScrollToTopOfPage />
      <Container
        whiteMode={whiteMode}
        inner="mt-20 mb-8"
        style={{ backgroundImage: `url(${bgEffectA})` }}
      >
        <section
          className={`grid grid-cols-1 xl:grid-cols-[60%_30%] gap-6 xl:gap-[10%]`}
        >
          <section className="flex flex-col items-start justify-center">
            <h2
              className={`py-1 font-libre !text-lg md:!text-3xl ${
                whiteMode ? "text-[#616161]" : "text-[#D1D1D1]"
              }`}
            >
              Hi! I’m Rishita Pramanick.
            </h2>
            <h4 className="py-1 text-[#707070] font-libre !text-lg md:!text-2xl">
              Frontend Developer (React JS) .
            </h4>
            <p
              className={`py-5 text-4xl lg:text-5xl !leading-snug font-caveat ${
                whiteMode ? "text-black" : "text-[#fff]"
              } font-semibold`}
            >
              As a passionate frontend developer, I specialize in creating
              visually appealing, user-friendly, and responsive web interfaces.
            </p>

            <section className="w-[100%] flex items-center justify-center sm:justify-between py-8 flex-wrap ">
              {skills?.map((d, i) => {
                return (
                  <figure key={i} className="w-[60px] h-[60px] my-2">
                    <img
                      src={d?.image}
                      alt="skills"
                      className="object-contain w-full h-full"
                    />
                  </figure>
                );
              })}
            </section>
          </section>
          <figure className=" w-full h-full flex items-center lg:items-start justify-center rounded-2xl p-4">
            <img
              src={mypicture}
              alt="person"
              className="object-cover w-[75%] h-[75%] xl:w-full rounded-3xl"
            />
          </figure>
        </section>
      </Container>

      <Container whiteMode={whiteMode} inner="my-14">
        <section
          className={`py-5 flex flex-col md:flex-row items-center justify-center text-lg lg:text-2xl tracking-wide  ${
            whiteMode ? "text-black" : "text-[#fff]"
          } font-semibold `}
        >
          <p
            className={`flex items-center justify-center border-r-none lg:border-r-[1px]
            ${
              whiteMode
                ? "text-black border-black"
                : "text-[#fff] border-[#fff]"
            }
            `}
          >
            Currently @{" "}
            <img
              src={gg}
              alt="gg"
              className="object-contain rounded-lg h-[60px] mx-4"
            />
          </p>
          <p
            className={`flex items-center justify-center border-l-none lg:border-l-[1px] border-cyan-50  ${
              whiteMode ? "border-black" : "border-[#fff]"
            }`}
          >
            <span className="mx-4">Previously @</span>
            <img
              src={tcs}
              alt="tcs"
              className="object-contain rounded-lg h-[60px]"
            />
          </p>
        </section>
      </Container>
      {/* skills */}
      {/* <Container whiteMode={whiteMode} inner="my-20 items-center">
        <section className="w-[80%] flex items-center justify-around py-10">
          {skills?.map((d, i) => {
            return (
              <figure key={i} className="w-[80px] h-[80px]">
                <img
                  src={d?.image}
                  alt="skills"
                  className="object-contain w-full h-full"
                />
              </figure>
            );
          })}
        </section>
      </Container> */}

      {/* my project */}
      <MyProject whiteMode={whiteMode} />
    </>
  );
};

export default LandingPage;
