import Markdown from "react-markdown"

export default ( { recipieContents }) => {
    return (
        <>
        <h2 className="section-title">Suggested recipe:</h2>
        <article className="typography">
            <Markdown>
                {recipieContents}
            </Markdown>
        </article>
        </>
    )
}
