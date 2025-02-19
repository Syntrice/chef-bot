export default (onClick)=> {
    return (
        <div className="bg-callout p-8 flex rounded-lg justify-between flex-wrap gap-3">
            <div>
                <h2 className="text-lg font-medium mb-3">Ready for a recipie?</h2>
                <p className="text-faded">Generate a recipie from your list of ingredients.</p>
            </div>
            <button className="button-accent my-auto">
                Get a recipie
            </button>
        </div>
    )
}