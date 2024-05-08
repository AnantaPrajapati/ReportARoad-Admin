/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jGpwRyagj6B
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SignupPage() {
    return (
        <div key="1" className="grid w-full grid-cols-1 lg:grid-cols-2 lg:min-h-[800px]">
            <div className="bg-gray-100 h-screen p-6 lg:flex lg:items-center lg:justify-center dark:bg-gray-800">
                <div className="mx-auto max-w-md space-y-4">
                    <Image
                        alt="Pothole Reporting"
                        className="mx-auto"
                        height="400"
                        src="/pana.svg"
                        style={{
                            aspectRatio: "400/400",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Report Potholes, Fix Your City</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Our app makes it easy for citizens to report potholes and for authorities to track and fix them.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-6 lg:p-10">
                <div className="mx-auto w-full max-w-md space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Create an account</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <Link className="underline ml-1" href="/">
                                Sign in
                            </Link>
                        </p>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="Enter your first name" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Enter your last name" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" placeholder="Enter your username" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" required type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" required type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="role">Role</Label>
                            <Select defaultValue="user" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">Admin</SelectItem>
                                    <SelectItem value="user">User</SelectItem>
                                    <SelectItem value="government-official">Government Official</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" type="submit">
                            Sign up
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}