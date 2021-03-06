import React from "react";

type BannerBottomTypes = {
  children?: React.ReactNode;
  className?: string;
};

const BannerBottom = ({ children, className }: BannerBottomTypes) => {
  return (
    <footer className="bg-white">
      <div className="bg-bottom-banner bg-no-repeat bg-cover  min-h-[20vh] flex flex-col items-center justify-center space-x-2">
        {children}
      </div>
    </footer>
  );
};

export default BannerBottom;
