import React, { useContext, useState } from "react";
import { multistepContext } from "../Context/StepContext";

const ImageUpload = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [error, setError] = useState("");

  const { setSteps } = useContext(multistepContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> file
    console.log("handle uploading-", file);

    if (file && !file.name.toLowerCase().endsWith(".png")) {
      setError("Please Upload .png file");
    }
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let newFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(newFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(newFile);
    setError("");
  };

  const handleSubmitnext = (e) => {
    e.preventDefault();
    if (file && file.name.toLowerCase().endsWith(".png")) {
      setSteps(2);
    } else {
      setSteps(1);
    }
  };

  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} alt="Preview" />;
  } else {
    $imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }

  return (
    <div className="previewComponent">
      <form onSubmit={handleSubmit}>
        <input className="fileInput" type="file" onChange={handleImageChange} />
        <span className="Error">{error}</span>
        <button className="submitButton" type="submit" onClick={handleSubmit}>
          Upload Image
        </button>
      </form>
      <div className="imgPreview">{$imagePreview}</div>
      <button
        className="next"
        onClick={handleSubmitnext}
        disabled={error !== ""}
      >
        Next
      </button>
    </div>
  );
};

export default ImageUpload;
