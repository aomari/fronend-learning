import React from "react"
import { ErrorBoundary } from "./ErrorBoundary"

export const Result = ({ result, openPopup }) => {
    try {
        return (
            <div className="result" onClick={() => openPopup(result.imdbID)}>
                <img src={result.Poster} alt={result.imdbID} />
                <h3>{result.Title}</h3>
            </div>
        )
    } catch ({ error }) {
        return <ErrorBoundary error={error} />
    }
}