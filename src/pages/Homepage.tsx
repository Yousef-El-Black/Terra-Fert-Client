import Contact from "../sections/Contact";
import HowSection from "../sections/HowSection";
import Landing from "../sections/Landing";
import Products from "../sections/Products";
import Seo from "../components/Seo";

const Homepage = () => {
  return (
    <>
      <Seo
        title="Terra Fert | تيرا فيرت للتجارة والزراعة"
        description="كتالوج تيرا فيرت للمستلزمات الزراعية والأسمدة والبذور. أرسل طلبك عبر واتساب."
      />
      <Landing />
      <Products />
      <HowSection />
      <Contact />
    </>
  );
};

export default Homepage;
