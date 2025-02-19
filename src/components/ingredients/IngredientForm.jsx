export default ({ onSubmit }) => {

    return (
        <form action={(formData) => onSubmit(formData.get("ingredient"))}
            className="flex gap-5 py-15 flex-wrap">
            <input
                className="textbox"
                type="text"
                size={40}
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button className="button">+ Add ingredient</button>
        </form>
    )
}