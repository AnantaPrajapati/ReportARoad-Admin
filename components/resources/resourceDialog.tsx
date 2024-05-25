import { useState, ChangeEvent, FormEvent } from 'react';
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
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { upload } from '@/components/ImageUpload/page';

export default function ResourceDialog({
  onClick,
  buttonLabel,
  status
}: {
  buttonLabel: string,
  onClick: (image: string, time: string, statuss: string) => void;
  status: boolean;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [statuss, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!time || !statuss || !fileUrl ) {
      setErrorMessage("Please fill in the description or upload at least one image");
      return;
    }

    onClick(fileUrl, time, image);
    setSuccessMessage('Report has been updated');
    setTime('');
    setStatus('');
    setFile(null);
    setFileUrl(null);

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const uploadedFileUrl = await upload(selectedFile);
      setFile(selectedFile);
      setFileUrl(uploadedFileUrl);
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
              <Label htmlFor="Time">Time</Label>
              <Input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className=""
                id="Description"
                placeholder="Description"
              />
              <Label htmlFor="Status">Status</Label>
              <Input
                value={statuss}
                onChange={(e) => setStatus(e.target.value)}
                className=""
                id="Description"
                placeholder="Description"
              />

              <Label htmlFor="image">Upload Image</Label>
              <Input
                type="file"
                accept="image/*, video/*"
                className=""
                id="file"
                onChange={(e) => {
                  setImage(e.target.value);
                  handleFileUpload(e);
                }}
              />
              {fileUrl && file && (
                <div style={{ position: 'relative' }}>
                  <button type="button" className="absolute top-2 right-2" onClick={handleFileClear}>
                    <AiOutlineCloseCircle size={24} />
                  </button>
                  {file.type.startsWith('image') ? (
                    <img src={fileUrl} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  ) : (
                    <video src={fileUrl} controls style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  )}
                </div>
              )}
            </div>
          </div>
          <DialogFooter className="justify-between">
            <Button type="submit">{buttonLabel}</Button>
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
