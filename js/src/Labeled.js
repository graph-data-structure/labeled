/**
 * Wrapper allowing vertex labeling.
 *
 */

const Labeled = function ( G , V , labels ) {

	this.G = G ;
	this.V = V ;
	this.labels = labels ;

} ;

Labeled.prototype.vadd = function ( label , ...args ) {

	const ref = this.G.vadd( ...args ) ;

	this.labels.set( ref , label ) ;

	this.V.set( label , ref ) ;

	return label ;

} ;

Labeled.prototype.vdel = function ( label ) {

	// vertex to delete
	const v = this.V.get( label ) ;

	this.V.delete( label ) ;

	// remove vertex from underlying data structure
	this.G.vdel( v ) ;

} ;

Labeled.prototype.eadd = function ( u , v , ...args ) {

	return this.G.eadd( this.V.get( u ) , this.V.get( v ) , ...args ) ;

} ;

Labeled.prototype.edel = function ( e ) {

	return this.G.edel( e ) ;

} ;


Labeled.prototype.vitr = function* ( ) {

	for ( let v of this.G.vitr( ) ) yield this.labels.get( v ) ;

} ;

Labeled.prototype.eitr = function ( ) {

	return this.G.eitr( ) ;

} ;

Labeled.prototype.iitr = function ( v ) {

	return this.G.iitr( this.V.get( v ) ) ;

} ;

Labeled.prototype.initr = function ( v ) {

	return this.G.initr( this.V.get( v ) ) ;

} ;

Labeled.prototype.outitr = function ( v ) {

	return this.G.outitr( this.V.get( v ) ) ;

} ;

Labeled.prototype.nitr = function* ( w ) {

	for ( let v of this.G.nitr( this.V.get( w ) ) ) yield this.labels.get( v ) ;

} ;

Labeled.prototype.dsitr = function* ( w ) {

	for ( let v of this.G.dsitr( this.V.get( w ) ) ) yield this.labels.get( v ) ;

} ;

Labeled.prototype.dpitr = function* ( w ) {

	for ( let v of this.G.dpitr( this.V.get( w ) ) ) yield this.labels.get( v ) ;

} ;

Labeled.prototype.vertices = Labeled.prototype.vitr ;

Labeled.prototype.edges = function* ( ) {

	for ( let [ u , v , e ] of this.G.edges( ) ) {

		yield [ this.labels.get( u ) , this.labels.get( v ) , e ] ;

	}

} ;

Labeled.prototype.incident = function* ( w ) {

	for ( let [ u , v , e ] of this.G.incident( this.V.get( w ) ) ) {

		yield [ this.labels.get( u ) , this.labels.get( v ) , e ] ;

	}

} ;

Labeled.prototype.ingoing = function* ( w ) {

	for ( let [ u , v , e ] of this.G.ingoing( this.V.get( w ) ) ) {

		yield [ this.labels.get( u ) , this.labels.get( v ) , e ] ;

	}

} ;

Labeled.prototype.outgoing = function* ( w ) {

	for ( let [ u , v , e ] of this.G.outgoing( this.V.get( w ) ) ) {

		yield [ this.labels.get( u ) , this.labels.get( v ) , e ] ;

	}

} ;

Labeled.prototype.endpoints = function ( e ) {

	let [ u , v ] = this.G.endpoints( e ) ;

	return [ this.labels.get( u ) , this.labels.get( v ) ] ;

} ;

Labeled.prototype.reverse = function ( ) {

	return this.G.reverse( ) ;

} ;

exports.Labeled = Labeled ;
