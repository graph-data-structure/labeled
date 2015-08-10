
var dll = require( "aureooms-js-dll" ) ;

var spec = require( "aureooms-js-graph-spec" ) ;
var list = require( "aureooms-js-adjacency-list" ) ;

var label = graphlabeled.label ;

spec.undirected1( "Labeled List" , label( list.List( dll.DoublyLinkedList ) ) ) ;
spec.undirected2( "Labeled List" , label( list.List( dll.DoublyLinkedList ) ) ) ;
