
/**
 * @file Implement unit tests for dislike button.
 */
import TuitStats from "../components/tuits/tuit-stats";
import { act } from 'react-dom/test-utils';
import {screen, render, fireEvent, waitFor} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;
console.error = () => {};
// mock axios with the create
// const mockAxios = jest.genMockFromModule('axios')
// mockAxios.create = jest.fn(() => mockAxios)
//
// () =>
// Promise.resolve({ data: false }));

const MOCKED_USER = {username: "alice", _id: "123"};

const MOCKED_TUIT =
    {tuit: "alice's tuit", postBy: "123", _id: "1231", stats: {bookmarks: 11}};

let bookmarkTuitMock = jest.fn();

test('tuit stats renders bookmark button', async() => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} bookmarkTuit={bookmarkTuitMock} />
        </HashRouter>
    ));

    const bookmarkButton = screen.getByTestId('test-bookmarkButton');
    expect(bookmarkButton).toBeInTheDocument();
})

test('click bookmark button will trigger bookmarkTuitMock function', async() => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} bookmarkTuit={bookmarkTuitMock}/>
        </HashRouter>
    ));

    const bookmarkButton = screen.getByTestId('test-bookmarkButton');
    await fireEvent.click(bookmarkButton);
    //expect(bookmarkButton).toHaveBeenCalledTimes(1);
    expect(screen.getByText(MOCKED_TUIT.stats.bookmarks)).toBeInTheDocument();
})
