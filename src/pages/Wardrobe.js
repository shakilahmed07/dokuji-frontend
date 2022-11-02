import WardrobeBgside from "../../src/assets/images/wardrobe-bg-10a.png";
// import WardrobeBg from "../../src/assets/images/wardrobe-bg-1.png";
import WardrobeBg2 from "../../src/assets/images/wardrobe-bg-2.png";
import WardrobeBg3 from "../../src/assets/images/wardrobe-bg-3.png";
import Doshi1 from "../../src/assets/images/doshi-1.png";
import Kami1 from "../../src/assets/images/kami-1.png";
import DojoBg3 from "../../src/assets/images/dojo-bg-3.png";
import Mikata1 from "../../src/assets/images/mikata-1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Wardrobe() {
  return (
    <div>
      <div>
        <div
          style={{ backgroundImage: `url(${DojoBg3})` }}
          className="lg:w-full lg:h-[700px] bg-no-repeat bg-cover"
        >
          <Navbar />
          <div className="container mx-auto lg:pt-[140px] py-[60px]">
            <div className="lg:grid flex flex-col-reverse lg:flex-none">
            <div className="col-start-1 col-end-3">
                <img src={WardrobeBgside} alt=""  className="h-[420px] w-[450px]" />
              </div>
              <div className="space-y-5 col-end-6 col-span-2 w-[90%] lg:w-12/12 mx-auto">
                <div className="pb-[40px]">
                  <h1 className="text-white font-apocalypse text-[48px] -mt-[70px]">
                    Dokuji WARDROBE
                  </h1>
                  <p className="text-[#d9d9d9] text-[14px]">
                    DoKuJi's Web3-Commerce Platform
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="text-[#d9d9d9] text-[13px]">
                    A clothing line that represents the community’s fashion or
                    style or identity". It is a tool to show affiliation or
                    support for the cause of DoKuJi. The popularity of the
                    clothing line shows the influence the brand has in the real
                    world. It is a figurative uniform for the supporters of the
                    cause similar to a jersey of your favourite football club.
                  </p>
                  <p className="text-[#d9d9d9] text-[13px]">
                    Fashion sense usually reflects the background, culture and
                    demography of a person. In the past, the Mexican cartel,
                    Italian, Irish, or Russian mobs can easily be identified
                    based on their attire. This is what DoKuJi Wardrobe aims to accomplish for its cause and community. A portion of the revenue from The Wardrobe is dedicated to The Dojo.
                  </p>
                  <p className="text-[#d9d9d9] text-[13px]">
                    Its a Fashion...with a cause.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div
          style={{ backgroundImage: `url(${WardrobeBg2})` }}
          className="w-full lg:h-[600px] bg-no-repeat bg-cover"
        >
          <div className="container mx-auto pt-[60px]">
            <h2 className="text-center lg:text-[24px] text-[20px]">
              WARDROBE COLLECTIONS
            </h2>
            <div className="lg:grid lg:grid-cols-3 lg:py-[60px] py-[30px] lg:gap-4 space-y-8 lg:space-y-0">
              <div className="flex flex-col justify-center text-center items-center space-y-4">
                <div>
                  <img src={Doshi1} alt="" className="h-[90px]" />
                </div>
                <p className="lg:text-[13px]">DOSHI</p>
                <p className="text-[13px] lg:w-6/12 w-10/12 mx-auto">
                  This means Comrade This is what the avatar wears. This is
                  limited and has rarity. This is drops at every new collections
                  This you don't want to miss.
                </p>
              </div>
              <div className="flex flex-col justify-center text-center items-center space-y-6">
                <div>
                  <img src={Mikata1} alt="" className="h-[90px]" />
                </div>
                <p className="lg:text-[13px]">MIKATA</p>
                <p className="text-[13px] lg:w-6/12 w-10/12 mx-auto">
                  This means Ally This is our seasonal collection. This is not
                  limited, but not too many. This is to support with new styles.
                </p>
              </div>
              <div className="flex flex-col justify-center text-center items-center space-y-8">
                <div>
                  <img src={Kami1} alt="" className="h-[90px]" />
                </div>
                <p className="lg:text-[13px]">KAMI</p>
                <p className="text-[13px] lg:w-7/12 w-10/12 mx-auto">
                  This means God. This is Legendary. This has only one style.
                  This is a secret..for now.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center lg:pt-10 py-10">
              <button className="text-white bg-[#e12b28] px-[60px] py-[8px]">
                This doesn't work yet
              </button>
            </div>
          </div>
        </div>

        {/* third section */}
        <div
          style={{ backgroundImage: `url(${WardrobeBg3})` }}
          className="lg:w-full lg:h-[600px] object-cover bg-no-repeat bg-cover"
        >
          <div className="lg:w-9/12 w-10/12 mx-auto lg:pt-[100px] py-10 space-y-10">
            <h2 className="text-white uppercase text-[20px]">
              how the wardrobe works
            </h2>
            <div className="space-y-1">
              <h3 className="text-white text-[16px]">Web3-Commerce System</h3>
              <p className="text-[#d9d9d9] text-[14px] lg:w-10/12">
                The Wardrobe is a form of an NFT Marketplace. Customers will
                receive the NFT ID of the apparels purchased into their wallet.
                The NFT ID is the proof of ownership for that apparel. That goes
                without saying, the ownership is tradable on secondary markets.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-white text-[16px]">Redeem</h3>
              <p className="text-[#d9d9d9] text-[14px] lg:w-10/12">
                However, the ownership is still not the actual product. To
                redeem the physical apparel, the owner must burn the NFT ID of
                that apparel through our Web3 system. Which then only after will
                they enter their particulars and address for the goods to be
                shipped. (Psst...its already a work in progress)
              </p>
              
            </div>
            <div className="space-y-1">
              <h3 className="text-white text-[16px]">Redeem</h3>
              <p className="text-[#d9d9d9] text-[14px] lg:w-10/12">
                You got an avatar? This is your chance to pair it with an
                apparel (Only one). What does this give you? An apparel with the
                Token ID of your avatar printed on it. Of course, you pair it
                before you redeem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
