"use client"
import { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { updateReport } from '@/app/(pages)/dashboard/verifiedreport/action';
import { DeleteNews } from '@/app/(pages)/dashboard/news/action';

export default function DeleteNewsDialog({
  buttonLabel,
  _id, 
}: {
  buttonLabel: string,
  _id: string,

}) {

  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(""); 
    try {
      if (!comment) {
        console.error("No comments");
        return;
      }

      await DeleteNews(_id, comment);
      setComment(""),
      setSuccessMessage("News Deleted successfully");
      setTimeout(() => {
        setSuccessMessage('');
        window.location.reload();
    }, 2000);  

      // Redirect to news section
      // router.push("/dashboard/news");

    } catch (error) {
      console.error("Error during news creation:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{buttonLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{buttonLabel}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="Comment">Comment</Label>
              <Input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className=""
                id="Comment"
                placeholder="Comment"
              />
            </div>
          </div>
          <DialogFooter className="justify-between">
            <Button>{buttonLabel} </Button>
          </DialogFooter>
        </form>
        {successMessage && (
          <div className="text-green-600">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-600">{errorMessage}</div>
        )}
      </DialogContent>
    </Dialog>
  );
}