import { ProductCarProps } from "@/src/interfaces/productShoppingCart";


export function ProductCar({ isVisible } : ProductCarProps) {
    return (
        <div className={`
        fixed top-24 right-0 w-[250px] min-h-screen shadow-2xl shadow-black z-50 bg-white
        transition-transform duration-300 ease-in-out
        ${        
        isVisible ? 'translate-x-0' : 'translate-x-full'
        }
    `}>
        </div >
    )
}

