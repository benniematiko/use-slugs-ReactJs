import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";

const Layout = () => {
  return (
    <main>
      <div>
        <Header />
        <Outlet />
      </div>

      <div>
        <CartTab />
      </div>
    </main>
  );
};

export default Layout;
