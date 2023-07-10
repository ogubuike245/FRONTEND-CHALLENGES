import Header from "./Header";
import Features from "./Features";
import TabsComponent from "./TabsComponent";
import Footer from "./Footer";
import Faq from "./Faq";
import ExtensionsArea from "./ExtensionsArea";

const MainContainer = () => {
  return (
    <>
      <Header />
      <Features />
      <TabsComponent />
      <ExtensionsArea />
      <Faq />
      <Footer />
    </>
  );
};

export default MainContainer;
