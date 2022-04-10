// Import dependencies
import React, { useState, useEffect } from "react"
import { getOneRamen } from "../../api/ramen"
import { useParams } from "react-router-dom"
import { Spinner, Container, Card } from "react-bootstrap"
// import Images from "../images"

const ShowRamen = (props) => {
    const [ramen, setRamen] = useState(null)
    console.log("props in showRamen:", props)
    const { id } = useParams()
    console.log("id in showRamen:", id)
    // console.log("image detail?:", ramen.imageDetail)

    useEffect(() => {
        getOneRamen(id)
            .then(res => setRamen(res.data.ramen))
            .then (console.log("heeeere's ramen:", ramen))
            // .then (console.log("imageDetail:", ramen.imageDetail))
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

    const detailImg = `/${ramen.imageDetail}`

    return (
        // <p>here's some {ramen.flavor}</p>
        <React.StrictMode>
        <Container className="fluid">
            <Card>
                <Card.Header>{ramen.flavor}</Card.Header>
                <Card.Img variant="top" style={{ width: "100%" }} src={detailImg} />
                
                <Card.Body>
                    <Card.Text>
                        {ramen.description}<br/>
                        {ramen.sodium}mg sodium per packet<br/>
                        Have you tried it? {ramen.haveTried ? "OH YEAH" : "No, and I must!"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </React.StrictMode>
    )
}

export default ShowRamen
