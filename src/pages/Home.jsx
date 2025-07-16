// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => (
<div>
    <Header/>
      <main className="bg-[#f9f6f2] text-[#4b2e2e]">
    {/* ---------- Hero ---------- */}
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <img
        src="https://images.pexels.com/photos/340721/pexels-photo-340721.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Coffee beans background"
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-75"
      />
      <div className="text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md">
          Freshly Roasted • Handcrafted Coffee
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Brewed with passion in the heart of Mogadishu
        </p>
        <Link
          to="/menu"
          className="mt-8 inline-block rounded-xl bg-[#cba779] px-8 py-3 text-sm font-semibold text-[#4b2e2e] transition hover:bg-[#d9b781]"
        >
          Explore Our Menu
        </Link>
      </div>
    </section>

    {/* ---------- About ---------- */}
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <img
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Pouring latte art"
          className="h-72 w-full rounded-2xl object-cover shadow-lg lg:h-96 lg:w-1/2"
        />
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold">About CoffeeHouse</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Since 2015 we’ve sourced ethically grown beans, roasted them in‑house,
            and brewed every cup to order. Whether you’re grabbing a quick flat
            white or settling in with friends, we’re here to make your day a
            little brighter.
          </p>
          <div className="mt-6 flex gap-6 text-xl">
            <i className="fa-solid fa-mug-hot" title="Specialty Drinks" />
            <i className="fa-solid fa-leaf" title="Organic Beans" />
            <i className="fa-solid fa-wifi" title="Free Wi‑Fi" />
            <i className="fa-solid fa-house" title="Cozy Space" />
          </div>
        </div>
      </div>
    </section>

    {/* ---------- Featured Drinks ---------- */}
    <section className="bg-white py-16">
      <h2 className="mb-10 text-center text-3xl font-bold">Fan Favourites</h2>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Signature Cappuccino",
            img:
              "https://images.pexels.com/photos/209682/pexels-photo-209682.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            name: "Iced Caramel Latte",
            img:
              "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            name: "Matcha Affogato",
            img:
              "https://images.pexels.com/photos/2067401/pexels-photo-2067401.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        ].map((drink) => (
          <div
            key={drink.name}
            className="rounded-2xl bg-[#f9f6f2] shadow-md hover:shadow-lg transition"
          >
            <img
              src={drink.img}
              alt={drink.name}
              className="h-56 w-full rounded-t-2xl object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold">{drink.name}</h3>
              <Link
                to="/menu"
                className="mt-4 inline-block rounded-lg bg-[#4b2e2e] px-6 py-2 text-xs font-medium text-white transition hover:bg-[#3a2323]"
              >
                Order Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ---------- Call‑to‑Action Footer ---------- */}
  
  </main>
   <Footer/>
</div>
);

export default Home;
