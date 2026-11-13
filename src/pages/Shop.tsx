import Products from "../sections/Products";
import Seo from "../components/Seo";

const Shop = () => {
  return (
    <>
      <Seo
        title="المنتجات الزراعية | Terra Fert"
        description="تصفح كتالوج تيرا فيرت من المستلزمات الزراعية والأسمدة والبذور."
      />
      <Products headingLevel="h1" />
    </>
  );
};

export default Shop;
