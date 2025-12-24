import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <SEO
        title="Hizmetler | MYS Software"
        description="MYS Software; mobil uygulama geliştirme, abonelik sistemleri ve SaaS çözümleri sunar."
      />

      {/* HERO */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dijital ürünlerinizi fikir aşamasından canlıya kadar uçtan uca
            yazılım çözümleriyle geliştiriyoruz.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* SERVICE 1 */}
          <div className="bg-white border rounded-2xl p-10 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Mobil Uygulama Geliştirme
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              iOS ve Android platformları için performanslı, güvenli ve
              kullanıcı odaklı mobil uygulamalar geliştiriyoruz.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>• React Native tabanlı uygulamalar</li>
              <li>• API ve backend entegrasyonları</li>
              <li>• Performans ve güvenlik optimizasyonu</li>
            </ul>
          </div>

          {/* SERVICE 2 */}
          <div className="bg-white border rounded-2xl p-10 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Abonelik & Ödeme Sistemleri
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Paketli üyelik, ödeme alma ve otomatik faturalama süreçlerini
              kapsayan sistemler kuruyoruz.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>• iyzico / sanal POS entegrasyonu</li>
              <li>• Aylık / yıllık abonelik modelleri</li>
              <li>• Otomatik fatura altyapısı</li>
            </ul>
          </div>

          {/* SERVICE 3 */}
          <div className="bg-white border rounded-2xl p-10 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              SaaS & Yönetim Panelleri
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Çok kullanıcılı, yetkilendirme ve raporlama özelliklerine sahip
              web tabanlı SaaS çözümleri geliştiriyoruz.
            </p>
            <ul className="text-slate-600 space-y-2 text-sm">
              <li>• Admin & kullanıcı panelleri</li>
              <li>• Rol bazlı yetkilendirme</li>
              <li>• Veri raporlama & analiz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-14">Çalışma Sürecimiz</h2>

          <div className="grid md:grid-cols-4 gap-10 text-slate-600">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Analiz</h4>
              <p>İhtiyaçları ve hedefleri netleştiririz.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Tasarım</h4>
              <p>Kullanıcı odaklı arayüzler oluştururuz.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Geliştirme</h4>
              <p>Ölçeklenebilir yazılım mimarisi kurarız.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Yayın & Destek
              </h4>
              <p>Canlıya alır, sürdürülebilir destek sunarız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto mb-10">
            Dijital ürün fikrinizi profesyonel yazılım çözümleriyle gerçeğe
            dönüştürelim.
          </p>

          <Link
            to="/iletisim"
            className="inline-block px-8 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
          >
            Teklif Al
          </Link>
        </div>
      </section>
    </>
  );
}
