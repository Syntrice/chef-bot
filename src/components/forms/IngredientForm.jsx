export default () => (
    <form className="flex gap-5 justify-center py-20 flex-wrap">
        <input
            className="textbox"
            type="text"
            size={40}
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
        />
        <button className="button">+ Add ingredient</button>
    </form>
)