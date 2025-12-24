import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/mys.png"
                alt="MYS Software Logo"
                className="h-10 w-10"
              />
              <span className="text-lg font-semibold text-white">
                MYS Software
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              MYS Software; mobil uygulamalar, abonelik tabanlı sistemler ve
              ölçeklenebilir dijital ürünler geliştiren bir yazılım şirketidir.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Şirket</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/hakkimizda" className="hover:text-white transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetler" className="hover:text-white transition">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/urunler" className="hover:text-white transition">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-white transition">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Ürünler</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/trphone" className="hover:text-white transition">
                  TRPHONE
                </Link>
              </li>
              <li className="text-slate-500">Yeni ürünler yakında</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Yasal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/gizlilik-politikasi"
                  className="hover:text-white transition"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  to="/kullanim-sartlari"
                  className="hover:text-white transition"
                >
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link to="/kvkk" className="hover:text-white transition">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link
                  to="/mesafeli-satis"
                  className="hover:text-white transition"
                >
                  Mesafeli Satış Sözleşmesi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 my-10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} MYS Software. Tüm hakları saklıdır.
          </p>

          <p>Developed & operated by MYS Software</p>
        </div>
      </div>
    </footer>
  );
}
