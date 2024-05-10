import { getReports } from "@/app/lib/action"
import UserTable from "@/components/ui/users/UserTable";
import { getUsers } from "./action";

export default async function Page(){
  const data = await getUsers();
  // console.log("signups =", data);
  return (
    <UserTable tableData={data}/>
  )
} 