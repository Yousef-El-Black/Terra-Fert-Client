import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-soil">
      <div className="container border-t-2 border-border py-5 flex justify-between items-center">
        <p>&copy; تيرا فيرت للتجارة والزراعة</p>
        <nav aria-label="روابط الموقع" className="flex flex-wrap gap-4">
          <Link to="/about" className="underline">
            من نحن
          </Link>
          <Link to="/contact" className="underline">
            تواصل معنا
          </Link>
          <Link to="/terms" className="underline">
            شروط الاستخدام
          </Link>
          <Link to="/privacy" className="underline">
            الخصوصية
          </Link>
          <Link to="/admin" className="underline">
            إدارة المنتجات
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
