"use client";

import { useState } from 'react';
import ItemList from './item-list';
import Item from './item';
import ItemsData from './items.json';
import NewItem from './new-item';

export default function Page() {
    const [items, setItems] = useState(ItemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    // Displaying a list of items using props
    return (
        <main className="p-10 bg-green-950">
            <h1 className="text-4xl font-bold">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
 }

