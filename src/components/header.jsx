import React from "react";

const Header = ({ title, description }) => {
  return (
    <div className="flex flex-row  justify-around h-12 items-center ">
      <div className="flex items-center h-8  ">
        <div className="font-semibold mr-2 text-sm md:text-base">{title}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className=" text-xs ">{description}</div>
      </div>
      {/* ---------Search button---------- */}
      {/* <div className="h-10 "> */}
      <div className="flex items-center h-8 ">
        <form className="max-w-md mx-auto min-w-4">
          <label
            for="default-search"
            className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-1 ps-10 text-sm text-gray-900 border rounded "
              placeholder="Search "
              required
            />
          </div>
        </form>
      </div>
      {/* </div> */}
      {/* ----------------------SearchBar ends-------------------- */}
      <div className="flex items-center ">
        <div className="text-sm md:text-base">components</div>
      </div>
    </div>
  );
};

export default Header;
