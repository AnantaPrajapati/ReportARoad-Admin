
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

export type UserHeader = {
    [key: string]: string
}

export const userHeaders: UserHeader = {
    _id: 'User ID',
    email: 'Email',
    role: 'Role',
    citizenshipId: 'Citizenship ID',
    action: "Action"
}

