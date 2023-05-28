export const Dropdown = () => {
  return (
    <>
      <div className="flex">
        <span className="flex shadow-md rounded-lg">
          <select className="border border-black-100 dark:bg-blue-600    bg-blue-700  text-gray-100 outline-black font-body pr-3 pl-2 rounded-lg w-[190px] md:w-[90px] sm:w-[90px] cursor-pointer bg-blue bg-opacity-10 backdrop-blur-md z-1">
            <option className="text-gray-600" value={"usd"}>
              USD
            </option>
            <option className="text-gray-600" value={"inr"}>
              INR
            </option>
            <option className="text-gray-600" value={"eur"}>
              EUR
            </option>
          </select>
        </span>
      </div>
    </>
  );
};
