// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#4b2e2e] text-white">
    <div className="mx-auto flex flex-col gap-10 px-6 py-12 sm:flex-row sm:justify-between sm:gap-6 max-w-7xl">
      {/* Brand & tagline */}
      <div className="flex flex-col items-start gap-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <i className="fa-solid fa-mug-saucer text-2xl" />
          Zain Coffee
        </Link>
        <p className="max-w-xs text-sm opacity-80">
          Hand‑roasted beans & artisan brews since 2015.
        </p>
      </div>

      {/* Quick links */}
      <div className="flex flex-col gap-2 sm:gap-3 text-sm font-medium">
        <span className="mb-1 font-semibold opacity-90">Navigate</span>
        <Link to="/" className="hover:text-[#cba779]">Home</Link>
        <Link to="/menu" className="hover:text-[#cba779]">Menu</Link>
        <Link to="/contact" className="hover:text-[#cba779]">Contact</Link>
 
      </div>

      {/* Opening hours */}
      <div className="text-sm">
        <span className="mb-1 block font-semibold opacity-90">Hours</span>
        <p>Mon – Fri: 7 AM – 10 PM</p>
        <p>Sat – Sun: 8 AM – 11 PM</p>
      </div>

      {/* Newsletter form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:w-60"
      >
        <label className="mb-2 block text-sm font-semibold opacity-90">
          Subscribe for deals
        </label>
        <div className="flex overflow-hidden rounded-lg shadow-lg">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-3 py-2 text-sm text-[#4b2e2e] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#cba779] px-4 text-sm font-semibold text-[#4b2e2e] transition hover:bg-[#d9b781]"
          >
            Go
          </button>
        </div>
      </form>
    </div>

    {/* bottom bar */}
    <div className="border-t border-white/20 px-6 py-5 text-center text-xs sm:flex sm:justify-between sm:text-left">
      <p className="opacity-70">
        © {new Date().getFullYear()} CoffeeHouse. All rights reserved.
      </p>
      <div className="mt-3 flex justify-center gap-6 text-lg sm:mt-0">
        <a href="#" aria-label="Facebook" className="hover:text-[#cba779]">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-[#cba779]">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#" aria-label="Twitter/X" className="hover:text-[#cba779]">
          <i className="fa-brands fa-x-twitter" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
