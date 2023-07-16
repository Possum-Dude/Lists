

export const Random = (length) => {
    let min=0;
    let max=length;
    let rand = Math.floor(Math.random() * (max - min ));
    return rand;
}
