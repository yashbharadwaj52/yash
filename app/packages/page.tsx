import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import HealthPackage from "../components/HealthPackage";
import Slider from "../components/Slider";

type HealthPackageProps = {
  code: string;
  profile: string;
  price: number;
  test_code: string;
  investigations: string[];
  sample: string;
  method: string;
  frequency: string;
  test_frequency: string;
  reported_on: string;
  report: string;
};

const healthPackagesData: HealthPackageProps[] = [
  {
    code: "HF013",
    profile: "Pathword Healths Routine Profile",
    price: 2500,
    test_code: "HF013",
    investigations: [
      "Iron Profile",
      "Liver Profile (LFT)",
      "Kidney Profile Max",
      "Lipid Profile",
      "Thyroid Profile",
      "Vitamin B-12",
      "Vitamin D 25",
    ],
    sample: "Serum (2 ml)",
    method: "Spectrophotometry",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF012",
    profile: "Pathword Healths Basic Profile",
    price: 1700,
    test_code: "HF012",
    investigations: [
      "CBC",
      "Kidney Profile Max",
      "Lipid Profile",
      "Liver Profile (LFT)",
      "Thyroid Profile",
      "Iron",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml)",
    method: "Spectrophotometry, Agglutination, CC, Microscopic",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same Day",
    report: "Available online",
  },
  {
    code: "HF011",
    profile: "Pathword Healths Advance",
    price: 3500,
    test_code: "HF011",
    investigations: [
      "CBC",
      "HbA1c",
      "Iron Profile",
      "Kidney Profile Mini",
      "Lipid Profile",
      "Liver Profile (LFT)",
      "Thyroid Profile",
      "Vitamin B-12",
      "Vitamin D 25",
      "Amylase",
      "Lipase",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml)",
    method: "Spectrophotometry, Agglutination, CC, Microscopic",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF010",
    profile: "Pathword Healths 2.3",
    price: 2300,
    test_code: "HF010",
    investigations: [
      "CBC",
      "HbA1c",
      "Kidney Profile Mini",
      "Liver Profile (LFT)",
      "Lipid Profile",
      "Thyroid Profile",
      "Iron Profile",
      "Vitamin B-12",
      "Vitamin D 25",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml)",
    method: "Spectrophotometry, Agglutination, CC, Microscopic",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF009",
    profile: "Pathword Healths 2.2",
    price: 1700,
    test_code: "HF009",
    investigations: [
      "CBC",
      "HbA1c",
      "Kidney Profile Mini",
      "Liver Profile (LFT)",
      "Lipid Profile",
      "Thyroid Profile",
      "Iron Profile Basic",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml)",
    method: "Spectrophotometry, Agglutination, CC, Microscopic",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF008",
    profile: "Pathword Healths 2.1",
    price: 1300,
    test_code: "HF008",
    investigations: [
      "CBC",
      "Kidney Profile Mini",
      "Liver Profile (LFT)",
      "Lipid Profile",
      "Thyroid Profile",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml)",
    method: "Spectrophotometry, Agglutination, CC, Microscopic",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same Day",
    report: "Available online",
  },
  {
    code: "HF007",
    profile: "Pathword Healths 1.7",
    price: 4200,
    test_code: "HF007",
    investigations: [
      "CBC + ESR",
      "HbA1c",
      "Kidney Profile Max",
      "Lipid Profile",
      "Liver Profile (LFT)",
      "Thyroid Profile",
      "Iron Profile",
      "Vitamin B-12",
      "Vitamin D 25",
      "APO A/ APO B Ratio",
      "Testosterone Total",
      "Rheumatoid Factor (Quantitative)",
      "CRP",
      "Homocystine",
      "Microalbumin / Creatinine Ratio (Random)",
      "Urine Analysis",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml), NaF Plasma (1ml), Urine (5 ml)",
    method: "Spectrophotometry, Agglutination, CC, Microscopic",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF006",
    profile: "Pathword Healths 1.6",
    price: 3300,
    test_code: "HF006",
    investigations: [
      "CBC + ESR",
      "HbA1c",
      "Kidney Profile Max",
      "Lipid Profile",
      "Liver Profile (LFT)",
      "Thyroid Profile",
      "Iron Profile",
      "Vitamin B-12",
      "Vitamin D 25",
      "Glucose (F)",
      "Microalbumin / Creatinine Ratio (Random)",
      "Urine R/M (Urine Analysis)",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml), NaF Plasma (1ml), Urine (5 ml)",
    method: "Spectrophotometry, Agglutination, CC, Microscopic",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF005",
    profile: "Pathword Healths 1.5",
    price: 2900,
    test_code: "HF005",
    investigations: [
      "CBC",
      "HbA1c",
      "Kidney Profile Max",
      "Lipid Profile",
      "Liver Profile (LFT)",
      "Thyroid Profile",
      "Vitamin B-12",
      "Vitamin D 25",
      "Rheumatoid Factor (Quantitative)",
      "CRP Quantitative",
      "Glucose (F)",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml), NaF Plasma (1ml)",
    method: "Spectrophotometry, Cell Counter Microscopy",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF004",
    profile: "Pathword Healths 1.4",
    price: 2600,
    test_code: "HF004",
    investigations: [
      "CBC",
      "HbA1c",
      "Kidney Profile Max",
      "Lipid Profile",
      "LFT",
      "Thyroid Profile",
      "Vitamin B-12",
      "Vitamin D 25",
      "Rheumatoid Factor (Quantitative)",
      "Glucose (F)",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml), NaF Plasma (1ml)",
    method: "Spectrophotometry, Cell Counter Microscopy",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same Day",
    report: "Available online",
  },
  {
    code: "HF003",
    profile: "Pathword Healths 1.3",
    price: 2300,
    test_code: "HF003",
    investigations: [
      "CBC + ESR",
      "HbA1c",
      "Kidney Profile Max",
      "Lipid Profile",
      "Liver Profile (LFT)",
      "Thyroid Profile",
      "Iron Profile",
      "Vitamin B-12",
      "Vitamin D 25",
      "Glucose (F)",
      "Urine Analysis",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml), NaF Plasma (1ml)",
    method: "Spectrophotometry, Cell Counter Microscopy",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF002",
    profile: "Pathword Healths 1.2",
    price: 1750,
    test_code: "HF002",
    investigations: [
      "CBC + ESR",
      "HbA1c",
      "Kidney Profile Max",
      "Lipid Profile",
      "Liver Profile (LFT)",
      "Thyroid Profile",
      "Iron Profile",
      "Glucose (F)",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml), NaF Plasma (1ml)",
    method: "Spectrophotometry, Cell Counter Microscopy",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
  {
    code: "HF001",
    profile: "Pathword Healths 1.1",
    price: 1500,
    test_code: "HF001",
    investigations: [
      "CBC + ESR",
      "Liver Profile (LFT)",
      "Kidney Profile Mini",
      "Thyroid Profile",
      "Glucose (F)",
    ],
    sample: "Serum (2 ml), WB EDTA (3 ml), NaF Plasma (1ml)",
    method: "Spectrophotometry, Cell Counter Microscopy",
    frequency: "Daily",
    test_frequency: "Daily",
    reported_on: "Same day",
    report: "Available online",
  },
];

export default function Page() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="flex-col pt-10 relative top-3">
        <div className="mb-3 relative">
          <Slider />
        </div>
        <div className="flex flex-wrap text-center font-sans text-3xl font-semibold justify-center mt-10">
          <h1 className="px-10">
            Select a Package according to your requirements
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {healthPackagesData.map((packageData, index) => (
            <HealthPackage key={index} {...packageData} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
