import Footer from "../Components/Footer";
import Header from "../Components/Header";

// src/pages/Menu.jsx
const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Cappuccino",
      price: "$4.50",
      desc: "Rich espresso with steamed milk & foam.",
      img:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600", // Pexels
    },
    {
      id: 2,
      name: "Iced Latte",
      price: "$4.00",
      desc: "Chilled espresso, milk, and ice.",
      img:
        "https://images.pexels.com/photos/33013200/pexels-photo-33013200.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Mocha",
      price: "$4.75",
      desc: "Espresso with chocolate & steamed milk.",
      img:
        "https://images.pexels.com/photos/1006297/pexels-photo-1006297.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Flat White",
      price: "$4.25",
      desc: "Velvety micro‑foam over a double ristretto.",
      img:
        "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Cold Brew",
      price: "$3.75",
      desc: "Slow‑steeped, naturally sweet & smooth.",
      img:
        "https://images.pexels.com/photos/2067404/pexels-photo-2067404.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Matcha Latte",
      price: "$4.50",
      desc: "Stone‑ground green tea whisked with milk.",
      img:
        "https://images.pexels.com/photos/25686146/pexels-photo-25686146.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
            <Header/>
         <div className="min-h-screen bg-[#f9f6f2] py-14 px-4">
    
      <h1 className="mb-10 text-center text-3xl font-bold text-[#4b2e2e]">
        Our Coffee Menu
      </h1>

      <div className="mx-auto grid max-w-7xl gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map(({ id, name, price, desc, img }) => (
          <div
            key={id}
            className="rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
          >
            <img
              src={img}
              alt={name}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-56 w-full rounded-t-2xl object-cover"
            />
            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold text-[#4b2e2e]">{name}</h2>
                <span className="text-sm font-medium text-[#cba779]">
                  {price}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
              <button className="mt-5 w-full rounded-xl bg-[#4b2e2e] py-2 text-sm font-medium text-white transition hover:bg-[#3a2323]">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
       
    </div>
     <Footer/>
  
    </div>
    

  );
};

export default Menu;
