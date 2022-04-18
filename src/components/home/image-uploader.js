import React, {forwardRef} from "react";

import {useBatchAddListener} from "@rpldy/uploady";
import {asUploadButton} from "@rpldy/upload-button";
import {getUploadPreviewForBatchItemsMethod} from "@rpldy/upload-preview";

const UploadPreview = getUploadPreviewForBatchItemsMethod(useBatchAddListener);

const DivUploadButton = asUploadButton(forwardRef(
    (props, ref) => {
        return (
            <div {...props} style={{display: "inline-block"}}>
                <i className="fas fa-image me-3" style={{cursor: "pointer"}}/>
            </div>
        )
    }
));

const ImageUploader = () => {
    return (
        <>
            <DivUploadButton/>
            <UploadPreview/>
        </>
    )
}

export default ImageUploader;