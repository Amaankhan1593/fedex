import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-purple-900 p-3 flex items-center z-50">
      {/* Logo */}
     <h1 className="font-bold text-white ml-40">
        <Image
          src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" 
          alt="FedEx Logo" 
          className="w-24 h-auto" // Change size here (e.g. w-24, w-16)
        />
      </h1>

      {/* Navigation Items */}
      <ul className="flex gap-6 ml-10 text-white text-sm font-medium">
        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
          Shipping <i className="fa-solid fa-angle-down text-xs"></i>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
          Tracking <i className="fa-solid fa-angle-down text-xs"></i>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
          Design and Print <i className="fa-solid fa-angle-down text-xs"></i>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
          Locations <i className="fa-solid fa-angle-down text-xs"></i>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-400 transition">
          Support <i className="fa-solid fa-angle-down text-xs"></i>
        </li>
      </ul>

      {/* Search Icon - aligned right */}
      <div className="pr-4 ml-80">
        <button
          type="button"
          className="text-3xl text-white hover:text-orange-500 transition"
          aria-label="Search"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}
