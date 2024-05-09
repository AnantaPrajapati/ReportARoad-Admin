/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F2TL4bjscaC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"


export default function UserDialog({ buttonLabel }: { buttonLabel: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">{buttonLabel}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{buttonLabel} User</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <p>Are you sure, You want to delete this user?</p>
                    </div>
                </div>
                <DialogFooter className="justify-between">
                    <Button variant="destructive">{buttonLabel}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}