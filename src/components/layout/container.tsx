import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-full md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto px-5 h-full">{children}</div>;
};

export default Container;
