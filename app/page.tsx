// import Image from "next/image";
import { ProductCard } from "@/src/components/product/productCard";
import productsData from "@/src/data/products.json";
import { Encabezado } from "@/src/components/ui/encabezado";
// import { ProductCar } from "@/src/components/product/productCar";

export default function Home() {
  return (
    <>
      <div id="projects" className="min-h-screen mainPage">
        <Encabezado />
        {/* <ProductCar/> */}
        <div className="flex flex-col items-center justify-center pt-40 ">
          <h1 className="text-white text-5xl font-extrabold ">Punto y Tejido </h1>
          <div className="container mx-auto max-md:max-w-[60%] max-sm:max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 ">
              {productsData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
