import AboutBg from "../../src/assets/images/about-bg-1.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
   <div>
     <div
      style={{ backgroundImage: `url(${AboutBg})` }}
      className="lg:h-screen h-[74vh] bg-cover bg-no-repeat object-cover"
    >
      <Navbar />
      <div className="lg:w-9/12 w-10/12 mx-auto lg:pt-[45px]">
        <h1 className="text-white font-apocalypse lg:text-[50px] text-[36px] pb-[30px] lg:pb-[115px]">
          meaning & Mission
        </h1>
        <p className="text-[#d9d9d9] lg:text-[17px] text-[15px] lg:max-w-4xl leading-6 lg:leading-10 pb-10">
          The word 独自 (Dokuji), derived from the Japanese language means
          original or unique. DoKuJi is an exclusive community driven brand that
          focuses on driving changes to the world. Imagine an exclusive society
          that is actively tackling real world issues, has its own brand and
          style, on a sustainable internal ecosystem. A new socioeconomic
          reality where its members thrive while the world becomes a better
          place. All Equal. Be the pioneers to grace the revolution. Join us in
          making the world a better place.
        </p>
        <button className="text-white bg-[#e12b28] px-[60px] py-[8px]">
          Welcome
        </button>
      </div>
     
    </div>
    <Footer />
   </div>
  );
}
