import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Trphone() {
  return (
    <>
      <SEO
        title="TRPHONE | Telefon Satıcıları için Mobil Uygulama"
        description="TRPHONE, telefon satıcılarına özel geliştirilen abonelik ve öne çıkarma paketleri sunan mobil uygulamadır."
      />

      {/* HERO */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            TRPHONE
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Telefon satıcılarına özel geliştirilen; ilan yönetimi, abonelik ve
            öne çıkarma paketleri sunan mobil uygulama.
          </p>

          <Link
            to="/iletisim"
            className="inline-block px-7 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            Satıcı Olarak Başvur
          </Link>
        </div>
      </section>

      {/* PROBLEM / ÇÖZÜM */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Telefon Satıcıları için Geliştirildi
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              TRPHONE, telefon satıcılarının ilanlarını daha görünür hale
              getirmesi ve potansiyel müşterilere daha hızlı ulaşabilmesi için
              tasarlanmıştır.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Abonelik ve öne çıkarma paketleri sayesinde satıcılar, ilanlarını
              öne çıkararak satışlarını artırabilir.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-10">
            <ul className="space-y-4 text-slate-700">
              <li>✔ Satıcıya özel ilan yönetimi</li>
              <li>✔ Paketli üyelik sistemi</li>
              <li>✔ Günlük / haftalık / aylık öne çıkarma</li>
              <li>✔ Güvenli ödeme altyapısı</li>
              <li>✔ Mobil odaklı kullanıcı deneyimi</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PAKETLER */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Abonelik Paketleri
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* BASIC */}
            <div className="border rounded-2xl p-10 text-center">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-slate-600 mb-6">
                Yeni başlayan satıcılar için
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li>• Standart ilan yayınlama</li>
                <li>• Temel profil görünümü</li>
              </ul>
              <span className="text-slate-900 font-semibold">
                Aylık Abonelik
              </span>
            </div>

            {/* STANDARD */}
            <div className="border rounded-2xl p-10 text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-slate-600 mb-6">
                Daha fazla görünürlük isteyenler
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li>• Öncelikli ilanlar</li>
                <li>• Gelişmiş profil</li>
                <li>• Öne çıkarma desteği</li>
              </ul>
              <span className="text-slate-900 font-semibold">
                Aylık Abonelik
              </span>
            </div>

            {/* PREMIUM */}
            <div className="border rounded-2xl p-10 text-center">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-slate-600 mb-6">Profesyonel satıcılar için</p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li>• Maksimum görünürlük</li>
                <li>• Sürekli öne çıkarma</li>
                <li>• Öncelikli destek</li>
              </ul>
              <span className="text-slate-900 font-semibold">
                Aylık Abonelik
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ÖNE ÇIKARMA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Öne Çıkarma Paketleri</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-10">
            İlanlarınızı belirli sürelerle öne çıkararak daha fazla müşteriye
            ulaşabilirsiniz.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="border rounded-xl px-8 py-6">1 Günlük</div>
            <div className="border rounded-xl px-8 py-6">1 Haftalık</div>
            <div className="border rounded-xl px-8 py-6">1 Aylık</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            TRPHONE ile Satışlarınızı Artırın
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto mb-10">
            Telefon satıcılarına özel geliştirilen bu platformda yerinizi alın.
          </p>
        </div>
      </section>
    </>
  );
}
