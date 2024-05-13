/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F2TL4bjscaC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function NewsDialog({
    buttonLabel,
}: {
    buttonLabel: string;
}) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>{buttonLabel}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{buttonLabel}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" className="" id="title" placeholder="News Title" />

                        <Label htmlFor="Description">News Detail</Label>
                        <Textarea className="min-h-[100px]" id="Description" placeholder="Description" />

                        <Label htmlFor="image">Title</Label>
                        <Input type="file" className="" id="image" />

                    </div>
                </div>
                <DialogFooter className="justify-between">
                    <Button >
                        {buttonLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}