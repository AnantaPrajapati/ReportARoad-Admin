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
                <TableCell>{element?.rating}</TableCell>
                <TableCell>{element?.feedback}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    {/* <ReportDialog buttonLabel="Reject" />
                    <ReportDialog buttonLabel="Approve" /> */}
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
