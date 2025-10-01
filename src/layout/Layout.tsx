import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ width: "100%" }}>
        <Outlet />
      </main>
    </>
  );
}