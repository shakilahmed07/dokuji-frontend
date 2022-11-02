// import HomeBg from "../../src/assets/images/home-bg-1.png";
import HomeBanner from "../../src/assets/images/banner-1.gif";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${HomeBanner})`, }}
        className="bg-no-repeat bg-cover object-cover h-screen w-full"
      >
        <Navbar />
      </div>
    </div>
  );
}
