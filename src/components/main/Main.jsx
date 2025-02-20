import IngredientForm from "@/components/ingredients/IngredientForm";
import IngredientList from "@/components/ingredients/IngredientList";
import Recipie from "@/components/recipie/Recipie";
import RecipieCallToAction from "@/components/call-to-action/RecipieCallToAction";

import React from "react";

export default () => {

    let [ingredients, setIngredients] = React.useState([])
    let [recipie, setRecipie] = React.useState("")
    
    function onAddIngredient(ingredient) {

        // Break clause for if ingredient already added to list
        if (ingredients.includes(ingredient)) return;

        setIngredients(previous => [ ...previous, ingredient])
    }

    async function getRecipie() {
        const isProduction = import.meta.env.VITE_IS_PRODUCTION
        console.log("getting recipie. use production path? " + import.meta.env.VITE_IS_PRODUCTION)
        const url = isProduction ? "chef-bot/.netlify/functions/get-hf-response" : "/.netlify/functions/get-hf-response"
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(ingredients)
        })
        setRecipie(await response.text())
    }

    return (
        <main className="mx-auto max-w-3xl px-6">
            <section id="ingredientsSection" className="pb-6">
                <IngredientForm onSubmit={onAddIngredient} />
                <IngredientList ingredients={ingredients}/>
            </section>
            { ingredients.length >= 4 && 
                <section id="recipieCallToActionSection" className="py-10">
                <RecipieCallToAction onGetRecipie={getRecipie}/>
                </section>
            }
            { recipie && 
                <section id="recipieSection" className="py-10">
                    <Recipie recipieContents={recipie}/>
                </section>
            }       
        </main>
    );
};
