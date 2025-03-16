import React from "react";

interface IProps {
  imgSrc: string;
  desc: string;
}

const PortfolioGalleryItem: React.FC<IProps> = ({ imgSrc, desc }) => {
  return (
    <div className="w-1/2 md:w-1/5 shrink-0 mx-4 first:ml-0 group relative">
      <img
        loading="lazy"
        alt={ desc }
        className="object-cover rounded-lg"
        src={ `/projects/${ imgSrc }` }
      />
      <div className="w-[90%] hidden group-hover:block bg-white absolute top-[10%] left-[50%] -translate-x-[50%] text-black rounded-lg p-4 text-sm">
        { desc }
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white absolute -bottom-2 left-[50%] -translate-x-[50%]"></div>
      </div>
    </div>
  );
};

export default PortfolioGalleryItem;
