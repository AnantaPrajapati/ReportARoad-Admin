"use client"
// Import types (assuming User and UserHeader are defined elsewhere)
import { User, UserHeader } from "@/app/lib/placeholder-data";
import { useState } from "react";

// Import icons (assuming from react-icons)
import { TbUserEdit } from "react-icons/tb";
import { TiUserDeleteOutline } from "react-icons/ti";
const roles: string[] = ['Admin', 'Manager', 'User'];


export default function DynamicTable({ data, headers }: { data: User[]; headers: UserHeader }) {
    const [dialog, setDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    if (!data.length) {
        return <p>No records available</p>; // Simplified for clarity
    }

    const editUser = (user: User) => {
        console.log(user);
        setSelectedUser(user);
        setDialog(true);
    }

    const Dialog = ({ children, isOpen, onClose }: {
        children: React.ReactNode,
        isOpen: Boolean,
        onClose: () => void

    }) => {
        return (
            <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setDialog(false)}></div>
                <div className="bg-white rounded-lg p-4 shadow-md opacity-90">
                    {children}
                </div>
            </div>
        );
    };

    const keys = Object.keys(headers);

    return (
        <div>

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        {keys.map((key) => (
                            <th key={key} className="px-4 py-2 text-left text-gray-700 bg-gray-200 border  border-gray-400">
                                {headers[key]}
                            </th>
                        ))}
                        <th className="px-4 py-2 text-left text-gray-700 bg-gray-200 border border-gray-400">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className="border border-gray-400 hover:bg-gray-100">
                            {keys.map((key) => (
                                <td key={key} className="px-4 py-2 text-left border border-gray-400">
                                    {user[key]}
                                </td>
                            ))}
                            <td className="px-4 py-2 text-left border border-gray-400">
                                <button className="hover:bg-gray-200 focus:outline-none" onClick={() => editUser(user)}>
                                    <TbUserEdit size={20} className="text-blue-500" />
                                </button>
                                <button className="hover:bg-gray-200 focus:outline-none ml-2">
                                    <TiUserDeleteOutline size={20} className="text-red-500" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {dialog && (
                <Dialog isOpen={dialog} onClose={() => setDialog(false)}>
                    <div className="container mx-auto p-4">
                        <header className="text-center font-bold text-xl mb-4">User Details</header>
                        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-4 rounded shadow-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-group">
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                        Full Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={selectedUser?.fullName}
                                        readOnly
                                        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={selectedUser?.email}
                                        readOnly
                                        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                        Role:
                                    </label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={selectedUser?.role}
                                        onChange={() => console.log(selectedUser)}
                                        className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {roles.map((role) => (
                                            <option key={role} value={role}>
                                                {role}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="citizenshipId" className="block text-sm font-medium text-gray-700">
                                        Citizenship ID:
                                    </label>
                                    <input
                                        type="text"
                                        id="citizenshipId"
                                        name="citizenshipId"
                                        value={selectedUser?.citizenshipId}
                                        readOnly
                                        className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </form>
                        <footer className="flex justify-end mt-4">
                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => setDialog(false)}>
                                Save
                            </button>
                            <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={() => setDialog(false)}>
                                Cancel
                            </button>
                        </footer>
                    </div>
                </Dialog>
            )}
        </div>
    );
}
