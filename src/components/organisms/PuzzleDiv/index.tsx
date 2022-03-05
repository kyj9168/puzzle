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

    const changePuzzle = (item: number) => {
        let findItem = puzzleItems.indexOf(item);
        let findZero = puzzleItems.indexOf(0);
        // console.log(puzzle.)
        puzzleItems[findItem] = 0;
        puzzleItems[findZero] = item;

        // console.log([...puzzleItems]);
        dispatch(setPuzzle([...puzzleItems]));
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
                                width: width + 'px',
                                height: width + 'px',
                                position: 'absolute',
                                transform: `translate3d(${(idx % 4) * width}px, ${Math.floor(idx / 4) * width}px, 0)`,
                            }}
                            onClick={() => changePuzzle(item)}
                        >
                            <div>{item}</div>
                        </div>
                    ) : null;
                })}
            </div>
        </>
    );
};

export default PuzzleDiv;
