import React from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import logo from "../pixelsDesign/asset/louis.png";
const Upload = () => {
  const [img, setImg] = React.useState(logo);
  const [progressBar, setProgresssBar] = React.useState(0.0001);

  const uploadImg = async (e) => {
    let file = e.target.files[0];
    const saveImg = URL.createObjectURL(file);
    setImg(saveImg);
    // upload image to firebase/firestore
    // first import what we need, getStorage and ref
    // create a reference

    const storage = getStorage();
    const storageRef = ref(storage, "img/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgresssBar(progress);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          console.log("file available at", downloadUrl);
        });
      }
    );
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {`${Math.floor(progressBar)}%`}
      <img
        src={img}
        alt=""
        style={{ width: "300px", height: "250px", background: "whitesmoke", objectFit: "cover" }}
      />
      <form>
        <label htmlFor="fx">Upload Your Image</label>
        <input type="file" id="fx" onChange={uploadImg} style={{ display: "none" }} />
      </form>
    </div>
  );
};
export default Upload;
