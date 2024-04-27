import Image from "next/image";
import Link from "next/link";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div>
                    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                        <div className="w-full flex flex-col md:w-64 bg-gray-300 rounded-sm gap-4">
                            <p className="text-3xl font-bold"> Report Road </p>
                            <Link href="/dashboard"> Dashboard </Link>
                            <Link href="/dashboard/customers"> Users </Link>
                            <div>
                                <Image src="/icons/report-svgrepo-com-2.svg" width={20} height={20} alt="" />
                                <span>
                                    <Link href="/dashboard/reports">  Reports </Link>
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
