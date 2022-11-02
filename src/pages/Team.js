import TeamBg from "../../src/assets/images/team-bg.png";
import KISHEN from "../../src/assets/images/KISHEN-M-2.png";
import XIANG from "../../src/assets/images/XIANG-M-1.png";
import FLOATLN from "../../src/assets/images/FLOATLN-M.png";
import IK1 from "../../src/assets/images/IK1-M.png";
import VISWA from "../../src/assets/images/VISWA-M-1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Team() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${TeamBg})` }}
        className="lg:bg-no-repeat bg-cover object-cover"
      >
        <Navbar />
        <h1 className="text-white text-center lg:pt-[50px] uppercase font-apocalypse text-[42px]">
          the team
        </h1>
        <div className="lg:grid lg:grid-cols-5 sm:grid sm:grid-cols-1 container mx-auto lg:pt-[60px] pt-[30px] gap-6 space-y-10 lg:space-y-0 pb-10 lg:pb-10">
          <div className="lg:space-y-4 flex lg:inline lg:col-span-1 sm:col-span-2 px-2 lg:px-0 ">
            <div>
              <h2 className="text-white text-center ">KISHEN</h2>
              <img
                src={KISHEN}
                alt=""
                className="h-[200px] w-[390px] lg:h-full lg:w-full"
              />
            </div>
            <div className="space-y-4 lg:pt-[25px] lg:pl-[60px] pr-4 lg:pr-0">
              <p className="text-gray-300 text-[14px]">Project Lead</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
                Making the world a better place is the dream
              </p>
              <p className="text-white text-[12px]">
                Robotics and Mechatronics Engineer by Qualification
              </p>
            </div>
          </div>

          <div className="lg:space-y-4 flex lg:inline lg:col-span-1 sm:col-span-2 px-2 lg:px-0 ">
            <div>
              <h2 className="text-white text-center ">FLOATLN</h2>
              <img
                src={FLOATLN}
                alt=""
                className="h-[200px] w-[390px] lg:h-full lg:w-full"
              />
            </div>
            <div className="space-y-4 lg:pt-[25px] lg:pl-[60px] pr-4 lg:pr-0">
              <p className="text-gray-300 text-[14px]">Art Director</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
                I put the Colors into Ideas
              </p>
              <p className="text-white text-[12px]">
                Robotics and Mechatronics Engineer by Qualification
              </p>
            </div>
          </div>

          <div className="lg:space-y-4 flex lg:inline lg:col-span-1 sm:col-span-2 px-2 lg:px-0 ">
            <div>
              <h2 className="text-white text-center ">IK</h2>
              <img
                src={IK1}
                alt=""
                className="h-[200px] w-[390px] lg:h-full lg:w-full"
              />
            </div>
            <div className="space-y-4 lg:pt-[25px] lg:pl-[60px] pr-4 lg:pr-0">
              <p className="text-gray-300 text-[14px]">Technical Lead</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
                I am the definition of Tech
              </p>
              <p className="text-white text-[12px]">
                Robotics and Mechatronics Engineer by Qualification
              </p>
            </div>
          </div>

          <div className="lg:space-y-4 flex lg:inline lg:col-span-1 sm:col-span-2 px-2 lg:px-0 ">
            <div>
              <h2 className="text-white text-center ">XIANG</h2>
              <img
                src={XIANG}
                alt=""
                className="h-[200px] w-[390px] lg:h-full lg:w-full"
              />
            </div>
            <div className="space-y-4 lg:pt-[25px] lg:pl-[60px] pr-4 lg:pr-0">
              <p className="text-gray-300 text-[14px]">Web3 Developer</p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
                Web2 to Web3 and everything in between
              </p>
              <p className="text-white text-[12px]">
                Robotics and Mechatronics Engineer by Qualification
              </p>
            </div>
          </div>

          <div className="lg:space-y-4 flex lg:inline lg:col-span-1 sm:col-span-2 px-2 lg:px-0 ">
            <div>
              <h2 className="text-white text-center ">VISWA</h2>
              <img
                src={VISWA}
                alt=""
                className="h-[200px] w-[390px] lg:h-full lg:w-full"
              />
            </div>
            <div className="space-y-4 lg:pt-[25px] lg:pl-[60px] pr-4 lg:pr-0">
              <p className="text-gray-300 text-[14px]">
                Financial Administrator
              </p>
              <p className="text-gray-300 text-[12px] w-[90%] lg:w-full">
                I crunch numbers for lunch.
              </p>
              <p className="text-white text-[12px]">
                Robotics and Mechatronics Engineer by Qualification
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
