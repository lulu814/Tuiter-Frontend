/**
 * @file Implement unit tests for Tuits component.
 */
import Tuits from "./index";
import tuitsData from "./tuits-data.json"
import {act, create} from "react-test-renderer";
import {HashRouter} from "react-router-dom";

test('tuits render', () => {
    let tuits
    act(() => {
        tuits = create(
            <HashRouter>
                <Tuits
                    tuits={tuitsData}
                    refreshTuits={() => {}}
                />
            </HashRouter>
        )
    })
    const root = tuits.root;
    // eslint-disable-next-line testing-library/await-async-query
    const tuitItems = root.findAllByProps({className: 'the-tuit'})
    expect(tuitItems.length).toBe(tuitsData.length)

    // eslint-disable-next-line testing-library/await-async-query
    const tuitLis = root.findAllByProps({className: 'list-group-item'})
    // tuitItems[0].findAllByProps({className: 'ttr-tuit'})
})