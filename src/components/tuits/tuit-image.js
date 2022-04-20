import React from "react";
import {Image,Transformation} from 'cloudinary-react';

const TuitImage = ({tuit}) => {
    const generateImgTag = (pubId) => {
        return (<Image cloudName="cici226" publicId={pubId}  className="mt-2 w-100 ttr-rounded-15px"/>)
    }

  return(
    <div className="position-relative">
        {tuit.image.map(i=>generateImgTag(i))}

      {
        tuit.imageOverlay &&
        <span
          className={`fa-2x text-white fw-bold bottom-0
                      ttr-tuit-image-overlay position-absolute`}>
          {tuit.imageOverlay}
        </span>
      }
    </div>
  );
};
export default TuitImage;
