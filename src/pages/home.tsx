import appLogo from "@/assets/logo.png";
import stargaze from "@/assets/stargaze.svg";
import HorizontalInfiniteScroll from "@/components/horizontal-infinite-scroll";

const Home = () => {
  const images = [
    {
      img: stargaze,
    },
    {
      img: stargaze,
    },
    {
      img: stargaze,
    },
    {
      img: stargaze,
    },
    {
      img: stargaze,
    },
    {
      img: stargaze,
    },
    {
      img: stargaze,
    },
    {
      img: stargaze,
    },
  ];
  return (
    <>
      <section className="flex flex-row justify-between mx-10">
        <div className="flex flex-col text-white items-start justify-center gap-3">
          <div>
            <h1 className="font-bold text-5xl">
              Your Trusted Airdrop Bot Script Hub
            </h1>
          </div>
          <div>
            Airdrop Script Service: The Reliable Partner for Automated Airdrop
            Solutions, Offering Efficient Execution, Security, and 24/7 Support.
          </div>
        </div>
        <div>
          <img src={appLogo} width={500} height={500} alt="Hero" />
        </div>
      </section>
      <section className="flex flex-row justify-center mx-10 w-full">
        <HorizontalInfiniteScroll images={images} />
      </section>
    </>
  );
};
export default Home;
