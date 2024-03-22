import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const MainLayout = () => {
  return (
    <div className="h-full">
      <Header />
      <main className="min-h-[100vh - 3rem]">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
