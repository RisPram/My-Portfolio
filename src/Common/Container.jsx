const Container = ({ whiteMode, outer, inner, children, segment, style }) => {
  return (
    <section
      className={`relative w-full flex items-center justify-center bg-cover bg-center ${
        outer ?? ""
      } ${segment === "header" ? "sticky top-0 z-50" : ""}
       ${whiteMode ? "bg-whiteMode" : "bg-baseColor"}
    
     
       `}
      style={style}
    >
      <section
        className={`w-[90%] lg:w-[75%] flex  flex-col bg-transparent ${
          inner ?? ""
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Container;
