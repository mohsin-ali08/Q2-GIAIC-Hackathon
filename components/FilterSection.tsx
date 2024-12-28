interface textType {
  textTitle: string;
  textNavigation: string;
  pageName: string;
  className?: string;
}

const FilterSection = ({
  textTitle,
  textNavigation,
  pageName,
  className,
}: textType) => {
  return (
    <section className="bg-[#F6F5FF] ">
      <div className="w-full  lg:h-[100px] pt-10 pb-8 lg:pb-0 px-6 lg:px-24 text-center lg:text-start">
        <h1 className="text-2xl font-bold text-indigo-950">{textTitle}</h1>
        <p className="text-md text-gray-700 mt-4">
          {textNavigation}
          <span className="text-pink-500 font-semibold">{pageName}</span>
        </p>
      </div>
      <div
        className={`${
          className
        } border-b border-gray-200 py-6 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-24`}
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
          <h1 className="text-2xl text-indigo-950 font-bold">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex items-center mt-4 lg:mt-0 space-x-6">
          {/* You can add filters or other actions here */}
          <button className="text-sm text-indigo-700 hover:text-indigo-900 focus:outline-none transition duration-300">
            Sort By: Popularity
          </button>
          <button className="text-sm text-indigo-700 hover:text-indigo-900 focus:outline-none transition duration-300">
            Price: Low to High
          </button>
          <button className="text-sm text-indigo-700 hover:text-indigo-900 focus:outline-none transition duration-300">
            New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
