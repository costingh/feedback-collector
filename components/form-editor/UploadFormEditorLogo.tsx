import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import imageCompression from 'browser-image-compression';

interface UploadFormEditorLogoProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    setImages: any; 
	inputType: string;
}

const UploadFormEditorLogo: React.FC<UploadFormEditorLogoProps> = ({
    src,
    alt,
    width,
    height,
    setImages,
	inputType
}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(src);

	useEffect(() => {
		console.log(selectedImage)
	}, [selectedImage])

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                // Image compression options
                const options = {
                    maxSizeMB: 1, 
                    maxWidthOrHeight: 300, 
                    useWebWorker: true,
                };

                // Compress image
                const compressedFile = await imageCompression(file, options);

                // Convert image to Base64
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result) {
                        setSelectedImage(reader.result as string);
						setImages(reader.result)
                    }
                };
                reader.readAsDataURL(compressedFile);
            } catch (error) {
                console.error("Error compressing or converting image", error);
            }
        }
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput-' + inputType)?.click();
    };

    return (
        <div onClick={handleButtonClick} className='cursor-pointer hover:opacity-60'>
            <Image
                src={selectedImage || src}
                width={width}
                height={height}
                alt={alt}
                className="rounded-[3px]"
            />
            <input
                type="file"
                id={"fileInput-" + inputType}
                accept="image/jpeg, image/png, image/svg+xml"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default UploadFormEditorLogo;
