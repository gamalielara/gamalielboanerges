import React from "react";

interface IProps {
  imgSrc: string;
  desc: string;
  standalone?: boolean;
}

const PortfolioGalleryItem: React.FC<IProps> = ({ imgSrc, desc, standalone }) => {
  return (
    <div className={ `${ standalone ? "w-3/4 md:w-1/2" : "w-1/2 md:w-1/4" } shrink-0 mx-4 first:ml-0 group relative` }>
      <img
        loading="lazy"
        alt={ desc }
        className="object-cover rounded-lg w-full"
        src={ `/projects/${ imgSrc }` }
      />
      <div className="absolute inset-0 bg-black/20 invisible opacity-0 group-hover:opacity-100 group-hover:visible ease-in-out rounded-lg"/>
      <div className="w-[90%] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-4 transition-all ease-in-out bg-white absolute top-[10%] left-[50%] -translate-x-[50%] text-black rounded-lg p-4 text-sm pointer-events-none">
        { desc }
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white absolute bottom-[-7px] left-[50%] -translate-x-[50%]"></div>
      </div>
    </div>
  );
};

export default PortfolioGalleryItem;
