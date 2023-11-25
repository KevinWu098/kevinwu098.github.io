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
    <div className="flex flex-row items-center gap-2">
      <div className="text-xl">Tech Stack</div>
      <div className="text-primary text-5xl font-extralight">|</div>
      <div className="flex flex-row text-5xl">
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
      <div className="flex flex-row items-center justify-between px-48">
        <div className="flex w-[75%] flex-col place-content-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-6xl font-semibold">
              Hello! {"I'm"} Kevin Wu
            </div>
            <div className="text-primary text-4xl font-semibold">
              Developer | CS @ UC Irvine
            </div>
          </div>

          <div className="w-[70%] text-lg">
            {"I'm"} a frontend developer with a passion for building innovative
            applications that blend functionality and an engaging user
            experience.
          </div>

          <TechStack />

          <div className="flex flex-col gap-4">
            <a
              href="https://drive.google.com/file/d/1_XeDSf7CWSSfsnLTxtOxRxfiNOtHbbXJ/view?usp=sharing"
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-primary active:text-primary border-primary active:bg-background w-fit rounded-full border-2 px-8 py-3 text-xl font-medium text-white shadow-lg drop-shadow-lg transition-all active:border-2"
              style={{ boxShadow: "0 0.25vw 0.5vw 0 #1d6432" }}
            >
              <div>My Resume</div>
            </a>
            <div className="text-primary flex flex-row gap-2 text-2xl transition-colors">
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
            className="flex w-[28rem] rounded-full"
            style={{ boxShadow: "0 0.25vw 0.75vw 0 #1d6432" }}
          />
        </div>
      </div>

      <div className="text-accent absolute bottom-3 left-[50%] translate-x-[-50%] text-base">
        Page is currently undergoing reconstruction! ⚙️
      </div>
    </>
  );
};

export default Hero;
