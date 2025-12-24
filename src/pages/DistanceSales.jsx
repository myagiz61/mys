import SEO from "../components/SEO";

export default function DistanceSales() {
  return (
    <>
      <SEO
        title="Mesafeli Satış Sözleşmesi | MYS Software"
        description="MYS Software Mesafeli Satış Sözleşmesi"
      />

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            Mesafeli Satış Sözleşmesi
          </h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              İşbu Mesafeli Satış Sözleşmesi (“Sözleşme”), aşağıda bilgileri yer
              alan <strong>MYS Software</strong> (“Satıcı”) ile dijital ürün
              veya hizmet satın alan kullanıcı (“Alıcı”) arasında, 6502 sayılı
              Tüketicinin Korunması Hakkında Kanun ve ilgili mevzuat hükümleri
              uyarınca elektronik ortamda kurulmuştur.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              1. Taraflar
            </h2>
            <p>
              <strong>Satıcı:</strong> MYS Software
              <br />
              <strong>E-posta:</strong> mys@myssoftwares.com
            </p>

            <p>
              <strong>Alıcı:</strong> Dijital ortamda hizmet satın alan
              kullanıcı
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              2. Sözleşme Konusu
            </h2>
            <p>
              İşbu sözleşmenin konusu; Satıcı’ya ait dijital ürünlerin, mobil
              uygulamaların ve abonelik tabanlı hizmetlerin, elektronik ortamda
              satışına ilişkin tarafların hak ve yükümlülüklerinin
              belirlenmesidir.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              3. Hizmetin Teslimi
            </h2>
            <p>
              Satın alınan hizmetler, dijital içerik veya abonelik kapsamında
              olup; ödemenin başarıyla tamamlanmasının ardından Alıcı’nın
              hesabına elektronik ortamda tanımlanır. Fiziksel teslimat
              yapılmaz.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              4. Cayma Hakkı
            </h2>
            <p>
              6502 sayılı Kanun gereği, dijital içerik ve anında ifa edilen
              hizmetlerde cayma hakkı bulunmamaktadır. Alıcı, bu durumu kabul
              ettiğini beyan eder.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">5. Ödeme</h2>
            <p>
              Ödemeler, Satıcı’nın anlaşmalı olduğu ödeme kuruluşları
              aracılığıyla güvenli şekilde gerçekleştirilir. Kredi kartı
              bilgileri Satıcı tarafından saklanmaz.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              6. Fikri Mülkiyet
            </h2>
            <p>
              Satın alınan dijital ürünler ve hizmetlere ilişkin tüm fikri
              mülkiyet hakları MYS Software’e aittir. İzinsiz çoğaltılamaz,
              devredilemez veya ticari amaçla kullanılamaz.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              7. Yürürlük
            </h2>
            <p>
              İşbu sözleşme, Alıcı’nın elektronik ortamda onay vermesiyle
              yürürlüğe girer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
