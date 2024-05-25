"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bW7UMdyfsuD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
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
import Image from "next/image";
import { useState, useTransition } from "react";
import { comment } from "postcss";
import notifyUser from "@/app/(pages)/dashboard/IncidentReport/action";
import ResourceDialog from "./resourceDialog";
import { DeleteResource, UpResourceReport } from "@/app/(pages)/dashboard/verifiedreport/action";
import DeleteDialog from "./deleteDialog";



export default function ResourceTable(props: any) {
  const { tableData } = props; 

  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(isPending)

   const handleClose =()=>{
      if(isPending){
          setOpen(false);
      }
   }

  // console.log("props data are ", tableData, isPending)
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-4 md:p-8 overflow-auto">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report</TableHead>
              {/* <TableHead>User</TableHead> */}
              <TableHead>Manpower</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>


            {tableData?.map((element: any) => (
              <TableRow key={element?._id}>
                <TableCell>{element?._id}</TableCell>
                {/* <TableCell>{element?.userId}</TableCell> */}
                <TableCell>{element?.manpower}</TableCell>
                <TableCell>{element?.budget}</TableCell>
                {/* <TableCell>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(element?.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    {element?.location}
                  </a>
                </TableCell> */}
                <TableCell>{element?.time}</TableCell>
                <TableCell>{element?.statuss}</TableCell>
                {/* <TableCell>{element?.image}</TableCell> */}
                <TableCell>
                  <div className="flex space-x-4">
                      <div  >
                        {element.image && element.image.length>0 &&
                        <Image src={element?.image} alt={`Image`} height={200} width={200} />
                      }
                      </div>
   
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                  <ResourceDialog buttonLabel="Update" onClick={( time,statuss, image ) => startTransition(() => UpResourceReport(element?._id, element?.userId, time, statuss,image ))} status={open}/>
                  <DeleteDialog buttonLabel="Delete" onClick={(comment)=>startTransition(()=>DeleteResource(element?._id, comment))} status={open} />
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
