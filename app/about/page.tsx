import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

type MissionItemProps = {
  title: string;
  description: string;
  image: string;
};

const MissionItem: React.FC<MissionItemProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center mx-12">
      <div className="flex items-center">
        <h4 className="text-2xl font-medium text-gray-900 mb-2">{title}</h4>
        <FaCheckCircle className="text-green-500 mt-1 ml-2" size={18} />
      </div>
      <p className="text-lg text-gray-900">{description}</p>
    </div>
  );
};

export default function Page() {
  return (
    <div>
      <Head>
        <title>Pathworld Health</title>
        <meta name="description" content="Pathworld Health" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-gray-200 py-10 text-black">
        <div className="container mx-auto px-4 mt-5">
          <h2 className="text-4xl font-bold text-center mb-1 mt-5">About Us</h2>
          <p className="text-xl text-center mb-3">
            We have partnered with Pathworld Healths Diagnostics Private Limited
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-20 mt-10">
            <div className="mt-5 ml-10">
              <p className="text-lg text-gray-900 leading-relaxed">
                Pathworld Healths Diagnostics Private Limited is India&apos;s first fully automated diagnostic laboratory, focused on providing quality at affordable costs to laboratories and hospitals in India and other countries.
              </p>
              <p className="text-lg text-gray-900 leading-relaxed mb-4">
                Operating with a Centralized Laboratory in Delhi, India for esoteric tests, and multiple franchises in major metro cities, we leverage strong technologies, brands, and systems to deliver the best of science and technology at an affordable cost.
              </p>
              <p className="text-lg text-gray-900 leading-relaxed mb-4">
                Our commitment to quality has earned us several accreditations, establishing us as a leader in the diagnostic industry. We believe that &apos;Quality&apos; is the heart of any intelligent management, and we strive to maintain the highest standards in all our operations.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-80 h-80 relative">
                <div className="w-full h-full rounded-full border-4 border-red-500 overflow-hidden shadow-lg hover:shadow-2xl">
                  <Image
                    src="/lab.jpg"
                    alt="Lab Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-center mb-6">Our Mission</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <MissionItem
                title="Quality Care"
                description="We are dedicated to providing the highest quality of diagnostic services to our patients and partners."
                image="/images/quality.png"
              />
              <MissionItem
                title="Innovation"
                description="We continuously invest in the latest technology to ensure accurate and timely results."
                image="/images/innovation.png"
              />
              <MissionItem
                title="Accessibility"
                description="Our aim is to make healthcare accessible to everyone, regardless of their location or financial status."
                image="/images/accessibility.png"
              />
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-center mb-6">Our Vision</h3>
            <p className="text-lg text-gray-900 leading-relaxed max-w-4xl mx-auto text-center">
              To be the most trusted and innovative leader in diagnostic services, providing unparalleled care and support to our patients and partners worldwide.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
