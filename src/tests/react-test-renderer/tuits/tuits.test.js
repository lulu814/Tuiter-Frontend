import {act, create} from "react-test-renderer"
import tuitsJson from "./tuits.json"
import Tuits from "./tuits";

test('tuits render', () => {
    let tuitsRender
    act(() => {
        tuitsRender = create(
            <Tuits
                tuits={tuitsJson}/>
        )
    })
    const root = tuitsRender.root
    const ttrTuits = root.findAllByProps({
        className: 'ttr-tuit'})
    expect(ttrTuits.length).toBe(tuitsJson.length)
    ttrTuits.forEach((ttrTuit, ndx) => {
        expect(ttrTuit.props.children).toBe(tuitsJson[ndx].tuit)
    })
})