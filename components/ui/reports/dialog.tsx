/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F2TL4bjscaC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ReportDialog({ buttonLabel }: { buttonLabel: string }) {
    const variant = buttonLabel === 'Approve' ? 'default' : 'outline'
    return (
        <Dialog key="1">
            <DialogTrigger asChild>
                <Button variant={variant}>{buttonLabel}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{buttonLabel} Report</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="comment">Comment</Label>
                        <Textarea className="min-h-[100px]" id="comment" placeholder="Add a comment (optional)" />
                    </div>
                </div>
                <DialogFooter className="justify-between">
                    <Button>{buttonLabel}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}