import { getUsers } from "@/app/(pages)/dashboard/users/action";
import { getReports } from "@/app/lib/action"
import LoginPage from "./LoginPage";


export default async function Page(){
  const data = await getUsers();
  // console.log("signups =", data);
  return (
    <LoginPage loginData={data} />
  )
} 