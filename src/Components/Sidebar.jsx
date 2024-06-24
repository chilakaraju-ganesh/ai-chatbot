import React, { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Context } from "../Store/Context";
import { MdCancel } from "react-icons/md";

const Sidebar = () => {
  const {
    onSent,
    prevPrompts,
    setRecentPrompt,
    newChat,
    extend,
    setExtend,
    mode,
    setMode,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <>
      <div id="outer-container" className=" hidden md:block ">
        <div
          id="sidebar-container"
          className={` fixed top-0 left-0 z-10 h-screen flex flex-col justify-between ${
            mode ? " bg-grey text-white  " : "bg-[#e5e5e5] text-black"
          } w-64 transform ${
            extend ? "translate-x-0 py-4 px-3" : " -translate-x-full"
          } transition-transform duration-500 `}
        >
          {extend ? (
            <>
              <div id="top-container">
                <div className=" flex justify-between items-center px-2">
                  <p id="title" className="  font-semibold text-xl ">
                    AI ChatBot
                  </p>
                  <div
                    onClick={() => setExtend((prev) => !prev)}
                    className={` inline-block p-1 mb-4 text-2xl font-semibold cursor-pointer  rounded-xl ${
                      mode ? "hover:bg-lightblack " : "hover:bg-[#f8f9fa]"
                    } `}
                  >
                    <MdCancel />
                  </div>
                </div>

                <>
                  <div
                    onClick={() => {
                      newChat();
                    }}
                    id="newchat"
                    className={` inline-flex items-center space-x-3 mt-6 mb-6 py-3 px-5 rounded-2xl cursor-pointer ${
                      mode ? "hover:bg-lightblack " : "hover:bg-[#f8f9fa]"
                    }  `}
                  >
                    <p className=" font-semibold text-base">New chat</p>
                    <div className=" text-xl">
                      {" "}
                      <FaRegEdit />
                    </div>
                  </div>
                  <div id="recent">
                    <p className=" text-sm font-semibold pt-2 px-2   ">
                      Recent
                    </p>
                    {prevPrompts.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => loadPrompt(item)}
                        id="recent-entry"
                        className={` my-2 py-2 px-2 rounded-2xl cursor-pointer ${
                          mode ? " hover:bg-lightblack" : "hover:bg-[#f8f9fa]"
                        }`}
                      >
                        <p className=" text-base font-semibold">
                          {item.slice(0, 26)}
                          {"..."}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div id="outer-container" className=" block md:hidden ">
        <div
          id="sidebar-container"
          className={` fixed top-0 left-0 z-10 h-screen flex flex-col justify-between ${
            mode ? " bg-grey text-white  " : "bg-[#e5e5e5] text-black"
          } w-64 transform ${
            extend ? "translate-x-0 py-4 px-3" : " -translate-x-full"
          } transition-transform duration-500 `}
        >
          {extend ? (
            <>
              <div id="top-container">
                <div className=" flex justify-between items-center px-2">
                  <p id="title" className="  font-semibold text-lg ">
                    AI ChatBot
                  </p>
                  <div
                    onClick={() => setExtend((prev) => !prev)}
                    className={` inline-block p-1 mb-4 text-2xl font-semibold cursor-pointer  rounded-xl ${
                      mode ? "hover:bg-lightblack " : "hover:bg-[#f8f9fa]"
                    } `}
                  >
                    <MdCancel />
                  </div>
                </div>

                <>
                  <div
                    onClick={() => {
                      newChat();
                      setExtend((prev) => !prev);
                    }}
                    id="newchat"
                    className={` inline-flex items-center space-x-3 mt-6 mb-6 py-3 px-5 rounded-2xl cursor-pointer ${
                      mode ? "hover:bg-lightblack " : "hover:bg-[#f8f9fa]"
                    }  `}
                  >
                    <p className=" font-semibold text-base">New chat</p>
                    <div className=" text-xl">
                      {" "}
                      <FaRegEdit />
                    </div>
                  </div>
                  <div id="recent">
                    <p className=" text-sm font-semibold pt-2 px-2   ">
                      Recent
                    </p>
                    {prevPrompts.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          loadPrompt(item);
                          setExtend((prev) => !prev);
                        }}
                        id="recent-entry"
                        className={` my-2 py-2 px-2 rounded-2xl cursor-pointer ${
                          mode ? " hover:bg-lightblack" : "hover:bg-[#f8f9fa]"
                        }`}
                      >
                        <p className=" text-base font-semibold">
                          {item.slice(0, 26)}
                          {"..."}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
