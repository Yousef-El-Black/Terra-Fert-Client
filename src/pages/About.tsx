import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const About = () => (
  <main className="container min-h-96 py-12 text-soil">
    <Seo
      title="من نحن | Terra Fert"
      description="تيرا فيرت للتجارة والزراعة تعرض كتالوجًا للمستلزمات الزراعية والأسمدة والبذور، مع إرسال الطلبات عبر واتساب."
      schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "من نحن | Terra Fert",
        url: "https://terrafert.com/about",
        about: { "@id": "https://terrafert.com/#organization" },
      }}
    />
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-3xl font-extrabold">من نحن</h1>
      <p className="mb-4 leading-8">
        تيرا فيرت للتجارة والزراعة تعرض كتالوجًا للمستلزمات الزراعية والأسمدة
        والبذور، إلى جانب التجارب الحقلية المرتبطة بالمنتجات.
      </p>
      <p className="leading-8">
        يمكنك تصفح المنتجات وإرسال طلبك عبر واتساب. يتم تأكيد الكمية والسعر
        وطريقة الاستلام في المحادثة.
      </p>
      <Link className="mt-6 inline-block font-bold text-leaf underline" to="/shop">
        تصفح المنتجات
      </Link>
    </article>
  </main>
);

export default About;
