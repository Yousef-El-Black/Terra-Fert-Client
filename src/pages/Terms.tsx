import Seo from "../components/Seo";

const Terms = () => (
  <main className="container min-h-96 py-12 text-soil">
    <Seo
      title="شروط الاستخدام | Terra Fert"
      description="شروط استخدام كتالوج تيرا فيرت وإرسال طلبات المنتجات عبر واتساب."
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "شروط الاستخدام | Terra Fert",
        url: "https://terrafert.com/terms",
        isPartOf: { "@id": "https://terrafert.com/#website" },
      }}
    />
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-3xl font-extrabold">شروط الاستخدام</h1>
      <p className="mb-4 leading-8">
        يعرض الموقع كتالوج المنتجات الزراعية ويساعدك على تجهيز طلب لإرساله عبر
        واتساب. لا يُرسل الموقع طلب شراء أو دفعة نيابةً عنك.
      </p>
      <p className="mb-4 leading-8">
        عند إرسال رسالة، راجع تفاصيل المنتجات والكميات. يتم تأكيد التوفر والسعر
        وطريقة الاستلام مباشرةً في المحادثة قبل إتمام الطلب.
      </p>
      <p className="leading-8">
        للاستفسار عن استخدام الموقع، تواصل معنا عبر{" "}
        <a className="font-bold underline" href="mailto:contact@terrafert.com">
          contact@terrafert.com
        </a>
        .
      </p>
    </article>
  </main>
);

export default Terms;
