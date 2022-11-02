import DojoBg from "../../src/assets/images/dojo-bg-1.png";
import DojoBg2 from "../../src/assets/images/dojo-bg-2.png";
import DojoBg3 from "../../src/assets/images/dojo-bg-3.png";
import DojoBg4 from "../../src/assets/images/dojo-bg-4.png";
import Faction from "../../src/assets/images/Faction-1.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Dojo() {
  return (
    <div>
      <div>
        <div
          style={{ backgroundImage: `url(${DojoBg})` }}
          className="lg:w-full lg:h-[700px] bg-no-repeat bg-cover"
        >
          <Navbar />
          <div className="lg:w-[80%] mx-auto lg:pt-[350px] lg:py-[50px] p-4 lg:p-0 lg:space-y-6">
            <div>
              <h1 className="text-white font-apocalypse text-[42px]">
                The dojo
              </h1>
              <p className="text-[#d9d9d9] text-[16px]">The higher purpose</p>
            </div>

            <p className="text-[#d9d9d9] text-[14px] lg:w-8/12 lg:eading-6 leading-5">
              The Dojo houses the community behind DoKuJi that gives the brand
              its meaning. Members will be a part of the Dojo after going
              through the Pledge. The Dojo aims to make real impact in the world
              in every positive ways possible. In its entirety it would be a
              self-sustaining ecosystem that is powered by its members. (It is
              possible, trust us. Its our ultimate goal.)
            </p>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${DojoBg2})` }}
          className="lg:w-full lg:h-[700px] bg-no-repeat bg-cover"
        >
          <div className="lg:w-6/12 w-11/12 mx-auto lg:pt-[150px] py-[20px] space-y-10">
            <h2 className="text-black uppercase text-[22px]">the pledge</h2>
            <div>
              <h3 className="text-black text-[14px]">Staking</h3>
              <p className="text-black text-[13px] leading-6 font-normal">
                The Avatar holders get a membership in The Dojo by staking their
                NFT. Staking their NFT will also give them a unique referral
                code for The Wardrobe. Holders will receive another similar NFT
                with faction emblem to mark their membership in The Dojo.
                However, it is stakebound (You can't sell it bruv). It needs to
                be burned to un-stake the original NFT.
              </p>
            </div>
            <div>
              <h3 className="text-black text-[14px]">Referral </h3>
              <p className="text-black text-[13px] leading-6 font-normal">
                Members of The Dojo will receive a unique referral code after
                they go through The Pledge. Referral code can be used to get 5%
                discount in The Wardrobe. Each wallet purchasing from The
                Wardrobe can only use the referral code once. For every
                activation of the referral code:
              </p>
            </div>
            <div className="lg:pl-10 pl-5 space-y-2">
              <p className="text-black text-[13px] font-normal">
                The owner of the referral code will get 5% from the sale. (Not
                free money bullsh*t, you get to control how much you make)
              </p>
              <p className="text-black text-[13px] font-normal">
                The owner will get exp points/tokens (This is soulbound,. The
                wallet takes it to the grave) that helps them level up in the
                faction.
              </p>
              <p className="text-black text-[13px] font-normal">
                The referral codes will have more implementation in the future.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${DojoBg3})` }}
          className="lg:w-full lg:h-[600px] bg-no-repeat bg-cover"
        >
          <div className="lg:pt-[60px] py-[30px]">
            <h2 className="lg:text-center text-white text-[23px] pl-5 lg:pl-0">
              DOJO FACTIONS
            </h2>
            <div className="lg:grid lg:grid-cols-3 lg:pt-[70px] pt-[20px] gap-4 space-y-10 lg:space-y-0">
              <div className="space-y-10 pl-5 lg:pl-0">
                <div className="space-y-2">
                  <p className="text-white lg:text-end text-[13px]">Economy</p>
                  <p className="text-gray-400 lg:text-end text-[11px] leading-5 lg:pl-[100px]">
                    Marketplace <br /> Media, art & entertainment <br /> Sports
                    & Recreation <br />
                    *% of all income goes to the Dojo <br /> Wallet
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white lg:text-end text-[13px]">
                    Humanitarian
                  </p>
                  <p className="text-gray-400 lg:text-end text-[11px] leading-5 lg:pl-[100px]">
                    Crisis Aid <br /> Poverty abolishment <br />{" "}
                    Anti-discriminayion <br /> Education & Skill development
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center space-y-4">
                <img src={Faction} alt="" className="h-[300px]" />
              </div>

              <div className="space-y-10 pl-5 lg:pl-0">
                <div className="space-y-2">
                  <p className="text-white text-[13px]">World Affairs</p>
                  <p className="text-gray-400 text-[11px] leading-5 pr-[100px]">
                    Independent Journalism <br />
                    News <br />
                    Investigative Journalism <br />
                    Freedom of speech advocacy
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white text-[13px]">Earth</p>
                  <p className="text-gray-400 text-[11px] leading-5 pr-[100px]">
                    Nature restoration & Preservation <br /> Green Teach
                    Development <br /> Green Infrastructure <br /> Animal
                    preservation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${DojoBg4})`,
            backgroundPosition: "bottom",
          }}
          className="lg:w-full lg:h-[600px] bg-no-repeat bg-cover"
        >
          <div className="lg:w-8/12 w-11/12 mx-auto space-y-10 py-10 lg:py-0">
            <div>
              <p className="text-white text-[13px] leading-6">
                The Dojo is divided into four factions; Hearts, Spades, Clubs
                and Diamonds. Each to its own purpose. Various projects,
                programs that meets any of the objectives will be voted upon by
                the members of the faction to execute. Each faction will have
                their share in the Dojo Wallet which will be used to fund these
                projects. Further donation drives/events can be done by the
                faction members to raise more funds. The Diamond Faction creates
                an economy for the The Dojo and its members.
              </p>
            </div>
            <div>
              <h3 className="text-white text-[13px]">Referral </h3>
              <p className="text-white text-[13px] leading-6">
                Each faction has its own decentralized governance. With its own
                internal rank system (2,3…J,Q,K,A) members can level up through
                participation in projects, Wardrobe referrals, donation
                referrals and other contributions. Each rank has its own:
              </p>
            </div>
            <div className="lg:pl-10 pl-5 space-y-2">
              <li className="text-white text-[13px]">
                Weightage for their vote in the faction
              </li>
              <li className="text-white text-[13px]">
                Share in the periodic bonus/incentives (The higher your rank,
                the more you get)
              </li>
              <li className="text-white text-[13px]">
                Career opportunity within The Dojo
              </li>
              <li className="text-white text-[13px]">Privileges and perks</li>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
