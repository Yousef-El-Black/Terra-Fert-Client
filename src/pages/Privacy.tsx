import Seo from "../components/Seo";

const Privacy = () => (
  <main className="container min-h-96 py-12 text-soil">
    <Seo
      title="الخصوصية | Terra Fert"
      description="معلومات عن سلة التسوق في المتصفح وإرسال طلبات تيرا فيرت عبر واتساب."
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "الخصوصية | Terra Fert",
        url: "https://terrafert.com/privacy",
        isPartOf: { "@id": "https://terrafert.com/#website" },
      }}
    />
    <article className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-3xl font-extrabold">الخصوصية</h1>
      <p className="mb-4 leading-8">
        تُحفظ محتويات سلة التسوق في مساحة التخزين المحلية لمتصفحك لتسهيل متابعة
        المنتجات التي اخترتها.
      </p>
      <p className="mb-4 leading-8">
        عند اختيار إرسال الطلب، يفتح الموقع واتساب برسالة مُعدّة تتضمن البيانات
        التي أدخلتها. لا يرسل الموقع هذه الرسالة تلقائيًا؛ يمكنك مراجعتها قبل
        الإرسال. تخضع البيانات التي ترسلها في واتساب لسياسة وشروط واتساب.
      </p>
      <p className="leading-8">
        لا يعالج الموقع دفعات أو طلبات شراء مباشرة. للاستفسار عن هذه المعلومات،
        راسلنا على{" "}
        <a className="font-bold underline" href="mailto:contact@terrafert.com">
          contact@terrafert.com
        </a>
        .
      </p>
    </article>
  </main>
);

export default Privacy;
