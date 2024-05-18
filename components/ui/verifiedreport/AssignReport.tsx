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
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import createNews, { getNews } from '@/app/(pages)/dashboard/news/action';
import { useRouter } from 'next/navigation';
import { upload } from '@/components/ImageUpload/page';
import AssignReport from '@/app/(pages)/dashboard/verifiedreport/action';

export default function AssignReportDialog({
  buttonLabel,
}: {
  buttonLabel: string,
}) {
  const [file, setFile] = useState<File | null>(null);
  const [image, setFileUrl] = useState<string | null>(null);
  const [manpower, setManpower] = useState("");
  const [budget, setBudget] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  // const [image, setImage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!manpower || !budget || !time || !status || !image) {
      setErrorMessage('All fields are required and at least one image must be uploaded.');
      return;
    }
    try {   
      await AssignReport(manpower, budget, time, status, image );
      setManpower("");
      setBudget("");
      setFileUrl("");
      setTime("");
      setStatus("");
      setFile(null);
      setFileUrl(null);
      setSuccessMessage("Report Assigned successfully");
      setErrorMessage('');

 
      // window.location.reload();

    } catch (error) {
      console.error("Error during news creation:", error);
    }
  };

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const fileUrl = await upload(selectedFile);
      setFile(selectedFile);
      setFileUrl(fileUrl);
    } else {
      console.log("No file selected");
    }
  };

  const handleFileClear = () => {
    setFile(null);
    setFileUrl(null);
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
              <Label htmlFor="title">Manpower</Label>
              <Input
                value={manpower}
                onChange={(e) => setManpower(e.target.value)}
                type="text"
                className=""
                id="Manpower"
                placeholder="Manpower"
              />

              <Label htmlFor="Budget">Budget</Label>
              <Input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                type="text"
                className=""
                id="Budget"
                placeholder="Budget"
              />
              <Label htmlFor="Time">Time</Label>
              <Input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="text"
                className=""
                id="Time"
                placeholder="Time"
              />
              <Label htmlFor="Status">Status</Label>
              <Input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className=""
                id="Status"
                placeholder="Status"
              />

              <Label htmlFor="image">Upload Image</Label>
              <Input type="file" accept="image/*, video/*" className="" id="file" onChange={(e) => { setFileUrl(e.target.value); handleFileUpload(e); }} />
              {image && file && (
                <div style={{ position: 'relative' }}>
                  <button className="absolute top-2 right-2" onClick={handleFileClear}>
                    <AiOutlineCloseCircle size={24} />
                  </button>
                  {file.type.startsWith('image') ? (
                    <img src={image} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  ) : (
                    <video src={image} controls style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  )}
                </div>
              )}
            </div>
          </div>
          <DialogFooter className="justify-between">
            <Button>{buttonLabel} </Button>
          </DialogFooter>
        </form>
        {errorMessage && (
          <div className="text-red-500 mt-2">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-Blue-600">{successMessage}</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
