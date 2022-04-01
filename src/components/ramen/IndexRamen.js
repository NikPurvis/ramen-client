// Import dependencies
import React, { useState, useEffect } from "react"
import { getAllRamen } from "../../api/ramen"



const IndexRamen = (props) => {
    const [ramen, setRamen] = useState(null)

    useEffect(() => {
        getAllRamen()
            .then(res => {
                setRamen(res.data.ramen)
            })
            .catch(console.error)
    }, [])  // This is the dependency array. It's where data is kept for useState to check against to know when changes are made.

    if (!ramen) {
        return <p>Loading...</p>
    } else if (ramen.length === 0) {
        return <p>No ramen??! Go add some!</p>
    }

    if (ramen.length > 0) {
        ramen.Jsx = ramen.map(ramen => (
            <li key={ramen.id}>
                {ramen.flavor}
            </li>
        ))
    }


    return (
        <>
            <h3>All the Ramen</h3>
            <ul>
                <li>{ramen.Jsx}</li>
            </ul>
        </>
    )
}

export default IndexRamen
