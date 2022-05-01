/**
 * @file Implement unit tests for dislike button.
 */
import TuitStats from "../components/tuits/tuit-stats";
import { act } from 'react-dom/test-utils';
import {screen, render, fireEvent, waitFor} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

console.error = () => {};

const MOCKED_TUIT =
    {tuit: "alice's tuit", postBy: "123", _id: "1231", stats: {likes: 31, dislikes: 11}};

let likeTuitMock = jest.fn();
let dislikeTuitMock = jest.fn();

test('tuit stats renders dislike button', async() => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitMock} dislikeTuit={dislikeTuitMock}/>
        </HashRouter>
    ));

    const dislikeButton = screen.getByTestId('test-dislikeButton');
    expect(dislikeButton).toBeInTheDocument();
})

test('tuit stats renders dislike stats', async() => {

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitMock} dislikeTuit={dislikeTuitMock}/>
        </HashRouter>
    ));

    const dislikeStat = screen.getByText(/11/i);
    expect(dislikeStat).toBeInTheDocument();
})

test('click dislike button will trigger dislikeTuitMock function', async() => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act( async () => render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitMock} dislikeTuit={dislikeTuitMock}/>
        </HashRouter>
    ));

    const dislikeButton = screen.getByTestId('test-dislikeButton');
    await fireEvent.click(dislikeButton);
    expect(dislikeTuitMock).toHaveBeenCalledTimes(1);
    expect(screen.getByText(MOCKED_TUIT.stats.dislikes)).toBeInTheDocument();
})
