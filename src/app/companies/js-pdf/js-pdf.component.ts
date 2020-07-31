import { Component, OnInit  , ViewChild, ElementRef} from '@angular/core';
import * as jsPDF from 'jspdf';
import { AdminService } from '../../_services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-js-pdf',
  templateUrl: './js-pdf.component.html',
  styleUrls: ['./js-pdf.component.css']
})
export class JsPDFComponent implements OnInit {
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  id: number;
  inf: any;
  todayDate: Date = new Date();
  cliente = new Image();


  constructor(
   private adminService: AdminService,
   private activatedRoute: ActivatedRoute
  ) {
  }
  public pf(): void {
    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    // doc.setFontType("bold");
    doc.setFontSize(11.5);
    doc.text(490, 50, 'PF ACT EMP');
    doc.text(150, 70, 'CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', {maxWidth: 490, align: 'justify'});
    doc.text(205, 90, 'EN MATERIA DE CONTABILIDAD GENERAL.', {maxWidth: 490, align: 'justify'});
    doc.text(95, 122, '          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, _____________________________________ DE LA EMPRESA CON NOMBRE COMERCIAL ________________________________, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:', {maxWidth: 455, align: 'justify'});

    doc.text(200, 225, 'D E C L A R A C I O N E S:');

    doc.text(95, 250, 'I. “LA PRESTADORA” DECLARA.' , {maxWidth: 190, align: 'justify'});
    doc.text(95, 270, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 350, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 420, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 460, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “LA PRESTATARIA”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 540, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 590, 'II    DECLARA LA PRESTATARIA,   que su nombre es C. ____________________ y que su Registro Federal de Contribuyentes es ______________________ y que sus obligaciones fiscales están en el rubro de Persona Física con Actividad Empresarial, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en  ___________________, número _____,  en la colonia __________, C.P. _______, en esta ciudad de _____________, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 720, 'Declara que es el propietario del negocio denominado "_____________________", empresa' , {maxWidth: 455, align: 'justify'});

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 68, 'que se dedica a ______________________________, y que tiene la suficiente capacidad para celebrar el presente contrato. ', {maxWidth: 455, align: 'justify'});
    doc.text(95, 102, 'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 178, '_______________________________________________________________________________');
    doc.text(95, 210, 'III.	DECLARAN AMBAS PARTES.' );
    doc.text(95, 224, 'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 270, 'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.', {maxWidth: 455, align: 'justify'});
    doc.text(250, 316, 'C L Á U S U L A S:');
    doc.text(95, 338, 'PRIMERA.- OBJETO. “EL PRESTADOR” se obliga a facilitar sus servicios profesionales a “LA PRESTATARIA”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del ____________________ y hasta ___________________.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 420, 'La duración del contrato es  de ________ meses.');
    doc.text(95, 442, 'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 488, 'Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , {maxWidth: 455, align: 'justify'});
    doc.text(150, 500, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 512, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 524, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 536, 'Atención directa referente a su contabilidad electrónica');
    doc.text(95, 558, 'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 570, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente ');
    doc.text(150, 582, 'contrato y hasta antes del primer mes que se preste el servicio.');
    doc.text(95, 604, 'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , {maxWidth: 455, align: 'justify'});
    doc.text(150, 628, '-	Cancelación de requerimientos en materia del contrato');
    doc.text(150, 640, '-	Nomina Individual de trabajadores');
    doc.text(150, 652, '-	Calculo de Impuesto Sobre Nomina');
    doc.text(150, 664, '-	Movimientos Filiatorios IMSS');
    doc.text(150, 676, '-	Impuesto cedular (trimestral/semestral)	');
    doc.text(150, 688, '-	Semanas cotizadas IMSS');

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 80, '"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por el “LA PRESTATARIA”.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 140, 'SEGUNDA.- PAGO DE HONORARIOS. “LA PRESTATARIA” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ __________ mas IVA,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 220, 'L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “LA PRESTATARIA” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al _____ día del mes de ______ de 2020.' , {maxWidth: 455, align: 'justify'});
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
  public rif(download?: any, post?: any): void {
    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const endDate = this.todayDate.getFullYear() + 1 + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const cliente = new Image(); // HTML5 Constructor

    cliente.src = `http://192.168.137.1:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');

    // doc.setFontType("bold");
    doc.setFontSize(11.5);
    doc.text(490, 50, 'RIF');
    doc.text(150, 70, ' CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', {maxWidth: 490, align: 'justify'});
    doc.text(205, 90, ' EN MATERIA DE CONTABILIDAD GENERAL.', {maxWidth: 490, align: 'justify'});
    doc.text(95, 122, `          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, ${this.inf.first_name} ${this.inf.last_name} DE LA EMPRESA CON NOMBRE COMERCIAL ${this.inf.company}, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:`, {maxWidth: 455, align: 'justify'});

    doc.text(200, 225, 'D E C L A R A C I O N E S:');

    doc.text(95, 250, 'I. “LA PRESTADORA” DECLARA.' , {maxWidth: 190, align: 'justify'});
    doc.text(95, 270, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 350, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 420, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 460, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “LA PRESTATARIA”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 540, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 590, `II    DECLARA LA PRESTATARIA,   que su nombre es C. ____________________ y que su Registro Federal de Contribuyentes es ${this.inf.rfc} y que sus obligaciones fiscales están en el rubro de Régimen de Incorporación Fiscal, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en ${this.inf.street}, número ${this.inf.num_ext},  en la colonia ${this.inf.colony}, C.P. ${this.inf.cp}, en esta ciudad de ${this.inf.city}, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 720, `Declara que es el propietario del negocio denominado "_____________________", empresa` , {maxWidth: 455, align: 'justify'});

    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(95, 68,  `que se dedica a ${this.inf.main_activity}, y que tiene la suficiente capacidad para celebrar el presente contrato. `, {maxWidth: 455, align: 'justify'});
    doc.text(95, 102, 'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 178, '_______________________________________________________________________________');
    doc.text(95, 210, 'III.	DECLARAN AMBAS PARTES.' );
    doc.text(95, 224, 'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 270, 'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.', {maxWidth: 455, align: 'justify'});
    doc.text(250, 316, 'C L Á U S U L A S:');
    doc.text(95, 338, `PRIMERA.- OBJETO. “EL PRESTADOR” se obliga a facilitar sus servicios profesionales a “LA PRESTATARIA”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del  ${date} y hasta  ${endDate}.` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 420, 'La duración del contrato es de 12 meses.');
    doc.text(95, 442, 'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 488, 'Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , {maxWidth: 455, align: 'justify'});

    doc.text(150, 500, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 512, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 524, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 536, 'Atención directa referente a su contabilidad electrónica');

    doc.text(95, 558, 'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 570, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente contrato y hasta antes del primer mes que se preste el servicio.' , {maxWidth: 400, align: 'justify'});
    doc.text(95, 604, 'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , {maxWidth: 455, align: 'justify'});
    doc.text(150, 628, 'Cancelación de requerimientos en materia del contrato: COSTO: $200.00 (Doscientos pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: 'justify'});
    doc.text(150, 658, 'Renovación de firma electrónica:  COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: 'justify'});
    doc.text(150, 688, 'Generación de factura electrónica Individual: COSTO: $10.00 (Diez pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: 'justify'});


    doc.addPage();
    doc.text(490, 45, 'PF ACT EMP');
    doc.text(150, 80, 'Nomina Individual de trabajadores: COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Mensual' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 110, 'Calculo de Impuesto Sobre Nomina:  COSTO: $10.00 (Diez pesos 00/100 M.N) Por ocasión' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 140, 'Movimientos Filiatorios IMSS: COSTO: $30.00 (Treinta pesos 00/100 M.N.) Por ocasión' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 170, 'Impuesto cedular (trimestral/semestral): COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 200, 'Semanas cotizadas IMSS: COSTO: $100.00 (Cien pesos 00/100 M.N.) Por emisión' , {maxWidth: 400, align: 'justify'});

    doc.text(95, 240, '"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por el “LA PRESTATARIA”.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 290, `SEGUNDA.- PAGO DE HONORARIOS. “LA PRESTATARIA” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ __________ mas IVA,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 370, `L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “LA PRESTATARIA” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al ${this.todayDate.getDate()} día del mes de ${this.todayDate.getMonth() + 1} de 2020.` , {maxWidth: 455, align: 'justify'});
    doc.text(140, 452, '“LA PRESTADORA”.                                        “LA PRESTATARIA”.');
    doc.text(95, 500, '   ___________________________                              ___________________________');
    doc.addImage(cliente, 'PNG', 140, 450, 100, 50);
    doc.addImage(cliente, 'PNG', 400, 450, 100, 50);
    doc.text(95, 530, 'YADIRA EUGENIA TORRES MENDOZA  ');
    doc.text(95, 550, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.');
    doc.text(95, 580, 'TESTIGOS:');
    doc.text(135, 610, '       TESTIGO				                           TESTIGO');
    doc.text(95, 660, `   ___________________________                              ___________________________`);
    doc.addImage(cliente, 'PNG', 140, 610, 100, 50);
    doc.addImage(cliente, 'PNG', 400, 615, 100, 50);
    doc.text(380, 675, 'MARIO DUARTE FLORES');

    doc.text(95, 690, 'GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL');

    doc.text(140, 700, 'SERVICE S.C.                                                       SERVICE S.C.');
    if (download) {
      doc.save('angular-demo.pdf');
    } else {
      doc.output('dataurlnewwindow' );
    }
    if (post) {
      this.adminService.postContract(this.id, doc.output('blob')).subscribe(response => console.log(response));
    }


  }

  public openPDF() {
    this.rif();
  }


  public downloadPDF(): void {
    this.rif(true);

  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id_company'];
    this.adminService.getInfContract(this.id).subscribe(response => this.inf = response);
  }
}
