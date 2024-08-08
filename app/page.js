
export default function Home() {
  return (
    <>
      <div className="flex justify-center h-[92vh] items-center flex-col gap-7">
        <div className="flex flex-col items-center gap-1">
          <div className="text-7xl font-bold text-[#18d55f]">Buy Me A Chai</div>
          <div className="text-xl text-[#69b17f]">A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!</div>
        </div>
        <div className="flex gap-3">
          <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      
    </>
  );
}
