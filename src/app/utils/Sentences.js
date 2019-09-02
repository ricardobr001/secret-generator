const concatenate = require('./Concatenate')
const merge = require('./Merge')

module.exports = (name, course) => {
    const nameCourse = name + ' ' + course
    let sentencesBegin = [
        'O que foi isso',
        'Vamos brincar de novo',
        'Só queria uma chance'
    ]

    sentencesBegin = concatenate(sentencesBegin, nameCourse)

    const sentencesAction = [
        'bora uns pega',
        'fecho um remember',
        'aquele famoso netflix',
        'bora tomar uns litrão',
        'fazer uma dança'
    ]

    const sentencesWhere = [
        'no banheiro',
        'na biblioteca',
        'no role',
        'no mercado',
        'no ônibus',
        'no RU',
        'na fila',
        'em casa',
        'na cama'
    ]

    const mergedSentence = merge(
        sentencesBegin,
        sentencesAction,
        sentencesWhere
    )

    return mergedSentence
}
