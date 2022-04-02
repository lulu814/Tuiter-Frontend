import Tuits from "../tuits";
import * as service from "../../services/likes-service";
import {useEffect, useState} from "react";

/**
 * Component for showing a list of tuits liked by the user.
 *
 * @component
 * @example
 * return (
 *      <MyLikes />
 * )
 */

// Component uses findAllTuitsLikedByUser service to retrieve the tuits liked by "me"
// and renders them using the same tuits component
const MyLikes = () => {
    const [likedTuits, setLikedTuits] = useState([]);
    const findTuitsILike = () =>
        service.findAllTuitsLikedByUser('me')
            .then((tuits) => setLikedTuits(tuits));
    useEffect(findTuitsILike, []);

    return (
        <div>
            <Tuits tuits={likedTuits} refreshTuits={findTuitsILike}/>
        </div>
    );
};
export default MyLikes;