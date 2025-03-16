import React, { PropsWithChildren } from "react";

const MainSection: React.FC<PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>> = ({
  children,
  ...props
}) => {
  return (
    <section  {...props} className={ `relative w-screen h-screen overflow-y-scroll overflow-x-hidden mb-16 pt-[12vh] ${props.className ?? ""}`  }>
      {children}
    </section>
  );
};

export default MainSection;
