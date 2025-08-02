import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import NetworkBackground from "../ui/NetworkBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <NetworkBackground />
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;