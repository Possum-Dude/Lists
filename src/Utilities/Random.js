import React from 'react'

export const Random = (length) => {
    let min=0;
    let max=length-1;
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}
