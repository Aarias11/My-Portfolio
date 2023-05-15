import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1a1a1a] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#3d808f]">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Alan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p> As a skilled software engineer with a strong background in customer support, I have a unique combination of technical expertise and customer-focused communication skills. With over ten years of experience in developing and maintaining software solutions from Retail Insurance to DeFi industries, I understand the importance of designing software that not only meets technical requirements but also delivers an exceptional user experience.</p>
            </div>
          </div>       
      </div>
    </div>
  );
};

export default About;
