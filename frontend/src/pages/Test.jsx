import React from "react";
import Navbar from "../components/common/Navbar";
import "./test.css";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import { FaBook, FaChalkboardTeacher, FaUserCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
export default function Test() {
  const handlesearch = () => {
    console.log("searching");
  };
  return (
    <>
      <div className="main  flex bg-richblack-100 ">
        <div className="side flex-col gap-3  bg-white w-16 h-full">
          <div
            className=" icon flex  justify-center min-h-fit my-3"
            title="saved"
          >
            <FaBook size={25} />
          </div>
          <div
            className="icon flex justify-center min-h-fit my-10"
            title="Courses"
          >
            <FaChalkboardTeacher size={25} />
          </div>
          <div className="icon flex justify-center min-h-fit my-10">
            <FaUserCircle size={25} />
          </div>
          <div className="icon flex justify-center min-h-fit my-10">
            <IoIosAddCircle size={30} />
          </div>
        </div>
        <div className="cont  w-full bg-richblue-25">
          <div className=" p-3  search flex justify-center mt-6">
            <input
              className="p-1 rounded-lg border-2 border-black shadow-md"
              type="text"
              placeholder="Search"
            />
            <button
              className="mx-2 px-2 rounded-lg bg-blue-800 text-white"
              onClick={handlesearch}
            >
              search
            </button>
          </div>
          <div className="wraper flex flex-col">
            <h6 className="mx-5">title1</h6>
            <div className="sec h-52 my-2 mx-2 rounded-lg bg-richblack-5"></div>
          </div>
          <div className="wraper flex flex-col">
            <h6 className="mx-5">title1</h6>
            <div className="sec h-52 my-2 mx-2 rounded-lg bg-richblack-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
