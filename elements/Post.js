const SemanticElement = require('./SemanticElement')
const _Date = require('./_Date')

/**
 * Some post of a thread, authored by somebody, with some content.
 */
class Post extends SemanticElement {
    constructor(author, thread, content) {
        super()
        this.author = author
        this.thread = thread
        this.date = new _Date()
        this.postContent = content
    }
}