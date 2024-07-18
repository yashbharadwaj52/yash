
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";


type SectionProps = {
  title: string; // Define the type explicitly as string
  children: React.ReactNode; // ReactNode is a generic type that accepts any JSX children
};


type ServiceItemProps = {
  title: string; // Define the type explicitly as string
  services: string[]; // Assuming services is an array of strings
};


type FeatureProps = {
  image: string; // Assuming image is a URL or path to an image
  title: string; // Define the type explicitly as string
  description: string; // Define the type explicitly as string
};


export default function Page() {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-black">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">Welcome to BloodWise Services</h1>
        <p className="mt-4 text-lg text-gray-700">
          At BloodWise, we offer a range of comprehensive blood testing services to ensure your health and well-being.
          Our process is designed to be simple, convenient, and efficient, so you can get the care you need without any hassle.
        </p>
      </div>

      <div className="space-y-12">
        <Section title="Our Services">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceItem
              title="Comprehensive Blood Tests"
              services={[
                "Full blood count",
                "Lipid profile",
                "Liver function test",
                "Kidney function test",
                "Thyroid function test",
              ]}
            />
            <ServiceItem
              title="Specialized Tests"
              services={[
                "Diabetes screening",
                "Hormonal assays",
                "Allergy testing",
                "Vitamin deficiency tests",
              ]}
            />
            <ServiceItem
              title="Home Sample Collection"
              services={[
                "Convenient sample collection at your doorstep",
                "Trained phlebotomists ensure safe and hygienic procedures",
              ]}
            />
            <ServiceItem
              title="Fast and Accurate Results"
              services={[
                "Advanced lab facilities",
                "Quick turnaround time for test results",
              ]}
            />
            <ServiceItem
              title="Online Report Access"
              services={[
                "Easy access to your reports online",
                "Downloadable and printable reports",
              ]}
            />
          </div>
        </Section>

        <Section title="Why Choose Us">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              image="/convenient.jpg"
              title="Convenient Services"
              description="Enjoy the convenience of home sample collection and easy online report access."
            />
            <Feature
              image="/accurate.jpg"
              title="Accurate Results"
              description="Our advanced lab facilities ensure quick and accurate test results."
            />
            <Feature
              image="/staff.jpg"
              title="Experienced Staff"
              description="Our trained phlebotomists and healthcare professionals provide expert care."
            />
            <Feature
              image="/affordable.jpg"
              title="Affordable Prices"
              description="We offer competitive pricing for all our blood testing services."
            />
            <Feature
              image="/247.jpg"
              title="Available 24/7"
              description="We are here to help you 24/7."
            />
          </div>
        </Section>
      </div>
    </div>
  );
}

const Section : React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">{title}</h2>
      {children}
    </div>
  );
};

const ServiceItem: React.FC<ServiceItemProps>  = ({ title, services }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-medium text-gray-700 mb-4">{title}</h3>
      <ul className="text-lg text-gray-600 space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Feature: React.FC<FeatureProps> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={title}
        width={480}
        height={480}
        className="mb-4 rounded-full h-40 w-40"
      />
      <h3 className="text-2xl font-medium text-gray-700 mb-2">{title}</h3>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};
