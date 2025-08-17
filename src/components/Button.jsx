/* eslint-disable react/prop-types */
import diagonalArrow from "@/assets/arrow.svg";

function Button({ className, text, children, as, href, ...props }) {
  if (as === "link") {
    return (
      <a
        className={`border-solid border border-brand-secondary rounded-[100px] flex items-center gap-3 font-medium pr-3 ${className}`}
        href={href}
        {...props}
      >
        {text && (
          <span className="md:px-[20px] grid place-content-center md:py-[12px] h-full basis-10/12 rounded-tr-[150px] rounded-tl-[100px] rounded-bl-[100px] bg-brand-secondary border border-brand-secondary border-solid text-paragraph-black">
            {text}
          </span>
        )}
        {children && children}
        <span className="basis-[fit-content]">
          <img src={diagonalArrow} alt="" />
        </span>
      </a>
    );
  }

  return (
    <button
      className={`border-solid border border-brand-secondary rounded-[100px] flex items-center gap-3 font-medium pr-3 ${className}`}
    >
      {text && (
        <span className="md:px-[20px] grid place-content-center md:py-[12px] h-full basis-10/12 rounded-tr-[150px] rounded-tl-[100px] rounded-bl-[100px] bg-brand-secondary border border-brand-secondary border-solid text-paragraph-black">
          {text}
        </span>
      )}
      {children && children}
      <span className="basis-[fit-content]">
        <img src={diagonalArrow} alt="" />
      </span>
    </button>
  );
}

export default Button;
