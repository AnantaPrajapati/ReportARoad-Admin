import getUsers from "@/app/lib/action";

export default async function Page() {
    const users = await getUsers();

    return (
        <div>
            {users.map((user: any) => (
                <div key={user.id}>
                    <span className="text-2xl p-3">
                        {user.name}
                    </span>
                </div>
            ))}
        </div>
    );
}