import mainPic from "/public/assets/1760965426969.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] mt-[50px]">
      <div className="image">
        <img
          src={mainPic}
          alt="main profile pic"
          className="rounded-full w-[200px] h-[200px]"
        />
      </div>
      <div className="main-info flex justify-center">
        <h1 className="main-text mb:w-[80%] text-center text-[#b415ff] text-[24px]">
          I'm Nick Nishnianidze,
          <span className="text-white">
            {" "}
            frontend developer based in Georgia.
          </span>
        </h1>
      </div>
      <div className="description"></div>
      <div className="buttons flex flex-row"></div>
    </div>
  );
}
