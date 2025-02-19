export default ({ ingredients = [] }) => {
    return (
        <div className="flex-col items-center;">
            <h2 className="section-title">Ingredients on hand:</h2>
            {ingredients.length > 0  ?
                <ul className="bullet-list">
                    {ingredients.map(i => (
                        <li key={i}>{i}</li>
                    ))}
                </ul>
                :
                <p className="text-faded text-xl">You haven't added any ingredients yet.</p>
            }
        </div>
    )
}