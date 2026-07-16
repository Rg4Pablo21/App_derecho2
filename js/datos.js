
const baseDatos = {
    leyes: [
        { id: 1, nombre: "Código Civil", materia: "Civil", descripcion: "Regula las relaciones civiles entre personas" },
        { id: 2, nombre: "Código Penal", materia: "Penal", descripcion: "Establece los delitos y sus penas" },
        { id: 3, nombre: "Código de Trabajo", materia: "Laboral", descripcion: "Regula las relaciones laborales" },
        { id: 4, nombre: "Código Mercantil", materia: "Mercantil", descripcion: "Regula las actividades comerciales" },
        { id: 5, nombre: "Constitución Política", materia: "Constitucional", descripcion: "Ley fundamental del Estado" },
        { id: 6, nombre: "Código Procesal Civil", materia: "Civil", descripcion: "Regula los procesos civiles" },
        { id: 7, nombre: "Código Procesal Penal", materia: "Penal", descripcion: "Regula los procesos penales" },
        { id: 8, nombre: "Ley de Amparo", materia: "Constitucional", descripcion: "Protege los derechos constitucionales" },
        { id: 9, nombre: "Ley de Migración", materia: "Administrativo", descripcion: "Regula la entrada y salida del país" },
        { id: 10, nombre: "Ley de Tránsito", materia: "Administrativo", descripcion: "Regula la circulación vehicular" }
    ],
    
    articulos: [
      
        {
            id: 1,
            ley_id: 5,
            numero: 1,
            titulo: "Protección a la persona",
            texto: "El Estado de Guatemala se organiza para proteger a la persona y a la familia; su fin supremo es la realización del bien común.",
            explicacion: "El propósito principal del Estado es proteger a las personas y las familias, trabajando para el bienestar de todos.",
            conceptos: ["Bien común", "Protección estatal", "Familia", "Dignidad humana"],
            ejemplo: "Cuando el gobierno crea leyes para proteger a los trabajadores o brinda servicios de salud, está cumpliendo con este artículo.",
            casos: ["Protección a familias vulnerables", "Programas de asistencia social"],
            relacionados: [2, 3]
        },
        {
            id: 2,
            ley_id: 5,
            numero: 2,
            titulo: "Deberes del Estado",
            texto: "Es deber del Estado garantizar a los habitantes la vida, la libertad, la justicia, la seguridad, la paz y el desarrollo integral.",
            explicacion: "El Estado debe asegurar que todos tengan una vida digna con libertad y justicia.",
            conceptos: ["Garantías estatales", "Derechos fundamentales", "Desarrollo integral"],
            ejemplo: "Cuando el Estado construye escuelas y hospitales está cumpliendo con este deber.",
            casos: ["Programas de desarrollo social", "Políticas de seguridad"],
            relacionados: [1, 3]
        },
        {
            id: 3,
            ley_id: 5,
            numero: 3,
            titulo: "Derecho a la vida",
            texto: "El Estado garantiza y protege la vida humana desde su concepción, así como la integridad y la seguridad de la persona.",
            explicacion: "La vida es el derecho más importante y el Estado debe protegerla desde el inicio.",
            conceptos: ["Derecho a la vida", "Protección desde la concepción", "Integridad personal"],
            ejemplo: "El Estado debe investigar y castigar cualquier acto que atente contra la vida de las personas.",
            casos: ["Protección de menores", "Delitos contra la vida"],
            relacionados: [4, 5]
        },
        {
            id: 4,
            ley_id: 5,
            numero: 4,
            titulo: "Libertad e igualdad",
            texto: "Todos los seres humanos son libres e iguales en dignidad y derechos. El hombre y la mujer, cualquiera que sea su estado civil, tienen iguales oportunidades y responsabilidades.",
            explicacion: "Todas las personas nacen libres y con los mismos derechos, sin importar su género o condición.",
            conceptos: ["Libertad", "Igualdad", "No discriminación", "Equidad de género"],
            ejemplo: "Una mujer tiene los mismos derechos que un hombre para trabajar y recibir el mismo salario.",
            casos: ["Discriminación laboral", "Derechos de la mujer"],
            relacionados: [5, 6]
        },
        {
            id: 5,
            ley_id: 5,
            numero: 5,
            titulo: "Derecho a la libertad",
            texto: "Toda persona tiene derecho a hacer lo que la ley no prohíbe, sin más limitaciones que las establecidas en la ley.",
            explicacion: "Puedes hacer todo lo que quieras siempre que no esté prohibido por la ley.",
            conceptos: ["Libertad individual", "Límites legales", "Autonomía personal"],
            ejemplo: "Puedes tener el negocio que quieras mientras cumpla con los requisitos legales.",
            casos: ["Libertad de empresa", "Derechos civiles"],
            relacionados: [4, 6]
        },
        {
            id: 6,
            ley_id: 5,
            numero: 6,
            titulo: "Derecho a la libertad de acción",
            texto: "Toda persona tiene derecho a circular libremente en el territorio nacional, a entrar y salir de él, y a permanecer en él.",
            explicacion: "Puedes viajar libremente por el país y salir de él cuando quieras, sin restricciones.",
            conceptos: ["Libre circulación", "Movilidad", "Derecho de tránsito"],
            ejemplo: "No te pueden prohibir viajar a otra ciudad o país sin una razón legal válida.",
            casos: ["Restricciones migratorias", "Derechos de viaje"],
            relacionados: [5, 7]
        },
        {
            id: 7,
            ley_id: 5,
            numero: 7,
            titulo: "Derecho a la libertad de pensamiento",
            texto: "Toda persona tiene derecho a expresar libremente sus pensamientos, ideas y opiniones, por cualquier medio.",
            explicacion: "Puedes decir lo que piensas y expresar tus ideas sin miedo a ser castigado.",
            conceptos: ["Libertad de expresión", "Libertad de pensamiento", "Derecho a opinar"],
            ejemplo: "Puedes escribir en redes sociales tu opinión sobre temas políticos sin ser censurado.",
            casos: ["Censura", "Periodismo", "Redes sociales"],
            relacionados: [8, 9]
        },
        {
            id: 8,
            ley_id: 5,
            numero: 8,
            titulo: "Derecho a la libertad de prensa",
            texto: "La libertad de prensa es un derecho de las personas y un deber del Estado para garantizar una información veraz.",
            explicacion: "Los medios de comunicación pueden informar libremente sin censura previa.",
            conceptos: ["Libertad de prensa", "Información veraz", "Medios de comunicación"],
            ejemplo: "Un periódico puede publicar noticias sobre el gobierno sin que lo censuren.",
            casos: ["Censura en medios", "Periodismo de investigación"],
            relacionados: [7, 9]
        },
        {
            id: 9,
            ley_id: 5,
            numero: 9,
            titulo: "Derecho de reunión",
            texto: "Toda persona tiene derecho a reunirse pacíficamente y sin armas, sin necesidad de autorización previa.",
            explicacion: "Puedes reunirte con otras personas de forma pacífica sin pedir permiso.",
            conceptos: ["Derecho de reunión", "Manifestaciones", "Libertad de asociación"],
            ejemplo: "Puedes organizar una protesta pacífica sin necesidad de pedir autorización al gobierno.",
            casos: ["Manifestaciones", "Reuniones políticas", "Asambleas"],
            relacionados: [10, 11]
        },
        {
            id: 10,
            ley_id: 5,
            numero: 10,
            titulo: "Derecho de asociación",
            texto: "Toda persona tiene derecho a asociarse libremente con otras personas para fines lícitos.",
            explicacion: "Puedes formar grupos o asociaciones para cualquier propósito legal.",
            conceptos: ["Libertad de asociación", "Organizaciones", "Sindicatos"],
            ejemplo: "Puedes formar un club deportivo o una asociación de vecinos.",
            casos: ["Sindicatos", "ONG", "Asociaciones civiles"],
            relacionados: [9, 11]
        },
        {
            id: 11,
            ley_id: 5,
            numero: 11,
            titulo: "Derecho de petición",
            texto: "Toda persona tiene derecho a presentar peticiones a las autoridades y a obtener respuesta en tiempo razonable.",
            explicacion: "Puedes pedir algo a las autoridades y ellos deben responderte.",
            conceptos: ["Derecho de petición", "Respuesta oportuna", "Participación ciudadana"],
            ejemplo: "Puedes pedir al gobierno que repare una calle y deben darte una respuesta.",
            casos: ["Quejas vecinales", "Solicitudes al gobierno"],
            relacionados: [10, 12]
        },
        {
            id: 12,
            ley_id: 5,
            numero: 12,
            titulo: "Derecho a la privacidad",
            texto: "Toda persona tiene derecho a la intimidad de su vida privada y familiar, y a la inviolabilidad de su domicilio.",
            explicacion: "Tu casa es un lugar privado donde nadie puede entrar sin tu permiso o una orden judicial.",
            conceptos: ["Privacidad", "Inviolabilidad del domicilio", "Intimidad familiar"],
            ejemplo: "La policía no puede entrar a tu casa sin una orden de un juez.",
            casos: ["Allanamientos ilegales", "Violación de privacidad"],
            relacionados: [13, 14]
        },
        {
            id: 13,
            ley_id: 5,
            numero: 13,
            titulo: "Derecho a la correspondencia",
            texto: "La correspondencia, los documentos privados y las comunicaciones son inviolables.",
            explicacion: "Nadie puede leer tus cartas, mensajes o documentos sin tu permiso.",
            conceptos: ["Secreto de comunicaciones", "Privacidad de datos", "Correspondencia"],
            ejemplo: "Tu jefe no puede leer tus mensajes personales en tu teléfono.",
            casos: ["Espionaje", "Violación de datos personales"],
            relacionados: [12, 14]
        },
        {
            id: 14,
            ley_id: 5,
            numero: 14,
            titulo: "Libertad de religión",
            texto: "Toda persona tiene derecho a practicar libremente su religión, tanto en público como en privado.",
            explicacion: "Puedes tener y practicar la religión que quieras sin ser discriminado.",
            conceptos: ["Libertad religiosa", "Culto", "Tolerancia religiosa"],
            ejemplo: "Puedes ir a la iglesia de tu elección sin que te molesten.",
            casos: ["Discriminación religiosa", "Libertad de culto"],
            relacionados: [13, 15]
        },
        {
            id: 15,
            ley_id: 5,
            numero: 15,
            titulo: "Derecho al trabajo",
            texto: "Toda persona tiene derecho al trabajo digno y socialmente útil, y a recibir una remuneración justa.",
            explicacion: "Todos tenemos derecho a un trabajo que nos permita vivir dignamente.",
            conceptos: ["Derecho al trabajo", "Remuneración justa", "Trabajo digno"],
            ejemplo: "No te pueden pagar menos del salario mínimo establecido por la ley.",
            casos: ["Desempleo", "Explotación laboral"],
            relacionados: [16, 17]
        },
        {
            id: 16,
            ley_id: 5,
            numero: 16,
            titulo: "Derecho a la salud",
            texto: "Toda persona tiene derecho a la salud y a recibir atención médica oportuna y de calidad.",
            explicacion: "El Estado debe garantizar que todos tengan acceso a servicios de salud.",
            conceptos: ["Derecho a la salud", "Atención médica", "Seguridad social"],
            ejemplo: "Puedes ir a un hospital público y deben atenderte sin importar si tienes dinero.",
            casos: ["Acceso a medicamentos", "Servicios de salud pública"],
            relacionados: [15, 17]
        },
        {
            id: 17,
            ley_id: 5,
            numero: 17,
            titulo: "Derecho a la educación",
            texto: "La educación es un derecho de las personas y una obligación del Estado. El Estado debe promover y garantizar la educación en todos los niveles.",
            explicacion: "Todos tienen derecho a estudiar y el Estado debe hacerlo posible.",
            conceptos: ["Derecho a la educación", "Obligación estatal", "Acceso universal"],
            ejemplo: "El Estado debe construir escuelas en todas las comunidades.",
            casos: ["Programas de becas", "Educación en áreas rurales"],
            relacionados: [16, 18]
        },
        {
            id: 18,
            ley_id: 5,
            numero: 18,
            titulo: "Derecho a la vivienda",
            texto: "Toda persona tiene derecho a una vivienda digna y adecuada.",
            explicacion: "Todos debemos tener un lugar donde vivir con condiciones adecuadas.",
            conceptos: ["Derecho a la vivienda", "Vivienda digna", "Acceso a la vivienda"],
            ejemplo: "El Estado debe crear programas para que las personas de bajos recursos puedan tener casa.",
            casos: ["Programas de vivienda", "Desalojos"],
            relacionados: [17, 19]
        },
        {
            id: 19,
            ley_id: 5,
            numero: 19,
            titulo: "Derecho a la seguridad social",
            texto: "Toda persona tiene derecho a la seguridad social que le garantice protección en caso de enfermedad, invalidez, vejez o muerte.",
            explicacion: "El Estado debe proteger a las personas cuando no puedan trabajar por enfermedad o edad.",
            conceptos: ["Seguridad social", "Pensiones", "Protección social"],
            ejemplo: "Al jubilarte, tienes derecho a recibir una pensión del Estado.",
            casos: ["Pensiones de jubilación", "Seguro de enfermedad"],
            relacionados: [18, 20]
        },
        {
            id: 20,
            ley_id: 5,
            numero: 20,
            titulo: "Derecho a la propiedad",
            texto: "Toda persona tiene derecho a la propiedad privada y a heredar bienes.",
            explicacion: "Puedes tener cosas propias y heredarlas a tus hijos.",
            conceptos: ["Propiedad privada", "Herencia", "Derechos patrimoniales"],
            ejemplo: "La casa que compras es tuya y la puedes heredar a tus hijos.",
            casos: ["Expropiaciones", "Herencia de bienes"],
            relacionados: [19, 21]
        },
        {
            id: 21,
            ley_id: 5,
            numero: 21,
            titulo: "Derecho a la libre empresa",
            texto: "Toda persona tiene derecho a dedicarse a la actividad económica de su preferencia.",
            explicacion: "Puedes tener el negocio que quieras siempre que sea legal.",
            conceptos: ["Libre empresa", "Actividad económica", "Emprendimiento"],
            ejemplo: "Puedes abrir un restaurante, una tienda o una fábrica.",
            casos: ["Emprendimiento", "Regulaciones comerciales"],
            relacionados: [20, 22]
        },
        {
            id: 22,
            ley_id: 5,
            numero: 22,
            titulo: "Derecho a la justicia",
            texto: "Toda persona tiene derecho a un proceso justo y a ser oída por un tribunal competente.",
            explicacion: "Si tienes un problema legal, tienes derecho a que un juez te escuche.",
            conceptos: ["Acceso a la justicia", "Debido proceso", "Tribunal competente"],
            ejemplo: "Si te demandan, tienes derecho a defenderte en un juicio justo.",
            casos: ["Juicios civiles", "Procesos penales"],
            relacionados: [21, 23]
        },
        {
            id: 23,
            ley_id: 5,
            numero: 23,
            titulo: "Derecho a la defensa",
            texto: "Toda persona tiene derecho a ser defendida por un abogado en cualquier proceso legal.",
            explicacion: "Si estás en un juicio, tienes derecho a que un abogado te defienda.",
            conceptos: ["Derecho a la defensa", "Abogado", "Asistencia legal"],
            ejemplo: "Si te acusan de un delito, el Estado debe darte un abogado si no tienes dinero.",
            casos: ["Defensa penal", "Asistencia legal gratuita"],
            relacionados: [22, 24]
        },
        {
            id: 24,
            ley_id: 5,
            numero: 24,
            titulo: "Derecho a la presunción de inocencia",
            texto: "Toda persona es inocente hasta que se demuestre su culpabilidad en un juicio.",
            explicacion: "No te pueden tratar como culpable hasta que un juez lo decida.",
            conceptos: ["Presunción de inocencia", "Carga de la prueba", "Debido proceso"],
            ejemplo: "Si te acusan de un delito, no te pueden tratar como culpable hasta que haya una sentencia.",
            casos: ["Procesos penales", "Detenciones"],
            relacionados: [23, 25]
        },
        {
            id: 25,
            ley_id: 5,
            numero: 25,
            titulo: "Derecho al medio ambiente",
            texto: "Toda persona tiene derecho a vivir en un ambiente sano y ecológicamente equilibrado.",
            explicacion: "Tenemos derecho a un medio ambiente limpio y el Estado debe protegerlo.",
            conceptos: ["Derecho ambiental", "Desarrollo sostenible", "Protección ecológica"],
            ejemplo: "El Estado debe evitar que las fábricas contaminen el aire y el agua.",
            casos: ["Contaminación industrial", "Protección de bosques"],
            relacionados: [24, 26]
        },

        // ============ CÓDIGO CIVIL (15 artículos) ============
        {
            id: 26,
            ley_id: 1,
            numero: 1,
            titulo: "Fuentes del derecho",
            texto: "La ley es la fuente principal del derecho civil. Los usos y costumbres son fuentes supletorias.",
            explicacion: "Las leyes escritas son las más importantes, pero las costumbres también pueden aplicarse.",
            conceptos: ["Fuentes del derecho", "Ley", "Costumbre jurídica"],
            ejemplo: "Si no hay una ley específica, se puede usar la costumbre del lugar.",
            casos: ["Aplicación de costumbres", "Interpretación legal"],
            relacionados: [2, 3]
        },
        {
            id: 27,
            ley_id: 1,
            numero: 10,
            titulo: "Capacidad de las personas",
            texto: "Toda persona tiene capacidad para ejercer sus derechos y cumplir con sus obligaciones.",
            explicacion: "Todas las personas pueden hacer contratos y tener derechos.",
            conceptos: ["Capacidad jurídica", "Derechos civiles", "Obligaciones"],
            ejemplo: "Puedes firmar un contrato para comprar un auto.",
            casos: ["Contratos civiles", "Representación legal"],
            relacionados: [11, 12]
        },
        {
            id: 28,
            ley_id: 1,
            numero: 20,
            titulo: "Estado civil",
            texto: "El estado civil de las personas se determina por su nacimiento, matrimonio y muerte.",
            explicacion: "Tu estado civil cambia cuando naces, te casas o mueres.",
            conceptos: ["Estado civil", "Nacimiento", "Matrimonio", "Muerte"],
            ejemplo: "Cuando te casas, tu estado civil cambia de soltero a casado.",
            casos: ["Registro civil", "Matrimonios", "Divorcios"],
            relacionados: [21, 22]
        },
        {
            id: 29,
            ley_id: 1,
            numero: 30,
            titulo: "Domicilio",
            texto: "El domicilio de una persona es el lugar donde reside habitualmente y donde ejerce sus derechos.",
            explicacion: "Tu domicilio es donde vives normalmente.",
            conceptos: ["Domicilio", "Residencia habitual", "Derechos civiles"],
            ejemplo: "Tu domicilio es donde recibes tus cartas y documentos.",
            casos: ["Notificaciones legales", "Cambio de domicilio"],
            relacionados: [31, 32]
        },
        {
            id: 30,
            ley_id: 1,
            numero: 40,
            titulo: "Personas jurídicas",
            texto: "Las personas jurídicas son entidades que tienen derechos y obligaciones, como las empresas y asociaciones.",
            explicacion: "Las empresas y organizaciones también tienen derechos y obligaciones como las personas.",
            conceptos: ["Persona jurídica", "Empresas", "Asociaciones"],
            ejemplo: "Una empresa puede firmar contratos y ser demandada.",
            casos: ["Constitución de empresas", "Responsabilidad legal"],
            relacionados: [41, 42]
        },
        {
            id: 31,
            ley_id: 1,
            numero: 50,
            titulo: "Bienes muebles e inmuebles",
            texto: "Los bienes son muebles si pueden trasladarse de un lugar a otro, e inmuebles si están fijos en el suelo.",
            explicacion: "Las cosas que se pueden mover son muebles, las que no, son inmuebles.",
            conceptos: ["Bienes muebles", "Bienes inmuebles", "Propiedad"],
            ejemplo: "Un auto es mueble, una casa es inmueble.",
            casos: ["Compraventa de bienes", "Hipotecas"],
            relacionados: [51, 52]
        },
        {
            id: 32,
            ley_id: 1,
            numero: 60,
            titulo: "Propiedad",
            texto: "La propiedad es el derecho de usar, gozar y disponer de los bienes.",
            explicacion: "Ser dueño significa que puedes usar, disfrutar y vender lo que es tuyo.",
            conceptos: ["Propiedad", "Uso", "Goces", "Disposición"],
            ejemplo: "Puedes vivir en tu casa, alquilarla o venderla.",
            casos: ["Compraventa", "Herencia", "Expropiación"],
            relacionados: [61, 62]
        },
        {
            id: 33,
            ley_id: 1,
            numero: 70,
            titulo: "Copropiedad",
            texto: "Cuando una cosa pertenece a varias personas, cada una tiene derecho a su parte.",
            explicacion: "Si varias personas son dueñas de algo, cada una tiene su parte.",
            conceptos: ["Copropiedad", "Propiedad compartida", "Derechos parciales"],
            ejemplo: "Si heredas una casa con tus hermanos, cada uno es dueño de una parte.",
            casos: ["Herencia", "Propiedad horizontal"],
            relacionados: [71, 72]
        },
        {
            id: 34,
            ley_id: 1,
            numero: 80,
            titulo: "Posesión",
            texto: "La posesión es la tenencia de una cosa con el ánimo de tenerla como propia.",
            explicacion: "Poseer es tener algo con la intención de ser el dueño.",
            conceptos: ["Posesión", "Tenencia", "Ánimo de dueño"],
            ejemplo: "Si vives en una casa por muchos años, puedes llegar a ser su dueño por posesión.",
            casos: ["Usucapión", "Recuperación de bienes"],
            relacionados: [81, 82]
        },
        {
            id: 35,
            ley_id: 1,
            numero: 90,
            titulo: "Contratos",
            texto: "El contrato es un acuerdo de voluntades que crea obligaciones entre las partes.",
            explicacion: "Un contrato es un acuerdo que te obliga a cumplir lo que prometes.",
            conceptos: ["Contrato", "Acuerdo", "Obligaciones"],
            ejemplo: "Firmas un contrato para alquilar un apartamento y te obligas a pagar.",
            casos: ["Contratos de arrendamiento", "Compraventa"],
            relacionados: [91, 92]
        },
        {
            id: 36,
            ley_id: 1,
            numero: 100,
            titulo: "De la propiedad",
            texto: "La propiedad es el derecho de usar, gozar y disponer de los bienes, dentro de los límites y con observancia de las obligaciones que establecen las leyes.",
            explicacion: "Las personas tienen derecho a poseer cosas, usarlas y venderlas, pero siempre respetando la ley.",
            conceptos: ["Propiedad", "Derecho de uso", "Límites legales"],
            ejemplo: "Si compras una casa, puedes vivir en ella, alquilarla o venderla, pero debes pagar impuestos.",
            casos: ["Disputas por terrenos", "Herencia de bienes"],
            relacionados: [101, 102]
        },
        {
            id: 37,
            ley_id: 1,
            numero: 110,
            titulo: "Arrendamiento",
            texto: "El arrendamiento es un contrato por el cual una persona concede a otra el uso de una cosa a cambio de un precio.",
            explicacion: "Arrendar es dar algo en alquiler a cambio de dinero.",
            conceptos: ["Arrendamiento", "Alquiler", "Precio", "Uso"],
            ejemplo: "Cuando alquilas una casa, pagas una renta al dueño.",
            casos: ["Alquiler de viviendas", "Locales comerciales"],
            relacionados: [111, 112]
        },
        {
            id: 38,
            ley_id: 1,
            numero: 120,
            titulo: "Compraventa",
            texto: "La compraventa es un contrato por el cual una persona se obliga a dar una cosa y la otra a pagar un precio.",
            explicacion: "Comprar es dar dinero a cambio de algo.",
            conceptos: ["Compraventa", "Precio", "Entrega", "Transferencia"],
            ejemplo: "Cuando compras un auto, pagas y te entregan el vehículo.",
            casos: ["Venta de bienes", "Comercio"],
            relacionados: [121, 122]
        },
        {
            id: 39,
            ley_id: 1,
            numero: 130,
            titulo: "Donación",
            texto: "La donación es un contrato por el cual una persona transfiere gratuitamente un bien a otra.",
            explicacion: "Donar es regalar algo sin recibir nada a cambio.",
            conceptos: ["Donación", "Gratuidad", "Transferencia"],
            ejemplo: "Puedes donar dinero a una organización benéfica.",
            casos: ["Donaciones a instituciones", "Regalos"],
            relacionados: [131, 132]
        },
        {
            id: 40,
            ley_id: 1,
            numero: 140,
            titulo: "Herencia",
            texto: "La herencia es la transmisión de los bienes de una persona a sus herederos después de su muerte.",
            explicacion: "Cuando alguien muere, sus bienes pasan a sus familiares.",
            conceptos: ["Herencia", "Herederos", "Testamento"],
            ejemplo: "Si tu padre muere, heredas sus bienes.",
            casos: ["Testamentos", "Sucesiones"],
            relacionados: [141, 142]
        },

        
        {
            id: 41,
            ley_id: 2,
            numero: 1,
            titulo: "Principio de legalidad",
            texto: "Nadie puede ser condenado por un acto que no esté expresamente tipificado como delito por la ley.",
            explicacion: "Solo puedes ser castigado por lo que la ley dice que es delito.",
            conceptos: ["Legalidad", "Tipicidad", "Delito"],
            ejemplo: "No te pueden castigar por algo que no sea considerado delito.",
            casos: ["Nuevos delitos", "Interpretación legal"],
            relacionados: [2, 3]
        },
        {
            id: 42,
            ley_id: 2,
            numero: 2,
            titulo: "Dolo y culpa",
            texto: "Los delitos pueden ser cometidos con dolo (intención) o con culpa (negligencia).",
            explicacion: "Puedes cometer un delito a propósito o por descuido.",
            conceptos: ["Dolo", "Culpa", "Intención", "Negligencia"],
            ejemplo: "Si chocas un auto a propósito es dolo, si fue sin querer es culpa.",
            casos: ["Accidentes de tránsito", "Delitos intencionales"],
            relacionados: [3, 4]
        },
        {
            id: 43,
            ley_id: 2,
            numero: 3,
            titulo: "Tentativa",
            texto: "La tentativa es cuando una persona comienza a cometer un delito pero no logra consumarlo.",
            explicacion: "Si intentas cometer un delito pero no lo logras, igual hay castigo.",
            conceptos: ["Tentativa", "Intento", "Delito frustrado"],
            ejemplo: "Si intentas robar pero te atrapan antes, hay tentativa.",
            casos: ["Robo frustrado", "Intento de homicidio"],
            relacionados: [4, 5]
        },
        {
            id: 44,
            ley_id: 2,
            numero: 10,
            titulo: "Complicidad",
            texto: "Los cómplices son las personas que ayudan a cometer un delito sin ser los autores principales.",
            explicacion: "Si ayudas a alguien a cometer un delito, también eres culpable.",
            conceptos: ["Complicidad", "Cómplice", "Participación"],
            ejemplo: "Si das el auto para que roben un banco, eres cómplice.",
            casos: ["Asociación ilícita", "Participación criminal"],
            relacionados: [11, 12]
        },
        {
            id: 45,
            ley_id: 2,
            numero: 20,
            titulo: "Circunstancias atenuantes",
            texto: "Las circunstancias atenuantes reducen la pena de un delito.",
            explicacion: "Algunas situaciones hacen que el castigo sea menor.",
            conceptos: ["Atenuantes", "Reducción de pena", "Circunstancias"],
            ejemplo: "Si confiesas tu delito, la pena puede ser menor.",
            casos: ["Confesión", "Arrepentimiento"],
            relacionados: [21, 22]
        },
        {
            id: 46,
            ley_id: 2,
            numero: 30,
            titulo: "Circunstancias agravantes",
            texto: "Las circunstancias agravantes aumentan la pena de un delito.",
            explicacion: "Algunas situaciones hacen que el castigo sea mayor.",
            conceptos: ["Agravantes", "Aumento de pena", "Circunstancias"],
            ejemplo: "Si matas a una persona con premeditación, la pena es mayor.",
            casos: ["Premeditación", "Alevosía"],
            relacionados: [31, 32]
        },
        {
            id: 47,
            ley_id: 2,
            numero: 40,
            titulo: "Homicidio simple",
            texto: "El homicidio simple es la muerte de una persona sin circunstancias especiales.",
            explicacion: "Matar a alguien sin agravantes es homicidio simple.",
            conceptos: ["Homicidio", "Muerte", "Pena"],
            ejemplo: "Una pelea que termina en muerte sin premeditación.",
            casos: ["Peleas callejeras", "Defensa personal"],
            relacionados: [41, 42]
        },
        {
            id: 48,
            ley_id: 2,
            numero: 50,
            titulo: "Homicidio calificado",
            texto: "Comete homicidio calificado quien da muerte a una persona con premeditación o alevosía.",
            explicacion: "Matar con planificación o con ventaja es homicidio calificado.",
            conceptos: ["Homicidio calificado", "Premeditación", "Alevosía"],
            ejemplo: "Planear matar a alguien y ejecutarlo es homicidio calificado.",
            casos: ["Asesinato", "Crimen organizado"],
            relacionados: [51, 52]
        },
        {
            id: 49,
            ley_id: 2,
            numero: 60,
            titulo: "Parricidio",
            texto: "Comete parricidio quien mata a su ascendiente, descendiente o cónyuge.",
            explicacion: "Matar a un familiar cercano es parricidio.",
            conceptos: ["Parricidio", "Familia", "Delito familiar"],
            ejemplo: "Matar a tu padre o a tu esposa es parricidio.",
            casos: ["Violencia intrafamiliar", "Crímenes pasionales"],
            relacionados: [61, 62]
        },
        {
            id: 50,
            ley_id: 2,
            numero: 70,
            titulo: "Infanticidio",
            texto: "Comete infanticidio quien mata a su hijo recién nacido.",
            explicacion: "Matar a un recién nacido es infanticidio.",
            conceptos: ["Infanticidio", "Recién nacido", "Maternidad"],
            ejemplo: "Una madre que mata a su bebé recién nacido comete infanticidio.",
            casos: ["Abandono de menores", "Salud mental"],
            relacionados: [71, 72]
        },
        {
            id: 51,
            ley_id: 2,
            numero: 80,
            titulo: "Lesiones",
            texto: "Comete lesiones quien causa daño físico o mental a otra persona.",
            explicacion: "Herir a alguien física o psicológicamente es un delito.",
            conceptos: ["Lesiones", "Daño físico", "Daño psicológico"],
            ejemplo: "Golpear a alguien y causarle heridas es lesiones.",
            casos: ["Peleas", "Violencia doméstica"],
            relacionados: [81, 82]
        },
        {
            id: 52,
            ley_id: 2,
            numero: 90,
            titulo: "Aborto",
            texto: "Comete aborto quien causa la muerte del feto en el vientre materno.",
            explicacion: "Interrumpir el embarazo sin autorización es aborto.",
            conceptos: ["Aborto", "Feto", "Interrupción del embarazo"],
            ejemplo: "Practicar un aborto sin permiso es un delito.",
            casos: ["Aborto terapéutico", "Aborto clandestino"],
            relacionados: [91, 92]
        },
        {
            id: 53,
            ley_id: 2,
            numero: 100,
            titulo: "Hurto",
            texto: "Comete hurto quien se apodera de una cosa mueble ajena sin violencia.",
            explicacion: "Tomar algo que no es tuyo sin usar fuerza es hurto.",
            conceptos: ["Hurto", "Apropiación", "Sin violencia"],
            ejemplo: "Tomar una cartera sin que nadie se dé cuenta es hurto.",
            casos: ["Ladrones de tiendas", "Robo de pertenencias"],
            relacionados: [101, 102]
        },
        {
            id: 54,
            ley_id: 2,
            numero: 110,
            titulo: "Robo",
            texto: "Comete robo quien se apodera de una cosa ajena usando violencia o intimidación.",
            explicacion: "Tomar algo usando fuerza o amenazas es robo.",
            conceptos: ["Robo", "Violencia", "Intimidación"],
            ejemplo: "Atracar a alguien con un arma para quitarle sus cosas es robo.",
            casos: ["Atracos", "Robo a mano armada"],
            relacionados: [111, 112]
        },
        {
            id: 55,
            ley_id: 2,
            numero: 120,
            titulo: "Estafa",
            texto: "Comete estafa quien engaña a alguien para obtener un beneficio económico.",
            explicacion: "Engañar a alguien para sacarle dinero es estafa.",
            conceptos: ["Estafa", "Engaño", "Beneficio económico"],
            ejemplo: "Vender un producto falso como si fuera original es estafa.",
            casos: ["Fraude", "Estafas por internet"],
            relacionados: [121, 122]
        },

 
        {
            id: 56,
            ley_id: 3,
            numero: 1,
            titulo: "Ámbito de aplicación",
            texto: "El Código de Trabajo regula las relaciones entre trabajadores y empleadores.",
            explicacion: "Este código es para proteger a los trabajadores.",
            conceptos: ["Trabajo", "Empleador", "Trabajador"],
            ejemplo: "Todos los trabajadores en Guatemala están protegidos por este código.",
            casos: ["Relaciones laborales", "Contratos"],
            relacionados: [2, 3]
        },
        {
            id: 57,
            ley_id: 3,
            numero: 10,
            titulo: "Contrato de trabajo",
            texto: "El contrato de trabajo es el acuerdo entre trabajador y empleador para prestar servicios.",
            explicacion: "Es el documento que establece las condiciones de trabajo.",
            conceptos: ["Contrato laboral", "Acuerdo", "Condiciones"],
            ejemplo: "Firmas un contrato cuando entras a trabajar en una empresa.",
            casos: ["Contratos indefinidos", "Contratos temporales"],
            relacionados: [11, 12]
        },
        {
            id: 58,
            ley_id: 3,
            numero: 20,
            titulo: "Jornada de trabajo",
            texto: "La jornada diurna no puede exceder de 8 horas diarias ni 48 horas semanales.",
            explicacion: "No puedes trabajar más de 8 horas al día.",
            conceptos: ["Jornada laboral", "Horario", "Límites"],
            ejemplo: "Si trabajas de 8 am a 5 pm, tienes una hora de almuerzo.",
            casos: ["Horas extras", "Jornadas nocturnas"],
            relacionados: [21, 22]
        },
        {
            id: 59,
            ley_id: 3,
            numero: 30,
            titulo: "Descanso semanal",
            texto: "Todo trabajador tiene derecho a un día de descanso con goce de salario.",
            explicacion: "Debes tener al menos un día libre a la semana.",
            conceptos: ["Descanso", "Día libre", "Salario"],
            ejemplo: "Los domingos son generalmente el día de descanso.",
            casos: ["Trabajo en domingo", "Compensación"],
            relacionados: [31, 32]
        },
        {
            id: 60,
            ley_id: 3,
            numero: 40,
            titulo: "Salario mínimo",
            texto: "El salario mínimo es la remuneración más baja que debe recibir un trabajador.",
            explicacion: "Nadie puede ganar menos del salario mínimo.",
            conceptos: ["Salario mínimo", "Remuneración", "Protección"],
            ejemplo: "El gobierno fija cuánto es el salario mínimo cada año.",
            casos: ["Aumentos salariales", "Incumplimiento"],
            relacionados: [41, 42]
        },
        {
            id: 61,
            ley_id: 3,
            numero: 50,
            titulo: "Horas extras",
            texto: "Las horas extras deben pagarse con un recargo del 50% sobre el salario normal.",
            explicacion: "Si trabajas más horas, te pagan más.",
            conceptos: ["Horas extras", "Recargo", "Salario"],
            ejemplo: "Si trabajas una hora extra, te pagan esa hora más la mitad.",
            casos: ["Cálculo de horas extras", "Negociación"],
            relacionados: [51, 52]
        },
        {
            id: 62,
            ley_id: 3,
            numero: 60,
            titulo: "Jornada de trabajo",
            texto: "La jornada ordinaria de trabajo efectivo diurno no puede exceder de ocho horas diarias, ni de cuarenta y ocho horas a la semana.",
            explicacion: "Los trabajadores no deben trabajar más de 8 horas al día y 48 horas a la semana.",
            conceptos: ["Jornada laboral", "Horario diurno", "Derechos del trabajador"],
            ejemplo: "Si trabajas en una oficina de lunes a viernes, no pueden obligarte a trabajar más de 8 horas.",
            casos: ["Demandas por horas extras", "Abuso laboral"],
            relacionados: [61, 62]
        },
        {
            id: 63,
            ley_id: 3,
            numero: 70,
            titulo: "Vacaciones",
            texto: "Todo trabajador tiene derecho a 15 días hábiles de vacaciones al año.",
            explicacion: "Debes tener vacaciones pagadas cada año.",
            conceptos: ["Vacaciones", "Días hábiles", "Descanso anual"],
            ejemplo: "Después de un año de trabajo, tienes derecho a 15 días de vacaciones.",
            casos: ["Programación de vacaciones", "Pago de vacaciones"],
            relacionados: [71, 72]
        },
        {
            id: 64,
            ley_id: 3,
            numero: 80,
            titulo: "Aguinaldo",
            texto: "El aguinaldo es un pago adicional que deben recibir los trabajadores en diciembre.",
            explicacion: "En diciembre recibes un pago extra.",
            conceptos: ["Aguinaldo", "Pago extra", "Diciembre"],
            ejemplo: "En diciembre, recibes el aguinaldo como un bono.",
            casos: ["Cálculo de aguinaldo", "Pago oportuno"],
            relacionados: [81, 82]
        },
        {
            id: 65,
            ley_id: 3,
            numero: 90,
            titulo: "Indemnización",
            texto: "Los trabajadores tienen derecho a indemnización en caso de despido injustificado.",
            explicacion: "Si te despiden sin razón, te deben pagar una indemnización.",
            conceptos: ["Indemnización", "Despido", "Compensación"],
            ejemplo: "Si te despiden sin causa, te pagan una cantidad extra.",
            casos: ["Despidos injustificados", "Cálculo de indemnización"],
            relacionados: [91, 92]
        },

      
        {
            id: 66,
            ley_id: 4,
            numero: 1,
            titulo: "Actos de comercio",
            texto: "Son actos de comercio todas las operaciones mercantiles que realicen los comerciantes.",
            explicacion: "Todo lo que hacen los comerciantes es considerado comercio.",
            conceptos: ["Actos de comercio", "Comerciante", "Operaciones"],
            ejemplo: "Comprar y vender mercancía es un acto de comercio.",
            casos: ["Empresas comerciales", "Transacciones"],
            relacionados: [2, 3]
        },
        {
            id: 67,
            ley_id: 4,
            numero: 10,
            titulo: "Comerciante",
            texto: "Es comerciante quien hace del comercio su profesión habitual.",
            explicacion: "Si te dedicas a comprar y vender, eres comerciante.",
            conceptos: ["Comerciante", "Profesión", "Habitualidad"],
            ejemplo: "El dueño de una tienda es comerciante.",
            casos: ["Registro de comerciantes", "Obligaciones"],
            relacionados: [11, 12]
        },
        {
            id: 68,
            ley_id: 4,
            numero: 20,
            titulo: "Sociedades mercantiles",
            texto: "Las sociedades mercantiles son empresas constituidas por dos o más personas.",
            explicacion: "Una empresa puede ser de varias personas.",
            conceptos: ["Sociedad", "Empresa", "Socios"],
            ejemplo: "Una empresa formada por varios socios.",
            casos: ["Constitución de empresas", "Tipos de sociedades"],
            relacionados: [21, 22]
        },
        {
            id: 69,
            ley_id: 4,
            numero: 30,
            titulo: "Títulos de crédito",
            texto: "Los títulos de crédito son documentos que representan un derecho de cobro.",
            explicacion: "Son papeles que valen dinero, como los cheques.",
            conceptos: ["Títulos de crédito", "Cheque", "Pagaré"],
            ejemplo: "Un cheque es un título de crédito.",
            casos: ["Cheques sin fondos", "Pagarés"],
            relacionados: [31, 32]
        },
        {
            id: 70,
            ley_id: 4,
            numero: 40,
            titulo: "Contratos mercantiles",
            texto: "Los contratos mercantiles son acuerdos comerciales entre empresas.",
            explicacion: "Son contratos que hacen las empresas entre sí.",
            conceptos: ["Contrato mercantil", "Acuerdo comercial", "Empresas"],
            ejemplo: "Una empresa compra mercancía a otra mediante un contrato.",
            casos: ["Proveedores", "Clientes"],
            relacionados: [41, 42]
        },
        {
            id: 71,
            ley_id: 4,
            numero: 50,
            titulo: "Libros de contabilidad",
            texto: "Los comerciantes deben llevar libros de contabilidad donde registren todas sus operaciones.",
            explicacion: "Los comerciantes deben tener registros de todas sus transacciones.",
            conceptos: ["Contabilidad", "Registro", "Operaciones"],
            ejemplo: "Una tienda debe tener un libro donde anote todas las ventas.",
            casos: ["Auditorías", "Declaraciones fiscales"],
            relacionados: [51, 52]
        },
        {
            id: 72,
            ley_id: 4,
            numero: 60,
            titulo: "Quiebra",
            texto: "La quiebra es la situación de una empresa que no puede pagar sus deudas.",
            explicacion: "Cuando una empresa no puede pagar, se declara en quiebra.",
            conceptos: ["Quiebra", "Deudas", "Insolvencia"],
            ejemplo: "Una empresa que debe mucho y no puede pagar.",
            casos: ["Procesos de quiebra", "Reorganización"],
            relacionados: [61, 62]
        },
        {
            id: 73,
            ley_id: 4,
            numero: 70,
            titulo: "Contrato de compraventa mercantil",
            texto: "La compraventa mercantil es el contrato por el cual el vendedor se obliga a entregar mercancía y el comprador a pagar su precio.",
            explicacion: "El contrato por el que se compra y vende mercancía.",
            conceptos: ["Compraventa", "Mercancía", "Precio"],
            ejemplo: "Una empresa compra 1000 unidades de un producto.",
            casos: ["Proveedores", "Distribución"],
            relacionados: [71, 72]
        },
        {
            id: 74,
            ley_id: 4,
            numero: 80,
            titulo: "Seguros mercantiles",
            texto: "Los seguros mercantiles protegen a las empresas contra riesgos como incendios o robos.",
            explicacion: "Las empresas pueden asegurar sus bienes.",
            conceptos: ["Seguro", "Riesgo", "Protección"],
            ejemplo: "Una empresa asegura su bodega contra incendios.",
            casos: ["Seguros de bienes", "Seguros de responsabilidad"],
            relacionados: [81, 82]
        },
        {
            id: 75,
            ley_id: 4,
            numero: 90,
            titulo: "Letra de cambio",
            texto: "La letra de cambio es un documento por el cual una persona ordena a otra pagar una cantidad de dinero.",
            explicacion: "Es un documento que ordena pagar dinero.",
            conceptos: ["Letra de cambio", "Orden de pago", "Documento"],
            ejemplo: "Una empresa emite una letra de cambio para cobrar una deuda.",
            casos: ["Cobranza", "Documentos comerciales"],
            relacionados: [91, 92]
        }
    ]
};


let favoritos = [];
let historial = [];
let usuarioActual = null;
let temaActual = 'claro';


function obtenerLey(id) {
    return baseDatos.leyes.find(ley => ley.id === id);
}

function obtenerArticulo(id) {
    return baseDatos.articulos.find(art => art.id === id);
}

function obtenerArticulosPorLey(leyNombre) {
    const ley = baseDatos.leyes.find(l => l.nombre === leyNombre);
    if (!ley) return [];
    return baseDatos.articulos.filter(art => art.ley_id === ley.id);
}

function obtenerArticulosPorMateria(materia) {
    const leyes = baseDatos.leyes.filter(l => l.materia === materia);
    const idsLeyes = leyes.map(l => l.id);
    return baseDatos.articulos.filter(art => idsLeyes.includes(art.ley_id));
}

function buscarArticulos(termino) {
    if (!termino || termino.trim() === '') return [];
    
    const terminoLower = termino.toLowerCase().trim();
    const resultados = [];
    
    // Buscar por número de artículo
    if (/^\d+$/.test(termino)) {
        const numero = parseInt(termino);
        const articulo = baseDatos.articulos.find(art => art.numero === numero);
        if (articulo) resultados.push(articulo);
    }
    
    // Buscar por texto en título y contenido
    baseDatos.articulos.forEach(art => {
        if (art.titulo.toLowerCase().includes(terminoLower) ||
            art.texto.toLowerCase().includes(terminoLower) ||
            art.explicacion.toLowerCase().includes(terminoLower)) {
            if (!resultados.some(r => r.id === art.id)) {
                resultados.push(art);
            }
        }
    });
    
    // Buscar por ley
    baseDatos.leyes.forEach(ley => {
        if (ley.nombre.toLowerCase().includes(terminoLower) ||
            ley.materia.toLowerCase().includes(terminoLower)) {
            const articulosLey = baseDatos.articulos.filter(art => art.ley_id === ley.id);
            articulosLey.forEach(art => {
                if (!resultados.some(r => r.id === art.id)) {
                    resultados.push(art);
                }
            });
        }
    });
    
    // Buscar por concepto
    baseDatos.articulos.forEach(art => {
        art.conceptos.forEach(concepto => {
            if (concepto.toLowerCase().includes(terminoLower)) {
                if (!resultados.some(r => r.id === art.id)) {
                    resultados.push(art);
                }
            }
        });
    });
    
    return resultados;
}

// Inicializar datos
console.log(`📚 Base de datos cargada: ${baseDatos.articulos.length} artículos en ${baseDatos.leyes.length} leyes`);
console.log(`📋 Distribución por materia:`);
const materias = {};
baseDatos.leyes.forEach(ley => {
    const count = baseDatos.articulos.filter(a => a.ley_id === ley.id).length;
    materias[ley.materia] = (materias[ley.materia] || 0) + count;
});
Object.entries(materias).forEach(([materia, count]) => {
    console.log(`   ${materia}: ${count} artículos`);
});