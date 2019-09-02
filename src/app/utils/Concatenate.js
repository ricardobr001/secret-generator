module.exports = (arr, str) => {
    return arr.reduce((acc, curr) => {
        return [...acc, (curr += ' ' + str + ',')]
    }, [])
}
