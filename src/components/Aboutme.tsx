import mainImage from "/public/assets/1761215589739.jpg";

export default function Aboutme() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center mt-[50px]">
        <h1 className="text-white font-black mb:text-[28px] tb:text-[38px] dk:text-[60px]">
          About me
        </h1>
        <div className="photo-info dk:mt-[70px] tb:mt-[70px] mb:mt-[50px] mb:flex mb:flex-col mb:gap-[20px] tb:flex tb:flex-row dk:flex dk:flex-row tb:justify-between dk:gap-[50px] dk:justify-between">
          <div className="photo mb:hidden tb:block dk:block flex-shrink-0">
            <img
              src={mainImage}
              alt="main image"
              className="w-[300px] h-[403px] rounded-[10px] "
            />
          </div>
          <div className="info flex flex-col gap-[50px]">
            <div className="about-me-info flex flex-col">
              <p className="text-[18px] font-bold text-white">
                Passionate front-end developer with 1+ year of hands-on
                experience building responsive web applications using React,
                TypeScript, and Tailwind CSS. Skilled in modern workflows and
                component-based design. Eager to contribute to fast-paced teams
                and deliver high-quality user experiences.
              </p>
              <p className="text-[18px] font-bold text-white mt-[15px]">
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication I
                bring to each project.
              </p>
            </div>
            <div className="fields flex flex-col gap-[15px]">
              <div className="first flex gap-[20px] items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="text w-[130px]">
                  <p className="text-[20px] font-bold text-white">HTML & CSS</p>
                </div>
                <div className="graph w-[50%] h-[8px] rounded-[50px]"></div>
              </div>
              <div className="second flex gap-[20px] items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="text w-[142px]">
                  <p className="text-[20px] font-bold text-white">React JS</p>
                </div>
                <div className="graph w-[90%] h-[8px] rounded-[50px]"></div>
              </div>
              <div className="third flex gap-[20px] items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="text w-[130px]">
                  <p className="text-[20px] font-bold text-white">Javascript</p>
                </div>
                <div className="graph w-[75%] h-[8px] rounded-[50px]"></div>
              </div>
              <div className="fourth flex gap-[20px] items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="text w-[130px]">
                  <p className="text-[20px] font-bold text-white">Python</p>
                </div>
                <div className="graph w-[40%] h-[8px] rounded-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="overall-exp flex items-center justify-around w-full mt-[50px]">
          <div className="first-exp flex flex-col items-center gap-[8px] transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="exp-text text-[40px] font-bold">2+</p>
            <p className="text-[18px] font-bold text-white">
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className="divider w-[2px] h-[81px] bg-white"></div>
          <div className="second-exp flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="exp-text text-[40px] font-bold">40+</p>
            <p className="text-[18px] font-bold text-white">
              PROJECTS COMPLETED
            </p>
          </div>
          <div className="divider w-[2px] h-[81px] bg-white"></div>
          <div className="third-exp flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="exp-text text-[40px] font-bold">100+</p>
            <p className="text-[18px] font-bold text-white">
              CODEWARS COMPLETED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
