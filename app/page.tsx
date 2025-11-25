import Image from "next/image";
// import { Encabezado } from "@/src/components/ui/encabezado";
import { ProductCard } from "@/src/components/product/productCard";
import productsData from "@/src/data/products.json"; // Asegúrate de tener un archivo JSON con datos de productos


export default function Home() {
  return (
    <div className="min-h-screen mainPage">
      <main>
        {/* <Encabezado /> */}
        {/* <h1>Welcome to the Home Page</h1> */}

        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-8">Nuestros Muñecos de Estambre</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
