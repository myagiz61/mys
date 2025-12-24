import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="İletişim | MYS Software"
        description="MYS Software ile iletişime geçmek için kurumsal e-posta adresimizi kullanabilirsiniz."
      />

      {/* HERO */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            İletişim
          </h1>
          <p className="text-xl text-slate-600">
            Yazılım çözümlerimiz, ürünlerimiz ve iş birlikleri hakkında bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white border rounded-2xl p-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Kurumsal İletişim
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Tüm taleplerinizi ve iş birliği başvurularınızı aşağıdaki kurumsal
              e-posta adresi üzerinden iletebilirsiniz.
            </p>

            <a
              href="mailto:mys@myssoftwares.com"
              className="inline-block text-lg font-medium text-slate-900 hover:underline"
            >
              mys@myssoftwares.com
            </a>

            <p className="mt-8 text-sm text-slate-500">
              Talepleriniz en kısa sürede değerlendirilerek geri dönüş
              sağlanacaktır.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
