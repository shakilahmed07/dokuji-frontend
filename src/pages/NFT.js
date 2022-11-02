import NftBg from "../../src/assets/images/nft-bg-1.png";
import NftBg2 from "../../src/assets/images/nft-bg-2.png";
import NftRemovebg from "../../src/assets/images/nft-removebg.png";
import NftRemovebg2 from "../../src/assets/images/NftRemovebg-2.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function NFT() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${NftBg})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
        }}
      >
        <Navbar />
        <div
          style={{
            backgroundImage: `url(${NftBg})`,
            backgroundPosition: "bottom",
          }}
          className="lg:w-full lg:h-[700px] bg-no-repeat bg-cover"
        >
          <div className="lg:w-10/12 w-10/12 mx-auto pb-5 lg:pb-0">
            <div className="lg:grid lg:grid-cols-6 flex flex-col-reverse lg:flex-none">
              <div className="col-start-1 col-end-3">
                <img src={NftRemovebg} alt="" className="h-[600px] w-full" />
              </div>

              <div className="lg:pt-[50px] col-end-6 col-span-2 lg:space-y-20 space-y-10">
                <div>
                  <h1 className="font-apocalypse text-[52px] lg:text-[55px]">
                    <span>Dokuji</span> <span>NFT</span>
                  </h1>
                  <p className="text-[15px] lg:text-[18px] text-slate-600	">
                    DoKuJi's Web3-Commerce Platform
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[15px] lg:text-[18px] text-slate-600	">
                    A symbol of Allegiance, An Identity, A Fellowship
                  </p>
                  <p className="text-[15px] lg:text-[18px] text-slate-600	">
                    A Dope avatar donning the fashion of DoKuJi
                  </p>
                  <p className="text-[15px] lg:text-[18px] text-slate-600	">
                    Not a Collectible, but a GATE PASS to GREATNESS.
                  </p>
                  <p className="text-[15px] lg:text-[18px] text-slate-600	">
                    Don't just keep it, PLEDGE it and become part of the
                    Society.
                  </p>
                  <p className="text-[15px] lg:text-[18px] text-slate-600	">
                    Its your avatar, give it respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div
          style={{ backgroundImage: `url(${NftBg2})` }}
          className="lg:w-full lg:h-[700px] bg-no-repeat bg-cover"
        >
          <div className="lg:w-12/12 w-10/12 mx-auto">
            <div className="lg:grid grid-cols-6 lg:pt-[50px] py-10">
              <div className="lg:pt-[50px] py-5 col-start-1 col-end-4 lg:space-y-20">
                <div className="space-y-2 lg:space-y-0">
                  <p className="text-end text-[18px] text-slate-600	 ">
                    8887 Unique Avatars
                  </p>
                  <p className="text-end text-[18px] text-slate-600	 ">
                    A catalogue for The Wardrobe's streetwear Doshi collections{" "}
                  </p>
                  <p className="text-end text-[18px] text-slate-600	">
                    Traits that describe the values of DoKuJi and The Dojo{" "}
                  </p>
                  <p className="text-end text-[18px] text-slate-600	">
                    Has rarity of course... Where is the fun if you don't get
                    show of your avatar?{" "}
                  </p>
                  <p className="text-end text-[18px] text-slate-600	">
                    Pledge the NFT and receive the Membership version of it.
                    Pledge it to unlock its utilities. (Or sell it for profit){" "}
                  </p>
                  <p className="text-end text-[18px] text-slate-600	">
                    Pair it with the apparel you buy from the The Wardrobe. Only
                    one per wallet. (Told you! Its not meant to be a
                    collectible.){" "}
                  </p>
                  <p className="text-end text-[18px] text-slate-600	">
                    A significant percentage of the fund raised goes to The Dojo
                    wallet.
                  </p>
                </div>
                <p className="text-end font-bold text-xl uppercase">
                  "It is easier to find men who will volunteer to die, than to
                  find those who are willing to endure the pain with patience."
                  - Bigg Ceasar
                </p>
              </div>

              <div className="col-end-7 col-span-2">
                <img src={NftRemovebg2} alt="" className="h-[600px] w-[100%]" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
