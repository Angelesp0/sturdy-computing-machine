import { Component, OnInit  , ViewChild, ElementRef} from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-js-pdf',
  templateUrl: './js-pdf.component.html',
  styleUrls: ['./js-pdf.component.css']
})
export class JsPDFComponent implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";


  @ViewChild('htmlData') htmlData: ElementRef;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];

  constructor() { }
  public pf(): void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'letter');
    doc.setFont("Arial");
    //doc.setFontType("bold");
    doc.setFontSize(11.5);
    doc.text(490, 50, 'PF ACT EMP');
    doc.text(150, 70, 'CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', {maxWidth: 490, align: "justify"});
    doc.text(205, 90, 'EN MATERIA DE CONTABILIDAD GENERAL.', {maxWidth: 490, align: "justify"});
    doc.text(95, 122, '          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, _____________________________________ DE LA EMPRESA CON NOMBRE COMERCIAL ________________________________, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:', {maxWidth: 455, align: "justify"});

    doc.text(200, 225, 'D E C L A R A C I O N E S:');

    doc.text(95, 250, 'I. “LA PRESTADORA” DECLARA.' , {maxWidth: 190, align: "justify"});
    doc.text(95, 270, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.', {maxWidth: 455, align: "justify"});
    doc.text(95, 350, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.', {maxWidth: 455, align: "justify"});
    doc.text(95, 420, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 460, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “LA PRESTATARIA”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 540, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 590, 'II    DECLARA LA PRESTATARIA,   que su nombre es C. ____________________ y que su Registro Federal de Contribuyentes es ______________________ y que sus obligaciones fiscales están en el rubro de Persona Física con Actividad Empresarial, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en  ___________________, número _____,  en la colonia __________, C.P. _______, en esta ciudad de _____________, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 720, 'Declara que es el propietario del negocio denominado "_____________________", empresa' , {maxWidth: 455, align: "justify"});

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 68, 'que se dedica a ______________________________, y que tiene la suficiente capacidad para celebrar el presente contrato. ', {maxWidth: 455, align: "justify"});
    doc.text(95, 102, 'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.', {maxWidth: 455, align: "justify"});
    doc.text(95, 178, '_______________________________________________________________________________');
    doc.text(95, 210, 'III.	DECLARAN AMBAS PARTES.' );
    doc.text(95, 224, 'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.', {maxWidth: 455, align: "justify"});
    doc.text(95, 270, 'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.', {maxWidth: 455, align: "justify"});
    doc.text(250, 316, 'C L Á U S U L A S:');
    doc.text(95, 338, 'PRIMERA.- OBJETO. “EL PRESTADOR” se obliga a facilitar sus servicios profesionales a “LA PRESTATARIA”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del ____________________ y hasta ___________________.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 420, 'La duración del contrato es  de ________ meses.');
    doc.text(95, 442, 'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 488, 'Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , {maxWidth: 455, align: "justify"});
    doc.text(150, 500, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 512, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 524, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 536, 'Atención directa referente a su contabilidad electrónica');
    doc.text(95, 558, 'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 570, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente ');
    doc.text(150, 582, 'contrato y hasta antes del primer mes que se preste el servicio.');
    doc.text(95, 604, 'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , {maxWidth: 455, align: "justify"});
    doc.text(150, 628, '-	Cancelación de requerimientos en materia del contrato');
    doc.text(150, 640, '-	Nomina Individual de trabajadores');
    doc.text(150, 652, '-	Calculo de Impuesto Sobre Nomina');
    doc.text(150, 664, '-	Movimientos Filiatorios IMSS');
    doc.text(150, 676, '-	Impuesto cedular (trimestral/semestral)	');
    doc.text(150, 688, '-	Semanas cotizadas IMSS');

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 80, '"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por el “LA PRESTATARIA”.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 140, 'SEGUNDA.- PAGO DE HONORARIOS. “LA PRESTATARIA” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ __________ mas IVA,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ' , {maxWidth: 455, align: "justify"});
    doc.text(95, 220, 'L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “LA PRESTATARIA” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al _____ día del mes de ______ de 2020.' , {maxWidth: 455, align: "justify"});
    doc.text(140, 300, '“LA PRESTADORA”.                                      “LA PRESTATARIA”.');
    doc.text(95, 320, '   ___________________________                              ___________________________');
    doc.text(95, 340, 'YADIRA EUGENIA TORRES MENDOZA  ');
    doc.text(95, 360, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.');

    doc.text(95, 400, 'TESTIGOS:');

    doc.text(135, 432, '       TESTIGO				                           TESTIGO');

    doc.text(95, 464, '   ___________________________                              ___________________________');

    doc.text(380, 478, 'MARIO DUARTE FLORES');

    doc.text(95, 490, 'GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL');

    doc.text(140, 512, 'SERVICE S.C.                                                       SERVICE S.C.');

    doc.output('dataurlnewwindow' );

  }
  public rif(): void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'letter');
    doc.setFont("Arial");
    //doc.setFontType("bold");
    doc.setFontSize(11.5);
    doc.text(490, 50, 'PF ACT EMP');
    doc.text(150, 70, ' CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', {maxWidth: 490, align: "justify"});
    doc.text(205, 90, ' EN MATERIA DE CONTABILIDAD GENERAL.', {maxWidth: 490, align: "justify"});
    doc.text(95, 122, '          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, _____________________________________ DE LA EMPRESA CON NOMBRE COMERCIAL ________________________________, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:', {maxWidth: 455, align: "justify"});

    doc.text(200, 225, 'D E C L A R A C I O N E S:');

    doc.text(95, 250, 'I. “LA PRESTADORA” DECLARA.' , {maxWidth: 190, align: "justify"});
    doc.text(95, 270, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.', {maxWidth: 455, align: "justify"});
    doc.text(95, 350, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.', {maxWidth: 455, align: "justify"});
    doc.text(95, 420, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 460, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “LA PRESTATARIA”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 540, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 590, 'II    DECLARA LA PRESTATARIA,   que su nombre es C. ____________________ y que su Registro Federal de Contribuyentes es ______________________ y que sus obligaciones fiscales están en el rubro de Régimen de Incorporación Fiscal, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en  ___________________, número _____,  en la colonia __________, C.P. _______, en esta ciudad de _____________, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 720, 'Declara que es el propietario del negocio denominado "_____________________", empresa' , {maxWidth: 455, align: "justify"});

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 68, 'que se dedica a ______________________________, y que tiene la suficiente capacidad para celebrar el presente contrato. ', {maxWidth: 455, align: "justify"});
    doc.text(95, 102, 'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.', {maxWidth: 455, align: "justify"});
    doc.text(95, 178, '_______________________________________________________________________________');
    doc.text(95, 210, 'III.	DECLARAN AMBAS PARTES.' );
    doc.text(95, 224, 'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.', {maxWidth: 455, align: "justify"});
    doc.text(95, 270, 'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.', {maxWidth: 455, align: "justify"});
    doc.text(250, 316, 'C L Á U S U L A S:');
    doc.text(95, 338, 'PRIMERA.- OBJETO. “EL PRESTADOR” se obliga a facilitar sus servicios profesionales a “LA PRESTATARIA”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del ____________________ y hasta ___________________.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 420, 'La duración del contrato es de ________ meses.');
    doc.text(95, 442, 'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 488, 'Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , {maxWidth: 455, align: "justify"});

    doc.text(150, 500, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 512, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 524, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 536, 'Atención directa referente a su contabilidad electrónica');

    doc.text(95, 558, 'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 570, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente contrato y hasta antes del primer mes que se preste el servicio.' , {maxWidth: 400, align: "justify"});
    doc.text(95, 604, 'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , {maxWidth: 455, align: "justify"});
    doc.text(150, 628, 'Cancelación de requerimientos en materia del contrato: COSTO: $200.00 (Doscientos pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: "justify"});
    doc.text(150, 658, 'Renovación de firma electrónica:  COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: "justify"});
    doc.text(150, 688, 'Generación de factura electrónica Individual: COSTO: $10.00 (Diez pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: "justify"});


    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(150, 80, 'Nomina Individual de trabajadores: COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Mensual' , {maxWidth: 400, align: "justify"});
    doc.text(150, 110, 'Calculo de Impuesto Sobre Nomina:  COSTO: $10.00 (Diez pesos 00/100 M.N) Por ocasión' , {maxWidth: 400, align: "justify"});
    doc.text(150, 140, 'Movimientos Filiatorios IMSS: COSTO: $30.00 (Treinta pesos 00/100 M.N.) Por ocasión' , {maxWidth: 400, align: "justify"});
    doc.text(150, 170, 'Impuesto cedular (trimestral/semestral): COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión' , {maxWidth: 400, align: "justify"});
    doc.text(150, 200, 'Semanas cotizadas IMSS: COSTO: $100.00 (Cien pesos 00/100 M.N.) Por emisión' , {maxWidth: 400, align: "justify"});

    doc.text(95, 240, '"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por el “LA PRESTATARIA”.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 290, 'SEGUNDA.- PAGO DE HONORARIOS. “LA PRESTATARIA” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ __________ mas IVA,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ' , {maxWidth: 455, align: "justify"});
    doc.text(95, 370, 'L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “LA PRESTATARIA” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al _____ día del mes de ______ de 2020.' , {maxWidth: 455, align: "justify"});
    doc.text(140, 452, '“LA PRESTADORA”.                                        “LA PRESTATARIA”.');
    doc.text(95, 472, '   ___________________________                              ___________________________');
    doc.text(95, 490, 'YADIRA EUGENIA TORRES MENDOZA  ');
    doc.text(95, 510, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.');
    doc.text(95, 550, 'TESTIGOS:');
    doc.text(135, 570, '       TESTIGO				                           TESTIGO');
    doc.text(95, 590, '   ___________________________                              ___________________________');

    doc.text(380, 610, 'MARIO DUARTE FLORES');

    doc.text(95, 630, 'GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL');

    doc.text(140, 645, 'SERVICE S.C.                                                       SERVICE S.C.');

    doc.output('dataurlnewwindow' );

  }

  public openPDF() {
    this.rif();
    /*

    doc.text(134, 120, 'QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE', {maxWidth: 490, align: "justify"});
    doc.text(95, 132, 'REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN', {maxWidth: 490, align: "justify"});
    doc.text(95, 144, 'EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA,', {maxWidth: 490, align: "justify"});
    doc.text(95, 156, '_____________________________________ DE LA EMPRESA CON NOMBRE ', {maxWidth: 490, align: "justify"});
    doc.text(95, 168, 'COMERCIAL ________________________________, A QUIEN EN ADELANTE SE ', {maxWidth: 490, align: "justify"});
    doc.text(95, 180, 'DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS ', {maxWidth: 490, align: "justify"});
    doc.text(95, 192, 'DECLARACIONES Y CLAUSULAS SIGUIENTES:    ', {maxWidth: 490, align: "justify"});

    doc.text(250, 225, 'D E C L A R A C I O N E S:', {maxWidth: 490, align: "justify"});

    doc.text(95, 250, 'I.	“LA PRESTADORA” DECLARA.', {maxWidth: 490, align: "justify"});
    doc.text(95, 272, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según');
    doc.text(95, 284, 'consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante ');
    doc.text(95, 296, 'la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial ');
    doc.text(95, 308, 'Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del');
    doc.text(95, 320, 'Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la');
    doc.text(95, 332, 'Sección Cuarta.');

    doc.text(95, 354, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para');
    doc.text(95, 368, 'constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos,');
    doc.text(95, 380, 'estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para');
    doc.text(95, 392, 'el buen desarrollo de una empresa.');

    doc.text(95, 404, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades ');
    doc.text(95, 416, 'para la firma de este contrato.');

    doc.text(95, 438, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos ');
    doc.text(95, 450, 'comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “LA ');
    doc.text(95, 462, 'PRESTATARIA”, y que jurídicamente no se encuentra impedida para contratar y obligarse en ');
    doc.text(95, 474, 'la prestación de estos servicios materia del presente instrumento; que cuenta con los medios ');
    doc.text(95, 486, 'propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.');

    doc.text(95, 508, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio');
    doc.text(95, 520, 'Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta');
    doc.text(95, 532, 'Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes');
    doc.text(95, 544, 'LOGR530503G19.');

    doc.text(95, 566, 'II    DECLARA LA PRESTATARIA,   que su nombre es C. ____________________ y que su');
    doc.text(95, 578, 'Registro Federal de Contribuyentes es ______________________ y que sus obligaciones ');
    doc.text(95, 590, 'fiscales están en el rubro de Persona Física con Actividad Empresarial, declara ser');
    doc.text(95, 602, 'mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales,');
    doc.text(95, 614, 'con domicilio de la empresa ubicado en  ___________________, número _____,  en la ');
    doc.text(95, 626, 'colonia __________, C.P. _______, en esta ciudad de _____________, del Estado de');
    doc.text(95, 638, 'Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los');
    doc.text(95, 650, 'términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no');
    doc.text(95, 662, 'existe motivo legal alguno que le impida celebrar el presente acto jurídico.');

    doc.text(95, 684, 'Declara que es el propietario del negocio denominado "_____________________", empresa');

    doc.addPage();

    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 68, 'que se dedica a ______________________________, y que tiene la suficiente capacidad ');
    doc.text(95, 80, 'para celebrar el presente contrato. ');

    doc.text(95, 102, 'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA');
    doc.text(95, 114, 'PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y ');
    doc.text(95, 126, 'actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea ');
    doc.text(95, 138, 'contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas');
    doc.text(95, 150, 'subsecuentes.');

    doc.text(95, 178, '________________________________________________________________________________________');

    doc.text(95, 210, 'III.	DECLARAN AMBAS PARTES.');
    doc.text(95, 224, 'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales');
    doc.text(95, 236, 'el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO ');
    doc.text(95, 248, 'DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.');

    doc.text(95, 270, 'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente ');
    doc.text(95, 282, 'contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil,');
    doc.text(95, 294, 'asimismo se reconocen mutuamente la personalidad con la que comparecen.');

    doc.text(250, 316, 'C L Á U S U L A S:');

    doc.text(95, 338, 'PRIMERA.- OBJETO. “EL PRESTADOR” se obliga a facilitar sus servicios profesionales a ');
    doc.text(95, 350, '“LA PRESTATARIA”, en materia de CONTABILIDAD ELECTRÓNICA y servicios ');
    doc.text(95, 362, 'relacionados con la misma; siempre y cuando se determinen claramente en cláusula ');
    doc.text(95, 374, 'específica como parte de este contrato, declara a continuación que prestará sus servicios');
    doc.text(95, 386, 'exclusivamente por tiempo determinado, del periodo comprendido del ');
    doc.text(95, 398, '____________________ y hasta ___________________.');

    doc.text(95, 420, 'La duración del contrato es  de ________ meses.');

    doc.text(95, 442, 'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  ');
    doc.text(95, 454, 'es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones,');
    doc.text(95, 466, 'C.P. 31115, la ciudad de Chihuahua, Chih');

    doc.text(95, 488, 'Los servicios que se prestarán con motivo de este contrato serán los siguientes:');
    doc.text(150, 500, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 512, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 524, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 536, 'Atención directa referente a su contabilidad electrónica');

    doc.text(95, 558, 'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 570, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente ');
    doc.text(150, 582, 'contrato y hasta antes del primer mes que se preste el servicio.');

    doc.text(95, 604, 'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición');
    doc.text(95, 616, 'y necesidad del cliente:');
    doc.text(150, 628, '-	Cancelación de requerimientos en materia del contrato');
    doc.text(150, 640, '-	Nomina Individual de trabajadores');
    doc.text(150, 652, '-	Calculo de Impuesto Sobre Nomina');
    doc.text(150, 664, '-	Movimientos Filiatorios IMSS');
    doc.text(150, 676, '-	Impuesto cedular (trimestral/semestral)	');
    doc.text(150, 688, '-	Semanas cotizadas IMSS');

    doc.addPage();

    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 78, '"LA PRESTADORA",  Guardará absoluta confidencialidad con respecto a los datos y ');
    doc.text(95, 90, 'documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar ');
    doc.text(95, 102, 'informes a personas distintas a las autorizadas por el “LA PRESTATARIA”.');

    doc.text(95, 124, 'SEGUNDA.- PAGO DE HONORARIOS. “LA PRESTATARIA” se obliga a pagar a “LA');
    doc.text(95, 136, 'PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este ');
    doc.text(95, 148, 'contrato, honorarios por la cantidad total de $ __________ mas IVA,  durante el periodo ');
    doc.text(95, 160, 'contratado y con la exhibición del recibo correspondiente  respectivo por el servicio ');
    doc.text(95, 172, 'profesional devengado. ');

    doc.text(95, 194, 'L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de ');
    doc.text(95, 206, 'conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para ');
    doc.text(95, 218, '“LA PRESTATARIA” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo');
    doc.text(95, 230, 'nombre, al _____ día del mes de ______ de 2020.');

    doc.text(140, 282, '“LA PRESTADORA”.                                      “LA PRESTATARIA”.');
    doc.text(110, 304, '________________________________                ____________________________');
    doc.text(95, 318, 'YADIRA EUGENIA TORRES MENDOZA  ');
    doc.text(95, 340, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.');

    doc.text(95, 380, 'TESTIGOS:');

    doc.text(150, 412, 'TESTIGO					                           TESTIGO');

    doc.text(95, 444, '_________________________                                    ___________________________');

    doc.text(345, 458, 'MARIO DUARTE FLORES');

    doc.text(95, 470, 'GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL');

    doc.text(140, 492, 'SERVICE S.C.                                                              SERVICE S.C.');
*/
  }


  public downloadPDF(): void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'letter');


    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.setFont("Arial");
    //doc.setFontType("bold");
    doc.setFontSize(11.5);
    doc.text(490, 50, 'PF ACT EMP');
    doc.text(150, 70, 'CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', {maxWidth: 490, align: "justify"});
    doc.text(205, 90, 'EN MATERIA DE CONTABILIDAD GENERAL.', {maxWidth: 490, align: "justify"});
    doc.text(95, 122, '          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, _____________________________________ DE LA EMPRESA CON NOMBRE COMERCIAL ________________________________, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:', {maxWidth: 455, align: "justify"});

    doc.text(200, 225, 'D E C L A R A C I O N E S:');

    doc.text(95, 250, 'I. “LA PRESTADORA” DECLARA.' , {maxWidth: 190, align: "justify"});
    doc.text(95, 270, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.', {maxWidth: 455, align: "justify"});
    doc.text(95, 350, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.', {maxWidth: 455, align: "justify"});
    doc.text(95, 420, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 460, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “LA PRESTATARIA”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 540, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 590, 'II    DECLARA LA PRESTATARIA,   que su nombre es C. ____________________ y que su Registro Federal de Contribuyentes es ______________________ y que sus obligaciones fiscales están en el rubro de Persona Física con Actividad Empresarial, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en  ___________________, número _____,  en la colonia __________, C.P. _______, en esta ciudad de _____________, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 720, 'Declara que es el propietario del negocio denominado "_____________________", empresa' , {maxWidth: 455, align: "justify"});

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 68, 'que se dedica a ______________________________, y que tiene la suficiente capacidad para celebrar el presente contrato. ', {maxWidth: 455, align: "justify"});
    doc.text(95, 102, 'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.', {maxWidth: 455, align: "justify"});
    doc.text(95, 178, '_______________________________________________________________________________');
    doc.text(95, 210, 'III.	DECLARAN AMBAS PARTES.' );
    doc.text(95, 224, 'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.', {maxWidth: 455, align: "justify"});
    doc.text(95, 270, 'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.', {maxWidth: 455, align: "justify"});
    doc.text(250, 316, 'C L Á U S U L A S:');
    doc.text(95, 338, 'PRIMERA.- OBJETO. “EL PRESTADOR” se obliga a facilitar sus servicios profesionales a “LA PRESTATARIA”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del ____________________ y hasta ___________________.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 420, 'La duración del contrato es  de ________ meses.');
    doc.text(95, 442, 'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 488, 'Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , {maxWidth: 455, align: "justify"});
    doc.text(150, 500, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 512, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 524, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 536, 'Atención directa referente a su contabilidad electrónica');
    doc.text(95, 558, 'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 570, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente ');
    doc.text(150, 582, 'contrato y hasta antes del primer mes que se preste el servicio.');
    doc.text(95, 604, 'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , {maxWidth: 455, align: "justify"});
    doc.text(150, 628, '-	Cancelación de requerimientos en materia del contrato');
    doc.text(150, 640, '-	Nomina Individual de trabajadores');
    doc.text(150, 652, '-	Calculo de Impuesto Sobre Nomina');
    doc.text(150, 664, '-	Movimientos Filiatorios IMSS');
    doc.text(150, 676, '-	Impuesto cedular (trimestral/semestral)	');
    doc.text(150, 688, '-	Semanas cotizadas IMSS');

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 80, '"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por el “LA PRESTATARIA”.' , {maxWidth: 455, align: "justify"});
    doc.text(95, 140, 'SEGUNDA.- PAGO DE HONORARIOS. “LA PRESTATARIA” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ __________ mas IVA,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ' , {maxWidth: 455, align: "justify"});
    doc.text(95, 220, 'L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “LA PRESTATARIA” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al _____ día del mes de ______ de 2020.' , {maxWidth: 455, align: "justify"});
    doc.text(140, 300, '“LA PRESTADORA”.                                      “LA PRESTATARIA”.');
    doc.text(110, 320, '________________________________                ____________________________');
    doc.text(95, 340, 'YADIRA EUGENIA TORRES MENDOZA  ');
    doc.text(95, 360, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.');

    doc.text(95, 400, 'TESTIGOS:');

    doc.text(150, 432, 'TESTIGO					                         TESTIGO');

    doc.text(95, 464, '_________________________                                    ___________________________');

    doc.text(380, 478, 'MARIO DUARTE FLORES');

    doc.text(95, 490, 'GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL');

    doc.text(140, 512, 'SERVICE S.C.                                                       SERVICE S.C.');


    doc.save('angular-demo.pdf');
  }
  ngOnInit(): void {
  }
}
