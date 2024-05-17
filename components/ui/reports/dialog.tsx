import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ReportDialog({
    buttonLabel,
    onClick,
    status,
}: {
    buttonLabel: string;
    onClick: (comment: string) => void;
    status: boolean;
}) {
    const [comment, setComment] = useState('');

    const variant = buttonLabel === 'Approve' ? 'default' : 'destructive';

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleButtonClick = () => {
        if (comment.trim() !== '') {
            onClick(comment);
        }
        window.location.reload();
    };

    return (
        <Dialog>
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
                        <Textarea
                            className="min-h-[100px]"
                            id="comment"
                            placeholder="Add a comment (optional)"
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </div>
                </div>
                <DialogFooter className="justify-between">
                    <Button variant={variant} onClick={handleButtonClick}>
                        {buttonLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
