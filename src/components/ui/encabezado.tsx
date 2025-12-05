"use client";
import { IoIosCart } from "react-icons/io";
import { useState } from "react";
import { ShoppingCart } from "../product/shoppingCart";

export function Encabezado() {
    const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);

    const handleShoppingCartToggle = () => {
        setIsOpenShoppingCart(!isOpenShoppingCart);
    };

    return (
        <>
            <header className="">
                <nav className="px-4 py-4 bg-center bg-cover bg-no-repeat fixed w-full z-20 mb-16  
                bg-[#869b82] shadow-lg shadow-black/30 ">
                    <div className="flex h-16 items-center justify-between max-w-[1200px] m-auto">
                        <div className="relative">
                            <ul className="flex  text-xl ">
                                <button className="bg-purple-bg text-lg px-5 rounded-3xl ">
                                    <img className="max-h-16 bg-transparent " src="../images/iconPyT.png" alt="Icono de apoyo" />
                                </button>
                            </ul>
                        </div>
                        <div className="sm:text-xl  ">
                            <ul id="about" className="flex gap-6">
                                <li className="hidden sm:block">
                                    <a
                                        href={`https://wa.me/2284912196?text=${encodeURIComponent(
                                            `Hola, quiero información sobre sus productos.`,)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition">
                                        WhatsApp
                                    </a>
                                </li>
                                <li className="hidden sm:block  "><a href="#projects">Productos</a></li>
                                <li className=" max-sm:pr-4 relative"><button className="cursor-pointer" onClick={handleShoppingCartToggle} >
                                    <IoIosCart size={'30px'} /></button>
                                    <ShoppingCart isVisible={isOpenShoppingCart} onClose={() => setIsOpenShoppingCart(false)} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
