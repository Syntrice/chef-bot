import IngredientForm from "@/components/ingredients/IngredientForm";
import IngredientList from "@/components/ingredients/IngredientList";
import Recipie from "@/components/recipie/Recipie";
import RecipieCallToAction from "@/components/call-to-action/RecipieCallToAction";
import Spinner from "@/components/spinner/Spinner";
import React from "react";

export default () => {

    const [ingredients, setIngredients] = React.useState([])
    const [recipie, setRecipie] = React.useState("")
    const [spinner, setSpinner] = React.useState(false);
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if ((spinner || recipie) && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView()
        }
    }, [spinner, recipie])

    function onAddIngredient(ingredient) {

        // Break clause for if ingredient already added to list
        if (ingredients.includes(ingredient)) return

        // Break clause for empty engredient
        if (ingredient.length < 1) return

        setIngredients(previous => [ ...previous, ingredient])
    }

    async function getRecipie() {
        setSpinner(true)
        const isProduction = import.meta.env.VITE_IS_PRODUCTION == "true"
        console.log("getting recipie. use production path? " + import.meta.env.VITE_IS_PRODUCTION)
        const url = isProduction ? "chef-bot/.netlify/functions/get-hf-response" : "/.netlify/functions/get-hf-response"
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(ingredients)
        })
        
        setRecipie(await response.text())
        setSpinner(false)
        setIngredients([]) // reset ingredients
    }

    return (
        <main className="mx-auto max-w-3xl px-6">
            <section id="infoSection" className="pt-15">
                <p className="text-faded">Welcome to Chef Bot, your personal recipie assistant! Enter at least four ingredients, and Chef Bot will generate a recipie for you!</p>
            </section>
            
            <section id="ingredientsSection" className="pb-6">
                <IngredientForm onSubmit={onAddIngredient} />
                { ingredients.length >= 4 && 
                <section id="recipieCallToActionSection" className="pb-15">
                    <RecipieCallToAction onGetRecipie={getRecipie}/>
                </section>
                }
                <IngredientList ingredients={ingredients}/>
            </section>


            { (spinner || recipie) &&
                <section id="recipieSection" className="py-10" ref={recipeSection}>
                    {spinner &&
                        <Spinner/>
                    }
                    { recipie && 
                        <Recipie recipieContents={recipie}/>
                    }
                </section>
            }       
        </main>
    );
};
