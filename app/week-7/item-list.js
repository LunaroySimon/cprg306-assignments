"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");

  let itemsCopy = [...items]; 

  if (sortBy === "name") {
    itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (sortBy === "category") { 
    itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
  } else { 
    // I definitely used ChatGPT/GitHub Copilot for this part cause I had no idea how to do it

    // sortBy using reduce to group by category and then each group alphabetically and the items within each group alphabetically

    // This groups the items by category using a key-value pair
    const groupedItems =itemsCopy.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    // Returns an array of the keys (categories) which is then sorted alphabetically
    const sortedCategories = Object.keys(groupedItems).sort();

    // For each category (key), the objects are spread into an array, sorted alphabetically then pushed into a new array 
    itemsCopy = sortedCategories.reduce((acc, category) => {
      acc.push(...groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)));
      console.log(...groupedItems[category]);
      return acc;
    }, []);
  }

  const sortByName = () => { 
    setSortBy("name");
  };

  const sortByCategory = () => {
    setSortBy("category");
   };

   const sortByGroup = () => {
    setSortBy("group");
    };

  {
    // Did the logic for grouping but couldn't figure out how to display it like the example
    return (
      <div className="flex flex-col w-full">
        <div className="flex p-5 justify-around w-1/2  items-center">
          <label className="text-center w-20 text-xl font-extralight"> Sort By: </label>
          <button type="button" onClick={sortByName} className={`font-medium text-xl p-1 w-28 h-16 rounded-sm ${sortBy === "name" ? "bg-purple-500" : "bg-purple-800"}`}> Name </button>
          <button type="button" onClick={sortByCategory} className={`font-medium text-xl p-1 w-28 h-16 rounded-sm ${sortBy === "category" ? "bg-purple-500" : "bg-purple-800"}`}> Category </button>
          <button type="button" onClick={sortByGroup} className={`font-medium text-xl p-1 w-28 h-16 rounded-sm ${sortBy === "group" ? "bg-purple-500" : "bg-purple-800"}`}> Grouped Category </button>
        </div>
        <ul>
          {itemsCopy.map((item) => {
            return (
              <div key={item.id}>
                <li>
                  <Item name={item.name} quantity={item.quantity} category={item.category} />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}