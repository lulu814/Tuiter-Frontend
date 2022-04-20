import React, {useState} from "react";
import axios from "axios";
import {Image} from "cloudinary-react";

function cloudinary({imageSelected, setImageSelected}) {
    const uploadImage = () => {
        const formData = new FormData();
        imageSelected.forEach(f =>  formData.append("images", f))
        // formData.append("images", imageSelected[0]);
        formData.append("enctype", "multipart/form-data")
        // formData.append("upload_preset", "loplntvm");
        axios.post(
            `${process.env.REACT_APP_BASE_URL}/api/tuits/image/upload`,
            formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
            }).then((response) => {
                console.log(response);
            });
    };

    return (
        <div>
            Hey!
            <input type="file" onChange={(event) => {
                setImageSelected(event.target.files);
            }}/>
            <button onClick={uploadImage}> upload Image</button>
            <Image
             style={{width:200}}
             cloudName={process.env.CLOUDINARY_CLOUD_NAME}
             publicId="https://res.cloudinary.com/hxu0uspw9/image/upload/v1650472353/upload/file_yxq6ei.jpg"
            />
        </div>
    )
}
export default cloudinary;
