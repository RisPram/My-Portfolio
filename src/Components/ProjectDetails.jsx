import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowOutward, ArrowForward } from "@mui/icons-material";
import { bgEffectA } from "../Common/Assets";
import Container from "../Common/Container";
import { myProject } from "../Common/RealData";
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
                <figure className="w-full h-[450px] md:h-[600px] pb-3 lg:pb-6 rounded-lg">
                  <img
                    src={d?.image}
                    className="object-fill md:object-fill w-full h-full rounded-lg"
                  />
                </figure>
                <section className="w-full flex flex-col lg:flex-row">
                  <h3
                    className={`w-full lg:w-[80%] py-6 !text-2xl lg:!text-4xl font-bold ${
                      whiteMode ? "text-[#101010]" : "text-[#fff]"
                    }`}
                  >
                    {d?.name}
                  </h3>
                  <div
                    className={`w-full lg:w-[20%] flex items-start lg:items-center lg:justify-end`}
                  >
                    <p
                      className={`flex py-1.5 px-7 font-caveat text-base lg:text-lg cursor-pointer group  bg-blue-400 rounded-lg duration-200 hover:bg-blue-500
                        ${whiteMode ? "text-[#101010]" : "text-[#fff]"}`}
                      onClick={() => {
                        window.open(
                          `${d?.liveLink}`,
                          "_blank",
                          "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                        );
                      }}
                    >
                      <span className="group-hover:underline font-semibold">
                        Visit Site
                      </span>
                      <ArrowOutward className="w-4 h-4 ml-2" />
                      {/* <img src={iconLink} alt="link" className="ml-2 w-8 h-8" /> */}
                    </p>
                  </div>
                </section>

                <section
                  className="w-full flex flex-col my-10"
                  style={{ backgroundImage: `url(${bgEffectA})` }}
                >
                  <section className="mt-2 w-full flex py-4 items-start justify-start flex-wrap">
                    {d?.skills?.map((d, i) => {
                      return (
                        <div
                          key={i}
                          className={`px-2 py-1 my-1 mr-2 w-max rounded-[33px] border-[1px] flex items-center justify-center
                        border-gray-700
                            ${whiteMode ? "text-black" : "text-[#fff]"}
                        `}
                        >
                          <figure key={i} className="w-[30px] h-[30px]">
                            <img
                              src={d?.image}
                              alt="skills"
                              className="object-contain w-full h-full"
                            />
                          </figure>
                          <span className="px-2 font-caveat text-lg font-semibold">
                            {d?.name}
                          </span>
                        </div>
                      );
                    })}
                  </section>
                  <section className="py-2 text-lg text-left lg:text-justify bg-cover bg-center">
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
              </section>
            );
          })}
        </section>

        {/* more to explore */}
        <h2
          className={`font-semibold ${
            whiteMode ? "text-[#101010]" : "text-[#fff]"
          } !text-3xl lg:!text-5xl my-16 pt-10`}
        >
          More to explore
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {moreProjects?.map((d, i) => {
            return (
              <figure
                className={`cursor-pointer relative w-full rounded-xl`}
                key={i}
                onMouseEnter={() => {
                  setState((prev) => {
                    return { ...prev, selectedData: d };
                  });
                }}
                onMouseLeave={() => {
                  setState((prev) => {
                    return { ...prev, selectedData: {} };
                  });
                }}
              >
                <img
                  src={d?.image}
                  alt="pic"
                  className={`${
                    state.selectedData?.id === d?.id ? "opacity-70" : ""
                  } object-contain w-full h-full rounded-xl`}
                />

                {state.selectedData?.id === d?.id && (
                  <>
                    <p className="absolute bottom-0 w-full flex flex-col rounded-xl bg-gradient-to-t from-black to-transparent duration-500 p-4 ">
                      <span className="py-0.5 md:py-1 text-lg lg:text-2xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-bold">
                        {d?.name}
                      </span>

                      <span className="py-0.5 md:py-1 text-base text-[#fff] font-semibold">
                        {d?.dec}
                      </span>
                      <span className="py-0.5 md:py-1 text-sm text-babyGreen font-semibold">
                        {d?.date}
                      </span>
                    </p>
                    <p
                      className="absolute top-3 right-5 w-fit bg-babyGreen rounded-full p-1.5 cursor-pointer"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                        navigate(`/project-details/${d?.slug}`);
                      }}
                    >
                      <ArrowForward />
                      {/* <img src={iconLink} alt="link" className="ml-2 w-8 h-8" /> */}
                    </p>
                  </>
                )}
              </figure>
            );
          })}
        </section>
      </Container>
    </>
  );
};

export default ProjectDetails;
