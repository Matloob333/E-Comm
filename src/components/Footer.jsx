import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-200 text-gray-800 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-6">
        <div>
          <div className="flex items-center mb-4 space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-xl">
              EC
            </div>
            <span className="text-2xl font-extrabold">E-Comm</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        {["Information", "Service", "My Account", "Our Offers"].map(
          (section) => (
            <div key={section}>
              <h3 className="mb-4 font-bold">{section}</h3>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          )
        )}
        <div>
          <h3 className="mb-4 font-bold">Follow Us</h3>
          <div className="flex space-x-3 text-2xl">
            <a href="#" aria-label="Facebook">
              📘
            </a>
            <a href="#" aria-label="Twitter">
              🐦
            </a>
          </div>
          <h3 className="mb-4 mt-8 font-bold">Contact Us</h3>
          <address>
            E-Comm, 4578 Marmora Road,
            <br />
            Glasgow D04 89GR
          </address>
        </div>
      </div>
    </footer>
  );
}
