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


function construirProgramas() {
  
  var programas = [        { "nombre": "SGML", "imagen": "https://i.pinimg.com/originals/7b/e9/2d/7be92d0ce2d1bda2e9833632ed778d32.png", "enlace": null },        { "nombre": "XML", "imagen": "https://cdn-icons-png.flaticon.com/512/29/29611.png", "enlace": null },        { "nombre": "HTML", "imagen": "https://cdn-icons-png.flaticon.com/512/919/919827.png", "enlace": "pagina html.html" },        { "nombre": "HTTP", "imagen": "https://cdn-icons-png.flaticon.com/128/2593/2593633.png", "enlace": null },        { "nombre": "CSS", "imagen": "https://cdn-icons-png.flaticon.com/512/919/919826.png", "enlace": null },        { "nombre": "JavaScript", "imagen": "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png", "enlace": null }    ];

  var html = "";
  for (var i = 0; i < programas.length; i++) {
    html += "<p class='card-text eliminar'>";
    html += "<img src='" + programas[i].imagen + "' width='10%' />";
    if (programas[i].enlace) {
      html += "<a href='" + programas[i].enlace + "'>" + programas[i].nombre + "</a>";
    } else {
      html += programas[i].nombre;
    }
    html += "</p>";
  }
  document.getElementById("programas").innerHTML = html;
}

$(document).ready(function() {
  $('form').submit(function(event) {

    // Construimos los programas
    console.log("3");
    construirProgramas();
    console.log("3");
    // Esperamos a que se envíe el formulario
    document.querySelector('form').addEventListener('submit', function(event) {
      // Prevenimos que el formulario se envíe
 
      console.log("4");
      
      // Obtenemos los valores de los campos de usuario y contraseña
      var usuario = document.getElementsByName("usuario").value;
      var password = document.getElementsByName("password").value;
  
      // Obtenemos las referencias a los elementos de login y logout
      const formularioLogin = document.getElementById('formulario-login');
      const logoutBtn = document.getElementById('logout-btn');
      console.log("1");
      // Verificamos si el usuario y contraseña son correctos
      if ((usuario === 'x' && password === 'x') || (usuario === 'y' && password === 'y') || (usuario === 'z' && password === 'z')) {
        console.log("2");
        // Mostramos un mensaje de éxito
        alert('Inicio de sesión exitoso');
        
        formularioLogin.classList.add('d-none');
        logoutBtn.classList.remove('d-none');
       
        $('.card-body .eliminar').each(function() {
          var $this = $(this);
          var button = $('<button/>', {
            text: 'Eliminar',
            class: 'btn btn-danger ml-2',
            click: function() {
              $this.remove();
            }
          });
          $this.append(button);
        });

        $('.container-btn').each(function() {
          var addButton = $('<button/>', {
            text: 'Añadir elemento',
            class: 'btn btn-success mt-3',
            click: function() {
              // aquí puedes agregar el código que deseas que se ejecute cuando se presiona el botón
            }
          });
          $(this).append(addButton);
        });


      } else {
        alert('El correo electrónico o la contraseña son incorrectos');
      }

      logoutBtn.addEventListener('click', () => {
      window.location.href = "pagina principal.html";
      });


    });     });   }); 
  
