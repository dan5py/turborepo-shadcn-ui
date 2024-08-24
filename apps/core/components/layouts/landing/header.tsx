import MenuLanding, { ItemMenuLandingProps } from "./menu";
import LogoSection from "~/components/shared/logo/logoSection";

const menuItems: ItemMenuLandingProps[] = [
  { label: "Home", startIcon: <span>icon</span>, href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", endIcon: <span>icon</span>, href: "/contact" },
];

const HeaderLanding = () => {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-10 bg-black-500/70 backdrop-blur-sm"
      style={{
        borderBottom: "1px solid",
        borderImageSlice: "1",
        borderImageSource:
          "linear-gradient(to left, rgba(0, 200, 83, 0) 5%, rgb(255 255 255 / 30%) 50%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="flex items-center justify-between h-16 px-4 text-white">
        <div className="flex items-center gap-8">
          {/* Logo Section */}
          <LogoSection />
          {/* menu */}
          <MenuLanding items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default HeaderLanding;
