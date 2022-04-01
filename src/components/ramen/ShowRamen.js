// Import dependencies
import React, { useState, useEffect } from "react"
import { getOneRamen } from "../../api/ramen"
import { useParams } from "react-router-dom"
import { Spinner, Container, Card } from "react-bootstrap"

const ShowRamen = (props) => {
    const [ramen, setRamen] = useState(null)
    console.log("props in showRamen:", props)
    const { id } = useParams()
    console.log("id in showRamen:", id)

    useEffect(() => {
        getOneRamen(id)
        .then(res => setRamen(res.data.ramen))
            .catch(console.error)
    }, [id])

    if (!ramen) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="primary" >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        )
    }

    return (
        // <p>here's some {ramen.flavor}</p>

        <Container className="fluid">
            <Card>
                <Card.Header>{ramen.flavor}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {ramen.description}<br/>
                        {ramen.sodium}mg sodium per packet<br/>
                        Have you tried it? {ramen.haveTried ? "OH YEAH" : "No, and I must!"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ShowRamen
