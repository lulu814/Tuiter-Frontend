import {useEffect, useState} from "react";
import * as service from "../../services/tuits-service";
import Tuits from "../tuits";

/**
 * Component for showing the list of tuits created by the user.
 *
 * @component
 * @example
 * return (
 *      <Profile />
 * )
 */
const MyTuits = () => {
    const [tuits, setTuits] = useState([]);
    const findMyTuits = () => {
        service.findTuitByUser('me')
            .then(tuits => setTuits(tuits));
    }
    useEffect(findMyTuits, []);
    return (
        <Tuits tuits={tuits}
               refreshTuits={findMyTuits}/>
    );
};

export default MyTuits;