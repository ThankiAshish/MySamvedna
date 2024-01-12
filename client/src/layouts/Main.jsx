import { Outlet } from "react-router-dom";
import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";

const Main = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Main;
