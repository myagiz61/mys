import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SEO
        title="MYS Software | Dijital Ürün ve Mobil Uygulama Geliştirme"
        description="MYS Software; abonelik tabanlı yazılımlar, mobil uygulamalar ve ölçeklenebilir dijital ürünler geliştiren yazılım şirketidir."
      />

      {/* HERO */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
            Dijital Ürünler ve <br className="hidden md:block" />
            Ölçeklenebilir Yazılımlar
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            MYS Software; mobil uygulamalar, abonelik tabanlı sistemler ve
            kurumsal yazılım çözümleri geliştiren bağımsız bir yazılım
            şirketidir.
          </p>

          <div className="flex justify-center gap-5">
            <Link
              to="/urunler"
              className="px-7 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
            >
              Ürünlerimizi İnceleyin
            </Link>

            <Link
              to="/iletisim"
              className="px-7 py-3 rounded-lg border border-slate-300 text-slate-700 hover:border-slate-900 transition"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Hizmet Alanlarımız
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-2xl border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">
                Mobil Uygulama Geliştirme
              </h3>
              <p className="text-slate-600 leading-relaxed">
                iOS ve Android platformları için yüksek performanslı, güvenli ve
                sürdürülebilir mobil uygulamalar geliştiriyoruz.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">
                Abonelik & Ödeme Sistemleri
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Paketli üyelik modelleri, ödeme altyapıları ve otomatik
                faturalama süreçleri içeren sistemler kuruyoruz.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">
                SaaS & Yönetim Panelleri
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yetkilendirme, raporlama ve veri yönetimi özelliklerine sahip
                modern SaaS çözümleri geliştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Ürünlerimiz
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="border rounded-2xl p-10 hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">TRPHONE</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Telefon satıcılarına özel geliştirilen; abonelik, öne çıkarma
                paketleri ve satıcı yönetimi sunan mobil uygulama.
              </p>

              <Link
                to="/trphone"
                className="inline-flex items-center gap-2 font-medium text-slate-900 hover:underline"
              >
                Ürünü İncele
                <span>→</span>
              </Link>
            </div>

            <div className="border rounded-2xl p-10 flex items-center justify-center text-slate-400">
              Yeni dijital ürünler yakında
            </div>
          </div>
        </div>
      </section>

      {/* GÜVEN */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Güvenilir, Sürdürülebilir ve Ölçeklenebilir
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            MYS Software; güvenlik, performans ve uzun vadeli sürdürülebilirlik
            prensipleriyle kurumsal düzeyde yazılım ürünleri geliştirir.
          </p>
        </div>
      </section>
    </>
  );
}
