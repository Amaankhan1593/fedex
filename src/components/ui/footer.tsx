import Link from "next/link";
import React from "react";

export default function footer() {
  return (
    <div>
      <footer className="mt-8">
        <div className="bg-gray-50 px-6 py-16 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-purple-800 tracking-widest text-sm mb-3">
                OUR COMPANY
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    About FedEx
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Our Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Careers
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10 mt-8 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    FedEx Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Corporate Responsibility
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-purple-800 tracking-widest text-sm mb-3">
                MORE FROM FEDEX
              </h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    FedEx Compatible
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    FedEx Developer Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    FedEx Logistics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    FedEx Logistics
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-purple-900 tracking-widest text-sm mb-3">
                LANGUAGE
              </h2>
              <div className="mt-8">
               <Link href="/" legacyBehavior>
                <a className="flex items-center space-x-2 mb-2">
                  <img
                    width="35"
                    height="50"
                    src="https://img.icons8.com/ios/50/globe--v1.png"
                    alt="globe"
                  />
                  <h2 className="text-gray-900 font-semibold text-sm">
                    United States
                  </h2>
                </a>
              </Link>
              <div className="w-80 mt-5">
                <select className="block w-40 bg-gray-100 text-black-700 border border-black-300 rounded px-2 py-2 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
            </div>
            </div>
            <div className="w-full border-t border-gray-300 mb-4"></div>
            <div className="">
              <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a
                  href="#"
                  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span className="ml-3 text-sm">FOLLOW FEDEX</span>
                </a>

                {/* Move all icons here immediately after "FOLLOW FEDEX" */}
                <span className="inline-flex sm:ml-6 ml-3 space-x-3 text-gray-500">
                  {/* Email */}
                  <a
                    href="mailto:youremail@example.com"
                    className="hover:text-indigo-600"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v16H4z" stroke="none" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="#" className="hover:text-indigo-600">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a href="#" className="hover:text-indigo-600">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0020 1a4.5 4.5 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="hover:text-indigo-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="hover:text-indigo-600">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="#" className="hover:text-indigo-600">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 15l5-3-5-3v6z" />
                      <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
                    </svg>
                  </a>

                  {/* Pinterest */}
                  <a href="#" className="hover:text-indigo-600">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 00-4.75 18.9 7.67 7.67 0 01.26-2.5l1.67-7A3.3 3.3 0 019 8.5c0-1.5 1.1-2.9 3-2.9 2.2 0 3.2 1.5 3.2 3.3 0 2.3-1 4.2-2.5 4.2-.8 0-1.5-.7-1.3-1.6l.5-2.2c.2-.9-.2-1.7-1.1-1.7-1.3 0-2.3 1.4-2.3 3.3 0 1.2.4 2.1.4 2.1l-1.6 6.6a10 10 0 1015.5-8.6A10 10 0 0012 2z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* //hello world  */}
        <div className="w-full bg-purple-900 text-white px-6 py-3 flex flex-col sm:flex-row items-center">
          <a className="flex items-center justify-center sm:justify-start text-white text-sm font-medium">
            © FedEx 1995-2025
          </a>

          <div className="flex items-center space-x-4 mt-2 sm:mt-0 ml-auto text-sm">
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <span className="h-4 border-l border-white"></span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span className="h-4 border-l border-white"></span>
            <a href="#" className="hover:underline">
              Privacy & Security
            </a>
            <span className="h-4 border-l border-white"></span>
            <a href="#" className="hover:underline">
              Ad Choices
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
