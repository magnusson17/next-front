"use client"

import { useFormState } from "react-dom"
import { loginAction } from '@/data/actions/loginAction'

const INITIAL_STATE = {
    data: null
}

export function SignInForm() {
    const [formState, formAction] = useFormState(loginAction, INITIAL_STATE)

    return (
        <form action={formAction}>
            <div>
                <label htmlFor="name">Username</label>
                <input type="textfield" name="name"></input>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass"></input>
            </div>
            <button>Submit</button>
        </form>
    )
}