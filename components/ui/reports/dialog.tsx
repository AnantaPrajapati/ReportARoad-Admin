import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const variant = buttonLabel === 'Approve' ? 'default' : 'destructive';

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
        if (errorMessage) {
            setErrorMessage('');
        }
        if (successMessage) {
            setSuccessMessage('');
        }

    };

    const handleButtonClick = () => {
        if (comment.trim() === '') {
            setErrorMessage('Comment cannot be empty');
            setSuccessMessage('');
        } else {
            onClick(comment);
            setErrorMessage('');
            setSuccessMessage('Success');
            setComment(''); 
            setTimeout(() => {
                setSuccessMessage('');
                window.location.reload();
            }, 2000);  
        }
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
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        {successMessage && (
                            <div className="text-blue-600">{successMessage}</div>
                        )}
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
