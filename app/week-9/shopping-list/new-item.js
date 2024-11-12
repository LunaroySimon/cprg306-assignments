"use client"
import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // Asked chatGPT for help with this function
    function generateRandomString(length = 18) {
        // string of all alphanumeric characters
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // create empty string
        let result = '';
        // loop to add random characters to the empty string
        for (let i = 0; i < length; i++) {
            // Math.Floor(Math.Random() * character.length) generates a random number between 0 and 1,
            // multiplies it by the length of the characters string and round it down to the nearest whole number
            // to determine the index of the character to add to the result string
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }

    const submitHandler = (event) => {
        event.preventDefault();
        const id = generateRandomString();
        const newItem = {id, name, quantity, category};
        console.log(newItem);
        // alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
        onAddItem(newItem);
        reset();
    };

    const reset = () => {
        setName("");
        setQuantity(1);
        setCategory("produce");
     }

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
        <form onSubmit={submitHandler} className="flex justify-center items-center flex-col m-10  bg-green-800 p-5 w-full max-w-sm rounded-md">
            <input type="text" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Item Name" className="m-1 p-1 rounded-md text-black"/>
            <div className="flex justify-between items-center rounded-md p-4 w-full">
                <div className="flex justify-between p-2 bg-white text-black rounded-md">
                    <label className=" font-medium text-2xl mr-5"> {quantity} </label>
                    <div className="flex">
                        <button type="button" disabled={quantity === 1} className="mr-1 bg-gray-400 text-green-800 rounded-xl h-8 w-8  disabled:bg-black disabled:text-gray-500" onClick={decrement}>-</button>
                        <button type="button" disabled={quantity === 20} className="ml-1 bg-gray-400 text-green-800 rounded-xl h-8 w-8 disabled:bg-black disabled:text-gray-500"  onClick={increment}>+</button>
                    </div>
                </div>
                <select value={category} onChange={(event) => setCategory(event.target.value)} className="m-1 p-1 rounded-md text-black">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option> 
                </select>
            </div>
            
            <button type="submit" className="m-1 bg-gray-400 text-green-800 rounded-xl h-12 w-32 font-semibold">Add Item</button>
        </form>
    );
    
 }