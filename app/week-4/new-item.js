"use client"
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
        if (quantity === 20) {
            setQuantity(20)
        }
    };

    const decrement = () => {
        setQuantity(quantity - 1)
        if (quantity === 1) {
            setQuantity(1);
        }
    };

    return (
        <div className="flex justify-center items-center flex-col  bg-green-950 h-32 w-32 rounded-md">
            <label className=" font-bold text-3xl"> 
                {quantity}
            </label>
            <div>
                <button disabled={quantity === 1} className="m-1 bg-gray-400 text-green-800 rounded-xl h-12 w-12  disabled:bg-black disabled:text-gray-500" onClick={decrement}>-</button>
                <button disabled={quantity === 20} className="m-1 bg-gray-400 text-green-800 rounded-xl h-12 w-12 disabled:bg-black disabled:text-gray-500"  onClick={increment}>+</button>
            </div>
        </div>
    );
    
 }