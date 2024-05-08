import { Package2Icon, BellIcon, HomeIcon, UsersIcon, FileTextIcon, NewspaperIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../button';

export default function SideNav() {
    return (
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 h-screen">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="">Acme Inc</span>
                    </Link>
                    <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                        <BellIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                            href="#"
                        >
                            <HomeIcon className="h-4 w-4" />
                            Home
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <UsersIcon className="h-4 w-4" />
                            Users
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <FileTextIcon className="h-4 w-4" />
                            Reports
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <NewspaperIcon className="h-4 w-4" />
                            News
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}