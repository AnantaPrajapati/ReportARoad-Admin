/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bW7UMdyfsuD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";


export default function RatingTable(props: any) {
  const { tableData } = props;
  console.log("props data are ", tableData)
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-4 md:p-8 overflow-auto">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Id</TableHead>
              <TableHead>userId</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Feedback</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>


            {tableData?.map((element: any) => (
              <TableRow key={element?._id}>
                <TableCell>{element?._id}</TableCell>
                <TableCell>{element?.userId}</TableCell>
                <TableCell>{element?.Rating}</TableCell>
                <TableCell>{element?.feedback}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    {/* <ReportDialog buttonLabel="Reject" />
                    <ReportDialog buttonLabel="Approve" /> */}
                  </div>
                </TableCell>
              </TableRow>
            ))}



          </TableBody>
        </Table>
      
      </div>
    </div>
  );
}
