import IngredientForm from "@/components/forms/IngredientForm";

export default () => {
    
    function onAddIngredient(ingredient) {
        console.log(ingredient);
    }

    return (
        <main>
            <IngredientForm onSubmit={onAddIngredient} />
        </main>
    );
};
