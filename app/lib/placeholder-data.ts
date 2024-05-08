// placeholder-data.ts
export type User = {
    id: string;
    fullName: string;
    username: string;
    email: string;
    role: string;
    citizenshipId: string;
    [key: string]: string;
};

export type UserHeader = {
    [key: string]: string
}

export const userHeaders: UserHeader = {
    uuid: 'User ID',
    email: 'Email',
    role: 'Role',
    citizenshipId: 'Citizenship ID',
    action: "Action"
}

export type ReportHeader = {
    [key: string] : string
}

export const reportHeaders : ReportHeader = {
    userId: 'Reported By',
    createdAt: "Reported Date/Time",
    location : "Location",
    image: "Image",
    severity: "Severity",
    desc: "Description",
    status: "Status",
    action: "Action"
}


export const users: User[] = [
    {
        id: "f78c2e8a-b023-4f12-a878-e234f2901234",
        fullName: "John Doe",
        username: "john.doe",
        email: "john.doe@example.com",
        role: "Administrator",
        citizenshipId: "A12345678"
    },
    {
        id: "12c34d56-7890-4e1b-a987-12b3c4d5e6f7",
        fullName: "Jane Smith",
        username: "jane.smith",
        email: "jane.smith@example.com",
        role: "User",
        citizenshipId: "B87654321"
    },
    {
        id: "89ab0def-ghij-klmn-opqr-stuvwx12345",
        fullName: "Alice Johnson",
        username: "alice.johnson",
        email: "alice.johnson@example.com",
        role: "Manager",
        citizenshipId: "C23456789"
    },
    {
        id: "01234567-89ab-cdef-ghij-klmn01234567",
        fullName: "Bob Brown",
        username: "bob.brown",
        email: "bob.brown@example.com",
        role: "User",
        citizenshipId: "D98765432"
    },
    {
        id: "fedcba09-8765-4321-abcd-efgh12345678",
        fullName: "Carol White",
        username: "carol.white",
        email: "carol.white@example.com",
        role: "Administrator",
        citizenshipId: "E34567890"
    },
    {
        id: "34567890-fedc-ba09-8765-432112345678",
        fullName: "David Wilson",
        username: "david.wilson",
        email: "david.wilson@example.com",
        role: "Manager",
        citizenshipId: "F12345678"
    },
    {
        id: "23456789-0abc-defg-hijk-lmno23456789",
        fullName: "Eva Taylor",
        username: "eva.taylor",
        email: "eva.taylor@example.com",
        role: "User",
        citizenshipId: "G87654321"
    },
    {
        id: "567890ab-cdef-ghij-klmn-opqr34567890",
        fullName: "Frank Moore",
        username: "frank.moore",
        email: "frank.moore@example.com",
        role: "User",
        citizenshipId: "H23456789"
    },
    {
        id: "98765432-10ab-cdef-ghij-klmn45678901",
        fullName: "Grace Lee",
        username: "grace.lee",
        email: "grace.lee@example.com",
        role: "Administrator",
        citizenshipId: "I98765432"
    },
    {
        id: "abcd0123-4567-89ab-cdef-0123456789ab",
        fullName: "Henry Martin",
        username: "henry.martin",
        email: "henry.martin@example.com",
        role: "Manager",
        citizenshipId: "J34567890"
    }
];;
