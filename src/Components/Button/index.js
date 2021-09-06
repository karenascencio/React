import React, {useState} from 'react'

export default function Button(props) {
    const { percentage, clickHandler } = props


    return (
        <button data-percentage={percentage} className="text-white text-2xl font-bold bg-darkCyan w-full p-1 rounded" onClick={clickHandler} >
            {percentage}%
        </button>
    )
}
