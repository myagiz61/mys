import SEO from "../components/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Kullanım Şartları | MYS Software"
        description="MYS Software Kullanım Şartları"
      />

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Kullanım Şartları
          </h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Bu web sitesini ve MYS Software tarafından sunulan dijital
              ürünleri kullanan herkes aşağıdaki şartları kabul etmiş sayılır.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              Hizmet Tanımı
            </h2>
            <p>
              MYS Software; mobil uygulamalar, abonelik tabanlı sistemler ve
              dijital ürünler geliştiren bir yazılım şirketidir.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              Kullanıcı Yükümlülükleri
            </h2>
            <ul className="list-disc ml-6">
              <li>Hizmetler hukuka aykırı şekilde kullanılamaz</li>
              <li>Başkalarının hakları ihlal edilemez</li>
              <li>Zararlı veya yanıltıcı içerik paylaşılamaz</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900">
              Fikri Mülkiyet
            </h2>
            <p>Tüm içeriklerin fikri mülkiyet hakları MYS Software’e aittir.</p>
          </div>
        </div>
      </section>
    </>
  );
}
