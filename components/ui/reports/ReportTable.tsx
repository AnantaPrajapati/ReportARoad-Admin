"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bW7UMdyfsuD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
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
import ReportDialog from "@/components/ui/reports/dialog";
import approveReport, { disapproveReport } from "@/app/lib/action";
import { useState, useTransition } from "react";
import { comment } from "postcss";




export default function ReportTable(props: any) {
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
              <TableHead>Report #</TableHead>
              <TableHead>userId</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>severity</TableHead>
              <TableHead>status</TableHead>
              <TableHead>Images</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>


            {tableData?.map((element: any) => (
              <TableRow key={element?._id}>
                <TableCell>{element?._id}</TableCell>
                <TableCell>{element?.userId}</TableCell>
                <TableCell>{element?.desc}</TableCell>
                <TableCell>{element?.location}</TableCell>
                <TableCell>{element?.severity}</TableCell>
                <TableCell>{element?.status}</TableCell>
                <TableCell>
                  <div className="flex space-x-4">
                    {/* {element?.images && element.images.map((imageUrl: string, index: number) => (
                      <div key={index}>
                        <Image src={imageUrl} alt={`Image ${index}`} height={200} width={200} />
                      </div>
                    ))} */}
              
                      <div  >
                        {element.images && element.images.length>0 &&
                        <Image src={element?.images[0]} alt={`Image`} height={200} width={200} />
                      }
                      </div>
   
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <ReportDialog buttonLabel="Approve" onClick={(comment)=>startTransition(()=>approveReport(element?._id, comment))} status={open}
                     />
                    <ReportDialog  buttonLabel="Reject" onClick={(comment)=>startTransition(()=>disapproveReport(element?._id, comment))} status={open}/>

                  </div>
                </TableCell>
              </TableRow>
            ))}



            {/* <TableRow>
              <TableCell>123</TableCell>
              <TableCell>
                Pothole on Main Street, causing damage to vehicles. Needs
                immediate attention.
              </TableCell>
              <TableCell>123 Main Street, Anytown USA</TableCell>
              <TableCell>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  <Image
                    alt="Report Image"
                    className="rounded-md"
                    height={100}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width={150}
                  />
                  <Image
                    alt="Report Image"
                    className="rounded-md"
                    height={100}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width={150}
                  />
                  <Image
                    alt="Report Image"
                    className="rounded-md hidden md:block"
                    height={100}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width={150}
                  />
                  <Image
                    alt="Report Image"
                    className="rounded-md hidden lg:block"
                    height={100}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width={150}
                  />
                </div>
              </TableCell>
              <TableCell>

              </TableCell>
            </TableRow> */}
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
