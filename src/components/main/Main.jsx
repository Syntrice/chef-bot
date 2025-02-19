import IngredientForm from "@/components/ingredients/IngredientForm";
import IngredientList from "@/components/ingredients/IngredientList";

import React from "react";
import RecipieCallToAction from "../call-to-action/RecipieCallToAction";

export default () => {

    let [ingredients, setIngredients] = React.useState([])
    
    function onAddIngredient(ingredient) {

        // Break clause for if ingredient already added to list
        if (ingredients.includes(ingredient)) return;

        setIngredients(previous => [ ...previous, ingredient])
    }

    return (
        <main className="mx-auto max-w-3xl px-6">
            <IngredientForm onSubmit={onAddIngredient} />
            <IngredientList ingredients={ingredients}/>
            { ingredients.length >= 4 && <RecipieCallToAction />}
        </main>
    );
};
