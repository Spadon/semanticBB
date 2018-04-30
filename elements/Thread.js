const SemanticElement = require('./SemanticElement')
const _Date = require('./_Date')

/**
 * A thread, started by a given author, belonging to a given category.
 */
class Thread extends SemanticElement {
    constructor(author, category) {
        super()
        this.author = author
        this.category = category
        this.date = new _Date()
    }
}