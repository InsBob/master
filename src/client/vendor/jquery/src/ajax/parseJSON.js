define( [
	"../core"
], function( jQuery ) {

// Support: Android 2.3
// Workaround failure to String-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};

return jQuery.parseJSON;

} );
