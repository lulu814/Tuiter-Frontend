import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as service from "../../services/bookmarks-service"
import * as security_service from "../../services/security-service"
import Tuits from "../tuits";

/**
 * Component for showing the bookmarks of the user.
 * @returns {JSX.Element}
 * @constructor
 */
const Bookmarks = () => {
    const {uid} = useParams();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [tuits, setTuits] = useState([]);
    const userId = uid;
    const isUserLoggedIn = () =>
        security_service.profile()
            .then((user) => {
                if (user) {
                    setLoggedIn(true);
                } else {
                    setLoggedIn(false);
                }
            })
    const findBookmarkedTuits = () =>
        service.findAllTuitsBookmarkedByUser('me')
            .then(tuits => setTuits(tuits));
    useEffect(isUserLoggedIn);
    useEffect(() => {
        let isMounted = true;
        findBookmarkedTuits()
        return () => {
            isMounted = false;
        }
    }, []);
    return (
        <div className="ttr-bookmarks">
            <div className="border border-bottom-0">
                <h4 className="fw-bold p-2">Bookmark</h4>
                <div className="d-flex"></div>
            </div>
            {isLoggedIn && <Tuits tuits={tuits}
                                  refreshTuits={findBookmarkedTuits}/>}
        </div>
    )
}
export default Bookmarks;

