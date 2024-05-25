"use client"
import SideNav from "@/components/ui/dashboard/sidenav"
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
    const userID = window.localStorage.getItem("userID")
    if(!userID){
        const router = useRouter();
        router.replace("/");
        return;
    }

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}