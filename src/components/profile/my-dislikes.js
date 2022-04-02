import Tuits from "../tuits";
import * as service from "../../services/likes-service";
import {useEffect, useState} from "react";
/**
 * Component for showing a list of tuits disliked by the user.
 *
 * @component
 * @example
 * return (
 *      <MyDislikes />
 * )
 */

// Component uses findAllUsersThatDislikedTuit service to retrieve the tuits disliked by "me"
// and renders them using the same tuits component
const MyDislikes = () => {
    const [dislikedTuits, setDislikedTuits] = useState([]);
    const findTuitsDislike = () =>
        service.findAllTuitsDislikedByUser('me')
            .then((tuits) => setDislikedTuits(tuits))
            .catch(e => alert(e));
    useEffect(findTuitsDislike, []);

    return (
        <div>
            <Tuits tuits={dislikedTuits} refreshTuits={findTuitsDislike}/>
        </div>
    );
};
export default MyDislikes;