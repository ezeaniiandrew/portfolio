import { skillSets } from "../data";
import { Hero } from "./components";
import { Badge } from "@/components";

function About() {
  return (
    <>
      <Hero
        headline="The Person Behind the code"
        subText="I'm a frontend developer, content writer, and tech educator from Nigeria, passionate about sharing knowledge and building solutions that help businesses grow."
      />
      <section className="col-start-1 md:col-start-2 -col-end-1 md:col-end-12 dark:text-brand-tertiary-light flex flex-col gap-10 items-center justify-center">
        <div className="w-full grid place-content-center">
          <div className="relative z-10">
            <p className="text-lg md:text-xl px-5 md:px-0 font-bold dark:text-white capitalize leading-tight md:leading-snug">
              My name is{" "}
              <span className="block text-brand-secondary">
                Andrew Ezeani.{" "}
              </span>
            </p>
            <p className="text-lg md:text-xl font-semibold mt-4 mx-auto max-w-2xl">
              I am a frontend Engineer with a 3+ years of experience in creating
              beautiful and performant web interfaces that provide exceptional
              user experiences.
            </p>
          </div>
          <div className="mt-10 grid place-content-center">
            <img
              src="https://res.cloudinary.com/ezmedia/image/upload/f_auto,q_auto,w_360/dp_tas23x.jpg"
              alt="Portrait of Andrew Ezeani"
              className="max-w-[280px] md:max-w-[360px] rounded-xl shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1 hover:shadow-[0_12px_40px_rgba(254,178,115,0.4)]"
              loading="eager"
            />
          </div>
        </div>
        <div className="w-full text-left mt-24 px-5 md:px-0">
          <h3 className="uppercase border-l-8 border-l-brand-secondary pl-3 font-semibold text-4xl">
            Experience
          </h3>
          <TimelineCurves />
        </div>
        <div className="w-full text-left mt-24 px-5 md:px-0">
          <h3 className="uppercase border-l-8 border-l-brand-secondary pl-3 font-semibold text-4xl">
            Skills
          </h3>
          <div className="mt-10 flex md:flex-row w-full md:w-auto flex-wrap gap-4 justify-center">
            <Badge badges={skillSets} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

function TimelineCurves() {
  return (
    <div className="w-full pt-8 px-1 md:px-0">
      <div className="relative">
        {/* Left content - for first and third nodes */}
        <div className="w-1/3">
          {/* First node content - aligned to right */}
          <div className="py-2 absolute right-[9%] md:right-[13%] min-[840px]:right-[18%] lg:right-[18%] xl:right-[25%] border-l-2 border-l-[#4f81bc] pl-3 md:pl-8 top-4 md:top-[9%]">
            <p className="md:text-sm font-semibold text-gray-600 text-[10px]">
              1 year plus
            </p>

            <p className="text-sm md:text-2xl lg:text-3xl font-bold">
              Freelance
            </p>
          </div>

          {/* Second node text content */}
          {/* <div className="  "> */}
          <div className="absolute top-[40%] md:top-[41%] min-[840px]:top-[42.5%] lg:top-[42.5%] py-2 left-[2%] min-[840px]:left-[9%] lg:left-[8%] xl:left-[16%] border-r-2 border-r-[#EE9008] pr-3 md:pr-8 text-right">
            <p className="md:text-sm font-semibold text-gray-600 text-[10px]">
              6 months
            </p>
            <p className="text-sm md:text-2xl lg:text-3xl font-bold">
              BlueX Ltd.
            </p>
          </div>
          {/* </div> */}

          {/* Third node text content */}
          <div className="py-2 absolute right-[9%] md:right-[13%] min-[840px]:right-[18%] lg:right-[18%] xl:right-[25%] border-l-2 border-l-[#4f81bc] pl-3 md:pl-8 bottom-4 md:bottom-[9%]">
            <p className="md:text-sm font-semibold text-gray-600 text-[10px]">
              3 months
            </p>
            <p className="text-sm md:text-2xl lg:text-3xl font-bold">
              Enoverlab
            </p>
          </div>
        </div>

        {/* SVG Timeline in the middle */}
        <div className="w-1/3 mx-auto relative grid place-content-center">
          {/* first experience */}
          <div className="w-16 h-16 md:w-[120px] md:h-[120px] rounded-full bg-[#4F81BC] absolute left-[5%] md:left-[7%] min-[840px]:left-[12%] lg:left-[13%] xl:left-[20%] top-[4.6%] md:top-[3%] min-[840px]:top-[4.6%] lg:top-[4.6%] min-[840px]: xl:top-[5%] grid place-content-center before:absolute before:content-[''] before:w-0 before:h-0 before:border-l-[9px] md:before:border-l-[20px] before:border-l-[#4F81BC] before:border-t-[9px] md:before:border-t-[20px] before:border-t-transparent before:border-b-[9px] md:before:border-b-[20px] before:border-b-transparent before:-right-[6px] md:before:right-[-14px] before:top-[50%] before:translate-y-[-50%]">
            <div className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] rounded-full bg-white"></div>
          </div>

          {/* second experience */}
          <div className="w-16 h-16 md:w-[120px] md:h-[120px] rounded-full bg-[#EE9008] absolute left-[5%] md:left-[7%] min-[840px]:left-[12%] lg:left-[13%] xl:left-[20%] top-[37.5%] md:top-[36%] min-[840px]:top-[37.6%] lg:top-[38.1%] xl:top-[38%] grid place-content-center before:absolute before:content-[''] before:w-0 before:h-0 md:before:border-r-[20px] before:border-r-[9px] before:border-r-[#EE9008] md:before:border-t-[20px] before:border-t-[9px] before:border-t-transparent md:before:border-b-[20px] before:border-b-[9px] before:border-b-transparent before:-left-[6px] md:before:left-[-14px] before:top-[50%] before:translate-y-[-50%]">
            <div className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] rounded-full bg-white"></div>
          </div>

          {/* third */}
          <div className="w-16 h-16 md:w-[120px] md:h-[120px] rounded-full bg-[#4F81BC] absolute left-[5%] md:left-[7%] min-[840px]:left-[12%] lg:left-[13%] xl:left-[20%] bottom-[4.6%] md:bottom-[3%] min-[840px]:bottom-[4.6%] lg:bottom-[4.6%] xl:bottom-[5%] grid place-content-center before:absolute before:content-[''] before:w-0 before:h-0 before:border-l-[9px] md:before:border-l-[20px] before:border-l-[#4F81BC] before:border-t-[9px] md:before:border-t-[20px] before:border-t-transparent md:before:border-b-[20px] before:border-b-[9px] before:border-b-transparent before:-right-[6px] md:before:right-[-14px] before:top-[50%] before:translate-y-[-50%]">
            <div className="w-[54px] h-[54px] md:w-[100px] md:h-[100px] rounded-full bg-white"></div>
          </div>
          <svg
            style={{
              width: "100%",
              maxWidth: "257px",
              minWidth: "133px",
              height: "auto",
              maxHeight: "496",
            }}
            // height="496"
            viewBox="0 0 257 496"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_848_88892" fill="white">
              <path d="M172.072 164C183.103 164 194.026 166.16 204.218 170.356C214.409 174.552 223.669 180.703 231.469 188.457C239.269 196.21 245.457 205.415 249.678 215.546C253.9 225.677 256.072 236.535 256.072 247.5C256.072 258.465 253.9 269.323 249.678 279.454C245.457 289.585 239.269 298.79 231.469 306.543C223.669 314.297 214.409 320.448 204.218 324.644C194.026 328.84 183.103 331 172.072 331L172.072 327.04C182.58 327.04 192.985 324.983 202.693 320.986C212.401 316.989 221.222 311.13 228.653 303.744C236.083 296.358 241.977 287.589 245.998 277.939C250.019 268.289 252.089 257.945 252.089 247.5C252.089 237.055 250.019 226.711 245.998 217.061C241.977 207.411 236.083 198.642 228.653 191.256C221.222 183.87 212.401 178.011 202.693 174.014C192.985 170.017 182.58 167.96 172.072 167.96L172.072 164Z" />
            </mask>
            {/* second circle */}
            <path
              d="M172.072 164C183.103 164 194.026 166.16 204.218 170.356C214.409 174.552 223.669 180.703 231.469 188.457C239.269 196.21 245.457 205.415 249.678 215.546C253.9 225.677 256.072 236.535 256.072 247.5C256.072 258.465 253.9 269.323 249.678 279.454C245.457 289.585 239.269 298.79 231.469 306.543C223.669 314.297 214.409 320.448 204.218 324.644C194.026 328.84 183.103 331 172.072 331L172.072 327.04C182.58 327.04 192.985 324.983 202.693 320.986C212.401 316.989 221.222 311.13 228.653 303.744C236.083 296.358 241.977 287.589 245.998 277.939C250.019 268.289 252.089 257.945 252.089 247.5C252.089 237.055 250.019 226.711 245.998 217.061C241.977 207.411 236.083 198.642 228.653 191.256C221.222 183.87 212.401 178.011 202.693 174.014C192.985 170.017 182.58 167.96 172.072 167.96L172.072 164Z"
              stroke="#EE9008"
              stroke-width="12"
              mask="url(#path-1-inside-1_848_88892)"
            />
            <mask id="path-2-inside-2_848_88892" fill="white">
              <path d="M87.3179 327.042C75.9545 326.683 64.635 328.613 54.0351 332.717C43.4352 336.821 33.7721 343.015 25.6226 350.929C17.4731 358.844 11.0042 368.316 6.6021 378.782C2.19998 389.247 -0.0451552 400.49 0.00068814 411.841C0.0465315 423.191 2.38242 434.416 6.86893 444.846C11.3554 455.275 17.9006 464.695 26.1138 472.544C34.3269 480.392 44.0397 486.508 54.6725 490.527C64.7346 494.33 75.4254 496.181 86.1715 495.986C87.1815 495.968 87.9674 495.115 87.9272 494.106V494.106C87.887 493.096 87.0363 492.313 86.0264 492.33C75.772 492.506 65.5716 490.735 55.9697 487.106C45.7972 483.261 36.5049 477.41 28.6473 469.901C20.7896 462.392 14.5278 453.38 10.2355 443.402C5.94324 433.424 3.70847 422.685 3.66461 411.826C3.62076 400.967 5.7687 390.21 9.98026 380.198C14.1918 370.186 20.3806 361.123 28.1773 353.552C35.974 345.98 45.2188 340.054 55.3599 336.127C65.5009 332.201 76.3304 330.355 87.2018 330.699L87.3179 327.042Z" />
            </mask>
            {/* third circle */}
            <path
              d="M87.3179 327.042L93.3149 327.233L93.5052 321.235L87.5076 321.045L87.3179 327.042ZM55.9697 487.106L58.0909 481.493L55.9697 487.106ZM87.2018 330.699L87.0121 336.696L93.0085 336.885L93.1988 330.889L87.2018 330.699ZM86.0264 492.33L85.9237 486.331L86.0264 492.33ZM86.1715 495.986L86.0629 489.987L86.1715 495.986ZM87.5076 321.045C75.34 320.661 63.2193 322.727 51.8687 327.122L56.2014 338.312C66.0507 334.499 76.569 332.705 87.1282 333.039L87.5076 321.045ZM51.8687 327.122C40.5182 331.516 30.1701 338.149 21.4425 346.625L29.8027 355.234C37.374 347.881 46.3522 342.126 56.2014 338.312L51.8687 327.122ZM21.4425 346.625C12.7148 355.101 5.78647 365.246 1.07148 376.455L12.1327 381.108C16.222 371.387 22.2313 362.587 29.8027 355.234L21.4425 346.625ZM1.07148 376.455C-3.64352 387.664 -6.04837 399.707 -5.99926 411.865L6.00064 411.816C5.95806 401.273 8.04349 390.829 12.1327 381.108L1.07148 376.455ZM-5.99926 411.865C-5.95016 424.023 -3.44811 436.046 1.35727 447.217L12.3806 442.475C8.21295 432.786 6.04322 422.36 6.00064 411.816L-5.99926 411.865ZM1.35727 447.217C6.16264 458.387 13.1727 468.476 21.9685 476.882L30.259 468.206C22.6285 460.914 16.5482 452.163 12.3806 442.475L1.35727 447.217ZM21.9685 476.882C30.7643 485.287 41.1656 491.836 52.5512 496.139L56.7937 484.914C46.9139 481.18 37.8896 475.498 30.259 468.206L21.9685 476.882ZM52.5512 496.139C63.3259 500.212 74.7735 502.193 86.2801 501.985L86.0629 489.987C76.0773 490.168 66.1433 488.448 56.7937 484.914L52.5512 496.139ZM85.9237 486.331C76.4278 486.494 66.9822 484.854 58.0909 481.493L53.8484 492.718C64.1611 496.616 75.1162 498.518 86.1291 498.329L85.9237 486.331ZM58.0909 481.493C48.6714 477.933 40.0675 472.515 32.7925 465.563L24.502 474.239C32.9423 482.305 42.923 488.589 53.8484 492.718L58.0909 481.493ZM32.7925 465.563C25.5176 458.611 19.7206 450.268 15.7472 441.031L4.72387 445.773C9.33502 456.492 16.0617 466.173 24.502 474.239L32.7925 465.563ZM15.7472 441.031C11.7738 431.794 9.70516 421.854 9.66457 411.802L-2.33534 411.85C-2.28822 423.517 0.112708 435.054 4.72387 445.773L15.7472 441.031ZM9.66457 411.802C9.62397 401.75 11.6122 391.793 15.5109 382.524L4.44963 377.872C-0.0748004 388.628 -2.38246 400.184 -2.33534 411.85L9.66457 411.802ZM15.5109 382.524C19.4096 373.256 25.1389 364.866 32.3574 357.856L23.9972 349.247C15.6224 357.381 8.97406 367.116 4.44963 377.872L15.5109 382.524ZM32.3574 357.856C39.576 350.845 48.1358 345.358 57.5262 341.723L53.1935 330.532C42.3018 334.749 32.3721 341.114 23.9972 349.247L32.3574 357.856ZM57.5262 341.723C66.9167 338.087 76.9448 336.377 87.0121 336.696L87.3915 324.702C75.7159 324.332 64.0852 326.315 53.1935 330.532L57.5262 341.723ZM93.1988 330.889L93.3149 327.233L81.3209 326.852L81.2049 330.508L93.1988 330.889ZM93.9225 493.867C93.7491 489.512 90.106 486.259 85.9237 486.331L86.1291 498.329C83.9665 498.366 82.025 496.68 81.932 494.344L93.9225 493.867ZM86.2801 501.985C90.7388 501.904 94.0932 498.153 93.9225 493.867L81.932 494.344C81.8417 492.077 83.6243 490.031 86.0629 489.987L86.2801 501.985Z"
              fill="#469BD3"
              mask="url(#path-2-inside-2_848_88892)"
            />
            <rect x="87.0723" y="327" width="85" height="4" fill="#E79317" />
            <rect x="87.0723" y="164" width="85" height="4" fill="#E79317" />
            <mask id="path-6-inside-3_848_88892" fill="white">
              <path d="M87.2843 167.971C74.4636 168.309 61.7358 165.706 50.0767 160.363C38.4176 155.02 28.1367 147.078 20.0224 137.146C11.908 127.214 6.17558 115.556 3.2646 103.066C0.353623 90.5754 0.34138 77.5843 3.22881 65.0884C6.11624 52.5925 11.8267 40.9237 19.9223 30.9766C28.0179 21.0295 38.2838 13.0682 49.9328 7.70308C61.5819 2.33798 74.3047 -0.288459 87.1261 0.0251142C99.2855 0.322499 111.227 3.25669 122.129 8.61546C123.112 9.09906 123.489 10.3001 122.982 11.2722V11.2722C122.475 12.2443 121.278 12.6191 120.293 12.1367C109.93 7.05742 98.5825 4.27621 87.029 3.99365C74.8136 3.69489 62.692 6.19721 51.5935 11.3088C40.4949 16.4203 30.7142 24.0054 23.0012 33.4824C15.2882 42.9594 9.84759 54.0768 7.09662 65.9821C4.34564 77.8875 4.3573 90.2647 7.13071 102.165C9.90412 114.065 15.3656 125.172 23.0965 134.635C30.8274 144.097 40.6224 151.664 51.7305 156.754C62.8387 161.845 74.965 164.324 87.1798 164.003L87.2843 167.971Z" />
            </mask>
            {/* first circle */}
            <path
              d="M87.2843 167.971L87.3897 171.969L91.3883 171.864L91.2829 167.866L87.2843 167.971ZM87.1798 164.003L91.1784 163.897L91.0731 159.899L87.0745 160.004L87.1798 164.003ZM120.293 12.1367L118.533 15.7285L120.293 12.1367ZM87.179 163.972C74.9688 164.294 62.8471 161.815 51.7431 156.727L48.4102 163.999C60.6246 169.597 73.9584 172.323 87.3897 171.969L87.179 163.972ZM51.7431 156.727C40.6392 151.638 30.8479 144.074 23.12 134.615L16.9247 139.677C25.4255 150.082 36.1959 158.402 48.4102 163.999L51.7431 156.727ZM23.12 134.615C15.392 125.156 9.93256 114.054 7.1602 102.158L-0.631002 103.974C2.41859 117.059 8.42398 129.272 16.9247 139.677L23.12 134.615ZM7.1602 102.158C4.38784 90.2623 4.37618 77.8898 7.12612 65.9889L-0.668496 64.1878C-3.69342 77.2788 -3.6806 90.8885 -0.631002 103.974L7.1602 102.158ZM7.12612 65.9889C9.87605 54.0881 15.3146 42.975 23.0247 33.5015L16.8199 28.4517C8.33878 38.8725 2.35643 51.0969 -0.668496 64.1878L7.12612 65.9889ZM23.0247 33.5015C30.7348 24.0281 40.5118 16.4459 51.6061 11.3363L48.2595 4.0699C36.0558 9.69048 25.3011 18.0309 16.8199 28.4517L23.0247 33.5015ZM51.6061 11.3363C62.7005 6.22665 74.8175 3.72528 87.0283 4.02392L87.2239 -3.97369C73.792 -4.3022 60.4633 -1.55068 48.2595 4.0699L51.6061 11.3363ZM87.0283 4.02392C98.6086 4.30714 109.982 7.10161 120.364 12.2052L123.893 5.02573C112.473 -0.588231 99.9623 -3.66214 87.2239 -3.97369L87.0283 4.02392ZM122.054 8.54491C111.172 3.21174 99.2577 0.291531 87.1268 -0.00515761L86.9312 7.99245C97.9072 8.26089 108.687 10.9031 118.533 15.7285L122.054 8.54491ZM87.1268 -0.00515761C74.3009 -0.318844 61.5734 2.30854 49.9202 7.67558L53.2668 14.942C63.8106 10.0859 75.3263 7.70863 86.9312 7.99245L87.1268 -0.00515761ZM49.9202 7.67558C38.2669 13.0426 27.9974 21.0068 19.8988 30.9575L26.1036 36.0073C33.4311 27.004 42.723 19.798 53.2668 14.942L49.9202 7.67558ZM19.8988 30.9575C11.8003 40.9082 6.08778 52.5812 3.19931 65.0816L10.9939 66.8827C13.6074 55.5724 18.776 45.0107 26.1036 36.0073L19.8988 30.9575ZM3.19931 65.0816C0.310836 77.582 0.323083 90.5778 3.23511 103.073L11.0263 101.257C8.39153 89.9516 8.38044 78.193 10.9939 66.8827L3.19931 65.0816ZM3.23511 103.073C6.14714 115.568 11.8816 127.23 19.9989 137.165L26.1941 132.104C18.8496 123.114 13.6611 112.562 11.0263 101.257L3.23511 103.073ZM19.9989 137.165C28.1162 147.101 38.4007 155.045 50.0641 160.391L53.397 153.118C42.844 148.282 33.5386 141.093 26.1941 132.104L19.9989 137.165ZM50.0641 160.391C61.7274 165.736 74.4598 168.339 87.2851 168.001L87.0745 160.004C75.4701 160.31 63.9499 157.954 53.397 153.118L50.0641 160.391ZM83.1812 164.108L83.2857 168.076L91.2829 167.866L91.1784 163.897L83.1812 164.108ZM119.435 9.42328C119.961 8.41406 121.147 8.10044 122.054 8.54491L118.533 15.7285C121.408 17.1378 124.99 16.0745 126.529 13.1211L119.435 9.42328ZM120.364 12.2052C119.277 11.6707 118.932 10.3878 119.435 9.42328L126.529 13.1211C128.045 10.2124 126.948 6.52742 123.893 5.02573L120.364 12.2052Z"
              fill="#4F81BC"
              mask="url(#path-6-inside-3_848_88892)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
