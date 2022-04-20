import {useEffect, useState} from "react";
import * as service from "../../services/tuits-service";
import Tuits from "../tuits";

const Media = () => {
    const [tuits, setTuits] = useState([]);
    const findMyTuits = () => {
        service.findTuitByUser('me')
            .then(tuits => setTuits(tuits.filter(t=>t.image.length > 0)));
    }
    useEffect(findMyTuits, []);
    return (
        <Tuits tuits={tuits}
               refreshTuits={findMyTuits}/>
    );
};
export default Media;
