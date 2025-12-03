"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImg } from "./productImg";
import { Product } from "@/src/interfaces/product";
import { BiCartAdd } from "react-icons/bi";

export function ProductCard({ product }: { product: Product }) {
    const [openImg, setOpenImg] = useState(false);

    return (
        <>
            {/* bg-radial-[at_25%_25%] from-teal-400 to-zinc-400 to-100% */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden inset-shadow-sm inset-shadow-black  ">
                <ProductImg product={product} onClick={() => setOpenImg(true)} />

                <div className="p-4 bg-radial-[at_15%_25%] from-blue-950 to-blue-800 to-100% ">
                    <div className="flex justify-items-start items-center gap-8" >
                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                {product.name}
                            </h2>

                            <p className="text-white font-bold mt-1">
                                {product.description}
                            </p>
                        </div>

                        < BiCartAdd size={'40px'} />
                    </div>



                    <div className="flex justify-between items-center mt-4 gap-2">
                        <span className="text-xl font-bold text-green-600">
                            ${product.price.toFixed(2)}
                            <span className="text-xs">MXN</span>
                        </span>

                        <span className="text-white font-bold">
                            Disponibles:{product.stock}
                        </span>

                        <a
                            href={`https://wa.me/2284912196?text=${encodeURIComponent(
                                `Hola, quiero información sobre ${product.name}.`,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {openImg && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
                    onClick={() => setOpenImg(false)}
                >
                    <div className="relative w-[90%] max-w-3xl h-[80%]">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
