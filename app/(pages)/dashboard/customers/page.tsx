import { userHeaders, users } from "@/app/lib/placeholder-data";
import DynamicTable from "@/components/ui/dynamic-table";

export default function Page() {
    const userRecords = users;
    const headers = userHeaders;
    return (
        <div>
            <DynamicTable data={userRecords} headers={headers} />
        </div>
    );
}