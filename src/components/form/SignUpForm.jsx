"use client"

import { useFormState } from "react-dom"
import { registerAction } from '@/data/actions/registerAction'

const INITIAL_STATE = {
    data: null
}

export function SignUpForm() {
    const [formState, formAction] = useFormState(registerAction, INITIAL_STATE)
    
    return (
        <form action={formAction}>
            <div>
                <label htmlFor="name">Username</label>
                <input type="textfield" name="name"></input>
            </div>
            <div>
                <label htmlFor="mail">Email</label>
                <input type="email" name="mail"></input>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass"></input>
            </div>
            <button>Submit</button>
        </form>
    )
}