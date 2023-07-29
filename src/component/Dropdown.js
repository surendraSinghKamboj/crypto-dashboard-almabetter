export const Dropdown = ({ data }) => {
  return (
    <>
      <div className="flex w-400px">
        <span className="flex shadow-md rounded-lg">
          <select className="border text-black border-black-100 dark:bg-blue-600    bg-blue-700 outline-black font-body pr-3 pl-2 rounded-lg w-[190px] md:w-[90px] sm:w-[90px] cursor-pointer bg-blue bg-opacity-10 backdrop-blur-md z-1">
            {
              data && data.map((item, index) => <option key={index} className="text-gray-600" value={item}>
                {item}
              </option>)
            }
          </select>
        </span>
      </div>
    </>
  );
};
