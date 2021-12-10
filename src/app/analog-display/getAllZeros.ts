
const allZeros: Digits = {
    col1: {
        tens: 0,
        ones: 0,
    },
    col2: {
        tens: 0,
        ones: 0,
    },
    col3: {
        tens: 0,
        ones: 0,
    },

}

export function getAllZeros() {
    return JSON.parse(JSON.stringify(allZeros))
}
