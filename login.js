window.onload = function() {
    $(document).ready(function() {
        $('form').submit(function(event) {
          event.preventDefault(); 
      
          var usuario = document.getElementsByName("usuario")[0].value;
          var password = document.getElementsByName("password")[0].value;
      
          if (usuario == 'x' && password == 'x' || usuario == 'y' && password == 'y' || usuario == 'z' && password == 'z') {
            alert('Inicio de sesión exitoso');
            // Obtener todos los elementos con la clase "eliminar"
            const elementosEliminar = document.querySelectorAll('.eliminar');

            // Mostrar el botón de eliminar en cada elemento
            elementosEliminar.forEach(elemento => {
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mx-1');
            btnEliminar.innerText = 'Eliminar';
            elemento.appendChild(btnEliminar);
            });

        
          } else {
            alert('El correo electrónico o la contraseña son incorrectos');
          }
        });
      });
  }
  