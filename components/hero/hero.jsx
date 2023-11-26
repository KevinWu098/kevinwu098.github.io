import React from "react";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

const TechStack = () => {
  return (
    <div className="mx-auto flex flex-row items-center gap-2 xl:mx-0">
      <div className="text-xl">Tech Stack</div>
      <div className="text-primary text-5xl font-extralight">|</div>
      <div className="grid grid-cols-4 flex-row text-5xl lg:flex">
        <BiLogoTypescript /> <BiLogoJavascript />
        <BiLogoHtml5 /> <BiLogoCss3 /> <BiLogoReact /> <BiLogoNodejs />
        <BiLogoPython />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse items-center gap-8 px-8 lg:px-24 xl:flex-row xl:justify-between xl:gap-0 xl:px-48">
        <div className="flex flex-col place-content-center justify-center gap-8 text-center xl:w-[85%] xl:text-left">
          <div className="flex flex-col gap-2">
            <div className="text-5xl font-semibold xl:text-6xl">
              Hello! {"I'm"} Kevin Wu
            </div>
            <div className="text-primary text-4xl font-semibold">
              Developer | CS @ UC Irvine
            </div>
          </div>

          <div className="mx-auto text-lg md:w-[90%] lg:w-[80%] xl:mx-0 xl:w-[70%]">
            {"I'm"} a frontend developer with a passion for building innovative
            applications that blend functionality and an engaging user
            experience.
          </div>

          {/* <TechStack /> */}

          <div className="mx-auto flex flex-col gap-4 align-middle md:flex-row xl:mx-0 xl:flex-col">
            <a
              href="https://drive.google.com/file/d/1_XeDSf7CWSSfsnLTxtOxRxfiNOtHbbXJ/view?usp=sharing"
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-primary active:text-primary border-primary active:bg-background w-fit rounded-full border-2 px-8 py-3 text-xl font-medium text-white shadow-lg drop-shadow-lg transition-all active:border-2"
              style={{ boxShadow: "0 0.25vw 0.5vw 0 #1d6432" }}
            >
              <div>My Resume</div>
            </a>

            <div className="text-primary mx-auto flex flex-row gap-2 text-2xl transition-colors md:mx-0">
              <a
                href="https://www.linkedin.com/in/kevinwu098/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="rounded-full"
              >
                <div className="border-primary w-fit rounded-full border-2 p-3 active:border-black active:text-black">
                  <BiLogoLinkedin />
                </div>
              </a>
              <a
                href="https://www.github.com/kevinwu098/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="rounded-full"
              >
                <div className="border-primary w-fit rounded-full border-2 p-3 active:border-black active:text-black">
                  <BiLogoGithub />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex h-fit w-fit place-content-center items-center rounded-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/man-technologist.png"
            alt="Man Technologist"
            className="flex w-72 rounded-full xl:w-[24rem]"
            style={{ boxShadow: "0 0.25vw 0.75vw 0 #1d6432" }}
          />
        </div>
      </div>

      <div className="text-accent absolute bottom-2 left-[50%] hidden w-fit translate-x-[-50%] text-center text-base md:flex">
        Page is currently undergoing reconstruction! ⚙️
      </div>
    </>
  );
};

export default Hero;
