import React, { PropsWithChildren } from "react";

const MainSection: React.FC<PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>> = ({
  children,
  ...props
}) => {
  return (
    <section  {...props} className="relative w-screen min-h-screen flex justify-center mb-16 pt-[12vh]">
      {children}
    </section>
  );
};

export default MainSection;
