module.exports = (begin, action, end) => {
    let randomPos = Math.floor(Math.random() * (begin.length - 1))
    let sentence = begin[randomPos] + ' '

    randomPos += randomPos = Math.floor(Math.random() * (action.length - 1))
    sentence += action[randomPos] + ' '

    randomPos = Math.floor(Math.random() * (end.length - 1))
    return sentence + end[randomPos]
}
