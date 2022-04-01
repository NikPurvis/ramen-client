import React, { useState } from "react"
import { Form, Container, Button } from "react-bootstrap"
import { createRamen } from "../../api/ramen"

// CreateRamen.js renders a form and calls the createRamen function from ramen.js, which contains all the ramen-based API calls.

// We'll need the user and msgAlert props here as we've required an authorized login to make a new document in the database.
const CreateRamen = (props) => {
    const {user} = props
    console.log("user prop in CreateRamen:", user)
    const [ramen, setRamen] = useState({flavor: "", description: "", sodium: "", haveTried: false})
    console.log("the ramen in Create:", ramen)
    
    const handleChange = (e) => {
        // e === event

        e.persist()

        setRamen(prevRamen => {
            // Capturing the form values based on what the user enters, and ensures those values types are what we want (and the model expects).
            const name = e.target.name
            let value = e.target.value
            console.log("event target type:", e.target.type)
            console.log("event target checked:", e.target.checked)
            // This conditional ensures the "haveTried" value will be entered as a boolean, else it would be a string.
            if (name === "haveTried" && e.target.checked) {
                value = true
            } else if (name === "haveTried" && !e.target.checked) {
                value = false
            }
            // If the field is a number, let's make sure it goes in as one.
            if (e.target.type === "number") {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            console.log("the ramen was:", prevRamen)
            console.log("the ramen will become:", updatedValue)

            return {...prevRamen, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createRamen(user, ramen)
            .then(res => {console.log(res.data.ramen)})
            .catch(err => console.log(err))
            console.log("this is the ramen:", ramen)
    }

    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Flavor</Form.Label>
                <Form.Control
                    placeholder="What's the ramen flavor?"
                    value={ramen.flavor}
                    name="flavor"
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                    placeholder="Describe the ramen in a single glowing sentence."
                    value={ramen.description}
                    name="description"
                    onChange={handleChange}
                />
                <Form.Label>Sodium</Form.Label>
                <Form.Control
                    placeholder="How much sodium is in that bad boy?"
                    value={ramen.sodium}
                    type="number"
                    name="sodium"
                    onChange={handleChange}
                />
                <Form.Label>Image</Form.Label>
                <Form.Control
                    placeholder="Let's see a picture of that beauty."
                    value={ramen.imageMain}
                    type="string"
                    name="imageMain"
                    onChange={handleChange}
                />
                <Form.Check
                    label="Have you tried it?"
                    name="haveTried"
                    defaultChecked={ramen.haveTried}
                    onChange={handleChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CreateRamen
