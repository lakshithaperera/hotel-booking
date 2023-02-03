import { useState, useRef } from "react";
import { BorderButton, ColorButton} from "../Navbar/Navbar-styled";
import "./drag-styled.jsx"
import { Dropzone, UploadsArea } from "./drag-styled.jsx";
const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
  
  // send files to the server 
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  if (files) return (
    <UploadsArea className="uploads">
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className="actions">
            <BorderButton className="btn" onClick={() => setFiles(null)}>Cancel</BorderButton>
            <ColorButton onClick={handleUpload}>Upload</ColorButton>
        </div>
    </UploadsArea>
  )

  return (
    <>
        <Dropzone 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <p>Drag and Drop Files to Upload</p>
          <p>Or</p>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <BorderButton onClick={() => inputRef.current.click()}>Select Files</BorderButton>
        </Dropzone>
    </>
  );
};

export default DragDropFiles;