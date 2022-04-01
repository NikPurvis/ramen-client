// Import dependencies
import React, { useState, useEffect } from "react"
import { getAllRamen } from "../../api/ramen"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"


// Declaring a style object to wrap around the ramen cards
const cardContainer = {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap"
}


const IndexRamen = (props) => {
    // Destructuring the useState React hook
    const [ramen, setRamen] = useState(null)

    useEffect(() => {
        getAllRamen()
            .then(res => {
                setRamen(res.data.ramen)
            })
            .catch(console.error)
    }, [])  // This is the dependency array. It's where data is kept for useState to check against to know when changes are made.

    // What to show if there's no ramen fetched from the API
    if (!ramen) {
        return <p>Loading...</p>
    } else if (ramen.length === 0) {
        return <p>No ramen??! Go add some!</p>
    }

    // Declaring where we'll put the formatted ramen information, but outside of a function so we can fill it in one place and return it in another.
    let ramenCards

    // What to do with the ramen our API call fetches
    if (ramen.length > 0) {
        // // Initial basic test to ensure our data was coming through
        // ramen.Jsx = ramen.map(ramen => (
        //     <li key={ramen._id}>
        //         {ramen.flavor}
        //     </li>
        // ))
        // console.log("ramen:", ramen)
        // console.log("ramenJSX:", ramen.Jsx)
        ramenCards = ramen.map(ramen => (
            <Card key={ramen._id} style={{ width: "30%" }} className="m-2" >
                <Card.Img variant="top" style={{ width: "100%" }} src={ramen.imageMain} />
                <Card.Title>{ramen.flavor}</Card.Title>
                <Card.Body>                    
                    <Card.Text>
                        <Link to={`/ramen/${ramen._id}`}>{ramen.description}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <h3>All the Ramen</h3>
            <div style={cardContainer}>
                {ramenCards}
            </div>
        </>
    )
}

export default IndexRamen
