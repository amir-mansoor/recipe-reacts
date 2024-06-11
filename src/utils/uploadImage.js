import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const uploadImage = (file) => {
  const orgFile = file[0];
  if (!orgFile) {
    return;
  }

  const storageRef = ref(storage, `files/${orgFile.name}`);
  const uploadTask = uploadBytesResumable(storageRef, orgFile);

  uploadTask.on(
    "state_changed",
    (snapShot) => {},
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        let imgUrl = downloadURL;
        return imgUrl;
      });
    }
  );
};

export default uploadImage;
