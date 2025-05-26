import React from "react";

const CategoryPageSkeleton = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-6 justify-center items-center lg:h-[40vh] h-[30vh] bg-zinc-200 blink">
        <div className="lg:w-[50%] w-[80%] h-6 bg-zinc-300 rounded-md"></div>
        <div className="lg:w-[50%] w-[80%] h-6 bg-zinc-300 rounded-md"></div>
        <div className="lg:w-[50%] w-[80%] h-15 bg-zinc-300 rounded-md"></div>
      </div>
      <div className="lg:px-16 md:px-10 sm:px-4 px-2">
        <div className="my-10 rounded-md w-42 h-8 bg-zinc-200 blink"></div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:px-16 md:px-10 sm:px-4 px-2 mb-10">
        {Array(6)
          .fill(null)
          .map((_, index) => {
            return (
              <div
                key={index}
                className="bg-zinc-200 w-full h-72 rounded-md blink"
              >
                <span></span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryPageSkeleton;
