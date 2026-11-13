import Contact from "../sections/Contact";
import Seo from "../components/Seo";

const ContactUs = () => {
  return (
    <>
      <Seo
        title="تواصل معنا | Terra Fert"
        description="تواصل مع تيرا فيرت للتجارة والزراعة عبر البريد الإلكتروني أو وسائل التواصل المتاحة."
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "تواصل معنا | Terra Fert",
          url: "https://terrafert.com/contact",
          mainEntity: { "@id": "https://terrafert.com/#organization" },
        }}
      />
      <h1 className="container pt-8 text-3xl font-extrabold text-soil">
        تواصل معنا
      </h1>
      <Contact />
    </>
  );
};

export default ContactUs;
