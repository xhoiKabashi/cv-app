/* eslint-disable react/prop-types */
import { useState } from "react";

function ImageUploader({ onImageUpload }) {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = (e) => {
    e.preventDefault();
    if (image) {
      onImageUpload(image); // Call the callback function with the image data
    }
  };

  return (
    <div className="card">
      <h2 className="card-title">Image Uploader</h2>
      <div className="img-place">
        {image && (
          <div className="img-container">
            <img src={image} alt="Uploaded" className="uploaded-image" />
          </div>
        )}
      </div>
      <div className="card-actions">
        <label htmlFor="fileInput" className="custom-file-input">
          Choose Image
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {image && (
          <button onClick={handleSaveImage} className="save-button">
            Save Image
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;
