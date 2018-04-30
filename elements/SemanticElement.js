const NS = require('../NS')
const ssbURIgenerator = require('../processing/ssbURIGenerator')
const hylar = require('../processing/hylarInstance')

/**
 * An SBB element
 */
class SemanticElement {
    /**
     * Base semantic element is an owl:Thing and an sbb:SemanticElement
     */
    constructor() {
        let baseURI = NS.SSB('this.constructor.name')

        this._classes = [
            NS.OWL('Thing'),
            NS.SBB('SemanticElement')
        ]

        if (this._classes.indexOf(this.constructor.name) == -1) {
            this._classes.push(baseURI)
        }
        this._uri = ssbURIgenerator.generate(baseURI)
        this._register()
    }

    /**
     * Adds the element to the triplestore by
     * referencing its class assertions
     * @private
     */
    _register() {
        this._classes.forEach(_class => {
            hylar.query(
                `INSERT DATA {
                    ${this._uri} ${NS.RDF('type')} ${_class}            
                }`)
        })
    }

    /**
     * Returns the list of owl classes this element belongs to
     * @returns {*[]|*}
     */
    getClasses() {
        return this._classes
    }

    /**
     * Checks if the element belongs to a given owl class
     * @param _class
     * @returns {boolean}
     */
    hasClass(_class) {
        return this._classes.filter((internalClass) => {
            return _class == internalClass
        }).length > 0
    }

    /**
     * Gracefully remove the element,
     * both from the memory and from the triplestore
     */
    remove() {
        hylar.query(
            `DELETE WHERE {
                ${this._uri} p1 o1 .
                s2 ${this._uri} o2 .
                s3 p3 ${this._uri} .
            }`)
        delete this
    }
}

module.exports = SemanticElement