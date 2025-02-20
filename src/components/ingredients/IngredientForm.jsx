export default ({ onSubmit }) => {

    return (
        <form action={(formData) => onSubmit(formData.get("ingredient"))}
            className="flex gap-5 py-15 flex-wrap">
            <input
                className="textbox w-full max-w-md"
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button className="button">+ Add ingredient</button>
        </form>
    )
}