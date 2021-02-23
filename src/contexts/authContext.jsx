import React, { useContext, useState, useEffect } from 'react'

const AuthContext = React.createContext()
import { auth } from "../firebase"


export function useAuth() {
    return useContext(AuthContext)
}


export function AuthPorvider() {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
 return unsubscribe
    }, [])


    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}