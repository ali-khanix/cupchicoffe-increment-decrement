import Logo from "./Logo";

const TopNavbar = () => {
  return (
    <nav className="bg-neutral-200 h-[100px] nav fixed top-0 left-0 w-full z-50 text-black px-6 flex justify-center items-center">
      <Logo />
    </nav>
  );
};

export default TopNavbar;
