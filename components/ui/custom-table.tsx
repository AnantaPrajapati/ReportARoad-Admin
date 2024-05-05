"use client"
// Import types (assuming User and UserHeader are defined elsewhere)
import { useState } from "react";

// Import icons (assuming from react-icons)
import { TbUserEdit } from "react-icons/tb";
import { TiUserDeleteOutline } from "react-icons/ti";
const roles: string[] = ['Admin', 'Manager', 'User'];


export default function CustomTable({ data, headers }: { data: any; headers: any }) {
    const [dialog, setDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    if (!data.length) {
        return <p>No records available</p>; // Simplified for clarity
    }

    // const editUser = (user: User) => {
    //     console.log(user);
    //     setSelectedUser(user);
    //     setDialog(true);
    // }

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
                    {data.map((dt:any) => (
                        <tr key={dt._id} className="border border-gray-400 hover:bg-gray-100">
                            {keys.map((key) => (
                                <td key={key} className="px-4 py-2 text-left border border-gray-400">
                                    {dt[key]}
                                </td>
                            ))}
                            <td className="px-4 py-2 text-left border border-gray-400">
                                <button className="hover:bg-gray-200 focus:outline-none">
                                    <TbUserEdit size={20} />
                                </button>
                                <button className="hover:bg-gray-200 focus:outline-none ml-2">
                                    <TiUserDeleteOutline size={20}  />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
}