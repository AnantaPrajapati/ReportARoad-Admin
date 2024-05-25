import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Image from 'next/image';

interface NewsDialogProps {
  open: boolean;
  handleClose: () => void;
  news: {
    title: string;
    image: string;
    desc: string;
  } | null;
}

const NewsDialog: React.FC<NewsDialogProps> = ({ open, handleClose, news }) => {
  if (!news) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{news.title}</DialogTitle>
      <DialogContent>
        {String(news.image).includes('.jpg' || ".png") && (
          <Image
            alt="News Image"
            height={400}
            src={news.image}
            style={{
              aspectRatio: '600/400',
              objectFit: 'cover',
            }}
            width={600}
          />
        )}
        {String(news.image).includes('.mov') && (
          <video
            src={news.image}
            controls
            height={400}
            style={{
              aspectRatio: '500/270',
              objectFit: 'contain',
            }}
            width={600}
          ></video>
        )}
        <p className="mt-4">{news.desc}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewsDialog;
