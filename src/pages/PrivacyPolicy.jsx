import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Gizlilik Politikası | MYS Software"
        description="MYS Software Gizlilik Politikası"
      />

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Gizlilik Politikası
          </h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              MYS Software olarak kullanıcılarımızın gizliliğine saygı duyuyor
              ve kişisel verilerin korunmasını önceliğimiz olarak görüyoruz.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              Toplanan Bilgiler
            </h2>
            <ul className="list-disc ml-6">
              <li>Kullanıcı tarafından sağlanan bilgiler</li>
              <li>Uygulama kullanım verileri</li>
              <li>Teknik ve istatistiksel bilgiler</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900">
              Bilgilerin Kullanımı
            </h2>
            <p>
              Toplanan bilgiler hizmetlerin sunulması, geliştirilmesi ve
              güvenliğin sağlanması amacıyla kullanılmaktadır.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              Ödeme Bilgileri
            </h2>
            <p>
              Ödeme işlemleri yetkili ödeme kuruluşları (ör. iyzico)
              aracılığıyla gerçekleştirilir. Kredi kartı bilgileri tarafımızca
              saklanmaz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
