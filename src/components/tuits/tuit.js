import React from "react";
import emoji from 'react-easy-emoji'

import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";
import {Link, useNavigate} from "react-router-dom";


/**
 * Tuit component contains all information of the tuit object
 * @param tuit Tuit object
 * @param deleteTuit function that will delete a tuit
 * @param likeTuit function triggered when user click like button
 * @param dislikeTuit function triggered when user click dislike button
 * @returns {JSX.Element}
 * @constructor
 */
const Tuit = ({tuit, deleteTuit, likeTuit, dislikeTuit, bookmarkTuit}) => {
    const navigate = useNavigate();
    const daysOld = (tuit) => {
        const now = new Date();
        const nowMillis = now.getTime();
        const posted = new Date(tuit.postedOn);
        const postedMillis = posted.getTime();
        const oldMillis = nowMillis - postedMillis;
        let old = 0.0;
        const secondsOld = oldMillis/1000.0;
        const minutesOld = secondsOld/60.0;
        const hoursOld = minutesOld/60.0;
        const daysOld = hoursOld/24.0;
        if(daysOld > 1) {
            old = Math.round(daysOld) + 'd';
        } else if(hoursOld > 1) {
            old = Math.round(hoursOld) + 'h';
        } else if(minutesOld > 1) {
            old = Math.round(minutesOld) + 'm';
        } else if(secondsOld > 1) {
            old = Math.round(secondsOld) + 's';
        }
        return old;
    }
  return(
    // <li onClick={() => navigate(`/tuit/${tuit._id}`)}
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          tuit.postedBy &&
          <img src={`../images/${tuit.postedBy.username}.jpg`}
               className="ttr-tuit-avatar-logo rounded-circle"/>
        }
      </div>
      <div className="w-100">
          <i onClick={() => deleteTuit(tuit._id)} className="fas fa-remove fa-2x fa-pull-right"/>
          {/*<Link to={`/tuit/${tuit._id}`}>*/}
          {/*<i className="float-end fas fa-circle-ellipsis me-1"/>*/}
          {/*</Link>*/}
        <h2
          className="fs-5">
          {tuit.postedBy && tuit.postedBy.username}
          @{tuit.postedBy && tuit.postedBy.username} -
            <span className="ms-1">{daysOld(tuit)}</span></h2>
        {tuit.tuit}
        {
          tuit.youtube &&
            <TuitVideo tuit={tuit}/>
        }
        {
          tuit.image &&
          <TuitImage tuit={tuit}/>
        }
        <TuitStats tuit={tuit} likeTuit={likeTuit} dislikeTuit={dislikeTuit} bookmarkTuit={bookmarkTuit}/>
      </div>
    </li>
  );
}
export default Tuit;
