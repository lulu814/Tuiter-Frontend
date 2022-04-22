import React from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import 'emoji-mart/css/emoji-mart.css'
import {Picker} from 'emoji-mart'

/**
 * Component provides the emoji popover window when creating tuit
 * @param tuit Tuit object
 * @param setTuit
 * @returns {JSX.Element}
 */
const emojiPopover = ({tuit, setTuit}) => {
    return (
        <Popover>
            <Picker
                onSelect={(emoji) => {
                    setTuit(`${tuit}` + String.fromCodePoint(`0x${emoji.unified}`))
                }}
                title={""}
                style={{width: 'unset'}}
                set={"twitter"}
            />
        </Popover>
    );
}

/**
 * Component provides the emoji picking feature
 * @param tuit Tuit object
 * @param setTuit
 * @returns {JSX.Element}
 * @constructor
 */
const EmojiPicker = ({tuit, setTuit}) => {
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={emojiPopover({tuit, setTuit})}>
            <i className="far fa-face-smile me-3"/>
        </OverlayTrigger>
    );
}

export default EmojiPicker;

