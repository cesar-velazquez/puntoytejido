
import Image from 'next/image';
import { Product } from '@/src/interfaces/product'; // Ajusta la ruta si es necesario

export function ProductCard({ product }: { product: Product }) {
    // Enlace de WhatsApp pre-llenado (tu número con código de país)
    const whatsappUrl = `wa.me{encodeURIComponent(product.name)}`;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative h-60 w-full">
                {/* Componente Image optimizado de Next.js */}
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    // className='positionImg'
                    loading="lazy" // Carga lenta nativa
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)} MXN</span>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Preguntar por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;