import appLogo from "@/assets/app_logo.png";

const Jumbotron = () => {
  return (
    <section className="flex justify-between mx-10">
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
  );
};

export default Jumbotron;
