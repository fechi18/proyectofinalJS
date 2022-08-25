//Inicio de desafio final

//Saludo
function saludo () {
let pregunta1 = Swal.fire ({
      title: "¡Hola!",
      icon: "question",
      input: "text",
      inputValue: " ",
      inputPlaceHolder: "Ingrese su nombre",
      width: 600,
      color: "#FFE66D",
      background: "#2E3532"
});

let respuesta = Swal.fire ({
      title: "Bienvenido",
      text: (" " + "esperamos que disfrute del sitio"),
      icon: "success",
      width: 600,
      color: "#FFE66D",
      background: "#2E3532",
      footer: "El equipo de Rockzilla-Music",
      timer: 6000,
      showConfirmButton: false,
});
};

saludo ();

//Se creo una constante para devolver informacion de la banda al tocar la imagen

let blackSabbath = "<p> Black Sabbath es una de las bandas más importantes, innovadoras e influyentes en la historia del Rock y el Heavy Metal. La historia de Black Sabbath comienza en Birmingham, Inglaterra, conformada por el vocalista Ozzy Osbourne, el bajista Geezer Butler, el baterista Bill Ward y el guitarrista líder Tony Iommi. Black Sabbath se hizo de un estilo propio con la incorporación de letras sobre ocultismo, terror, guerras y un sonido oscuro y siniestro (el cual pretendía dar miedo) en una época dominada por el flower power, la música folk y la cultura hippie. Las influencias de Black Sabbath en sus comienzos fueron bandas como “Cream, Fleetwood Mac, John Mayall’s Bluesbreakers, The Beatles y Jethro Tull </p>";

let ledZeppelin = "<p> Surgido a finales de los años 60 en el Reino Unido, la influencia del grupo Led Zeppelin es incalculable en la historia del rock. Su música trasciende cualquier etiqueta, incorporando a su base hard rock y a sus textos de influencia mística o mitológica heterogéneos sonidos que tanto se inspiraron en el blues como en el folk británico o en el funk. </p>"

let pinkFloyd = " <p> Roger Waters (Cambridge, Reino Unido, 1944) y Richard Wright (Londres, 1945). El grupo pasó por dos etapas bien definidas, la primera con Roger Waters y Syd Barret como líderes creativos (papel que asumió el guitarrista David Gilmour cuando aquél fue expulsado por sus problemas con las drogas), y la segunda tras la marcha de Roger Waters. Principales herederos y continuadores de una línea que se hallaba ya en el álbum Sgt. Pepper's Lonely Hearts Club Band (1967) de The Beatles, su estilo musical psicodélico y las espectaculares puestas en escena de sus conciertos les confirieron una personalidad propia dentro del mundo de la música popular, hasta el punto de ser considerados como los padres de un nuevo género que se denominó rock sinfónico; desde Queen, David Bowie o Yes hasta Guns N' Roses, Chris Martin y Faith No More, los grupos e intérpretes coetáneos y posteriores que recibieron su influencia serían innumerables. Su popularidad mundial se empezó a gestar con la publicación, en 1973, del disco Dark side of the moon. En 1980 publicaron el que se convirtió en el disco más reputado del grupo, The Wall, del que tres años más tarde se extraería el filme animado del mismo título, protagonizado por Bob Geldof. En 1983, y coincidiendo con el abandono de Waters, cuyo excesivo protagonismo había enrarecido la convivencia en el seno del grupo, éste se disolvió. Cuatro años más tarde, Mason, Wright y Gilmour se reunieron de nuevo, lo que originó un proceso judicial entablado por Waters sobre la propiedad del nombre original. Resuelto el caso a favor de David Gilmour y compañía, el grupo Pink Floyd regresó al mundo de la música con un disco que se convirtió en un éxito inmediato, A momentary lapse of reason (1987). </p>"

let theRollingStones = "<p> Formado en 1962, a los Rolling Stones se les ha presentado siempre como los rivales históricos de The Beatles. Dentro de esta comparación, los Stones representaron la corriente más agresiva de la música rock, aun cuando alcanzaron el estrellato de mano de la canción I wanna be your man, compuesta por los beatles John Lennon y Paul McCartney. De hecho, hasta 1965 los Stones no empezaron a publicar sus propios temas, como (I can't get no) Satisfaction o Going to a gogo, habitualmente compuestas por el cantante Mick Jagger y el guitarrista Keith Richards, mucho más infuidos por el rhythm & blues que por el propio rock & roll que marcó al grupo de Liverpool. En 1969, Jones falleció durante el transcurso de una fiesta al caer en una piscina tras haber ingerido gran cantidad de alcohol; su lugar en el grupo fue ocupado en un principio por el guitarrista Mick Taylor. En 1976, Taylor abandonó la formación y fue reemplazado por Ron Wood. Los Rolling Stones destacan por ser un grupo de una extraordinaria longevidad, pues en 1964 iniciaron su primera gira de conciertos por Estados Unidos y todavía en 1997 llevaban a cabo giras mundiales tan relevantes como la de presentación del disco Bridges to Babylon. En 2016 seguían grabando álbumes de estudio (los últimos de la banda son A Bigger Bang, de 2005, y Blue & Lonesome, lanzado en 2016) y ofreciendo recitales en directo. Este hecho, unido a su calidad musical, los ha convertido en verdaderos mitos de la música popular. </p>"

//Se crea un evento click para que devuelva informacion de las bandas y haga scroll directamente en la informacion

//Primero averiguaro el scroll de la pagina en donde estaria el cuadro de info

window.addEventListener ("scroll", () => {
   console.log ("Scrolled!");
});

//Empiezan los eventos con scroll

const evento1 = document.querySelector (".evento1");

const click1 = document.querySelector (".img1");
click1.addEventListener ( "click", () => {
   window.scroll ( 0, 300);
  evento1.innerHTML = blackSabbath;
});

const click2 = document.querySelector (".img2");
click2.addEventListener ( "click", () => {
   window.scroll ( 0, 300);
   evento1.innerHTML = ledZeppelin;
});

const click3 = document.querySelector (".img3");
click3.addEventListener ( "click", () => {
   window.scroll ( 0, 1000);
   evento1.innerHTML = pinkFloyd;
});

const click4 = document.querySelector (".img4");
click4.addEventListener ( "click", () => {
   window.scroll ( 0, 450);
   evento1.innerHTML = theRollingStones;
});

evento1.style.color = "red";
evento1.style.fontSize = "14px";
evento1.style.fontFamily = "PermanetMaker";


//Se creo un array con obejtos

const discos = [ 
                 {nombre: "Led zeppelin 1", banda: "led zeppelin", genero: "hard rock", anio :1969, descripcion: "discbanda, considerado por muchos como el mejor disco debut de la historia."},
                 {nombre: "Led zeppelin 2", banda: "led zeppelin", genero: "hard rock", anio :1969, descripcion: "con led zeppelin II la banda logro consolidarse en la cima, como un super grupo poderoso."},
                 {nombre: "Led zeppelin 3", banda: "led zeppelin", genero: "hard rock", anio :1970, descripcion: "tercer disco de led zeppelin, a diferencia de sus antecesores, este disco mezcla musica country con nuevos sonidos."},
                 {nombre: "Led zeppelin 4", banda: "led zeppelin", genero: "hard rock", anio :1971, descripcion: "hablar de led zeppelin IV es describir en sonidos al album perfecto, con canciones que marcaron la historia del rock, se puede afirmar que su 4to album es el mejor de la banda."},
                 {nombre: "Houses of the holy", banda: "led zeppelin", genero: "hard rock", anio :1973, descripcion: "zepp sigue la formula, una mezcla de sonidos nuevos con su tan consagrada forma de tocar blues, el resultado...un iconico album con una portada que dio mucho para hablar."},
                 {nombre: "Physical graffit", banda: "led zeppelin", genero: "hard rock", anio :1975, descripcion: "primer y unico album doble grabado en estudio, con grandes temas, algunos reciclados de sus trabajos anteriores, Physical Grafitti logro instalarse en el corazon de todos los fans de led zeppelin."},
                 {nombre: "Presence", banda: "led zeppelin", genero: "hard rock", anio :1976, descripcion: "si bien es un album con buenas canciones, no logro tener la misma autoridad que los discos anteriores de la banda, el consumo excesivo de drogas y accidentes fatales estaban haciendo mecha en los miembros, y con esto temblaba una estructura solida que la banda logro armar."},
                 {nombre: "In trought the out door", banda: "led zeppelin", genero: "hard rock", anio :1979, descripcion: "ya en una decadencia importante, led zeppelin no logra remontar vuelo y este album es la viva prueba de ello."},
                 {nombre: "Coda", banda: "led zeppelin", genero: "hard rock", anio: 1982, descripcion: "el caos y la tragedia pintaron este disco, el cual fue una necesidad mas de la discografica que de la banda, Coda paso sin pena ni gloria, solo sera recordado por ser el ultimo disco que grabo la mejor banda de la historia del rock."},
                 {nombre: "The piper at the gates of dawn", banda: "Pink Floyd", anio: 1967, descripcion: "Disco debut de la banda con una clara inclinacion al rock psicodelico, algo muy comun en los años 60"},
                 {nombre: "A saucerful of secrets", banda: "Pink Floyd", anio: 1968, descripcion: ""},
                 {nombre: "Music from the film more", banda: "Pink Floyd", anio: 1969, descripcion: "Se acercan los '70 y bandas como Led Zeppelin empezaron a marcar otro camino para la musica, una nueva corriente estaba naciendo, y con esto Roger Waters no queria quedarse atras, este disco es una mutacion entre sonidos exoticos pero un poco mas pesados, detalle interesante: el disco fue utilizado para la banda sonora de una pelicula"},
                 {nombre: "Ummagumma", banda: "Pink Floyd", anio: 1969, descripcion: "Una idea nueva, innovadora, algo que iba a marcar el rumbo de la banda, la creacion de musica como una pieza estructural digna de ser oida y comprendida. Waters junto con los demas miembres se optaron por sacar su maxima expresion creativa individual, el resultado...un disco divido en cuatro partes donde cada integrante expreso su lado musical sin la ayuda del resto de la banda"},
                 {nombre: "Atom heart mother", banda: "Pink Floyd", anio: 1970, descripcion: "Un disco atronador que marca la nueva era de Pink Floyd, se observa un sonido mas solido donde prima la parte instrumental de la banda, con temas extenso que superan los 10 minutos de duracion, Atom Heart Mother fue una demostracion de lo que estos muchachos eran capaces"},
                 {nombre: "Meddle", banda: "Pink Floyd", anio: 1971, descripcion: "Con solo cinco canciones "},
                 {nombre: "Obscured by clouds", banda: "Pink Floyd", anio: 1972, descripcion: "Disco que abre un nuevo sonido de Pink Floyd, mas orientado a vender su obra que a difundilar, sin embargo es una obra exquisita que no tiene desperdicio."},
                 {nombre: "The dark side of the moon", banda: "Pink Floyd", anio: 1973, descripcion: "Considerados por muchos fanaticos y no tan fanaticos, como el mejor album que creo la banda, los criticos lo catalogaron como una obra maestra. Con temas que invitan a despegar mentalmente, la banda encontro el punto de partida hacia el infinito."},
                 {nombre: "Wish you were here", banda: "Pink Floyd", anio: 1975, descripcion: "Noveno album de la banda y en valoracion de su guitarrista, David Gilmour, y su tecladista, Richard Wright, el mejor de la banda. Con un sonido instrumental casi orquesta y la experimentacion a la que nos tiene acostumbrada la banda, se podria poner a este dicos en un top-five."},
                 {nombre: "Animals", banda: "Pink Floyd", anio: 1977, descripcion: "Lo que empezo como una simple idea de Waters en relacion con la obra literaria de George Orwell, el producto final se transformo en un disco que es hermoso se empiece por donde se empiece, sin embargo es un album conceptual, por lo que debe ser escuchado como tal, desde principio a fin sin meter el dedo en el pause."}


               ];

//Se llama al array mediante evento-interacctivo DOM

const input = document.querySelector (".buscador-input");
input.addEventListener ( "change", () => {
let busqueda = input.value.toLowerCase();
const buscadorDisco = discos.find ( x => x.nombre.toLowerCase().includes (busqueda) );
let resultadoBusqueda = Swal.fire ({
   title: (busqueda),
   text: ( JSON.stringify (buscadorDisco.descripcion) ),
   icon: "warning",
   width: 600,
   height: 200,
   color: "#FFE66D",
   background: "#2E3532",
   toast: false,
   imageUrl: "Imagenes/Img-fondo.jpg",
   imageWidth: "300px",
   imageHight: "300px",
   imageAlt: "discos"
});

});


//Se crean objetos con frases para la mascota del sitio

const frases = [
   "El nombre de Led Zeppelin fue un chiste que se origino entre los musicos de The Who y Jimmy Page", 
   "Mick Jagger abandono sus estudios de economia para dedicarle tiempo a la banda", 
   "Tony Iommi sufrio un accidente laboral que le hizo perder las yemas de tres dedos de su mano izquierda, esto no impidio que siguiera su sueño de ser guitarrista", 
   "Existe un dicho en el rock que dice mas o menos asi...The Beatles crearon los records pero Led Zeppelin los rompian",
   "El manager de los Stones dejo fuera de la formacion original a uno de sus miembros fundadores por no ser lo suficientemente atractivo",
   "La mayoria de los miembros de Pink Floyd se conocieron en la Universidad, estudiando arquitectura",
   "La cancion de los Stones -Comming down again- a pesar de tener una melodia dulce y melancolica su letra esta basada en el constante decaimiento de Keith Richards al consumo de heroina",
   "El cerdo flotante de Pink Floyd, al que llamaron Algie, en un desperfecto tecnico se zafo de las cuerdas y empezo a flotar por las calles de Londres",
   "El apodo de Robert Plant (cantante de Led Zeppelin) es Percy",
   "La pelicula Casi Famosos esta inspirada en las giras salvajes de Led Zeppelin",
   "Mick Jagger y Keith Richards estuvieron presos con cargos por posesion y consumo de drogas, gracias a una horda de fan enloquecidos salieron en libertad",
   "Cuando Black Sabbath expulso a Ozzy por su consumo de drogas y fue reemplazado por Dio, Ozzy amenazo de muerte a Dio si se atrevia a cantar Paranoid o Iron Man en vivo",
   "Cientificos y medicos aun desconocen como es que Ozzy Osbourne aun siga vivo luego de tanta droga consumida",
   "La famosa escena de Ozzy arrancadole la cabeza a un murcielago es cierta, el cantante pense que era un juguete",
   "Jimmy Page tiene una aficion descontrolada por el esoterismo",
   "La iglesia y muchos grupos cristianos estaban en contra de la cancion Stairway to Heaven, alegaban que si se reproducia al reves esta era una invocacion al demonio",
   "John Bonham, baterista de Zeppelin, murio en la casa del guitarrista luego de beber 42 shot de tequila",
   "El nombre Pink Floyd se derivo de dos grandes bluesman: Pink Anderson y Floyd Cousin",
   "El 4to disco de Zeppelin es una obra maestra, no solo por su musica si no por el misterio de las runas que vinieron en el",
   "Hay mucha gente que tiene dudas sobre la muerte de Brian Jones, hay incluso personas que caratulan su muerte como homicidio, siendo los culpables la dupla Jagger-Richards"

];

const dino = document.querySelector (".dino-question");
dino.addEventListener ( "click", () => {
   let reconocimiento = Math.floor (Math.random () * frases.length);
   let value = frases [reconocimiento];
   let dinofrase = Swal.fire({
      title: "¿Sabias que...?",
      text: ( JSON.stringify (value) ),
      icon: "question",
      width: 400,
      height: 300,
      color: "#FFE66D",
      background: "#2E3532",
      toast: false,
      position: "top-end", 
      timer: 9000,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Lo sabia",
      confirmButtonColor:"#40F99B",
      cancelButtonText: "No lo sabia",
      cancelButtonColor: "#F72C25"

   });
});



