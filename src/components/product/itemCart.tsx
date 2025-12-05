import { CartItem } from "@/src/interfaces/product";
import cartStore from "@/src/store/cartStore";
import { GoPlusCircle } from "react-icons/go";
import { IoRemoveCircleOutline } from "react-icons/io5";

interface ItemCartProps {
    item: CartItem;
}
export const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
    const increaseQuantity = cartStore(state => state.increaseQuantity);
    const decreaseQuantity = cartStore(state => state.decreaseQuantity);

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center 
                justify-center hover:bg-red-600"
            >
                -
            </button>

            <span className="text-sm font-semibold">
                {item.quantity}
            </span>

            <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center
                justify-center hover:bg-green-600"
            >
                +
            </button>
        </div>
    );
};

export default ItemCart;