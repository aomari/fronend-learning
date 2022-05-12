import React from "react"
import { Result } from "./"
import { ErrorBoundary } from "./ErrorBoundary"

export const Results = ({ results, openPopup }) => {
    try {
        return (
            <section className="results">
                {results.map(result => {
                    return (
                        <Result result={result} key={result.imdbID} openPopup={openPopup} />
                    )
                })}
            </section>
        )
    } catch ({ error }) {
        return <ErrorBoundary error={error} />
    }
}