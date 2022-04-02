/**
 * @file Implement unit tests for tuit-stats component.
 */
import {act, create} from 'react-test-renderer';
import TuitStats from "./tuit-stats";
import axios from "axios";

test('stats render correctly', () => {
    let stats = {
        likes: 123,
        replies: 234,
        retuits: 345,
        dislikes: 20
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                tuit={{stats: stats}}
            />
        );
    })

    const root = tuitStats.root;
    // eslint-disable-next-line testing-library/await-async-query
    const dislikesCounter = root.findByProps({className: 'ttr-stats-dislikes'})
    // eslint-disable-next-line testing-library/await-async-query
    const likesCounter = root.findByProps({className: 'ttr-stats-likes'})
    // eslint-disable-next-line testing-library/await-async-query
    const retuitsCounter = root.findByProps({className: 'ttr-stats-retuits'})
    // eslint-disable-next-line testing-library/await-async-query
    const repliesCounter = root.findByProps({className: 'ttr-stats-replies'})

    let dislikesText = dislikesCounter.children[0];
    let likesText = likesCounter.children[0];
    const repliesText = repliesCounter.children[0];
    const retuitsText = retuitsCounter.children[0];

    expect(dislikesText).toBe('20');
    expect(likesText).toBe('123');
    expect(repliesText).toBe('234');
    expect(retuitsText).toBe('345');
});

test('like increases when click like button', () => {
    let stats = {
        likes: 123,
        replies: 234,
        retuits: 345,
        dislikes: 20
    }

    const likeTuit = () => {
        act(() => {
            stats.likes++;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    likeTuit={() => {}}
                />)
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                likeTuit={likeTuit}
                tuit={{stats: stats}}
            />
        );
    })

    const root = tuitStats.root;
    // eslint-disable-next-line testing-library/await-async-query
    const likesCounter = root.findByProps({className: 'ttr-stats-likes'})
    // eslint-disable-next-line testing-library/await-async-query
    const likeTuitButton = root.findByProps(
        {className: 'ttr-like-tuit-click'})

    let likesText = likesCounter.children[0];

    act(() => {likeTuitButton.props.onClick()})
    likesText = likesCounter.children[0];
    expect(likesText).toBe('124');
});

test('dislike increases when click dislike button', () => {
    let stats = {
        likes: 123,
        replies: 234,
        retuits: 345,
        dislikes: 20
    }

    const dislikeTuit = () => {
        act(() => {
            stats.dislikes++;
            tuitStats.update(
                <TuitStats
                    tuit={{stats: stats}}
                    dislikeTuit={() => {}}
                />)
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                tuit={{stats: stats}}
                dislikeTuit={dislikeTuit}
            />
        );
    })

    const root = tuitStats.root;
    // eslint-disable-next-line testing-library/await-async-query
    const dislikesCounter = root.findByProps({className: 'ttr-stats-dislikes'})

    // eslint-disable-next-line testing-library/await-async-query
    const dislikeTuitButton = root.findByProps(
        {className: 'ttr-dislike-tuit-click'})

    // eslint-disable-next-line testing-library/await-async-query
    const highlightDislikeButton = root.findByProps(
        {className: 'fa-light fa-thumbs-down me-1'}
    )

    let dislikesText = dislikesCounter.children[0];

    act(() => {dislikeTuitButton.props.onClick()})
    dislikesText = dislikesCounter.children[0];
    expect(dislikesText).toBe('21');
    // eslint-disable-next-line jest/valid-expect
    expect(highlightDislikeButton);
});