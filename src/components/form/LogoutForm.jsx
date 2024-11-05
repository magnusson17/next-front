import { logoutAction } from "@/data/actions/logoutAction";

export function LogoutForm() {
    return (
        <form action={logoutAction}>
            <button type="submit">Logout</button>
        </form>
    );
}