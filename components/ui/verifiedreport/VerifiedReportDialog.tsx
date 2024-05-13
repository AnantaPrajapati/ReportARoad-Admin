/**
 * v0 by Vercel.
 * @see https://v0.dev/t/F2TL4bjscaC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function VerifiedReportDialog({ buttonLabel }: { buttonLabel: string }) {
    const variant = buttonLabel === 'Update' ? 'default' : 'destructive'
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
                        <Textarea className="min-h-[100px]" id="comment" placeholder="Add a comment (optional)" />
                    </div>
                </div>
                <DialogFooter className="justify-between">
                    <Button variant={variant}>{buttonLabel}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        
    )
}


// import { Button } from "@/components/ui/button";
// import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Input } from "@/components/ui/input";

// export default function VerifiedReportDialog({ buttonLabel, onClick }: { buttonLabel: string; onClick: (data: any) => void }) {
//     const isUpdateButton = buttonLabel === 'Update';

//     const handleButtonClick = () => {
//         let data = {};
//         if (isUpdateButton) {
//             // Handle update button click
//             const descriptionValue = (document.getElementById('description') as HTMLTextAreaElement)?.value;
//             const imageInput = document.getElementById('image') as HTMLInputElement;
//             const imageFile = imageInput?.files ? imageInput.files[0] : null; // Check if input is of type file
//             data = {
//                 description: descriptionValue,
//                 image: imageFile, // Assuming you want to upload an image
//             };
//         } else {
//             // Handle other button click
//             const titleValue = (document.getElementById('title') as HTMLInputElement)?.value;
//             const descriptionValue = (document.getElementById('Description') as HTMLTextAreaElement)?.value;
//             const imageInput = document.getElementById('image') as HTMLInputElement;
//             const imageFile = imageInput?.files ? imageInput.files[0] : null; // Check if input is of type file
//             data = {
//                 title: titleValue,
//                 description: descriptionValue,
//                 image: imageFile, // Assuming you want to upload an image
//             };
//         }
    
//         // Invoke the onClick callback with the data
//         onClick(data);
//     };
//     const dialogContent = (
//         <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//                 <DialogTitle>{buttonLabel} Report</DialogTitle>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//                 <div className="grid gap-2">
//                     {isUpdateButton ? (
//                         <>
//                             <Label htmlFor="description">Description</Label>
//                             <Textarea className="min-h-[100px]" id="description" placeholder="Add a description" />

//                             <Label htmlFor="image">Image</Label>
//                             <Input type="file" className="" id="image" />
//                         </>
//                     ) : (
//                         <>
//                             <Label htmlFor="title">Title</Label>
//                             <Input type="text" className="" id="title" placeholder="News Title" />

//                             <Label htmlFor="Description">News Detail</Label>
//                             <Textarea className="min-h-[100px]" id="Description" placeholder="Description" />

//                             <Label htmlFor="image">Image</Label>
//                             <Input type="file" className="" id="image" />
//                         </>
//                     )}
//                 </div>
//             </div>
//             <DialogFooter className="justify-between">
//                 <Button variant={isUpdateButton ? 'default' : 'destructive'} onClick={handleButtonClick}>{buttonLabel}</Button>
//             </DialogFooter>
//         </DialogContent>
//     );

//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 <Button variant={isUpdateButton ? 'default' : 'destructive'}>{buttonLabel}</Button>
//             </DialogTrigger>
//             {dialogContent}
//         </Dialog>
//     );
// }


