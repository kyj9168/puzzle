import React, { FormEvent, useState, useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/app/rootReducer';
// import Puzzle from 'src/components/pages/Puzzle';
import { Puzzle, setPuzzle } from 'src/slice/puzzle';

import './style.scss';
const PuzzleDiv = () => {
    const dispatch = useDispatch();
    let puzzleItems = useSelector<RootState, number[]>((state) => [...state.puzzle.items]);

    const [width, setWidth] = useState(window.innerWidth > 630 ? 150 : window.innerWidth / 4);
    useLayoutEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth > 630 ? 150 : window.innerWidth / 4);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const changePuzzleState = (findItem: number, findZero: number, item: number) => {
        puzzleItems[findItem] = 0;
        puzzleItems[findZero] = item;
        dispatch(setPuzzle([...puzzleItems]));
    };
    const changePuzzle = (item: number) => {
        let findItem = puzzleItems.indexOf(item);
        let findZero = puzzleItems.indexOf(0);

        if (findZero == 0) {
            if (findItem == 1 || findItem == 4) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 1) {
            if (findItem == 0 || findItem == 2 || findItem == 5) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 2) {
            if (findItem == 1 || findItem == 3 || findItem == 6) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 3) {
            if (findItem == 2 || findItem == 7) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 4) {
            if (findItem == 0 || findItem == 5 || findItem == 8) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 5) {
            if (findItem == 1 || findItem == 4 || findItem == 6 || findItem == 9)
                changePuzzleState(findItem, findZero, item);
        } else if (findZero == 6) {
            if (findItem == 2 || findItem == 5 || findItem == 7 || findItem == 10)
                changePuzzleState(findItem, findZero, item);
        } else if (findZero == 7) {
            if (findItem == 3 || findItem == 6 || findItem == 11) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 8) {
            if (findItem == 4 || findItem == 9 || findItem == 12) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 9) {
            if (findItem == 5 || findItem == 8 || findItem == 10 || findItem == 13)
                changePuzzleState(findItem, findZero, item);
        } else if (findZero == 10) {
            if (findItem == 6 || findItem == 9 || findItem == 11 || findItem == 14)
                changePuzzleState(findItem, findZero, item);
        } else if (findZero == 11) {
            if (findItem == 7 || findItem == 10 || findItem == 15) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 12) {
            if (findItem == 8 || findItem == 13) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 13) {
            if (findItem == 9 || findItem == 12 || findItem == 14) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 14) {
            if (findItem == 10 || findItem == 13 || findItem == 15) changePuzzleState(findItem, findZero, item);
        } else if (findZero == 15) {
            if (findItem == 11 || findItem == 14) changePuzzleState(findItem, findZero, item);
        }
    };

    return (
        <>
            <div className="puzzleBody">
                {puzzleItems.map((item: number, idx: number) => {
                    return item != 0 ? (
                        <div
                            className="puzzleDiv"
                            key={'puzzleDiv_' + idx}
                            style={{
                                width: width - 2 + 'px',
                                height: width - 2 + 'px',
                                position: 'absolute',
                                backgroundSize: width * 4,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: `-${(item % 4) * width}px -${Math.floor(item / 4) * width}px`,
                                backgroundImage: 'url("/images/그림1.png")',
                                transform: `translate3d(${(idx % 4) * width}px, ${Math.floor(idx / 4) * width}px, 0)`,
                            }}
                            onClick={() => changePuzzle(item)}
                        ></div>
                    ) : null;
                })}

                <img src="/images/그림1.png" />
            </div>
        </>
    );
};

export default PuzzleDiv;

// -125 0
// -250 0
// -375 0
// 0px -125px
// -125px -125px
