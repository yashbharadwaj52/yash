import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="carousel w-4/5 h-40vh rounded-xl shadow-xl hover:shadow-lg hover:shadow-gray-600">
        <div id="slide2" className="carousel-item relative w-full h-[60vh]">
          <Image
            src="/bloodsample.jpg"
            height={1080}
            width={720}
            className="w-full h-full object-cover"
            alt="Blood Sample"
          />
          <div className="absolute  bottom-10 md:bottom-5 text-center left-3 md:left-5 p-0 md:p-3 lg:p-4 bg-white bg-opacity-10 text-black text-3xl md:text-4xl lg:text-5xl font-extrabold rounded-lg">
            <p>Blood Sample at Home</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[60vh]">
          <Image
            src="/labs.jpg"
            height={1080}
            width={720}
            className="w-full h-full object-cover"
            alt="Labs"
          />
          <div className="absolute  bottom-10 md:bottom-5 text-center left-3 md:left-5 p-0 md:p-3 lg:p-4 bg-white bg-opacity-10 text-black text-3xl md:text-4xl lg:text-5xl font-extrabold rounded-lg">
            <p>Tests Conducted in Our Lab</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[60vh]">
          <Image
            src="/reports.jpg"
            height={1080}
            width={720}
            className="w-full h-full object-cover"
            alt="Reports"
          />
          <div className="absolute  bottom-10 md:bottom-5 text-center left-3 md:left-5 p-0 md:p-3 lg:p-4 bg-white bg-opacity-10 text-black text-3xl md:text-4xl lg:text-5xl font-extrabold rounded-lg">
            <p>Access Your Reports Online</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
