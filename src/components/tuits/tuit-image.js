import React from "react";
import {Image} from 'cloudinary-react';

/**
 * Component for uploading image within a tuit
 * @param tuit
 * @returns {JSX.Element}
 * @constructor
 */
const TuitImage = ({tuit}) => {
    const generateImgTag = (pubId) => {
        // console.log(process.env.REACT_APP_CLOUD_NAME)
        return (<Image key={pubId}
                       cloudName={process.env.REACT_APP_CLOUD_NAME} publicId={pubId}
                       className="mt-2 w-100 ttr-rounded-15px"/>)
    }

    return (
        <div className="position-relative">
            {tuit.image.map(i => generateImgTag(i))}

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
