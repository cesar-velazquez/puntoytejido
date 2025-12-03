"use client";

import Image from "next/image";
import { Product } from "@/src/interfaces/product";

export function ProductImg({
    product,
    onClick,
}: {
    product: Product;
    onClick: () => void;
}) {
    return (
        <div
            className="relative w-[50%] h-48 mx-auto cursor-pointer"
            onClick={onClick}
        >
            <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 150px) 100vw"
                className="object-contain py-2"
            />
        </div>
    );
}
export default ProductImg;