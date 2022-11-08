import Container from "react-bootstrap/Container"
import React from "react"
import Stack from "react-bootstrap/Stack"
import StudNavbar from "./StudNavbar"
import './stylesStud.css'

export default function Body({studnavbar, children}){
    return (
        <Stack direction="vertical" className="Body">
            {studnavbar && <StudNavbar />}
            <Container className="Content">
            {children}
            </Container>
        </Stack>
        
    );
}