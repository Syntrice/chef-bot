export default ({ ingredients = [] }) => {
    return (
        <div className="flex-col items-center">
            <h2 className="text-3xl font-bold mb-10">Ingredients on hand:</h2>
            {ingredients.length > 0  ?
                <ul className="list-disc ml-5 flex flex-col gap-5 text-xl text-faded">
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