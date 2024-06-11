import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const uploadImage = (file) => {
  console.log(file);
};

export default uploadImage;
