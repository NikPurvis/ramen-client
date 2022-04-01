// Import dependencies
import React, { useState, useEffect } from "react"
import { getOneRamen } from "../../api/ramen"
import { useParams } from "react-router-dom"

const ShowRamen = (props) => {
    console.log("props in showRamen:", props)
    const {params} = useParams()
    console.log("params in showRamen:", params)

    return (
        <p>Show ramen component</p>
    )
}

export default ShowRamen