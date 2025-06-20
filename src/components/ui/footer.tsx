import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="bg-gray-50 px-6 py-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* OUR COMPANY */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-purple-800 tracking-widest text-sm mb-3">
              OUR COMPANY
            </h2>
            <nav className="list-none mb-10 space-y-2">
              {["About FedEx", "Our Portfolio", "Investor Relations", "Careers"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* FEDEX LINKS */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 mt-8 space-y-2">
              {["FedEx Blog", "Corporate Responsibility", "Newsroom", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* MORE FROM FEDEX */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-purple-800 tracking-widest text-sm mb-3">
              MORE FROM FEDEX
            </h2>
            <nav className="list-none mb-10 space-y-2">
              {["FedEx Compatible", "FedEx Developer Portal", "FedEx Logistics", "FedEx Logistics"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* LANGUAGE */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-purple-900 tracking-widest text-sm mb-3">
              LANGUAGE
            </h2>
            <div className="mt-8">
              <Link href="/">
                <div className="flex items-center space-x-2 mb-2 cursor-pointer">
                  <img
                    width="35"
                    height="50"
                    src="https://img.icons8.com/ios/50/globe--v1.png"
                    alt="globe icon"
                  />
                  <h2 className="text-gray-900 font-semibold text-sm">
                    United States
                  </h2>
                </div>
              </Link>
              <div className="w-80 mt-5">
                <select className="block w-40 bg-gray-100 text-black-700 border border-black-300 rounded px-2 py-2 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-300 mb-4"></div>

          {/* FOLLOW FEDEX + Social Icons */}
          <div className="w-full">
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

              <span className="inline-flex sm:ml-6 ml-3 space-x-3 text-gray-500">
                {/* Icons */}
                {[
                  { href: "mailto:youremail@example.com", icon: "M4 4h16v16H4z", type: "mail" },
                  { href: "#", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { href: "#", icon: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0020 1..." },
                  { href: "#", icon: "M16 11.37A4 4 0 1112.63 8...", type: "insta" },
                  { href: "#", icon: "M16 8a6 6 0 016 6v7h-4v-7...", type: "linkedin" },
                  { href: "#", icon: "M10 15l5-3-5-3v6z", type: "youtube" },
                  { href: "#", icon: "M12 2a10 10 0 00-4.75 18.9...", type: "pinterest" },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="hover:text-indigo-600">
                    <svg
                      fill="currentColor"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-purple-900 text-white px-6 py-3 flex flex-col sm:flex-row items-center">
        <a className="flex items-center justify-center sm:justify-start text-white text-sm font-medium">
          © FedEx 1995-2025
        </a>

        <div className="flex items-center space-x-4 mt-2 sm:mt-0 ml-auto text-sm">
          {["Sitemap", "Terms of Use", "Privacy & Security", "Ad Choices"].map((item, i) => (
            <React.Fragment key={i}>
              <a href="#" className="hover:underline">
                {item}
              </a>
              {i < 3 && <span className="h-4 border-l border-white"></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
