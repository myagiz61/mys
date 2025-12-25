import React from "react";

export default function Trphone() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <span className="uppercase tracking-widest text-sm text-gray-400">
            Premium Satıcı Platformu
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            TRPHONE
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Telefon satıcıları için geliştirilmiş, premium üyelik tabanlı,
            dijital ilan ve satış yönetim platformu.
          </p>
        </div>
      </section>

      {/* GENEL TANIM */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">TRPHONE Nedir?</h2>

        <p className="text-lg leading-relaxed mb-4">
          TRPHONE, bireysel ve kurumsal telefon satıcılarının mobil uygulama
          üzerinden ilan oluşturabildiği, alıcılarla doğrudan iletişim
          kurabildiği ve satış süreçlerini profesyonel şekilde yönetebildiği bir
          dijital platformdur.
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          Platform yalnızca <strong>dijital hizmet</strong> sunar. Fiziksel ürün
          satışı veya kargo hizmeti bulunmamaktadır.
        </p>
      </section>

      {/* PREMIUM SİSTEM */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">Premium Üyelik Sistemi</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-lg">
              <li>• İlan ekleme ve düzenleme yetkisi</li>
              <li>• Alıcılarla doğrudan mesajlaşma</li>
              <li>• Satıcı profili ve mağaza görünümü</li>
              <li>• Profesyonel satıcı rozeti</li>
              <li>• İlan performans ve yönetim paneli</li>
            </ul>
            <div className="rounded-2xl bg-gradient-to-br from-yellow-400/30 to-orange-500/30 p-[1px]">
              <div className="bg-[#020617] rounded-2xl p-4">
                <img
                  src="/premium.png"
                  alt="TRPHONE Premium Üyelik"
                  className="
        w-full
        h-[380px]
        object-contain
        rounded-xl
      "
                />
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            Premium üyelikler aylık veya dönemsel olarak ücretlendirilir.
          </p>
        </div>
      </section>

      {/* BOOST */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          İlan Öne Çıkarma (Boost) Hizmeti
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <img
              src="/plan.png"
              alt="İlan Öne Çıkarma"
              className="
      w-full
      h-[360px]
      object-contain
      rounded-xl
    "
            />
          </div>

          <ul className="space-y-4 text-lg">
            <li>• İlanların ana sayfada öne çıkması</li>
            <li>• Daha fazla görüntülenme ve etkileşim</li>
            <li>• Zaman bazlı premium görünürlük</li>
            <li>• Satış hızını artırmaya yönelik boost sistemi</li>
          </ul>
        </div>
      </section>

      {/* ÖDEME */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">Ödeme ve Güvenlik</h2>

          <ul className="space-y-4 text-lg">
            <li>• Ödemeler PayTR altyapısı ile güvenli şekilde alınır</li>
            <li>• Kart bilgileri sistemimizde saklanmaz</li>
            <li>• 3D Secure ve PCI-DSS uyumlu ödeme</li>
            <li>• Tüm işlemler dijital hizmet kapsamındadır</li>
          </ul>
        </div>
      </section>

      {/* KURUMSAL */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Kurumsal Bilgiler</h2>

        <div className="space-y-3 text-lg">
          <p>
            <strong>Marka:</strong> TRPHONE
          </p>
          <p>
            <strong>Geliştirici:</strong> MYS Software
          </p>
          <p>
            <strong>Proje Sahibi:</strong> Mehmet Yağız Sındıraç
          </p>
          <p>
            <strong>E-posta:</strong> mys@myssoftwares.com
          </p>
          <p>
            <strong>Web:</strong>{" "}
            <a
              href="https://myssoftwares.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              https://myssoftwares.com
            </a>
          </p>
        </div>
      </section>

      {/* YASAL */}
      <section className="border-t bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-3">
          <a href="/gizlilik-politikasi" className="underline">
            Gizlilik Politikası
          </a>
          <a href="/kvkk" className="underline">
            KVKK Aydınlatma Metni
          </a>
          <a href="/kullanim-kosullari" className="underline">
            Kullanım Koşulları
          </a>
        </div>
      </section>
    </div>
  );
}
