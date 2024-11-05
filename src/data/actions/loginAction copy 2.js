"use client";

import { redirect } from "next/navigation";
import { BehaviorSubject } from "rxjs";
import { loginService } from "../services/loginService";

/* BehaviorSubject è simile a uno useState MA non è vincolato al component nel quale si trova
il suo stato può essere cambato in qualsiasi parte dell'app 
ad esso devo dare un valore iniziale, i dati di user nel local stoge */
const userSubject = new BehaviorSubject(
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem("user"))
);

export const userService = {
    /* By using asObservable(), you enable different parts of your application to listen for changes in the user state. They can receive updates without needing to modify or directly access the BehaviorSubject itself. */
    user: userSubject.asObservable(),
    /* This is a getter method that returns the current value of the userSubject */
    get userValue() {
        return userSubject.value;
    }
};

export async function loginAction(prevState, FormData) {
    const data = {
        name: FormData.get('name'),
        pass: FormData.get('pass')
    }

    const resData = await loginService(data)   

    // aggiorno lo stato di userSubject
    userSubject.next(resData.current_user);
    // immagazzino i dati di user nel local storage
    localStorage.setItem("user", JSON.stringify(resData.current_user)); 
    
    redirect("/dashboard");
}