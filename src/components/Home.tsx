import mainPic from "/public/assets/1760965426969.jpeg";

export default function Home() {
  return (
    <section id="Home">
      <div className="flex flex-col items-center justify-center gap-[20px] mt-[50px]">
        <div className="image">
          <img
            src={mainPic}
            alt="main profile pic"
            className="rounded-full w-[200px] h-[200px]"
          />
        </div>
        <div className="main-info flex flex-col items-center justify-center">
          <div className="first-text flex justify-center">
            <h1 className="main-text mb:w-[80%] text-center text-[#b415ff] mb:text-[30px] tb:text-[48px] dk:text-[65px] text-bold">
              I'm Nick Nishnianidze,
              <span className="highlight text-white">
                {" "}
                frontend developer based in Georgia.
              </span>
            </h1>
          </div>
        </div>
        <div className="description flex justify-center w-full">
          <p className="text-[18px] text-white leading-[30px] w-[80%] text-center">
            I am a frontend developer from Tbilisi, Georgia with 2 years of
            experience
          </p>
        </div>
        <div className="buttons flex flex-row justify-center w-full gap-[30px]">
          <button className="bg-[linear-gradient(90deg,rgba(223,137,8,1)_0%,rgba(180,21,255,1)_50%,rgba(252,176,69,1)_100%)] text-white text-bold text-[18px] none py-[20px] rounded-[50px] cursor-pointer w-[178px]">
            Connect with me
          </button>
          <button className="py-[20px] rounded-[50px] cursor-pointer w-[178px] text-white text-bold text-[18px] border-[2px] border-white cursor-pointer">
            My resume
          </button>
        </div>
      </div>
    </section>
  );
}
