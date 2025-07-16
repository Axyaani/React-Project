// src/pages/Contact.jsx
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  // basic success state just for demo UX
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send via fetch / axios / third‑party service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  return (
    <div>
          <Header/>
          <section className="min-h-screen bg-[#f9f6f2] py-14 px-4">
      
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-3xl font-bold text-[#4b2e2e]">
          Get in Touch
        </h1>

        {/* info + form wrapper */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* contact info */}
          <div className="space-y-6 text-[#4b2e2e] basis-1/2">
            <h2 className="text-xl font-semibold">Contact Information</h2>

            <p className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot mt-1 text-[#cba779]" />
              <span>123 Brew Street, Mogadishu × Somalia</span>
            </p>

            <p className="flex items-start gap-3">
              <i className="fa-solid fa-phone mt-1 text-[#cba779]" />
              <span>+252 61 234 5678</span>
            </p>

            <p className="flex items-start gap-3">
              <i className="fa-solid fa-envelope mt-1 text-[#cba779]" />
              <span>hello@coffeehouse.com</span>
            </p>

            {/* social */}
            <div className="flex gap-5 pt-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-xl transition hover:text-[#cba779]"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-xl transition hover:text-[#cba779]"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-xl transition hover:text-[#cba779]"
              >
                <i className="fa-brands fa-x-twitter" />
              </a>
            </div>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="basis-1/2 rounded-2xl bg-white p-8 shadow-lg"
          >
            <h2 className="mb-6 text-lg font-semibold text-[#4b2e2e]">
              Send Us a Message
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Name</label>
                <input
                  required
                  type="text"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#cba779] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#cba779] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col">
              <label className="mb-1 text-sm font-medium">Subject</label>
              <input
                required
                type="text"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#cba779] focus:outline-none"
                placeholder="Subject"
              />
            </div>

            <div className="mt-6 flex flex-col">
              <label className="mb-1 text-sm font-medium">Message</label>
              <textarea
                required
                rows="5"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#cba779] focus:outline-none"
                placeholder="Write your message…"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#4b2e2e] py-3 text-sm font-medium text-white transition hover:bg-[#3a2323]"
            >
              {sent ? "✓ Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
     
    </section>
     <Footer/>
    </div>
  
  );
};

export default Contact;
