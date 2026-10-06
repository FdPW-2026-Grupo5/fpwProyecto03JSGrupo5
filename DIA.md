#Se creo la estructura html, para un index.html que está enlazada a un index.css (debería haberse llamado style.css). este Index cuando se carga tiene un titulo (dentro del header), un div con una lista con enlaces a los 5 ejercicios y un footer con un parrafo simple sin muchos detalles.

#Se generó la estructura html para el ejercicio 3 (ejer03.html),esta tiene en su HEAD el enlace a el archivo css (ejer03.css), su estructura principal tiene en el body un header, un div , un footer. en el header está el titulo y un enlace que me lleva al index.html. En el Div principal esta un titulo para la calculadora un boton y una lista vacia (adonde luego se visualizará los precios con iva.)
En el footer un parrafo simple (sin detalles ni enlaces a redes sociales ni informacion variada)

##El archivo ejer03.css le da formato a los componentes visuales del ejer03.hmtl.
##El ejer03.js en primera inatancia se importa arreglos y funciones desde Servicios03.js.
Se declararon las variables a usar, un array con los tres productos y sus precios originales.
Aqui en este punto al verme estancado use la IA para poder continuar ya que no podia conseguir pensar como usar el addeventlistener para cuando se pulsa el boton de Calcular

##El archivo servicios03.js, aqui se exporta la funcion encargada de recorrer el Array original, y generar un nuevo objeto con un previo calculo sobre el precio inicial, y luego deja otro listado con los mismos productos pero con el precio final con impuesto.
aqui tambien use la IA para que me corrija lo que estaba haciendo mal.

Al final el HTML funcionaba bien, pero cuendo pulsaba el boton no pasaba nada ni en la vista del HTML ni en la Consola del navegador, y era porque tenia mal escrito servicioEjer03.js cuando sin darme cuenta habia escrito servicio03js. solo fue reemplazar modificar el "import" en el js (o podía haber cambiado el nombre del archivo a "serviciosEjer03")
