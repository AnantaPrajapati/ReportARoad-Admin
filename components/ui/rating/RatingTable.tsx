"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bW7UMdyfsuD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import ResponseRating, { DeleteRatingandfeedback } from "@/app/(pages)/dashboard/ratingandfeedback/action";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import RatingDialog from "./dialog";
import { useState, useTransition } from "react";
import DeleteRating from "./deletedialog";

export default function RatingTable(props: any) {
  const { tableData } = props;

  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(isPending)

   const handleClose =()=>{
      if(isPending){
          setOpen(false);
      }
   }
  // console.log("props data are ", tableData)
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-4 md:p-8 overflow-auto">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Id</TableHead>
              {/* <TableHead>userId</TableHead> */}
              <TableHead>Rating</TableHead>
              <TableHead>Feedback</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>


            {tableData?.map((element: any) => (
              <TableRow key={element?._id}>
                <TableCell>{element?._id}</TableCell>
                {/* <TableCell>{element?.userId}</TableCell> */}
                <TableCell>{element?.Rating}</TableCell>
                <TableCell>{element?.feedback}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                  <RatingDialog buttonLabel="Response" onClick={(comment)=>startTransition(()=>ResponseRating(element?.userId, comment))} status={open} />
                  <DeleteRating buttonLabel="Delete" onClick={(comment)=>startTransition(()=>DeleteRatingandfeedback(element?._id, comment))} status={open} buttonColor ="black" />
                  </div>
                </TableCell>
              </TableRow>
            ))}



          </TableBody>
        </Table>
        <div className="border-t px-4 py-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-700 rounded-md px-2 py-1 transition-colors"
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-700 rounded-md px-2 py-1 transition-colors"
                  href="#"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="bg-gray-200 dark:bg-gray-800 rounded-md px-2 py-1 transition-colors"
                  href="#"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-700 rounded-md px-2 py-1 transition-colors"
                  href="#"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className="hover:bg-gray-200 dark:hover:bg-gray-800 active:bg-gray-300 dark:active:bg-gray-700 rounded-md px-2 py-1 transition-colors"
                  href="#"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      
      </div>
    </div>
  );
}
