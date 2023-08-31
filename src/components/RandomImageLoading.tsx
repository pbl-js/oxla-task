import React from 'react';

const textClassName = 'flex w-full h-6 bg-actionSecondary rounded-md animate-pulse';

export const RandomImageLoading = () => {
  return (
    <div className="flex flex-col w-full bg-bgSecondary rounded-md gap-6 p-4">
      <span className="flex w-8/12 h-7 bg-actionSecondary rounded-md animate-pulse" />
      <span className="flex flex-col gap-4 w-full">
        <span className={textClassName} />
        <span className={textClassName} />
        <span className={textClassName} />
      </span>
      <span className="flex w-full h-[400px] bg-actionSecondary rounded-md animate-pulse" />
      <span className="flex flex-row gap-4 w-full">
        <span className={textClassName} />
        <span className={textClassName} />
      </span>
    </div>
  );
};
