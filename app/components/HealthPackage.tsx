import React from "react";
import Callnowbutton from "./Callnowbutton";
import Image from "next/image";


type HealthPackageProps = {
  code: string; // Define the type explicitly
  investigations: string[];
  sample: string;
  method: string;
  frequency: string;
  report: string;
  price: number;
};


const HealthPackage: React.FC<HealthPackageProps> = ({ code, investigations, sample, method, frequency, report, price }) => {
  return (
    <div className="card bg-white w-[80%] md:w-[28%] shadow-lg rounded-lg overflow-hidden mx-2 my-4 flex flex-col hover:shadow-lg hover:shadow-gray-600">
      <figure className="relative">
        <Image
          src="/blood.jpg"
          height={"1080"}
            width={"720"}
          alt="Health Package"
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1">New</div>
      </figure>
      <div className="card-body p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">Test Code: {code}</h2>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-base text-gray-600">
            <li><strong>Investigations:</strong> {investigations}</li>
            <li><strong>Sample:</strong> {sample}</li>
            <li><strong>Method:</strong> {method}</li>
            <li><strong>Test Frequency:</strong> {frequency}</li>
            <li><strong>Reported On:</strong> {report}</li>
          </ul>
        </div>
        <div className="mt-4">
          <div className="flex justify-center text-2xl font-bold text-red-500 mb-4">Price: {price}</div>
          <div className="card-actions justify-center">
            <Callnowbutton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPackage;
