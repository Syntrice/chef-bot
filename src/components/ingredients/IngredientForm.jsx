export default ({ onSubmit }) => {
    
    function submit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const ingredient = formData.get("ingredient")
        onSubmit(ingredient)
    }
    
    return (
        <form onSubmit={submit} className="flex gap-5 py-15 flex-wrap">
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