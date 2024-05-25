"use client"
import { Package2Icon, BellIcon, HomeIcon, UsersIcon, FileTextIcon, NewspaperIcon , MessageCircleWarning , ShieldCheck , MessageSquareMore, Shovel , FileWarning, LogOut  } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../button';


// import {signOut } from "next-auth/react";
export default function SideNav() {

    const role = window.localStorage.getItem("role");
    const isGovernment = role == "Government" ? true: false;
    const isAdmin = role == "Admin" ? true: false;

    return (
        <div className="hidden border-r bg-#2C75FF-100/40 lg:block dark:bg-gray-800/40 h-screen">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="text-3xl">ReportARoad</span>
                    </Link>
                    {/* <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                        <BellIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button> */}
                </div>
               
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                            href="/dashboard"
                        >
                            <HomeIcon className="h-4 w-4 " />
                            Home
                        </Link>
                      {!isGovernment && (<Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/dashboard/users"
                        >
                            <UsersIcon className="h-4 w-4" />
                            Users
                        </Link>)} 
                       {!isAdmin && (<Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/dashboard/reports"
                        >
                            <FileWarning  className="h-4 w-4" />
                            Reports
                        </Link>)}
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/dashboard/IncidentReport"
                        >
                            <MessageCircleWarning className="h-4 w-4" />
                            Incident Reports
                        </Link>
                        {!isAdmin &&(<Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/dashboard/news"
                        >
                            <NewspaperIcon className="h-4 w-4" />
                            News
                        </Link>)}
                        {!isAdmin &&(<Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/dashboard/verifiedreport"
                        >
                            <ShieldCheck  className="h-4 w-4" />
                            Verified Report
                        </Link>)}
                        {!isAdmin &&(<Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/dashboard/ratingandfeedback"
                        >
                            <MessageSquareMore  className="h-4 w-4" />
                            Ratings and feedback
                        </Link>)}
                        {!isAdmin &&(<Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/dashboard/resources"
                        >
                            <Shovel  className="h-4 w-4" />
                            Manage Resources
                        </Link>)}
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="/"
                        >
                            <LogOut className="h-4 w-4" />
                           Logout
                        </Link>
                    </nav>
                    </div>
                {/* <div className="flex justify-center">
                    <Button
                        // onClick={() => signOut()}
                        className="flex items-center gap-3 rounded-lg px-4 py-2 text-lg text-white bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition-all"
                    >
                        Logout
                    </Button>
                </div> */}
            </div>
        </div>
    );
}