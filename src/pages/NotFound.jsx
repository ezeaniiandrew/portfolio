import diagonalArrow from "@/assets/arrow.svg";

function NotFound() {
  return (
    <div className="bg-not-found-bg w-full h-screen bg-cover text-paragraph-tertiary leading-loose flex flex-col items-center justify-center gap-4 col-start-1 -col-end-1">
      <div className="flex flex-col items-center justify-center font-semibold">
        <p className="text-8xl lg:text-8xl mr-20">404</p>
        <p className="text-8xl ml-20">Error</p>
      </div>
      <p>The page you are looking for does not exist.</p>
      <button className="border-solid border border-brand-secondary rounded-[100px] flex items-center gap-3 font-medium pr-3">
        <span className="px-[20px] py-[12px] rounded-tr-[150px]  rounded-tl-[100px] rounded-bl-[100px] bg-brand-secondary border border-brand-secondary border-solid text-paragraph-black">
          Back to home
        </span>
        <span>
          <img src={diagonalArrow} alt="" />
        </span>
      </button>
    </div>
  );
}

export default NotFound;
