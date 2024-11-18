// The MealIdeas component is responsible for fetching and displaying meal ideas based on a selected shopping list item. 

"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) { 
    const [meals, setMeals] = useState([]);

    // API Fetching function
    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];   
    };

    const loadMealIdeas = async () => { 
        if(!ingredient) {
            return;
        }

        const data = await fetchMealIdeas(ingredient);
        setMeals(data || []);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    // <img src={meal.strMealThumb} alt={meal.strMeal} className="w-48 h-48 rounded-md"/>
    return (
        <div className="flex flex-col w-full">
            <h2 className="text-2xl font-semibold text-center m-5">Meal Ideas</h2>
            <div className="flex flex-col justify-center">
                {meals.length === 0 && <p className="text-center">No meal ideas found.</p>}
                {meals.length > 0 && 
                meals.map((meal) => (
                    <div key={meal.idMeal} className="m-5 p-5 bg-green-800 rounded-md">
                        <h3 className="text-xl font-semibold">{meal.strMeal}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
