"use client"
import { useState } from "react";

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <>
            <button className="p-2 rounded-sm bg-green-500 text-white"> Open Modal </button>

            <div>
                
            </div>
        </>
    )
}