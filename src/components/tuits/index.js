import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/likes-service";
import * as tuitService from "../../services/tuits-service";

/**
 * Tuits component that has a list of tuit object
 * @param tuits tuit array
 * @param refreshTuits function that renders the refreshed list updated from backend
 * @returns {JSX.Element}
 * @constructor
 */
const Tuits = ({tuits = [], refreshTuits}) => {
    const likeTuit = (tuit) =>
        likesService.userLikesTuit('me', tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))

    const dislikeTuit = (tuit) =>
        likesService.userDislikesTuit('me', tuit._id)
            .then(refreshTuits)
            .catch(e => alert(e))

    const deleteTuit = (tid) =>
        tuitService.deleteTuit(tid)
            .then(refreshTuits)
            .catch(e => alert(e));

    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits && tuits.map(tuit =>
                        <Tuit className="the-tuit"
                              key={tuit._id}
                              deleteTuit={deleteTuit}
                              likeTuit={likeTuit}
                              dislikeTuit={dislikeTuit}
                              tuit={tuit}/>)
                }
            </ul>
        </div>
    );
}

export default Tuits;