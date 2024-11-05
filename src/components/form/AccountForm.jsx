"use client"

import React from "react";
import { useFormState } from 'react-dom'
import { accountAction } from "@/data/actions/accountAction";

const INITIAL_STATE = {
    data: null,
};

export function AccountForm({ data }) {
    const updateAccountWithId = accountAction.bind(null, data[0].id);
    const [formState, formAction] = useFormState(updateAccountWithId, INITIAL_STATE);
    console.log(data[0].id)

    return (
        <form action={formAction}>
            <div>
                <label htmlFor="name">Username</label>
                <input 
                    type="textfield" 
                    name="name" 
                    placeholder='name'
                    defaultValue={data[0].attributes.name || ''}
                />
            </div>
            <button>Submit</button>
        </form>
    );
}