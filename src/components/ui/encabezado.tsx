"use client";
import { IoIosCart } from "react-icons/io";
import { useState } from "react";
import { ProductCar } from "../product/productCar";

export function Encabezado() {
    const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);

    const handleShoppingCartToggle = () => {
        setIsOpenShoppingCart(!isOpenShoppingCart);
    };

    return (
        <>
            <header className="">
                <nav className="px-4 py-4 bg-center bg-cover bg-no-repeat fixed w-full z-20 mb-16  
                bg-black shadow-lg shadow-black/30 ">
                    <div className="flex h-16 items-center justify-between max-w-[1200px] m-auto">
                        <div className="relative">
                            <ul className="flex gap-4 text-xl ">
                                <li><a href="https://github.com/cesar-velazquez" target="_blank">
                                    <i className="bx bxl-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/c%C3%A9sar-velazquez-722a9121b/" target="_blank"><i className="bx bxl-linkedin-square"></i></a></li>
                                <li><i className="cursor-pointer bx bxs-moon bx-spin-hover"></i></li>
                                <button className="bg-purple-bg text-white text-lg px-5 rounded-3xl ">
                                    <img className="max-h-16 " src="../images/iconPyT.png" alt="Icono de apoyo" />
                                </button>
                            </ul>
                        </div>
                        <div className="hidden sm:block sm:text-xl  ">
                            <ul id="about" className="flex gap-6">
                                <li>
                                    <a
                                        href={`https://wa.me/2284912196?text=${encodeURIComponent(
                                            `Hola, quiero información sobre sus productos.`,)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition">
                                        WhatsApp
                                    </a>
                                </li>
                                <li className="  "><a href="#projects">Productos</a></li>
                                <li className=""><button className="cursor-pointer" onClick={handleShoppingCartToggle} >
                                    <IoIosCart size={'30px'} /></button></li>                                
                            </ul>
                        </div>
                        <i className="sm:hidden bx bx-menu cursor-pointer"></i>
                    </div>
                </nav>
            </header>

            <ProductCar isVisible={isOpenShoppingCart} />
        </>
    );
}
