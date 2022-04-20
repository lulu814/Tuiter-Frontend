import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Modal, Button } from "react-bootstrap";

const upload = ({ images, setImages, setImageIds }) => {
  const maxNumber = 4;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // preview
          <div className="row upload__image-wrapper">
            <button
              className="col btn btn-outline-info btn-sm"
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Choose Images
            </button>
            <button
              className="col btn btn-outline-danger btn-sm"
              onClick={onImageRemoveAll}
            >
              Remove all
            </button>
            {/*<button className="col btn btn-outline-success btn-md" onClick={uploadImage}>Upload Image</button>*/}

            <div className="row">
              {imageList.map((image, index) => (
                <div key={index} className="col image-item">
                  <img
                    className="col"
                    src={image.data_url}
                    alt=""
                    width="150"
                  />
                  <div className="col">
                    <i
                      className="far fa-upload me-3"
                      onClick={() => onImageUpdate(index)}
                    />
                    <i
                      className="far fa-trash me-3"
                      onClick={() => onImageRemove(index)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

const Example = ({ images, setImages, setImageIds }) => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  return (
    <>
      <i className="fas fa-image me-3 image-uploading" onClick={handleShow}></i>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>{upload({ images, setImages, setImageIds })}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Example;
