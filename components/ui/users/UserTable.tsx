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
import UserDialog from "./UserDialog";
import DeleteUser from "@/app/(pages)/dashboard/users/action";
import { useState, useTransition } from "react";

export default function UserTable(props: any) {
  const { tableData } = props; 

  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(isPending)

   const handleClose =()=>{
      if(isPending){
          setOpen(false);
      }
   }

  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-4 md:p-8 overflow-auto">
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>userID</TableHead>
              <TableHead>First name</TableHead>
              <TableHead>Last name</TableHead>
              <TableHead>Username </TableHead>
              {/* <TableHead>E-mail</TableHead> */}
              <TableHead>Role</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

          {tableData.map((element: any) => (
              <TableRow key={element?._id}>
                <TableCell>{element?._id}</TableCell>
                <TableCell>{element?.firstname}</TableCell>
                <TableCell>{element?.lastname}</TableCell>
                <TableCell>{element?.username}</TableCell>
                {/* <TableCell>{element?.email}</TableCell> */}
                <TableCell>{element?.role}</TableCell>
                <TableCell>{element?.city}</TableCell>
                <TableCell>{element?.verified ? "true" : "false"}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                  <UserDialog buttonLabel="Delete" onClick={(comment)=>startTransition(()=>DeleteUser(element?._id, comment))} status={open} />
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
