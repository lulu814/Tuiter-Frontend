/**
 * @file Implement api services for operations related to bookmark
 */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TUITS_API = `${BASE_URL}/api/tuits`;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
                             withCredentials: true
                         });

/**
 * Retrieves all users bookmark the user from the backend.
 * @param tid tuit id
 * @returns a list of users
 */
export const findAllUsersThatBookmarkedTuit = (tid) =>
    api.get(`${TUITS_API}/${tid}/bookmarks`)
        .then(response => response.data);

/**
 * Retrieves all tuits bookmarked by the user from the backend.
 * @param uid user id
 * @returns a list of tuits
 */
export const findAllTuitsBookmarkedByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/bookmarks`)
        .then(response => response.data);

/**
 * Update that the user bookmark the tuit
 * @param uid user id
 * @param tid tuit id
 * @returns bookmark object
 */
export const userBookmarksTuit = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/bookmarks/${tid}`)
        .then(response => response.data);

/**
 * Update that the user unbookmark the tuit
 * @param uid user id
 * @param tid tuit id
 * @returns bookmark object
 */
export const userUnbookmarksTuit = (uid, tid) =>
    api.delete(`${USERS_API}/${uid}/bookmarks/${tid}`)
        .then(response => response.data);

/**
 * Update that the user unbookmark all the bookmarked tuit
 * @param uid user id
 * @returns bookmark object
 */
export const userUnbookmarksAllTuit = (uid) =>
    api.delete(`${USERS_API}/${uid}/bookmarks`)
        .then(response => response.data);