import SEO from "../components/SEO";

export default function Kvkk() {
  return (
    <>
      <SEO
        title="KVKK Aydınlatma Metni | MYS Software"
        description="MYS Software KVKK Aydınlatma Metni"
      />

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            KVKK Aydınlatma Metni
          </h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              <strong>MYS Software</strong> olarak, 6698 sayılı Kişisel
              Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel
              verilerinizin güvenliğine önem veriyoruz.
            </p>

            <p>
              Bu metin, kişisel verilerinizin hangi amaçlarla işlendiği ve
              haklarınız hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <h2 className="text-xl font-semibold text-slate-900">
              İşlenen Kişisel Veriler
            </h2>
            <ul className="list-disc ml-6">
              <li>Ad, soyad</li>
              <li>E-posta adresi</li>
              <li>İletişim içerikleri</li>
              <li>Uygulama ve kullanım bilgileri</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900">
              İşlenme Amaçları
            </h2>
            <ul className="list-disc ml-6">
              <li>İletişim taleplerinin yanıtlanması</li>
              <li>Ürün ve hizmetlerin sunulması</li>
              <li>Abonelik ve ödeme süreçlerinin yürütülmesi</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900">Haklarınız</h2>
            <p>
              KVKK’nın 11. maddesi uyarınca kişisel verilerinizle ilgili
              taleplerinizi <strong>mys@myssoftwares.com</strong> adresine
              iletebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
