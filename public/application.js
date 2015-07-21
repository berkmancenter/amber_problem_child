$( 'form' ).submit( function( e ) {
  var prevent = false;

  if ( $( '#title' ).val() === '' ) {
    $( '.alert-info' ).text( 'Please enter a title.' ).removeClass( 'hidden' );
    prevent = true;
  }

  if ( prevent ) {
    e.preventDefault();
    return false;
  }
} );
