import { AccountForm } from "@/components/form/AccountForm";
import { LogoutForm } from "@/components/form/LogoutForm";
import { getUser } from "@/data/services/getUser";

export default async function Dashboard() {
    const user = await getUser()
    const userData = user.data.data

    return (
        <>
            <h1>Dashboard</h1>
            {/* <AccountForm data={userData} />
            <LogoutForm /> */}
        </>
    )
}