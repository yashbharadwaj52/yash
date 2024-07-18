
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      
      <main>
        <Navbar />
        <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(/bloodsample.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         
          <div className="hero-overlay bg-opacity-30 border"></div>
          <div className="hero-content text-neutral-content text-center ">
            <div className="max-w-md ">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">7206394020</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
