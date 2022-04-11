// Import dependencies
import React, { useState, useEffect } from "react"
import { getOneRamen } from "../../api/ramen"
import { useParams } from "react-router-dom"
import { Button, Spinner, Container, Card } from "react-bootstrap"
// import "../../sass/ShowRamen.scss"
// import "../../stylesheets/ShowRamen.css"


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
        <Container className="fluid">
            <Card className="ramen-detail" style={{ width: "30rem" }}>
                <Card.Img className="ramen-detail-img" variant="top" style={{ width: "100%" }} src={detailImg} />
                <Card.Title>{ramen.flavor}</Card.Title>
                <Card.Subtitle className="mb-2 text-medium-emphasis">{ramen.description}</Card.Subtitle>                
                <Card.Body>
                    <Card.Text>
                        <strong>{ramen.sodium}mg</strong> sodium per packet<br/>
                        Have you tried it? <strong>{ramen.haveTried ? "OH YEAH" : "No, and I must!"}</strong>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="ramen-button-footer">
                    <div><Button variant="info">Edit {ramen.flavor}</Button></div>
                    <div><Button variant="danger">Delete {ramen.flavor}</Button></div>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ShowRamen
