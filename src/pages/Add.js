import {useState} from 'react'
import { Box } from "@material-ui/core";
import ImageUploader from "react-images-upload"


export default function Add() {
  let [picture,setPicture] = useState();
  let onDrop = function (picture) {

    console.log(picture[picture.length -1]);
    setPicture(picture[picture.length - 1]);
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ImageUploader
        withIcon={true}
        buttonText="Choose Images"
        onChange={onDrop}
        imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />

      {picture && <img src={URL.createObjectURL(picture)} alt="something" />}
    </Box>
  );
}
