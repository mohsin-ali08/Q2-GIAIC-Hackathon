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
      <section>
        <div className="flex flex-col bg-[#F6F5FF] w-full h-[286px] lg:pl-24 pt-24 text-center lg:text-start">
          <h1 className="text-4xl text-1 font-bold text-indigo-950">
            {textTitle}
          </h1>
          <p className="lato mt-2 ">
            {textNavigation}
            <span className="text-pink-500 font-semibold">{pageName}</span>
          </p>
        </div>
        <div
          className={`${className} border-b py-6 flex justify-around items-center lg:flex-row flex-col px-3`}
        >
          <div>
            <h1 className="text-2xl text-1 text-indigo-950 font-bold">
              Ecommerce Acceories & Fashion item
            </h1>
            <p className="text-sm text-gray-400 lato mt-2">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
         </div>
      </section>
    );
  };
  
  export default FilterSection;