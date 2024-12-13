import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Jumbotron from "./_components/jumbotron";
import handImage from "@/assets/hand.png";

const Home = () => {
  const cards = [
    {
      title: "Free bot scripting",
      description: "Get your free bot script now",
      image: handImage,
    },
    {
      title: "Free bot scripting",
      description: "Get your free bot script now",
      image: handImage,
    },
    {
      title: "Free bot scripting",
      description: "Get your free bot script now",
      image: handImage,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Jumbotron />
      <section className="flex justify-center mx-10 gap-3">
        {cards.map(({ title, description, image }, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {/* <CardDescription>{description}</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <img width={70} height={70} src={image} alt="test" />
                <div>{description}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
