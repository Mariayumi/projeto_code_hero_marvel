import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{display: "flex", justifyContent: "center"}}>
        <div style={{ width: "80%" }}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
