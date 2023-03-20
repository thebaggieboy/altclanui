import styles from "../styles/Home.module.css";

const images = [
  {
    id: 1,
    name: "women",
    href: "#",
    imageSrc: "/img/bag.jpg",
  },

  {
    id: 2,
    name: "men",
    href: "#",
    imageSrc: "/img/shades.jpg",
  },
];

export default function ShopDiv() {
  return (
    <>
      <div className="py-16">
        <div className="max-w-[80rem] px-8 md:px-0 mx-auto grid md:grid-cols-2 gap-8">
          <div className=" aspect-1 grid place-items-center">
            <img
              src="img/vivek-sharma.jpg "
              className="aspect-1 col-start-1 col-end-2 row-start-1 row-end-2 object-cover"
            />

            <a href="#" className="col-start-1 col-end-2 row-start-1 row-end-2">
              <button className="bg-white text-black px-8 py-2 rounded-sm">
                SHOP BEST SELLERS
              </button>
            </a>
          </div>

          <div className=" aspect-1 grid place-items-center">
            <img
              src="img/robbie-noble.jpg"
              className="aspect-1 col-start-1 col-end-2 row-start-1 row-end-2 object-cover"
            />
            <a href="#" className="col-start-1 col-end-2 row-start-1 row-end-2">
              <button className="bg-white text-black px-8 py-2 rounded-sm">
                SHOP NEW ARRIVALS
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
