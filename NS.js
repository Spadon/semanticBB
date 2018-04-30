const rdflib = require('rdflib')

let RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
let RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#")
let FOAF = Namespace("http://xmlns.com/foaf/0.1/")
let XSD = Namespace("http://www.w3.org/2001/XMLSchema#")
let OWL = Namespace("http://www.w3.org/2002/07/owl#")
let SKOS = Namespace("http://www.w3.org/2004/02/skos/core#")
let SBB = Namespace("http://www.npmjs.org/package/semanticbb/")

module.exports = {
    RDF, RDFS, FOAF, XSD, OWL, SKOS, SBB
}