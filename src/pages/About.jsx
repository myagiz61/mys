import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="Hakkımızda | MYS Software"
        description="MYS Software, mobil uygulamalar ve abonelik tabanlı dijital ürünler geliştiren bir yazılım şirketidir."
      />

      {/* HERO */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            MYS Software
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dijital ürünler geliştiren, ölçeklenebilir yazılım çözümleri sunan
            bağımsız bir yazılım şirketiyiz.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Biz Kimiz?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              MYS Software; mobil uygulamalar, abonelik tabanlı platformlar ve
              SaaS çözümleri geliştiren bir yazılım şirketidir.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Geliştirdiğimiz ürünlerde performans, güvenlik ve
              sürdürülebilirlik temel önceliklerimizdir. Uzun vadeli
              kullanılabilir, ölçeklenebilir ve güvenilir sistemler tasarlarız.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-10">
            <h3 className="text-xl font-semibold mb-4">
              Odaklandığımız Alanlar
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>• Mobil uygulama geliştirme</li>
              <li>• Abonelik ve ödeme sistemleri</li>
              <li>• SaaS ve yönetim panelleri</li>
              <li>• Ölçeklenebilir backend mimarileri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="border rounded-2xl p-10">
            <h3 className="text-2xl font-semibold mb-4">Misyonumuz</h3>
            <p className="text-slate-600 leading-relaxed">
              Dijital dünyada işletmelerin ve kullanıcıların ihtiyaçlarına
              doğrudan çözüm üreten, güvenilir ve sürdürülebilir yazılım
              ürünleri geliştirmek.
            </p>
          </div>

          <div className="border rounded-2xl p-10">
            <h3 className="text-2xl font-semibold mb-4">Vizyonumuz</h3>
            <p className="text-slate-600 leading-relaxed">
              Global ölçekte kullanılabilen, yüksek katma değerli dijital
              ürünler geliştiren bir yazılım markası haline gelmek.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Temel Değerlerimiz</h2>

          <div className="grid md:grid-cols-3 gap-10 text-slate-300">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Güvenilirlik
              </h4>
              <p>
                Geliştirdiğimiz her üründe veri güvenliği ve sistem
                sürekliliğini önceliklendiririz.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Sürdürülebilirlik
              </h4>
              <p>
                Kısa vadeli değil, uzun vadeli ve ölçeklenebilir çözümler
                üretiriz.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Kalite</h4>
              <p>
                Kod kalitesi, performans ve kullanıcı deneyimi bizim için
                vazgeçilmezdir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
