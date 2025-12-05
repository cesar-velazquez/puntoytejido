"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImg } from "./productImg";
import { Product } from "@/src/interfaces/product";
import { BiCartAdd } from "react-icons/bi";
import cartStore from "@/src/store/cartStore";


export function ProductCard({ product }: { product: Product }) {
    const [openImg, setOpenImg] = useState(false);

    const addToCart = cartStore((state) => state.addToCart);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <>
            <div className="bg-[#faffff] rounded-2xl overflow-hidden inset-shadow-sm inset-shadow-black  ">
                <ProductImg product={product} onClick={() => setOpenImg(true)} />

                <div className="p-4 bg-[#869b82] ">
                    <div className="flex justify-between items-start gap-4" >
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-black">
                                {product.name}
                            </h2>

                            <p className="text-black font-bold mt-1">
                                {product.description}
                            </p>
                        </div>
                        <button
                            className="cursor-pointer hover:scale-110 transition-transform shrink-0"
                            onClick={handleAddToCart}
                            title="Añadir al carrito"
                        >
                            <BiCartAdd size={'40px'} className="text-white hover:text-yellow-300" />
                        </button>
                    </div>



                    <div className="flex justify-between items-center mt-4 flex-wrap">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white">
                                ${product.price.toFixed(2)}
                                <span className="text-xs">MXN</span>
                            </span>

                            <span className="text-black font-bold">
                                Disponibles:{product.stock}
                            </span>
                        </div>

                        <a
                            href={`https://wa.me/2284912196?text=${encodeURIComponent(
                                `Hola, quiero información sobre ${product.name}.`,
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-300 text-black font-bold py-2 px-4 rounded-lg transition"
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

