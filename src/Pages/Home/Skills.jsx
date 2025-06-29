import React from "react";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css-3.png";
import js from "../../assets/icons/js.png";
import tailwindcss from "../../assets/icons/tailwindcss.png";
import express from "../../assets/icons/express-js.png";
import figma from "../../assets/icons/figma.png";
import firebase from "../../assets/icons/firebase.png";
import git from "../../assets/icons/git.png";
import github from "../../assets/icons/github-.png";
import jwt from "../../assets/icons/jwt.png";
import vscode from "../../assets/icons/vscode-.png";
import react from "../../assets/icons/react.png";
import router from "../../assets/icons/react-router(1).png";
import node from "../../assets/icons/nodejs.png";
import mongodb from "../../assets/icons/mongodb.png";
import { Tooltip } from "react-tooltip";
// import ReactTooltip from "react-tooltip";

const Skills = () => {
  const icons = [
    {
      id: 1,
      img: html,
      tip: "htmlTip",
      data: "HTML5",
    },
    {
      id: 2,
      img: css,
      tip: "cssTip",
      data: "CSS3",
    },
    {
      id: 3,
      img: tailwindcss,
      tip: "tailwindTip",
      data: "TailwindCSS",
    },
    {
      id: 4,
      img: js,
      tip: "jsTip",
      data: "JavaScript",
    },
    {
      id: 5,
      img: react,
      tip: "reactTip",
      data: "React",
    },
    {
      id: 6,
      img: router,
      tip: "routerTip",
      data: "ReactRouter",
    },
    {
      id: 7,
      img: firebase,
      tip: "firebaseTip",
      data: "Firebase",
    },
    {
      id: 8,
      img: node,
      tip: "nodeTip",
      data: "NodeJs",
    },
    {
      id: 9,
      img: express,
      tip: "expressTip",
      data: "ExpressJs",
    },
    {
      id: 10,
      img: mongodb,
      tip: "mongoTip",
      data: "MongoDB",
    },
    {
      id: 11,
      img: figma,
      tip: "figmaTip",
      data: "Figma",
    },
    {
      id: 12,
      img: vscode,
      tip: "vscodeTip",
      data: "VSCode",
    },
    {
      id: 13,
      img: git,
      tip: "gitTip",
      data: "Git",
    },
    {
      id: 14,
      img: github,
      tip: "githubTip",
      data: "GitHub",
    },
    {
      id: 15,
      img: jwt,
      tip: "jwtTip",
      data: "JWT",
    },
  ];
  console.log(icons);
  return (
    <div className="max-w-[1300px] mx-auto py-24 px-2 md:px-0">
      <div className="text-center">
        <span className="text-[#ffc107] text-xl">Expertise</span>
        <h3 className="text-4xl font-bold mt-2">SKILLS</h3>
      </div>
      <div className="flex justify-center py-12">
        <div className="w-px h-10 bg-gray-300 opacity-50"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-8">
        {icons.map((icon) => (
          <div
            key={icon.id}
            data-tooltip-id={icon.tip}
            data-tooltip-content={icon.data}
          >
            <div className="bg-gray-800 p-5 md:p-10 rounded-2xl hover:scale-110 transition-all duration-300">
              <img
                src={icon.img}
                alt={icons.data}
                className="w-22 h-22 mx-auto"
              />
              <h5 className="text-center mt-5 text-2xl font-semibold ">
                {icon.data}
              </h5>
            </div>
            <Tooltip
              id={icon.tip}
              place="top"
              style={{
                backgroundColor: "#ffc107",
                color: "#000",
                fontWeight: "bold",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
