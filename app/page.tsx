import Head from "next/head";
import Navbar from "./components/Navbar";
import Callnowbutton from "./components/Callnowbutton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pathworld Health</title>
        <meta name="description" content="Pathworld Health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        {/* Hero Section with Next.js Image Component and Linear Gradient */}
        <div className="hero min-h-screen relative">
          {/* Background Image */}
          <Image
            src="/bloodsample.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          {/* Overlay with Linear Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80"></div>
          {/* Content */}
          <div className="hero-content text-neutral-content text-center relative z-10">
            <div className="max-w-md mx-auto">
              <h1 className="mb-5 text-5xl font-bold text-white">Pathworld Healths</h1>
              <p className="mb-5 text-lg text-white">
                Your trusted partner for comprehensive
                blood testing services that ensure accurate and timely results
                for all your health needs.
              </p>
              <Callnowbutton />
            </div>
          </div>
        </div>

        {/* Responsive Steps Section */}
        <div className="bg-gray-800 py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">Steps to Get Your Blood Test Done</h2>

            {/* Mobile and Small Screens */}
            <div className="flex flex-col sm:hidden">
              <div className="flex flex-wrap justify-center gap-6">
                <Step number="1" title="Select Package and Make a Call" />
                <Step number="2" title="Provide a Blood Sample at Home" />
                <Step number="3" title="Tests Conducted in Our Lab" />
                <Step number="4" title="Access Your Reports Online" />
              </div>
            </div>

            {/* Medium Screens and Above */}
            <div className="hidden sm:flex sm:flex-row sm:justify-around sm:items-center sm:space-y-0 sm:space-x-8 mx-5">
              <Step number="1" title="Select Package and Make a Call" />
              <Step number="2" title="Provide a Blood Sample at Home" />
              <Step number="3" title="Tests Conducted in Our Lab" />
              <Step number="4" title="Access Your Reports Online" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const Step = ({ number, title }: { number: string; title: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg w-[60%]">
      <div className="w-12 h-12 flex items-center justify-center bg-red-600 text-white rounded-full mb-2 text-xl font-bold">
        {number}
      </div>
      <p className="text-md font-medium text-white">{title}</p>
    </div>
  );
};
