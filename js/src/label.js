
const label = function ( Graph ) {

	return function ( ) {

		return new Labeled( new Graph( ) , new Map( ) , new WeakMap( ) ) ;

	} ;

} ;

exports.label = label ;
