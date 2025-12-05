'use client';
import { useMemo } from 'react';
import cartStore from '@/src/store/cartStore';

interface ShoppingCartProps {
    isVisible: boolean;
    onClose: () => void;
}

export function ShoppingCart({ isVisible, onClose }: ShoppingCartProps) {
    const cartItems = cartStore((state) => state.cartItems);
    const removeFromCart = cartStore((state) => state.removeFromCart);
    const increaseQuantity = cartStore((state) => state.increaseQuantity);
    const decreaseQuantity = cartStore((state) => state.decreaseQuantity);

    const totals = useMemo(() => {
        return {
            totalItems: cartItems.reduce((acc, item) => acc + item.quantity, 0),
            totalPrice: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };
    }, [cartItems]);

    if (!isVisible) return null;

    return (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl w-96 max-h-[600px] overflow-hidden z-50 border-none
        shadow-black
        max-sm:max-w-[300px]">
            {/* Header */}
            <div className="bg-[#869b82] p-4 flex justify-between items-center border-0">
                <h2 className="text-lg font-bold text-gray-800">Mi Carrito</h2>
                <button
                    onClick={onClose}
                    className="text-xl text-gray-600 hover:text-gray-800"
                >
                    ✕
                </button>
            </div>

            {/* Content */}
            <div className="px-4 py-3 overflow-y-auto max-h-[400px]">
                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Tu carrito está vacío</p>
                ) : (
                    <div className="space-y-3">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b pb-3"
                            >
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                                    <p className="text-xs text-gray-600">${item.price.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1.5 rounded text-sm"
                                    >
                                        −
                                    </button>
                                    <span className="w-6 text-center font-bold text-sm text-black">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1.5 rounded text-sm"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="text-right min-w-16 ml-2">
                                    <p className="font-semibold text-green-600 text-sm">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-xs"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer with totals */}
            {cartItems.length > 0 && (
                <div className="bg-teal-100 px-4 py-3 border-t">
                    <div className="flex justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-800">
                            Total ({totals.totalItems} items):
                        </span>
                        <span className="text-base font-bold text-green-600">
                            ${totals.totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition text-sm">
                        Proceder al pago
                    </button>
                </div>
            )}
        </div>
    );
}
