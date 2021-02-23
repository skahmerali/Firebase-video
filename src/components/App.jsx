
import React from "react";
import Signup from "./signup";
import { container } from "react-bootstrap";
import { AuthPorvider } from "../contexts/authContext"

function App() {

    return( 
        <AuthPorvider>

    <container class="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />

        </div>

    </container>
        </AuthPorvider>
    ) 
}

export default App;