const NS = require('../NS')
const SemanticElement = require('./SemanticElement')

/**
 * SBB dates, which are actual xsd:dateTime
 */
class _Date extends SemanticElement {
    constructor() {
        super()
        this._classes.push(NS.XSD('dateTime'))
        this.isoDate = new Date()
    }

    getDate() {
        return this.isoDate
    }
}