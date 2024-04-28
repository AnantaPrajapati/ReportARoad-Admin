import { userData } from "@/app/lib/placeholder-data";
import { userHeaders } from "@/app/lib/schema";
import CustomTable from "@/components/ui/custom-table";

export default  function Page() {

    return (
        <div>
          <CustomTable headers={userHeaders} tableData = {userData} />
        </div>
    );
}