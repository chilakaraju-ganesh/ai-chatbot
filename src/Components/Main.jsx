import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../Store/Context";
import { IoMenu } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    extend,
    setExtend,
    mode,
    setMode,
  } = useContext(Context);
  return (
    <div
      id="main"
      className={`flex-1  h-screen pb-32 ${
        mode ? " text-white bg-black" : " text-black bg-[#f8f9fa]"
      } `}
    >
      <div id="nav" className=" flex items-center justify-between p-4 ">
        <div id="menu-title" className=" flex items-center space-x-4 ">
          <div
            onClick={() => setExtend((prev) => !prev)}
            id="menu"
            className={`text-2xl font-semibold  p-1 rounded-xl cursor-pointer  ${
              mode ? " hover:bg-lightblack" : "hover:bg-[#e5e5e5]"
            }`}
          >
            <IoMenu />
          </div>

          <p id="title" className="  font-semibold text-xl ">
            AI ChatBot
          </p>
        </div>
        <div id="mode-usericon" className=" flex items-center space-x-4">
          <div
            onClick={() => setMode((prev) => !prev)}
            id="mode"
            className={`text-2xl cursor-pointer p-1 rounded-xl  ${
              mode ? " hover:bg-lightblack" : "hover:bg-[#e5e5e5]"
            } `}
          >
            {mode ? <IoSunnySharp /> : <IoIosMoon />}
          </div>
          <img
            id="usericon"
            className=" h-8 w-8 object-cover hidden md:block"
            src={assets.user_icon}
            alt=""
          />
        </div>
      </div>
      <div id="main-container" className=" max-w-4xl m-auto">
        {showResult ? (
          <div
            id="result"
            className=" py-0 px-4 max-h-[75vh] overflow-y-scroll scrollbar-hide "
          >
            <div
              id="result-title"
              className=" mb-9 mt-4 mx-0 flex items-center space-x-2"
            >
              <img
                src={assets.user_icon}
                alt=""
                className=" h-8 w-8 object-cover rounded-full"
              />
              <p className={`${mode ? "text-[#dee2e6]" : "text-black"}`}>
                {recentPrompt}
              </p>
            </div>
            <div id="result-data" className=" flex items-start space-x-2">
              {mode ? (
                <img
                  id="result-ai-icon"
                  src={assets.ai_img}
                  alt=""
                  className=" h-8 w-8 object-cover rounded-full"
                />
              ) : (
                <img
                  id="result-ai-icon"
                  src={assets.ai_img_light}
                  alt=""
                  className=" h-8 w-8 object-cover rounded-full"
                />
              )}
              {loading ? (
                <div id="loader" className=" w-4/6 flex flex-col ">
                  <hr
                    id="animated-bg"
                    className={`m-1 ${
                      mode ? "animated-bg-dark " : "animated-bg-light "
                    }`}
                  />
                  <hr
                    id="animated-bg"
                    className={`m-1 ${
                      mode ? "animated-bg-dark " : "animated-bg-light "
                    }`}
                  />
                </div>
              ) : (
                <p
                  className={`text-base ${
                    mode ? "text-[#dee2e6]" : "text-black"
                  }  `}
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        ) : (
          <div id="greet" className=" flex flex-col items-center my-14 p-5 ">
            {mode ? (
              <img
                className=" h-24 w-24 rounded-full object-cover md:h-40 md:w-40"
                src={assets.ai_img}
                alt=""
              />
            ) : (
              <img
                className=" h-24 w-24 rounded-full object-cover md:h-40 md:w-40"
                src={assets.ai_img_light}
                alt=""
              />
            )}
            <p className="  font-semibold text-xl my-10 md:text-3xl">
              Hello, How can I help you today?
            </p>
          </div>
        )}
        <div
          id="main-bottom"
          className=" absolute bottom-0 z-0 w-full max-w-4xl py-1 m-auto"
        >
          <div
            id="search-box"
            className={`flex items-center justify-between space-x-4 ${
              mode ? "bg-grey text-white" : "bg-[#e5e5e5] text-black"
            }  py-2 px-4 rounded-2xl mx-2`}
          >
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Message Ai Chatbot"
              className=" flex-1  bg-transparent border-none outline-none p-2 text-base"
            />
            <div className=" text-xl  font-light" onClick={() => onSent()}>
              {input ? <IoSendSharp /> : null}
            </div>
          </div>
          <p className="  text-center font-thin text-xs py-2 mx-1">
            AI chatbot can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
