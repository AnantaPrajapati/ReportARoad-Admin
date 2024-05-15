'use client';

import {CldUploadWidget} from 'next-cloudinary';


export async function upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'gylcvpx1'); 

    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dawfvl61t/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        console.log('Response:', response);
        console.log('Data:', data);

        if (!response.ok) {
            throw new Error(`Failed to upload file: ${data.message}`);
        }

        return data.secure_url; 
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error; 
    }
}
