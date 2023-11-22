const products = [
  {
    id: 1,
    name: "Corte",
    color: "25 minutos de duração",
    href: "#",
    imageSrc: "/products/corte.jpeg",
    imageAlt: "Corte normal",
    price: "R$30,00",
  },
  {
    id: 2,
    name: "Platinado",
    color: "2h30 de duração",
    href: "#",
    imageSrc: "/products/platinado.jpeg",
    imageAlt: "Platinado",
    price: "R$100,00",
  },
  {
    id: 3,
    name: "Frisado",
    color: "1h30 de duração",
    href: "#",
    imageSrc: "/products/frisado.jpeg",
    imageAlt: "Frisado",
    price: "R$90,00",
  },
  {
    id: 4,
    name: "Luzes",
    color: "2h50 de duração",
    href: "#",
    imageSrc: "/products/luzes.jpeg",
    imageAlt: "Luzes",
    price: "R$80,00",
  },
  {
    id: 5,
    name: "Penteado Seladinho",
    color: "50m de duração",
    href: "#",
    imageSrc: "/products/penteado-seladinho.jpeg",
    imageAlt: "Penteado Seladinho",
    price: "R$60,00",
  },
  {
    id: 6,
    name: "Sobrancelha",
    color: "5 minutos de duração",
    href: "#",
    imageSrc: "/products/sobrancelha.jpeg",
    imageAlt: "Sobrancelha",
    price: "R$80,00",
  },
  {
    id: 7,
    name: "Barba",
    color: "20 minutos de duração",
    href: "#",
    imageSrc: "/products/barba.jpeg",
    imageAlt: "Barba",
    price: "R$80,00",
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          Nossos cortes diferenciados!
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden shadow-lg rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-base font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex items-center justify-center rounded-md bg-gradient-to-r from-gray-600 to-gray-900 px-8 py-2 text-sm text-white font-bold"
                >
                  Entrar em contato
                  <span className="sr-only ">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
