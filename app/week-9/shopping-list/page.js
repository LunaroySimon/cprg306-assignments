"use client";

import { useState } from 'react';
import ItemList from './item-list';
import Item from './item';
import ItemsData from './items.json';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
import Link from 'next/link';

export default function Page( { }) {
    const { user } = useUserAuth();
    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        let itemName = item.name.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(itemName);
    }

    // If the user is not logged in, display a message
    if (!user) {
        return (
        <main>
            <p className="text-2xl m-5">You must be logged in to view this page!</p>
            <Link href="/week-9" className='ml-5 text-blue-400'>Return to login page.</Link>
        </main>
        );
    }
        

    // Displaying a list of items using props
    return (
        <main className="flex p-10 bg-green-950">
            <div className='w-1/2 justify-center items-center'>
                <h1 className="text-4xl font-bold text-center">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className='w-1/2'>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );
 }

