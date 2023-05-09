const modalImagen = document.querySelector( '#modal-imagen' );

if ( modalImagen ) {

    modalImagen.addEventListener( 'show.bs.modal', ( event ) => {    
        // event.target.querySelector('.modal-body').innerHTML = event.relatedTarget.innerHTML;
    
        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute( 'data-bs-imagen' );
    
        // Construir la imagen
        const imagen = document.createElement( 'IMG' );
        imagen.src = `img/${ rutaImagen }.jpg`;
        imagen.classList.add( 'img-fluid' );
        imagen.alt = 'imagen galería';    
    
        const contenidoModal = event.target.querySelector( '.modal-body' );
        contenidoModal.appendChild( imagen );
    
    });
    
    modalImagen.addEventListener( 'hidden.bs.modal', ( event ) => {
        const contenidoModal = event.target.querySelector( '.modal-body' );
        contenidoModal.innerHTML = '';
    });
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()