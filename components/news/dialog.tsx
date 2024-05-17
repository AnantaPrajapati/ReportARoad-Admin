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
import { upload } from '../ImageUpload/page';
import createNews, { getNews } from '@/app/(pages)/dashboard/news/action';
import { useRouter } from 'next/navigation';

export default function NewsDialog({
  buttonLabel,
}: {
  buttonLabel: string,
}) {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!fileUrl) {
        console.error("No file uploaded");
        return;
      }

      await createNews(title, fileUrl, description, location);
      setTitle("");
      setDescription("");
      setImage("");
      setLocation("");
      setFile(null);
      setFileUrl(null);
      setSuccessMessage("News created successfully");

      window.location.reload();

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
              <Label htmlFor="title">Title</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className=""
                id="title"
                placeholder="News Title"
              />

              <Label htmlFor="title">Location</Label>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className=""
                id="location"
                placeholder="Location"
              />

              <Label htmlFor="Description">News Detail</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px]"
                id="Description"
                placeholder="Description"
              />

              <Label htmlFor="image">Upload Image</Label>
              <Input type="file" accept="image/*, video/*" className="" id="file" onChange={(e) => { setImage(e.target.value); handleFileUpload(e); }} />
              {fileUrl && file && (
                <div style={{ position: 'relative' }}>
                  <button className="absolute top-2 right-2" onClick={handleFileClear}>
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
            <Button>{buttonLabel} </Button>
          </DialogFooter>
        </form>
        {successMessage && (
          <div className="text-green-600">{successMessage}</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
