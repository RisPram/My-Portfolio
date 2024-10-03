import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { myProject } from "../Common/RealData";
import Container from "../Common/Container";
const MyProject = ({ whiteMode }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    selectedData: {},
  });
  return (
    <Container whiteMode={whiteMode} inner="pb-20">
      <h2
        className={`my-14 text-left font-semibold !text-3xl lg:!text-5xl   ${
          whiteMode ? "text-black " : "text-[#fff]"
        } underline`}
      >
        My Contributions
      </h2>
      <section className={`grid grid-cols-1 lg:grid-cols-2 mb-14 gap-14`}>
        {myProject?.map((d, i) => {
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
                      navigate(`/project-details/${d?.slug}`);
                    }}
                  >
                    <ArrowForwardIcon />
                    {/* <img src={iconLink} alt="link" className="ml-2 w-8 h-8" /> */}
                  </p>
                </>
              )}
            </figure>
          );
        })}
      </section>
    </Container>
  );
};

export default MyProject;
