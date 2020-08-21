import { Component, OnInit, OnDestroy} from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
//import * as autoTable from 'jspdf-autotable';

import { AdminService } from '../../_services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from '../../models/email';
import * as nl from 'numeros_a_letras';



@Component({
  selector: 'app-js-pdf',
  templateUrl: './js-pdf.component.html',
  styleUrls: ['./js-pdf.component.css']
})
export class JsPDFComponent implements OnInit, OnDestroy
{
  pdfSrc;
  recibov;
  id: number;
  inf: any;
  todayDate: Date = new Date();
  cliente = new Image();
  value: any;
  recibo: any;
  email: any;
  contratoName: any;
  reciboName: any;
  contrato: any;
  methodPayment: any;

  firmas: any;
  mario: any;
  yadira: any;

  constructor(
   private adminService: AdminService,
   private activatedRoute: ActivatedRoute,
   private router: Router

  ) {
    this.email = new Email();
  }

   pf(download?: any, post?: any): void {
    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const endDate = this.todayDate.getFullYear() + 1 + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const cliente = new Image(); // HTML5 Constructor
    const prestador = new Image();
    const testigo2 = new Image();
    const logo = new Image();
    const sparador = new Image();
    const fb = new Image();

    const identificador = 'CE-' + this.contrato;


    cliente.src = `http://192.168.137.1:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    prestador.src = `http://192.168.137.1:3000/files/${this.yadira}`;
    prestador.alt = 'alt';

    testigo2.src = `http://192.168.137.1:3000/files/${this.mario}`;
    testigo2.alt = 'alt';

    logo.src = `http://192.168.137.1:3000/files/Logo.png`;
    logo.alt = 'alt';

    sparador.src = `http://192.168.137.1:3000/files/separador.png`;
    sparador.alt = 'alt';

    fb.src = `http://192.168.137.1:3000/files/facebook.png`;
    fb.alt = 'alt';

    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(490, 60, `${identificador}`);
    doc.text(150, 80, 'CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', {maxWidth: 490, align: 'justify'});
    doc.text(205, 100, 'EN MATERIA DE CONTABILIDAD GENERAL.', {maxWidth: 490, align: 'justify'});
    doc.text(95, 132, `          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()} DE LA EMPRESA CON NOMBRE COMERCIAL ${(this.inf.company).toUpperCase()}, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:`, {maxWidth: 455, align: 'justify'});
    doc.text(200, 235, 'D E C L A R A C I O N E S:');
    doc.text(95, 260, 'I. “LA PRESTADORA” DECLARA.' , {maxWidth: 190, align: 'justify'});
    doc.text(95, 280, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 360, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 430, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 470, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencias requeridas por “EL PRESTATARIO”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 550, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 600, `II    DECLARA EL PRESTATARIO,   que su nombre es C. ${this.inf.first_name} ${this.inf.last_name} y que su Registro Federal de Contribuyentes es ${this.inf.rfc} y que sus obligaciones fiscales están en el rubro de Persona Física con Actividad Empresarial, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en  ${this.inf.street}, número ${this.inf.num_ext},  en la colonia ${this.inf.colony}, C.P. ${this.inf.cp}, en esta ciudad de ${this.inf.city}, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.` , {maxWidth: 455, align: 'justify'});
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(95, 750, `Tel +52 (614) 415 00 74` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 750, `Edificio Corporativo Cantera V, Piso 3` , {maxWidth: 455, align: 'justify'});
    doc.text(485, 750, `/Gestoria Empresarial` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 760, `Chihuahua, Chih.` , {maxWidth: 455, align: 'justify'});

    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(490, 45,  `${identificador}`);
    doc.text(95, 78,   `Declara que es el propietario del negocio denominado "${this.inf.company}", empresa que se dedica a ${this.inf.main_activity}, y que tiene la suficiente capacidad para celebrar el presente contrato. ` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 112,  'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 188,  '_______________________________________________________________________________');
    doc.text(95, 220,  'III.	DECLARAN AMBAS PARTES.' );
    doc.text(95, 234,  'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 280,  'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.', {maxWidth: 455, align: 'justify'});
    doc.text(250, 326, 'C L Á U S U L A S:');
    doc.text(95, 348,  `PRIMERA.- OBJETO. “LA PRESTADORA” se obliga a facilitar sus servicios profesionales a “EL PRESTATARIO”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del ${date} y hasta ${endDate}.` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 430,  'La duración del contrato es de 12 meses.');
    doc.text(95, 452,  'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 498,  'Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , {maxWidth: 455, align: 'justify'});
    doc.text(150, 510, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 522, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 534, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 546, 'Atención directa referente a su contabilidad electrónica');
    doc.text(95, 568,  'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 580, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente ');
    doc.text(150, 592, 'contrato y hasta antes del primer mes que se preste el servicio.');
    doc.text(95, 614,  'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , {maxWidth: 455, align: 'justify'});
    doc.text(150, 638, '-	Cancelación de requerimientos en materia del contrato');
    doc.text(150, 650, '-	Nomina Individual de trabajadores');
    doc.text(150, 662, '-	Calculo de Impuesto Sobre Nomina');
    doc.text(150, 674, '-	Movimientos Filiatorios IMSS');
    doc.text(150, 686, '-	Impuesto cedular (trimestral/semestral)	');
    doc.text(150, 698, '-	Semanas cotizadas IMSS');
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(95, 750, `Tel +52 (614) 415 00 74              Edificio Corporativo Cantera V, Piso 3                   /Gestoria Empresarial` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 760, `                                          Chihuahua, Chih.                                                          ` , {maxWidth: 455, align: 'justify'});


    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(490, 45, `${identificador}`);
    doc.text(95, 80, '"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por “EL PRESTATARIO”.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 140, `SEGUNDA.- PAGO DE HONORARIOS. “EL PRESTATARIO” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ ${this.value} IVA incluido,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 220, `L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “EL PRESTATARIO” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al ${this.todayDate.getDate()} día del mes de ${this.todayDate.getMonth() + 1} de 2020.` , {maxWidth: 455, align: 'justify'});
    doc.text(150, 300, '“LA PRESTADORA”.                                              “EL PRESTATARIO”.');
    doc.text(125, 348, '   ___________________________                              ___________________________');
    doc.addImage(prestador, 'PNG', 160, 300, 100, 50);
    doc.addImage(cliente, 'PNG', 380, 300, 100, 50);
    doc.text(95, 380, 'YADIRA EUGENIA TORRES MENDOZA  ');
    doc.text(335, 380, `${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()}`);
    doc.text(95, 400, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.');
    doc.text(95, 430, 'TESTIGOS:');
    doc.text(165, 460, '      TESTIGO				                                 TESTIGO');
    doc.text(125, 510, '   ___________________________                              ___________________________');
    doc.addImage(cliente, 'PNG', 160, 460, 100, 50);
    doc.addImage(testigo2, 'PNG', 380, 460, 100, 50);
    doc.text(360, 525, 'MARIO DUARTE FLORES');
    doc.text(120, 540, 'GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL');
    doc.text(175, 550, 'SERVICE S.C.                                                       SERVICE S.C.');
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(95, 750, `Tel +52 (614) 415 00 74                      Edificio Corporativo Cantera V, Piso 3` , {maxWidth: 455, align: 'justify'});
    doc.text(485, 750, `/Gestoria Empresarial` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 760, `                                                           Chihuahua, Chih.                                                                ` , {maxWidth: 455, align: 'justify'});


    if (download == 'true') {
      doc.save('Contrato_GGlobals.pdf');
    } else {
      doc.output('dataurlnewwindow');
    }

    if (post) {
      this.adminService.postContract(this.id, doc.output('blob')).subscribe(response => {
        this.contratoName = response['nombre'];
        this.adminService.getContract(this.id).subscribe( response => {
          localStorage.setItem('cont', response['nombre']);
          this.pdfSrc = `http://192.168.137.1:3000/files/${response['nombre']}`;
        });
      });
    }

  }

  rif(download?: any, post?: any) {
    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const endDate = this.todayDate.getFullYear() + 1 + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const cliente = new Image(); // HTML5 Constructor
    const prestador = new Image();
    const testigo2 = new Image();
    const logo = new Image();
    const sparador = new Image();
    const fb = new Image();

    const identificador = 'CR-' + this.contrato;


    cliente.src = `http://192.168.137.1:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    prestador.src = `http://192.168.137.1:3000/files/${this.yadira}`;
    prestador.alt = 'alt';

    testigo2.src = `http://192.168.137.1:3000/files/${this.mario}`;
    testigo2.alt = 'alt';

    logo.src = `http://192.168.137.1:3000/files/Logo.png`;
    logo.alt = 'alt';

    sparador.src = `http://192.168.137.1:3000/files/separador.png`;
    sparador.alt = 'alt';

    fb.src = `http://192.168.137.1:3000/files/facebook.png`;
    fb.alt = 'alt';

    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(490, 60, `${identificador}`);
    doc.text(150, 80, ' CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', {maxWidth: 490, align: 'justify'});
    doc.text(205, 100, ' EN MATERIA DE CONTABILIDAD GENERAL.', {maxWidth: 490, align: 'justify'});
    doc.text(95, 132, `          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, ${this.inf.first_name} ${this.inf.last_name} DE LA EMPRESA CON NOMBRE COMERCIAL ${this.inf.company}, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:`, {maxWidth: 455, align: 'justify'});
    doc.text(200, 235, 'D E C L A R A C I O N E S:');
    doc.text(95, 260, 'I. “LA PRESTADORA” DECLARA.' , {maxWidth: 190, align: 'justify'});
    doc.text(95, 280, 'Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 360, 'Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 430, 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 470, 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “EL PRESTATARIO”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 550, 'Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 600, `II    DECLARA EL PRESTATARIO,   que su nombre es C. ${this.inf.first_name} ${this.inf.last_name} y que su Registro Federal de Contribuyentes es ${this.inf.rfc} y que sus obligaciones fiscales están en el rubro de Régimen de Incorporación Fiscal, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en ${this.inf.street}, número ${this.inf.num_ext},  en la colonia ${this.inf.colony}, C.P. ${this.inf.cp}, en esta ciudad de ${this.inf.city}, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.` , {maxWidth: 455, align: 'justify'});
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(95, 750, `Tel +52 (614) 415 00 74` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 750, `Edificio Corporativo Cantera V, Piso 3` , {maxWidth: 455, align: 'justify'});
    doc.text(485, 750, `/Gestoria Empresarial` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 760, `Chihuahua, Chih.                                                                ` , {maxWidth: 455, align: 'justify'});

    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(490, 45, `${identificador}`);
    doc.text(95, 78,  `Declara que es el propietario del negocio denominado "${this.inf.company}", empresa que se dedica a ${this.inf.main_activity}, y que tiene la suficiente capacidad para celebrar el presente contrato. `, {maxWidth: 455, align: 'justify'});
    doc.text(95, 112, 'Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 188, '_______________________________________________________________________________');
    doc.text(95, 220, 'III.	DECLARAN AMBAS PARTES.' );
    doc.text(95, 234, 'Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.', {maxWidth: 455, align: 'justify'});
    doc.text(95, 280, 'Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.', {maxWidth: 455, align: 'justify'});
    doc.text(250, 326, 'C L Á U S U L A S:');
    doc.text(95, 348, `PRIMERA.- OBJETO. “LA PRESTADORA” se obliga a facilitar sus servicios profesionales a “EL PRESTATARIO”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del  ${date} y hasta  ${endDate}.` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 430, 'La duración del contrato es de 12 meses.');
    doc.text(95, 452, 'El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 498, 'Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , {maxWidth: 455, align: 'justify'});
    doc.text(150, 510, 'Elaboración de declaraciones de impuestos federales');
    doc.text(150, 522, 'Elaboración de facturas de ventas al publico en general');
    doc.text(150, 534, 'Cita en el (SAT), por cualquier razón');
    doc.text(150, 546, 'Atención directa referente a su contabilidad electrónica');
    doc.text(95, 568, 'De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:');
    doc.text(150, 580, 'Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente contrato y hasta antes del primer mes que se preste el servicio.' , {maxWidth: 400, align: 'justify'});
    doc.text(95, 614, 'De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , {maxWidth: 455, align: 'justify'});
    doc.text(150, 638, 'Cancelación de requerimientos en materia del contrato: COSTO: $200.00 (Doscientos pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: 'justify'});
    doc.text(150, 668, 'Renovación de firma electrónica:  COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: 'justify'});
    doc.text(150, 698, 'Generación de factura electrónica Individual: COSTO: $10.00 (Diez pesos 00/100 M.N.) Por ocasión', {maxWidth: 400, align: 'justify'});
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(95, 750, `Tel +52 (614) 415 00 74` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 750, `Edificio Corporativo Cantera V, Piso 3` , {maxWidth: 455, align: 'justify'});
    doc.text(485, 750, `/Gestoria Empresarial` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 760, `Chihuahua, Chih.                                                                ` , {maxWidth: 455, align: 'justify'});


    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(490, 45, `${identificador}`);
    doc.text(150, 80, 'Nomina Individual de trabajadores: COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Mensual' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 110, 'Calculo de Impuesto Sobre Nomina:  COSTO: $10.00 (Diez pesos 00/100 M.N) Por ocasión' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 140, 'Movimientos Filiatorios IMSS: COSTO: $30.00 (Treinta pesos 00/100 M.N.) Por ocasión' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 170, 'Impuesto cedular (trimestral/semestral): COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión' , {maxWidth: 400, align: 'justify'});
    doc.text(150, 200, 'Semanas cotizadas IMSS: COSTO: $100.00 (Cien pesos 00/100 M.N.) Por emisión' , {maxWidth: 400, align: 'justify'});
    doc.text(95, 240, '"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por el “EL PRESTATARIO”.' , {maxWidth: 455, align: 'justify'});
    doc.text(95, 290, `SEGUNDA.- PAGO DE HONORARIOS. “EL PRESTATARIO” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ ${this.value} IVA incluido,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 370, `L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “EL PRESTATARIO” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al ${this.todayDate.getDate()} día del mes de ${this.todayDate.getMonth() + 1} de 2020.` , {maxWidth: 455, align: 'justify'});
    doc.text(150, 452, '“LA PRESTADORA”.                                              “EL PRESTATARIO”.');
    doc.text(125, 500, '   ___________________________                              ___________________________');
    doc.addImage(prestador, 'PNG', 160, 450, 100, 50);
    doc.addImage(cliente, 'PNG', 370, 450, 100, 50);
    doc.text(95, 530, 'YADIRA EUGENIA TORRES MENDOZA  ');
    doc.text(335, 530, `${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()}`);
    doc.text(95, 550, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.');
    doc.text(95, 580, 'TESTIGOS:');
    doc.text(165, 610, '       TESTIGO				                              TESTIGO');
    doc.text(125, 660, `   ___________________________                              ___________________________`);
    doc.addImage(cliente, 'PNG', 150, 610, 100, 50);
    doc.addImage(testigo2, 'PNG', 370, 615, 100, 50);
    doc.text(360, 675, 'MARIO DUARTE FLORES');
    doc.text(120, 690, 'GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL');
    doc.text(175, 700, 'SERVICE S.C.                                                       SERVICE S.C.');
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(95, 750, `Tel +52 (614) 415 00 74                      Edificio Corporativo Cantera V, Piso 3` , {maxWidth: 455, align: 'justify'});
    doc.text(485, 750, `/Gestoria Empresarial` , {maxWidth: 455, align: 'justify'});
    doc.text(95, 760, `                                                           Chihuahua, Chih.                                                                ` , {maxWidth: 455, align: 'justify'});

    if (download == 'true') {
      doc.save('Contrato_GGlobals.pdf');
    }
    if (post) {
      this.adminService.postContract(this.id, doc.output('blob')).subscribe(response => {
        this.contratoName = response['nombre'];
        localStorage.setItem('cont', response['nombre']);
        this.adminService.getContract(this.id).subscribe( response => this.pdfSrc = `http://192.168.137.1:3000/files/${response['nombre']}`);
      });
    }
  }

  receipt(download?: any, post?: any) {

    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const endDate = this.todayDate.getFullYear() + 1 + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const cliente = new Image(); // HTML5 Constructor
    const prestador = new Image();
    const testigo2 = new Image();
    const logo = new Image();
    const columns = ['Año', 'Mes', 'Total',  'Estado'];
    const data = [[
    this.todayDate.getFullYear(), this.todayDate.getMonth() + 1, this.value, "PAGADO"]];
    const value2: number = +this.value;
    const value3 = nl(value2);
    const a = this.value;
    const b = parseFloat(this.value);
    const c: number = a-b;
    let service: any;
    let identificador: any;
    console.log(this.contrato);


    if (this.inf.id_service == 1) {
       service = 'RCR-' + (this.recibo[0]['id_receipt'] + 1);
       identificador = 'CR-' + this.contrato;
       console.log(identificador);
    }
    if (this.inf.id_service == 2) {
      service = 'RCE-' + (this.recibo[0]['id_receipt'] + 1);
      identificador = 'CE-' + this.contrato;
      console.log(identificador);


    }

    cliente.src = `http://192.168.137.1:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    prestador.src = `http://192.168.137.1:3000/files/${this.yadira}`;
    prestador.alt = 'alt';

    testigo2.src = `http://192.168.137.1:3000/files/${this.mario}`;
    testigo2.alt = 'alt';

    logo.src = `http://192.168.137.1:3000/files/Logo.png`;
    logo.alt = 'alt';


    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    // doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.setFontSize(10);

    doc.text(190, 40, 'E-Mail:  servicioconta@gglobals.com.mx ');
    doc.text(390, 40, 'Gestoria Empresarial Global Service, S.C.');
    doc.text(390, 50, 'RFC :          GEG-110121-U13');


    doc.text(190, 50, 'Telefono: 614 415 00 74');
    doc.text(390, 60, 'Direccion: Av. Cantera 9301 Col. Las Misiones');

    doc.text(190, 60, 'Sitio Web: Gglobals.com.mx');
    doc.text(390, 70, 'Edificio Corporativo: Cantera V, Piso 3');

    doc.text(85, 75, '__________________________________________________________________________________________');


    doc.setFontSize(16);
    doc.setFont('helvetica');
    doc.setFontType("bold");
    doc.text(210, 120, 'R E C I B O   D E   P A G O');
    doc.setFont('Arial');

// ======================================================================================================================= //
    doc.setFontSize(11.5);
    doc.text(40, 150,  `Recibimos de :                                                                                                                  No. recibo :`);
    doc.text(40, 153,  `                            _______________________________________________________                      _________ `);
    doc.setFontType("normal")
    doc.text(200, 148, ` ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()} `);
    doc.text(500, 148, ` ${service}`);

    
// ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 175,  `La cantidad de :`);
    doc.text(40, 178,  `                              __________________________________________________________________________ `);
    doc.setFontType("normal")
    doc.text(200, 173, ` $${(a).toUpperCase()}       ${(value3).toUpperCase()} PESOS ${c}/100 MXN`);
// ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 200,  `Concepto :                                         Forma de pago :                                              RFC :`);
    doc.text(40, 203,  `                    __________________                                  _____________________              ________________`);
    doc.setFontType("normal");
    doc.text(105, 198, ` MENSUALIDAD                                         ${this.methodPayment}`);
    doc.text(470, 198, `${(this.inf.rfc).toUpperCase()}`);

    // ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 225,  `Razon social :`);
    doc.text(40, 228,  `                          ____________________________________________________________________________ `);
    doc.setFontType("normal")
    doc.text(150, 223, ` ${(this.inf.main_activity).toUpperCase()} `);
    // ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 250,  `Actividad :                                                           Calle :`);
    doc.text(40, 253,  `                      ___________________________                ___________________________________________ `);
    doc.setFontType("normal")
    doc.text(130, 248, ` ${(this.inf.main_activity).toUpperCase()}`);
    doc.text(310, 248, `${(this.inf.street).toUpperCase()}`);

    // ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 275,  `Numero :                  Colonia :                                                                                                Cp :`);
    doc.text(40, 278,  `                  _______                  ______________________________________________            ____________ `);
    doc.setFontType("normal")
    doc.text(95, 273, ` ${this.inf.num_ext}`);
    doc.text(200, 273, `${(this.inf.colony).toUpperCase()}`);
    doc.text(500, 273, `${this.inf.cp}`);


    // ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 300,  `Entre calles :                                                                               Y :`);
    doc.text(40, 303,  `                         _____________________________________         ___________________________________ `);
    doc.setFontType("normal")
    doc.text(110, 298, `${(this.inf.street).toUpperCase()}`);
    doc.text(350, 298, `${(this.inf.street).toUpperCase()}`);

    // ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 325,  `Calle posterior :                                                                                                 No. contrato :`);
    doc.text(40, 328,  `                              ______________________________________________                            ______________ `);
    doc.setFontType("normal")
    doc.text(120, 323, ` ${(this.inf.street).toUpperCase()}`);
    doc.text(490, 323, `${identificador}`);

    // ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(40, 350,  `Fecha de pago :                                                                       `);
    doc.text(40, 353,  `                            _____________ `);
    doc.setFontType("normal")
    // ======================================================================================================================= //
    doc.setFontType("bold");
    doc.text(200, 395,  `_____________________________________ `);
    doc.setFontType("normal")
    doc.text(210, 415,  `            GESTORIA EMPRESARIAL `);
    doc.text(210, 430,  `               GLOBAL SERVICE S.C`);
    doc.addImage(cliente, 'PNG', 243, 350, 130, 45);
    doc.text(130, 348, ` ${date}                                                 `);
    // ======================================================================================================================= //
    doc.autoTable(columns, data, { margin: { top: 470 }, styles: { halign: 'center' }, theme: 'grid'});
    // ======================================================================================================================= //
    doc.setFontSize(11.5);
    doc.text(240, 620, `Aviso de Privacidad Simplificado` , {maxWidth: 540, align: 'justify'});
    doc.setFontSize(9);
    doc.text(40, 640, `Gestoria Empresarial Global Service SC, implementa las medidas de seguridad y mecanismos tecnicos necesarios para la proteccion de datos personales y sencibles, procurando siempre la integridad de dichos datos evitando asi el daño, perdida, o el uso, acceso a tratamiento no autorizado por los titulares, la vulnerabilidad surgida por la alteracion de los mismos sera informada por Gestoria Empresarial Global Service SC, en la brevedad posible a los titulares, a fin de que se puedan tomar medidas pertinentes a la defensa de sus derechos tal como lo señala el articulo 20 de la ley, Gestoria Empresarial Global Service SC, por consucto de sus representantes legales, directivos o personal a cargo se compromete a guardar confidencialidad respuecto a los datos de los titulares, confidencialidad que subsistira aun despues de terminada la relacion con Gestoria Empresarial Global Service SC, teniendo asi prohinido el acceso de personas no autorizadas y utilizar los datos personales de los titulares para los fines distintos establecidos de manera contractual o a los establecidos en el presente aviso de privacidad, para visualizar nuestro abiso de privacidad vigente, visitar la pagina de https://gglobals.com.mx/aviso-de-privacidad/` , {maxWidth: 540, align: 'justify'});


    if (download == 'true') {
      if (this.inf.name_service === 'Contabilidad Rif') {
        doc.save('RCR.pdf');
      } else {
        doc.save('RCE.pdf');
      }
    }

    if (post) {
      this.adminService.postReceipt(this.id, identificador, doc.output('blob')).subscribe(response => {
        this.adminService.getReceiptById(response['id_receipt']).subscribe( response => {
          localStorage.setItem('rec', response[0]['name']);
          localStorage.setItem(post, 'no');
          this.reciboName = response[0]['name'];
          this.recibov = `http://192.168.137.1:3000/files/${response[0]['name']}`;
        });
      });
    }
  }

  acuse(email: any, download?: any, post?: any): void {
    const date = this.todayDate.getFullYear() + '-' + (this.todayDate.getMonth() + 1) + '-' + this.todayDate.getDate();
    const logo = new Image();
    const sparador = new Image();
    const fb = new Image();
    const espacio = " ";

    const arrayDeCadenas = this.inf.last_name.split(espacio);

    logo.src = `http://192.168.137.1:3000/files/Logo.png`;
    logo.alt = 'alt';

    sparador.src = `http://192.168.137.1:3000/files/separador.png`;
    sparador.alt = 'alt';

    fb.src = `http://192.168.137.1:3000/files/facebook.png`;
    fb.alt = 'alt';

    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.setFontType("bold");

    doc.text(320, 80, 'GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.', {maxWidth: 490, align: 'center'});
    doc.text(320, 90, 'DEPARTAMENTO DE CONTABILIDAD', {maxWidth: 490, align: 'center'});
    doc.text(320, 110, 'ACUSE DE GENEREACIÓN DE CLAVE Y USUARIO PARA APP(GGLOBALS)', {maxWidth: 490, align: 'center'});
    doc.setFontSize(10);
    doc.text(40, 130, ` RFC: ${this.inf.rfc.toUpperCase()}`, {maxWidth: 455, align: 'justify'});
    doc.text(40, 140, ` NOMBRE DE LA PERSONA/RAZON SOCIAL: ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()}`, {maxWidth: 455, align: 'justify'});
    doc.text(40, 150, ` CORREO ELECTRONICO: ${email}`, {maxWidth: 455, align: 'justify'});
    doc.text(40, 160, ` FECHA DE EMISION DE LAS CLAVES: ${date}`, {maxWidth: 455, align: 'justify'});
    doc.setFontType("normal");
    doc.text(40, 180, `Manifestamos haciendo de su conocimiento de que la contraseña y clave de acceso a su aplicacion (GGlobals), desarrollada por Gestoria Empresarial Global Service Sc, que le proporcionara nuestro ejecutivo de atencion a empresas, por medio de este documento, es personal e intransferible, y que usted: ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()} con RFC: ${this.inf.rfc.toUpperCase()}, es responsable del resguardo y uso de las mismas`, {maxWidth: 530, align: 'justify'});
    doc.text(40, 240, 'La aplicacion Gglobals, es un sitio diseñado exclusivamente con el fin de establecer comunicacion de manera directa con cada uno de los clientes del departamento de contabilidad, por este medio podras realizar varias consultas como:' , {maxWidth: 530, align: 'justify'});
    doc.setFontType("bold");
    doc.text(70, 270, '1) Consulta y/o descarga de la constancia de situacion fiscal actualizada', {maxWidth: 530, align: 'justify'});
    doc.text(70, 280, '2) Consulta y/o descarga de la opinion de cumplimiento de obligaciones fiscales', {maxWidth: 530, align: 'justify'});
    doc.text(70, 290, '3) Consulta y/o descarga de sus declaraciones de impuestos', {maxWidth: 530, align: 'justify'});
    doc.text(70, 300, '4) Consulta y/o descarga de sus recibos de pago al departamento', {maxWidth: 530, align: 'justify'});
    doc.text(70, 310, '5) Presentacion de reporte o solicitud al departamento', {maxWidth: 530, align: 'justify'});
    doc.setFontType("normal");

    doc.text(40, 330, 'Para su uso correcto se encuentra disponible en nuestra pagina de internet www.gglobals.com.mx/appglobals, un tutorial y manual de uso. Dicha aplicacion, se encontrara vigente en las plataformas para sistemas operativos, ANDROID E IOS, y podra descargarse de manera gratuita.', {maxWidth: 530, align: 'justify'});
    doc.text(40, 370, 'Para su ACCESO correspondiente, solo es necesario ingresar la clave de acceso y contraseña a continuacion asignada a su empresa:' , {maxWidth: 530, align: 'justify'});
    doc.text(40, 390, 'IMPORTANTE' , {maxWidth: 530, align: 'justify'});
    doc.text(320, 410, `CLAVE DE ACCESO:  ${(this.inf.first_name).toUpperCase().slice(0,1)}${arrayDeCadenas[0].toUpperCase()}${arrayDeCadenas[1].toUpperCase().slice(0,1)}` , {maxWidth: 530, align: 'center'});
    doc.text(320, 430, `CONTRASEÑA: GG${(this.inf.first_name).toUpperCase().slice(0, 2)}${arrayDeCadenas[0].toUpperCase().slice(0, 2)}${arrayDeCadenas[1].toUpperCase().slice(0, 2)}` , {maxWidth: 530, align: 'center'});
    doc.text(40, 450, 'Nota: si por algun motivo su clave de acceso o contraseña se extravia, no recuerda, o las credenciales se dañen, para reestablecerla es necesario reportar de la siguiente manera: ' , {maxWidth: 530, align: 'justify'});
    doc.text(70, 480, '1) enviar el reporte por medio de whatsapp al numero: (614) 163-88-17, o al cirrei: servicioconta@gglobals.com, indicando en asunto "Reestablecer contraseña aplicacion".' , {maxWidth: 530, align: 'justify'});
    doc.text(70, 510, '2) Debera ingresar los siguientes datos en su reporte: Nombre Completo de titular, numero de contrato (numero localizado en la parte superior derecha de su contrato, o en la parte media derecha de cualquier recibo de pago)' , {maxWidth: 530, align: 'justify'});
    doc.text(70, 540, '3) En un lapso no mayor a 1 hora se comunicara uno de nuestris ejecutivos empresariales a los medios de contacto establecidos en su registro indicandole el estatus y resolucion de su reporte.' , {maxWidth: 530, align: 'justify'});

    doc.setFontSize(11.5);
    doc.text(240, 590, `Aviso de Privacidad Simplificado` , {maxWidth: 530, align: 'justify'});
    doc.setFontSize(9);
    doc.text(40, 610, `Gestoria Empresarial Global Service SC, implementa las medidas de seguridad y mecanismos tecnicos necesarios para la proteccion de datos personales y sencibles, procurando siempre la integridad de dichos datos evitando asi el daño, perdida, o el uso, acceso a tratamiento no autorizado por los titulares, la vulnerabilidad surgida por la alteracion de los mismos sera informada por Gestoria Empresarial Global Service SC, en la brevedad posible a los titulares, a fin de que se puedan tomar medidas pertinentes a la defensa de sus derechos tal como lo señala el articulo 20 de la ley, Gestoria Empresarial Global Service SC, por consucto de sus representantes legales, directivos o personal a cargo se compromete a guardar confidencialidad respuecto a los datos de los titulares, confidencialidad que subsistira aun despues de terminada la relacion con Gestoria Empresarial Global Service SC, teniendo asi prohinido el acceso de personas no autorizadas y utilizar los datos personales de los titulares para los fines distintos establecidos de manera contractual o a los establecidos en el presente aviso de privacidad, para visualizar nuestro abiso de privacidad vigente, visitar la pagina de https://gglobals.com.mx/aviso-de-privacidad/` , {maxWidth: 530, align: 'justify'});



    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(95, 750, `Tel +52 (614) 415 00 74` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 750, `Edificio Corporativo Cantera V, Piso 3` , {maxWidth: 455, align: 'justify'});
    doc.text(485, 750, `/Gestoria Empresarial` , {maxWidth: 455, align: 'justify'});
    doc.text(255, 760, `Chihuahua, Chih.` , {maxWidth: 455, align: 'justify'});

    if (download === 'true') {
      doc.output('dataurlnewwindow');
    }
    if (post) {
      this.adminService.postAcuse(this.id, doc.output('blob')).subscribe(response => {
        localStorage.setItem('ac', response['nombre']);
      });
    }
  }

  public downloadPDF(): void {
    if (this.inf.id_service == 1) {
      this.rif('true');
    }
    if (this.inf.id_service == 2) {
      this.pf('true');
    }
  }

  public openPDF(): void {
    let doc = new jsPDF('p','pt', 'a4');
    doc.output('dataurlnewwindow');
  }

  /*openPD() {
    console.log('hola');
    this.rif('true');
  }*/

  async ngOnInit() {
    let contrato1;
    if (localStorage.getItem('payment') === 'cash') {
      this.methodPayment = 'EFECTIVO';
    }
    if (localStorage.getItem('payment') === 'card') {
      this.methodPayment = 'TRANSFERENCIA';
    }
    this.id = this.activatedRoute.snapshot.params['id_company'];
    this.value = localStorage.getItem('value');
    this.firmas = await this.adminService.getFirm().toPromise();
    this.mario = this.firmas[0]['name'];
    this.yadira = this.firmas[1]['name'];
    this.inf = await this.adminService.getInfContract(this.id).toPromise();
    this.recibo = await this.adminService.getLastReceipt().toPromise();
    contrato1 = await this.adminService.getLastContract().toPromise();
    this.contrato = contrato1[0]['id_files'];
    if (localStorage.getItem('post')) {
      this.recibov = `http://192.168.137.1:3000/files/${localStorage.getItem('rec')}`;
      if (this.inf.id_service == 1) {
        this.pdfSrc = `http://192.168.137.1:3000/files/${localStorage.getItem('cont')}`;
      }
      if (this.inf.id_service == 2) {
        this.pdfSrc = `http://192.168.137.1:3000/files/${localStorage.getItem('cont')}`;
      }
    } else {
      await this.receipt('false', 'post');
      if (this.inf.id_service == 1) {
        await this.rif('false', 'post');
      }
      if (this.inf.id_service == 2) {
        await this.pf('false', 'post');
      }
    }
    const value2: number = +this.value;
    const value3 = nl(value2);
    const a = this.value;
    const b = parseFloat(this.value);
    const c: number = a - b;
   /////////////////////////////////////////////////// numeros
  }

  async sendemail() {
    this.email.razon = this.inf.company;
    this.email.rfc = this.inf.rfc;
    this.email.servicio = this.inf.name_service;
    this.email.fpago = this.methodPayment;
    this.email.pago = this.value;
    this.email.calle = this.inf.street;
    this.email.exterior = this.inf.num_ext;
    this.email.interior = this.inf.num_int;
    this.email.colonia = this.inf.colony;
    this.email.ciudad = this.inf.city;
    this.email.estado = this.inf.state;
    this.email.cp = this.inf.cp;
    this.email.contrato = localStorage.getItem('cont');
    this.email.recibo = localStorage.getItem('rec');
    this.email.acuse = localStorage.getItem('ac');
    this.acuse(this.email.email, 'false', 'post');
    await this.adminService.sendEmail(this.email).subscribe(res =>     this.router.navigate(['/companies']));
  }

  ngOnDestroy() {
    localStorage.removeItem('value');
    localStorage.removeItem('cont');
    localStorage.removeItem('rec');
    localStorage.removeItem('post');
    localStorage.removeItem('ac');
    localStorage.removeItem('payment');
    localStorage.removeItem('id_company');
    localStorage.removeItem('ejecutivo');
    

  }
}
