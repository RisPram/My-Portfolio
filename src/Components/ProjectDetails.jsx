import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { iconLink, bgEffectA } from "../Assets";
import Container from "../Common/Container";
import { myProject, skills } from "../Common/RealData";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";

const ProjectDetails = ({ whiteMode }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({ selectedTab: "" });
  let specificProject = myProject?.filter((d) => {
    return d?.slug === params.key;
  });

  let moreProjects = myProject?.filter((d) => {
    return d?.slug !== params.key;
  });

  return (
    <>
      <ScrollToTopOfPage />
      <Container whiteMode={whiteMode}>
        {/* particular project details */}
        <section className="flex items-center justify-center">
          {specificProject?.map((d, i) => {
            return (
              <section
                className="my-10 w-[90%] lg:w-[70%] flex flex-col items-center justify-center"
                key={i}
              >
                <figure className="w-full h-[350px] md:h-[600px] pb-6">
                  <img
                    src={d?.image}
                    className="object-fill w-full h-full rounded-lg"
                  />
                </figure>
                <section className="w-full flex">
                  <h3
                    className={`w-[80%] py-6 !text-3xl lg:!text-4xl font-bold ${
                      whiteMode ? "text-[#101010]" : "text-[#fff]"
                    }`}
                  >
                    {d?.name}
                  </h3>
                  <div className={`w-[20%] flex items-center justify-end`}>
                    <p
                      className={`flex py-1.5 px-7 font-caveat text-lg cursor-pointer group  bg-blue-400 rounded-lg duration-200 hover:bg-blue-500
                        ${whiteMode ? "text-[#101010]" : "text-[#fff]"}`}
                      onClick={() => {
                        window.open();
                      }}
                    >
                      <span className="group-hover:underline font-semibold">
                        Visit Site
                      </span>
                      <ArrowOutwardIcon className="w-4 h-4 ml-2" />
                      {/* <img src={iconLink} alt="link" className="ml-2 w-8 h-8" /> */}
                    </p>
                  </div>
                </section>

                <section className="w-full flex py-2 items-start justify-evenly flex-wrap">
                  {d?.skills?.map((d, i) => {
                    return (
                      <p
                        key={i}
                        className={`p-2 my-1 w-max rounded-[33px] border-[1px] flex items-center justify-center
                        ${
                          whiteMode
                            ? "text-[#101010] border-black"
                            : "text-[#fff] border-[#fff]"
                        }
                        `}
                      >
                        <figure key={i} className="w-[30px] h-[30px]">
                          <img
                            src={d?.image}
                            alt="skills"
                            className="object-contain w-full h-full"
                          />
                        </figure>
                        <span className="px-2 font-caveat text-lg">
                          {d?.name}
                        </span>
                      </p>
                    );
                  })}
                </section>
                <section
                  className="py-2 text-lg text-left lg:text-justify bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgEffectA})` }}
                >
                  {d?.details?.map((x, i) => {
                    return (
                      <p
                        className={`py-2 font-normal  ${
                          whiteMode ? "text-[#101010]" : "text-[#fff]"
                        }`}
                        key={i}
                        dangerouslySetInnerHTML={{
                          __html: x,
                        }}
                      ></p>
                    );
                  })}
                </section>
              </section>
            );
          })}
        </section>

        {/* more to explore */}
        <h2
          className={`font-semibold ${
            whiteMode ? "text-[#101010]" : "text-[#fff]"
          } !text-5xl my-16 pt-10`}
        >
          More to explore
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {moreProjects?.map((d, i) => {
            return (
              <section className="flex flex-col items-start" key={i}>
                <figure className={``}>
                  <img
                    src={d?.image}
                    alt="project"
                    className="object-contain w-full h-[300px]"
                  />
                </figure>
                <p className="py-1.5 !text-[#707070] text-lg">{d?.dec}</p>
                <h3
                  className={`py-1.5 font-bold text-caveat ${
                    whiteMode ? "text-[#101010]" : "text-[#fff]"
                  } !text-xl`}
                >
                  {d?.name}
                </h3>

                <p
                  className="py-1.5 flex items-start justify-center text-xl cursor-pointer group"
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    navigate(`/project-details/${d?.slug}`);
                  }}
                >
                  <span
                    className={`group-hover:underline font-semibold 
                    ${whiteMode ? "text-[#525155]" : "text-[#D1D1D1]"}
                    `}
                  >
                    See My Work
                  </span>
                  <img src={iconLink} alt="link" className="ml-2 w-8 h-8" />
                </p>
              </section>
            );
          })}
        </section>
      </Container>
    </>
  );
};

export default ProjectDetails;
