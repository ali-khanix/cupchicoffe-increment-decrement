import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "./../../components/TopNavbar";

export default function ProductsLayout({ children }) {
  return (
    <main>
      <TopNavbar />
      {children}
      <BottomNavbar />
    </main>
  );
}
