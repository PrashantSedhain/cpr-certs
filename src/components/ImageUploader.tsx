import { Box, Button, CloseButton, Image, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export interface ImageUploaderData {
  selectedImage: string | null;
}

interface ImageUploaderProps {
  onImageUpload: (data: ImageUploaderData) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    handleFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleFile = (file: File | undefined) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (result) {
          const dataUrl = result.toString();
          setSelectedImage(dataUrl);
          setError(null);
          // Pass the selected image data to the parent component
          onImageUpload({ selectedImage: dataUrl });
        }
      };
      reader.onerror = () => {
        setError("Error reading file");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRemoveImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedImage(null);
    setError(null);
    // Reset the file input value to trigger onChange event
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    // Pass null as the selected image data to the parent component
    onImageUpload({ selectedImage: null });
  };

  return (
    <label htmlFor="image-upload">
      <Box
        border="2px dashed #ccc"
        borderRadius="8px"
        p={4}
        textAlign="center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        cursor="pointer"
        position="relative"
      >
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          hidden
          ref={fileInputRef}
          id="image-upload"
        />
        <Box>
          <Box
            as="span"
            display="block"
            mb={4}
            fontSize="1.2rem"
            fontWeight="bold"
            color="#333"
          >
            Drag and Drop or Click to Upload an Image
          </Box>
          <Button
            as="span"
            variant="outline"
            size="sm"
            color="#333"
            border="1px solid #333"
            _hover={{ bg: "#333", color: "#fff" }}
            _active={{ bg: "#333", color: "#fff" }}
          >
            Select Image
          </Button>
        </Box>
        {selectedImage && (
          <Box mt={4} position="relative">
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "8px",
              }}
            >
              Preview:
            </h2>
            <Box
              position="relative"
              display="inline-block"
              maxH="300px"
              maxW="300px"
              mx="auto"
            >
              <Image src={selectedImage} alt="Preview" />
              <CloseButton
                position="absolute"
                top={-2}
                right={-2}
                size="sm"
                onClick={handleRemoveImage}
                colorScheme="whiteAlpha"
                bg="transparent"
                _hover={{ bg: "transparent", color: "#e74c3c" }}
              />
            </Box>
          </Box>
        )}
        {error && (
          <Box color="red" mt={4}>
            {error}
          </Box>
        )}
      </Box>
    </label>
  );
};

export default ImageUploader;
