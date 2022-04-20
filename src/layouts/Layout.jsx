import { useState } from "react";
import Overlay from "../components/Overlay";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [overlayBton, setOverlayBton] = useState(false);
  return (
    <>
      {overlayBton && (
        <Overlay setOverlayBton={setOverlayBton} overlayBton={overlayBton} />
      )}

      <Header setOverlayBton={setOverlayBton} overlayBton={overlayBton} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
