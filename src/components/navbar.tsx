import { Button } from "@/components/ui/button.tsx";
import appLogo from "@/assets/logo.png";

const Navbar = () => {
  const menus = [
    {
      label: "Network",
      path: "/network",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Order Bot",
      path: "/bot",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
        <img width={50} height={50} src={appLogo} alt="application logo" />
      </h3>
      <div className="flex gap-3">
        {menus.map((menu) => (
          <Button variant="link">{menu.label}</Button>
        ))}
      </div>
    </>
  );
};
export default Navbar;
