
var dll = require( "@aureooms/js-dll" ) ;

var spec = require( "@aureooms/js-graph-spec" ) ;
var list = require( "@aureooms/js-adjacency-list" ) ;

var label = graphlabeled.label ;
var List = dll.DoublyLinkedList ;

spec.MultiGraph( "Labeled MultiGraph" , label( list.MultiGraph( List ) ) ) ;
spec.MultiDiGraph( "Labeled MultiDiGraph" , label( list.MultiDiGraph( List , Map ) ) ) ;
