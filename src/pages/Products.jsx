import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <SEO
        title="Ürünler | MYS Software"
        description="MYS Software tarafından geliştirilen mobil uygulamalar ve dijital ürünler."
      />

      {/* HEADER */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Ürünlerimiz
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          MYS Software tarafından geliştirilen, abonelik tabanlı ve
          ölçeklenebilir dijital ürünler.
        </p>
      </section>

      {/* PRODUCT LIST */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* TRPHONE */}
          <div className="border rounded-2xl p-8 hover:shadow-lg transition">
            <div className="mb-6">
              <span className="inline-block text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                Mobil Uygulama
              </span>
            </div>

            <h2 className="text-2xl font-semibold mb-4">TRPHONE</h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Telefon satıcılarına özel geliştirilen; ilan yönetimi, abonelik
              paketleri ve öne çıkarma çözümleri sunan mobil uygulama.
            </p>

            <ul className="text-sm text-slate-600 space-y-2 mb-8">
              <li>• Abonelik tabanlı kullanım</li>
              <li>• Öne çıkarma ve görünürlük paketleri</li>
              <li>• Satıcı odaklı yönetim paneli</li>
            </ul>

            <Link
              to="/trphone"
              className="inline-flex items-center gap-2 font-medium text-slate-900 hover:underline"
            >
              Ürünü İncele →
            </Link>
          </div>

          {/* YAKINDA */}
          <div className="border rounded-2xl p-8 flex items-center justify-center text-slate-400">
            Yeni dijital ürünler yakında
          </div>
        </div>
      </section>
    </>
  );
}
