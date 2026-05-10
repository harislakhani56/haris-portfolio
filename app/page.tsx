import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-md z-50">

        <h1 className="text-2xl font-bold text-yellow-400">
          Haris Portfolio
        </h1>

        <div className="hidden md:flex gap-6 text-sm">

          <a
            href="#home"
            className="hover:text-yellow-400 duration-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-yellow-400 duration-300"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="hover:text-yellow-400 duration-300"
          >
            Portfolio
          </a>

          <a
            href="#about"
            className="hover:text-yellow-400 duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-400 duration-300"
          >
            Contact
          </a>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-32"
      >

        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Professional Excel <br />
          Dashboard Developer
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-8">
          I create modern Excel dashboards, reports, data cleaning solutions,
          and business analytics systems for companies and clients.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="#portfolio"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
          >
            View Portfolio
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-900 duration-300"
          >
            Contact Me
          </a>

        </div>

      </section>

      {/* Services Section */}
      <section
        id="services"
        className="px-6 md:px-8 py-24 bg-[#0a0a0a]"
      >

        <div className="max-w-7xl mx-auto">

          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-yellow-400 hover:-translate-y-2 duration-300">

              <div className="text-5xl mb-6">📊</div>

              <h4 className="text-2xl font-bold mb-4">
                Excel Dashboards
              </h4>

              <p className="text-gray-400 leading-7">
                Professional interactive dashboards with charts,
                KPIs, slicers, and business analytics.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-yellow-400 hover:-translate-y-2 duration-300">

              <div className="text-5xl mb-6">🧹</div>

              <h4 className="text-2xl font-bold mb-4">
                Data Cleaning
              </h4>

              <p className="text-gray-400 leading-7">
                Organize messy Excel files, remove duplicates,
                fix formatting, and structure business data.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-yellow-400 hover:-translate-y-2 duration-300">

              <div className="text-5xl mb-6">📁</div>

              <h4 className="text-2xl font-bold mb-4">
                Reports & Analytics
              </h4>

              <p className="text-gray-400 leading-7">
                Monthly sales reports, automated analytics,
                performance tracking, and business insights.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="px-6 md:px-8 py-24 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My Portfolio
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="bg-[#111111] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 duration-300">

              <div className="overflow-hidden">

                <Image
                  src="/images/dashboard1.png"
                  alt="Dashboard 1"
                  width={1200}
                  height={700}
                  className="hover:scale-110 duration-500"
                />

              </div>

              <div className="p-6">

                <h4 className="text-2xl font-bold mb-3">
                  Mango Sales Dashboard
                </h4>

                <p className="text-gray-400 leading-7">
                  Interactive sales analytics dashboard with KPIs,
                  charts, slicers, and yearly performance tracking.
                </p>

              </div>

            </div>

            {/* Project 2 */}
            <div className="bg-[#111111] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 duration-300">

              <div className="overflow-hidden">

                <Image
                  src="/images/dashboard2.png"
                  alt="Dashboard 2"
                  width={1200}
                  height={700}
                  className="hover:scale-110 duration-500"
                />

              </div>

              <div className="p-6">

                <h4 className="text-2xl font-bold mb-3">
                  Brand Performance Dashboard
                </h4>

                <p className="text-gray-400 leading-7">
                  Advanced Excel dashboard for brand sales,
                  quantity tracking, and monthly analytics.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-6 md:px-8 py-24 bg-[#0f0f0f]"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              About Me
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I am a professional Excel Dashboard Developer and Data Analyst.
              I specialize in creating modern dashboards, business reports,
              automated Excel systems, and clean data solutions.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              I help businesses transform raw data into meaningful insights
              using Excel, charts, KPIs, pivot tables, and analytics.
            </p>

          </div>

          <div className="bg-[#111111] rounded-3xl p-10 border border-gray-800">

            <h4 className="text-3xl font-bold mb-8">
              My Skills
            </h4>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>Excel Dashboards</span>
                  <span>95%</span>
                </div>

                <div className="h-3 bg-gray-800 rounded-full">
                  <div className="h-3 bg-yellow-400 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Data Cleaning</span>
                  <span>90%</span>
                </div>

                <div className="h-3 bg-gray-800 rounded-full">
                  <div className="h-3 bg-yellow-400 rounded-full w-[90%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Reports & Analytics</span>
                  <span>92%</span>
                </div>

                <div className="h-3 bg-gray-800 rounded-full">
                  <div className="h-3 bg-yellow-400 rounded-full w-[92%]"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 md:px-8 py-24 bg-[#0a0a0a]"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Contact Me
          </h3>

          <p className="text-gray-400 text-lg mb-10 leading-8">
            Need dashboards, reports, or Excel solutions?
            Let’s work together.
          </p>

          <a
            href="https://wa.me/923272587785"
            target="_blank"
            className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 duration-300 inline-block"
          >
            WhatsApp Me
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        <p>
          © 2026 Haris Portfolio. All Rights Reserved.
        </p>

      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923272587785"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl text-lg font-bold duration-300 hover:scale-110 z-50"
      >
        WhatsApp
      </a>

    </main>
  );
}