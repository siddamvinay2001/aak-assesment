import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-300 w-screen h-screen">
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
}
