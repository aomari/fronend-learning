import React from "react"
import { ErrorBoundary } from "./ErrorBoundary"

export const Popup = ({ selected, closePopup }) => {
    try {
        return <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>{selected.Year}</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} alt={selected.Year} />
                    <p>{selected.Plot}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    } catch (error) {
        return <ErrorBoundary error={error} />
    }

}