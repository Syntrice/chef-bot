import IngredientForm from "@/components/ingredients/IngredientForm";
import IngredientList from "@/components/ingredients/IngredientList";
import Recipie from "@/components/recipie/Recipie";
import RecipieCallToAction from "@/components/call-to-action/RecipieCallToAction";

import React from "react";

export default () => {

    let [ingredients, setIngredients] = React.useState([])
    
    function onAddIngredient(ingredient) {

        // Break clause for if ingredient already added to list
        if (ingredients.includes(ingredient)) return;

        setIngredients(previous => [ ...previous, ingredient])
    }

    return (
        <main className="mx-auto max-w-3xl px-6">
            <section id="ingredientsSection" className="pb-6">
                <IngredientForm onSubmit={onAddIngredient} />
                <IngredientList ingredients={ingredients}/>
            </section>
            { ingredients.length >= 4 && 
                <section id="recipieCallToActionSection" className="py-10">
                <RecipieCallToAction />
                </section>
            }
            <section id="recipieSection" className="py-10">
                <Recipie/>
            </section>
        </main>
    );
};
