import { Component, OnInit, OnDestroy} from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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
  id_payment: any;
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


    cliente.src = `http://192.168.2.18:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    prestador.src = `http://192.168.2.18:3000/files/${this.yadira}`;
    prestador.alt = 'alt';

    testigo2.src = `http://192.168.2.18:3000/files/${this.mario}`;
    testigo2.alt = 'alt';

    logo.src = `http://192.168.2.18:3000/files/Logo.png`;
    logo.alt = 'alt';

    sparador.src = `http://192.168.2.18:3000/files/separador.png`;
    sparador.alt = 'alt';

    fb.src = `http://192.168.2.18:3000/files/facebook.png`;
    fb.alt = 'alt';

    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(`${identificador}`, 490, 60);
    doc.text('CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', 150, 80,  {maxWidth: 490, align: 'justify'});
    doc.text('EN MATERIA DE CONTABILIDAD GENERAL.', 205, 100,  {maxWidth: 490, align: 'justify'});
    doc.text(`          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()} DE LA EMPRESA CON NOMBRE COMERCIAL ${(this.inf.company).toUpperCase()}, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:`, 95, 132,  {maxWidth: 455, align: 'justify'});
    doc.text('D E C L A R A C I O N E S:', 200, 235 );
    doc.text('I. “LA PRESTADORA” DECLARA.' ,95, 260,  {maxWidth: 190, align: 'justify'});
    doc.text('Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.',95, 280,  {maxWidth: 455, align: 'justify'});
    doc.text('Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.',95, 360,  {maxWidth: 455, align: 'justify'});
    doc.text( 'Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' ,95, 430, {maxWidth: 455, align: 'justify'});
    doc.text( 'Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencias requeridas por “EL PRESTATARIO”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' ,95, 470, {maxWidth: 455, align: 'justify'});
    doc.text('Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' ,95, 550,  {maxWidth: 455, align: 'justify'});
    doc.text(`II    DECLARA EL PRESTATARIO,   que su nombre es C. ${this.inf.first_name} ${this.inf.last_name} y que su Registro Federal de Contribuyentes es ${this.inf.rfc} y que sus obligaciones fiscales están en el rubro de Persona Física con Actividad Empresarial, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en  ${this.inf.street}, número ${this.inf.num_ext},  en la colonia ${this.inf.colony}, C.P. ${this.inf.cp}, en esta ciudad de ${this.inf.city}, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.` ,95, 600,  {maxWidth: 455, align: 'justify'});
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(`Tel +52 (614) 415 00 74` ,95, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`Edificio Corporativo Cantera V, Piso 3` , 255, 750, {maxWidth: 455, align: 'justify'});
    doc.text(`/Gestoria Empresarial` ,485, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`Chihuahua, Chih.` , 255, 760, {maxWidth: 455, align: 'justify'});

    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(`${identificador}`, 490, 45  );
    doc.text(`Declara que es el propietario del negocio denominado "${this.inf.company}", empresa que se dedica a ${this.inf.main_activity}, y que tiene la suficiente capacidad para celebrar el presente contrato. ` ,95, 78,    {maxWidth: 455, align: 'justify'});
    doc.text('Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.',95, 112,   {maxWidth: 455, align: 'justify'});
    doc.text('_______________________________________________________________________________',95, 188,  );
    doc.text('III.	DECLARAN AMBAS PARTES.',95, 220   );
    doc.text('Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.',95, 234,   {maxWidth: 455, align: 'justify'});
    doc.text('Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.',95, 280,   {maxWidth: 455, align: 'justify'});
    doc.text('C L Á U S U L A S:',250, 326 );
    doc.text(`PRIMERA.- OBJETO. “LA PRESTADORA” se obliga a facilitar sus servicios profesionales a “EL PRESTATARIO”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del ${date} y hasta ${endDate}.` ,95, 348,   {maxWidth: 455, align: 'justify'});
    doc.text('La duración del contrato es de 12 meses.', 95, 430  );
    doc.text('El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' ,95, 452,   {maxWidth: 455, align: 'justify'});
    doc.text('Los servicios que se prestarán con motivo de este contrato serán los siguientes:' ,95, 498,   {maxWidth: 455, align: 'justify'});
    doc.text('Elaboración de declaraciones de impuestos federales',150, 510 );
    doc.text('Elaboración de facturas de ventas al publico en general',150, 522 );
    doc.text('Cita en el (SAT), por cualquier razón',150, 534 );
    doc.text('Atención directa referente a su contabilidad electrónica',150, 546 );
    doc.text('De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:',95, 568  );
    doc.text('Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente ',150, 580);
    doc.text('contrato y hasta antes del primer mes que se preste el servicio.',150, 592 );
    doc.text('De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , 95, 614, {maxWidth: 455, align: 'justify'});
    doc.text('-	Cancelación de requerimientos en materia del contrato',150, 638);
    doc.text('-	Nomina Individual de trabajadores', 150, 650 );
    doc.text('-	Calculo de Impuesto Sobre Nomina', 150, 662 );
    doc.text('-	Movimientos Filiatorios IMSS', 150, 674);
    doc.text('-	Impuesto cedular (trimestral/semestral)	', 150, 686);
    doc.text('-	Semanas cotizadas IMSS', 150, 698);
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(`Tel +52 (614) 415 00 74              Edificio Corporativo Cantera V, Piso 3                   /Gestoria Empresarial` ,95, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`                                          Chihuahua, Chih.                                                          ` ,95, 760,  {maxWidth: 455, align: 'justify'});


    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(`${identificador}`,490, 45);
    doc.text('"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por “EL PRESTATARIO”.' , 95, 80, {maxWidth: 455, align: 'justify'});
    doc.text(`SEGUNDA.- PAGO DE HONORARIOS. “EL PRESTATARIO” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ ${this.value} IVA incluido,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ` ,95, 140,  {maxWidth: 455, align: 'justify'});
    doc.text(`L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “EL PRESTATARIO” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al ${this.todayDate.getDate()} día del mes de ${this.todayDate.getMonth() + 1} de 2020.` ,95, 220,  {maxWidth: 455, align: 'justify'});
    doc.text('“LA PRESTADORA”.                                              “EL PRESTATARIO”.',150, 300 );
    doc.text('   ___________________________                              ___________________________', 125, 348, );
    doc.addImage(prestador, 'PNG', 160, 300, 100, 50);
    doc.addImage(cliente, 'PNG', 380, 300, 100, 50);
    doc.text('YADIRA EUGENIA TORRES MENDOZA  ', 95, 380 );
    doc.text(`${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()}`, 335, 380);
    doc.text('GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.', 95, 400);
    doc.text( 'TESTIGOS:', 95, 430);
    doc.text( '      TESTIGO				                                 TESTIGO', 165, 460);
    doc.text('   ___________________________                              ___________________________', 125, 510);
    doc.addImage(cliente, 'PNG', 160, 460, 100, 50);
    doc.addImage(testigo2, 'PNG', 380, 460, 100, 50); 
    doc.text('MARIO DUARTE FLORES', 360, 525, );
    doc.text('GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL',120, 540, );
    doc.text('SERVICE S.C.                                                       SERVICE S.C.',175, 550, );
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(`Tel +52 (614) 415 00 74                      Edificio Corporativo Cantera V, Piso 3` , 95, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`/Gestoria Empresarial` ,485, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`                                                           Chihuahua, Chih.                                                                ` , 95, 760,  {maxWidth: 455, align: 'justify'});


    if (download == 'true') {
      doc.save('Contrato_GGlobals.pdf');
    }

    if (post) {
      this.adminService.postContract(this.id, date, doc.output('blob')).subscribe(response => {
        this.contratoName = response['nombre'];
        this.adminService.getContract(this.id).subscribe( response => {
          localStorage.setItem('cont', response['nombre']);
          this.pdfSrc = `http://192.168.2.18:3000/files/${response['nombre']}`;
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


    cliente.src = `http://192.168.2.18:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    prestador.src = `http://192.168.2.18:3000/files/${this.yadira}`;
    prestador.alt = 'alt';

    testigo2.src = `http://192.168.2.18:3000/files/${this.mario}`;
    testigo2.alt = 'alt';

    logo.src = `http://192.168.2.18:3000/files/Logo.png`;
    logo.alt = 'alt';

    sparador.src = `http://192.168.2.18:3000/files/separador.png`;
    sparador.alt = 'alt';

    fb.src = `http://192.168.2.18:3000/files/facebook.png`;
    fb.alt = 'alt';

    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(`${identificador}`,490, 60 );
    doc.text(' CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES,', 150, 80, {maxWidth: 490, align: 'justify'});
    doc.text(' EN MATERIA DE CONTABILIDAD GENERAL.',205, 100,  {maxWidth: 490, align: 'justify'});
    doc.text( `          QUE CELEBRAN POR UNA PARTE GESTORIA EMPRESARIAL GLOBAL SERVICE REPRESENTADA EN ESTE ACTO POR YADIRA EUGENIA TORRES MENDOZA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “LA PRESTADORA”; Y POR LA OTRA, ${this.inf.first_name.toUpperCase()} ${this.inf.last_name.toUpperCase()} DE LA EMPRESA CON NOMBRE COMERCIAL ${this.inf.company.toUpperCase()}, A QUIEN EN ADELANTE SE DESIGNARA COMO “EL PRESTATARIO”; DE CONFORMIDAD CON LAS DECLARACIONES Y CLAUSULAS SIGUIENTES:`,95, 132, {maxWidth: 455, align: 'justify'});
    doc.text('D E C L A R A C I O N E S:', 200, 235);
    doc.text('I. “LA PRESTADORA” DECLARA.' ,95, 260,  {maxWidth: 190, align: 'justify'});
    doc.text('Que es una Sociedad Civil debidamente constituida conforme las leyes mexicanas, según consta en la Escritura Pública número 9,699 de fecha de 21 de enero de 2011, otorgada ante la fe del Lic. Norberto Burciaga Cazares, Notario Público número 7 para el Distrito Judicial Morelos, Estado de Chihuahua, inscrita en el Registro Público de la Propiedad y del Comercio del Estado de Chihuahua, bajo el número 42, a folios 84, del libro 152 de la Sección Cuarta.',95, 280,  {maxWidth: 455, align: 'justify'});
    doc.text('Que  su objeto social, entre otros  consiste en, proporcionar cualquier clase de asesoría para constitución y desarrollo de toda clase de personas morales; asesorar, presentar proyectos, estudios de mercado, y toda aquella herramienta administrativa o financiera necesaria para el buen desarrollo de una empresa.',95, 360, {maxWidth: 455, align: 'justify'});
    doc.text('Que quien representa en este acto la Lic. Yadira Eugenia Torres Mendoza, tiene facultades para la firma de este contrato.' , 95, 430, {maxWidth: 455, align: 'justify'});
    doc.text('Además continua declarando "LA PRESTADORA" que cuenta con los recursos humanos de comprobada práctica y capacidad técnica, conocimientos y experiencia requeridas por “EL PRESTATARIO”, y que jurídicamente no se encuentra impedida para contratar y obligarse en la prestación de estos servicios materia del presente instrumento; que cuenta con los medios propios y suficientes para cumplir con todas y cada una de las obligaciones que adquiera.' ,95, 470,  {maxWidth: 455, align: 'justify'});
    doc.text('Manifiesta para los efectos legales consiguientes, que tiene su domicilio en Edificio Corporativo Cantera V, Piso 3, Av. Cantera 9301 Col. Las Misiones C.P. 31115 de esta Ciudad Capital, es ciudadana (o) mexicana (o), con Registro Federal de Contribuyentes LOGR530503G19.' ,95, 550,  {maxWidth: 455, align: 'justify'});
    doc.text(`II    DECLARA EL PRESTATARIO,   que su nombre es C. ${this.inf.first_name} ${this.inf.last_name} y que su Registro Federal de Contribuyentes es ${this.inf.rfc} y que sus obligaciones fiscales están en el rubro de Régimen de Incorporación Fiscal, declara ser mexicano, mayor de edad, en pleno uso y goce de sus derechos y garantías individuales, con domicilio de la empresa ubicado en ${this.inf.street}, número ${this.inf.num_ext},  en la colonia ${this.inf.colony}, C.P. ${this.inf.cp}, en esta ciudad de ${this.inf.city}, del Estado de Chihuahua que cuenta con la capacidad suficiente y necesaria  para obligarse en los términos del presente contrato y que que bajo protesta de decir verdad manifiesta que no existe motivo legal alguno que le impida celebrar el presente acto jurídico.` , 95, 600, {maxWidth: 455, align: 'justify'});
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(`Tel +52 (614) 415 00 74` ,95, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`Edificio Corporativo Cantera V, Piso 3` ,255, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`/Gestoria Empresarial` ,485, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`Chihuahua, Chih.                                                                ` , 255, 760, {maxWidth: 455, align: 'justify'});

    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(`${identificador}`,490, 45, );
    doc.text(`Declara que es el propietario del negocio denominado "${this.inf.company}", empresa que se dedica a ${this.inf.main_activity}, y que tiene la suficiente capacidad para celebrar el presente contrato. `, 95, 78,  {maxWidth: 455, align: 'justify'});
    doc.text('Continua manifestando que requiere de la Prestación de Servicios ofrecidos por “LA PRESTADORA”, en materia de ADMINISTRACIÓN ELECTRÓNICA, entre otros rubros y actividades del ramo,  según se pacte en cláusula especial en este instrumento, y desea contratar los servicios profesionales de "LA PRESTADORA", de acuerdo a las cláusulas subsecuentes.',95, 112,  {maxWidth: 455, align: 'justify'});
    doc.text('_______________________________________________________________________________', 95, 188);
    doc.text('III.	DECLARAN AMBAS PARTES.',95, 220,  );
    doc.text('Que son conformes en celebrar el presente contrato de prestación de servicios profesionales el cual sujetan a los lineamientos y disposiciones que para tal efecto establece el TÍTULO DÉCIMO, CAPITULO PRIMERO, del Código Civil aplicable para el Estado de Chihuahua.',95, 234,  {maxWidth: 455, align: 'justify'});
    doc.text('Que aceptan y están de acuerdo en los requisitos, condiciones y términos del presente contrato y reconocen los efectos y disposiciones legales que lo rigen dada su naturaleza civil, asimismo se reconocen mutuamente la personalidad con la que comparecen.',95, 280,  {maxWidth: 455, align: 'justify'});
    doc.text('C L Á U S U L A S:', 250, 326);
    doc.text(`PRIMERA.- OBJETO. “LA PRESTADORA” se obliga a facilitar sus servicios profesionales a “EL PRESTATARIO”, en materia de CONTABILIDAD ELECTRÓNICA y servicios relacionados con la misma; siempre y cuando se determinen claramente en cláusula específica como parte de este contrato, declara a continuación que prestará sus servicios exclusivamente por tiempo determinado, del periodo comprendido del  ${date} y hasta  ${endDate}.` , 95, 348,{maxWidth: 455, align: 'justify'});
    doc.text( 'La duración del contrato es de 12 meses.',95, 430);
    doc.text('El lugar donde se llevarán a cabo los servicios contratados por parte de "LA PRESTADORA"  es el ubicado en Edificio Corporativo Cantera V, Piso 3,  Av. Cantera 9301 Col. Las Misiones, C.P. 31115, la ciudad de Chihuahua, Chih.' , 95, 452,  {maxWidth: 455, align: 'justify'});
    doc.text('Los servicios que se prestarán con motivo de este contrato serán los siguientes:' , 95, 498, {maxWidth: 455, align: 'justify'});
    doc.text('Elaboración de declaraciones de impuestos federales', 150, 510, );
    doc.text('Elaboración de facturas de ventas al publico en general', 150, 522, );
    doc.text('Cita en el (SAT), por cualquier razón', 150, 534, );
    doc.text('Atención directa referente a su contabilidad electrónica', 150, 546, );
    doc.text('De forma separada y con un costo adicional a cotizar se podrán prestar los siguientes:', 95, 568, );
    doc.text('Regularización de declaraciones atrasadas y vencidas hasta antes de la firma del presente contrato y hasta antes del primer mes que se preste el servicio.' , 150, 580, {maxWidth: 400, align: 'justify'});
    doc.text('De forma separada y con costo adicional se podrán prestar los siguientes servicios a petición y necesidad del cliente:' , 95, 614, {maxWidth: 455, align: 'justify'});
    doc.text('Cancelación de requerimientos en materia del contrato: COSTO: $200.00 (Doscientos pesos 00/100 M.N.) Por ocasión',150, 638,  {maxWidth: 400, align: 'justify'});
    doc.text('Renovación de firma electrónica:  COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión',150, 668,  {maxWidth: 400, align: 'justify'});
    doc.text('Generación de factura electrónica Individual: COSTO: $10.00 (Diez pesos 00/100 M.N.) Por ocasión', 150, 698, {maxWidth: 400, align: 'justify'});
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(`Tel +52 (614) 415 00 74` ,95, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`Edificio Corporativo Cantera V, Piso 3` ,255, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`/Gestoria Empresarial` ,485, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`Chihuahua, Chih.                                                                ` , 255, 760, {maxWidth: 455, align: 'justify'});


    doc.addPage();
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.text(`${identificador}`,490, 45, );
    doc.text('Nomina Individual de trabajadores: COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Mensual' , 150, 80, {maxWidth: 400, align: 'justify'});
    doc.text('Calculo de Impuesto Sobre Nomina:  COSTO: $10.00 (Diez pesos 00/100 M.N) Por ocasión' ,150, 110,  {maxWidth: 400, align: 'justify'});
    doc.text('Movimientos Filiatorios IMSS: COSTO: $30.00 (Treinta pesos 00/100 M.N.) Por ocasión' ,150, 140,  {maxWidth: 400, align: 'justify'});
    doc.text('Impuesto cedular (trimestral/semestral): COSTO: $50.00 (Cincuenta pesos 00/100 M.N.) Por ocasión' , 150, 170, {maxWidth: 400, align: 'justify'});
    doc.text('Semanas cotizadas IMSS: COSTO: $100.00 (Cien pesos 00/100 M.N.) Por emisión' ,150, 200,  {maxWidth: 400, align: 'justify'});
    doc.text('"LA PRESTADORA", Guardará absoluta confidencialidad con respecto a los datos y documentos que el adquirente le proporcione para las actividades que desarrolle, ni dar informes a personas distintas a las autorizadas por el “EL PRESTATARIO”.' ,95, 240,  {maxWidth: 455, align: 'justify'});
    doc.text(`SEGUNDA.- PAGO DE HONORARIOS. “EL PRESTATARIO” se obliga a pagar a “LA PRESTADORA”, por los servicios profesionales que se le presten de conformidad con este contrato, honorarios por la cantidad total de $ ${this.value} IVA incluido,  durante el periodo contratado y con la exhibición del recibo correspondiente  respectivo por el servicio profesional devengado. ` , 95, 290, {maxWidth: 455, align: 'justify'});
    doc.text( `L E Í D O  y enteradas las partes del contenido y efectos de este contrato, firman de conformidad por duplicado, quedando en poder de “LA PRESTADORA” un ejemplar y para “EL PRESTATARIO” un ejemplar, en la ciudad de Chihuahua, capital del Estado del mismo nombre, al ${this.todayDate.getDate()} día del mes de ${this.todayDate.getMonth() + 1} de 2020.` ,95, 370, {maxWidth: 455, align: 'justify'});
    doc.text('“LA PRESTADORA”.                                              “EL PRESTATARIO”.',150, 452, );
    doc.text('   ___________________________                              ___________________________',125, 500);
    doc.addImage(prestador, 'PNG', 160, 450, 100, 50);
    doc.addImage(cliente, 'PNG', 370, 450, 100, 50);
    doc.text('YADIRA EUGENIA TORRES MENDOZA  ',95, 530, );
    doc.text(`${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()}`,335, 530, );
    doc.text('GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.',95, 550, );
    doc.text('TESTIGOS:',95, 580, );
    doc.text('       TESTIGO				                              TESTIGO', 165, 610, );
    doc.text(`   ___________________________                              ___________________________`, 125, 660, );
    doc.addImage(cliente, 'PNG', 150, 610, 100, 50);
    doc.addImage(testigo2, 'PNG', 370, 615, 100, 50);
    doc.text('MARIO DUARTE FLORES', 360, 675, );
    doc.text('GESTORIA EMPRESARIAL GLOBAL                    GESTORIA EMPRESARIAL GLOBAL', 120, 690, );
    doc.text('SERVICE S.C.                                                       SERVICE S.C.', 175, 700, );
    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(`Tel +52 (614) 415 00 74                      Edificio Corporativo Cantera V, Piso 3` , 95, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`/Gestoria Empresarial` , 485, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`                                                           Chihuahua, Chih.                                                                ` ,95, 760,  {maxWidth: 455, align: 'justify'});

    if (download == 'true') {
      doc.save('Contrato_GGlobals.pdf');
    }
    if (post) { 
      this.adminService.postContract(this.id, date, doc.output('blob')).subscribe(response => {
        this.contratoName = response['nombre'];
        localStorage.setItem('cont', response['nombre']);
        this.adminService.getContract(this.id).subscribe( response => this.pdfSrc = `http://192.168.2.18:3000/files/${response['nombre']}`);
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
    const columns = [['Año', 'Mes', 'Total',  'Estado']];
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

    cliente.src = `http://192.168.2.18:3000/files/${this.inf.nombre}`;
    cliente.alt = 'alt';

    prestador.src = `http://192.168.2.18:3000/files/${this.yadira}`;
    prestador.alt = 'alt';

    testigo2.src = `http://192.168.2.18:3000/files/${this.mario}`;
    testigo2.alt = 'alt';

    logo.src = `http://192.168.2.18:3000/files/Logo.png`;
    logo.alt = 'alt';


    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    // doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.setFontSize(10);

    doc.text('E-Mail:  servicioconta@gglobals.com.mx ',190, 40, );
    doc.text('Gestoria Empresarial Global Service, S.C.', 390, 40, );
    doc.text('RFC :          GEG-110121-U13', 390, 50, );


    doc.text('Telefono: 614 415 00 74', 190, 50, );
    doc.text('Direccion: Av. Cantera 9301 Col. Las Misiones', 390, 60, );

    doc.text('Sitio Web: Gglobals.com.mx', 190, 60, );
    doc.text('Edificio Corporativo: Cantera V, Piso 3', 390, 70, );

    doc.text('__________________________________________________________________________________________', 85, 75, );


    doc.setFontSize(16);
    doc.setFont('helvetica',"bold");
    // doc.setFontType();
    doc.text('R E C I B O   D E   P A G O', 210, 120);
    doc.setFont('Arial',"bold");

// ======================================================================================================================= //
    doc.setFontSize(11.5);
    doc.text(`Recibimos de :                                                                                                                  No. recibo :`, 40, 150,  );
    doc.text(`                            _______________________________________________________                      _________ `, 40, 153,  );
    doc.setFont('Arial',"normal");
    // doc.setFontType("normal")
    doc.text(` ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()} `, 200, 148, );
    doc.text(` ${service}`, 500, 148, );

    
// ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`La cantidad de :`,40, 175,  );
    doc.text(`                              __________________________________________________________________________ `, 40, 178);
    //doc.setFontType("normal")
    doc.setFont('Arial',"normal");
    doc.text(` $${(a).toUpperCase()}       ${(value3).toUpperCase()} PESOS ${c}/100 MXN`, 200, 173, );
// ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");
    doc.text(`Concepto :                                         Forma de pago :                                              RFC :`, 40, 200,  );
    doc.text(`                    __________________                                  _____________________              ________________`, 40, 203,  );
    // doc.setFontType("normal");
    doc.setFont('Arial',"normal");

    doc.text(` MENSUALIDAD                                         ${this.methodPayment}`, 105, 198, );
    doc.text(`${(this.inf.rfc).toUpperCase()}`, 470, 198, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Razon social :`, 40, 225,  );
    doc.text(`                          ____________________________________________________________________________ `, 40, 228,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(` ${(this.inf.main_activity).toUpperCase()} `, 150, 223, );
    // ======================================================================================================================= //
    //doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Actividad :                                                           Calle :`, 40, 250,  );
    doc.text(`                      ___________________________                ___________________________________________ `, 40, 253,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(`${(this.inf.main_activity).toUpperCase()}`, 130, 248, );
    doc.text(`${(this.inf.street).toUpperCase()}`, 310, 248, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Numero :                  Colonia :                                                                                                Cp :`, 40, 275,  );
    doc.text(`                  _______                  ______________________________________________            ____________ `, 40, 278,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(` ${this.inf.num_ext}`, 95, 273, );
    doc.text(`${(this.inf.colony).toUpperCase()}`, 200, 273, );
    doc.text(`${this.inf.cp}`, 500, 273, );


    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Entre calles :                                                                               Y :`, 40, 300,  );
    doc.text(`                         _____________________________________         ___________________________________ `, 40, 303,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(`${(this.inf.street).toUpperCase()}`, 110, 298, );
    doc.text(`${(this.inf.street).toUpperCase()}`, 350, 298, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Calle posterior :                                                                                                 No. contrato :`, 40, 325,  );
    doc.text(`                              ______________________________________________                            ______________ `, 40, 328,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(` ${(this.inf.street).toUpperCase()}`, 120, 323, );
    doc.text(`${identificador}`, 490, 323, );

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`Fecha de pago :                                                                       `, 40, 350,  );
    doc.text(`                            _____________ `, 40, 353,  );
    // doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    // ======================================================================================================================= //
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text(`_____________________________________ `, 200, 395,  );
    //doc.setFontType("normal")
    doc.setFont('Arial',"normal");

    doc.text(`            GESTORIA EMPRESARIAL `, 210, 415,  );
    doc.text(`               GLOBAL SERVICE S.C`, 210, 430,  );
    doc.addImage(cliente, 'PNG', 243, 350, 130, 45);
    doc.text(` ${date}                                                 `, 130, 348, );
    // ======================================================================================================================= //
    autoTable(doc, {
      head: columns,
      body: data,
      margin:  { top: 470 },
      styles: { halign: 'center' },
      theme: 'grid'
 });
    // ======================================================================================================================= //
    doc.setFontSize(11.5);
    doc.text(`Aviso de Privacidad Simplificado` ,240, 620,  {maxWidth: 540, align: 'justify'});
    doc.setFontSize(9);
    doc.text(`Gestoria Empresarial Global Service SC, implementa las medidas de seguridad y mecanismos tecnicos necesarios para la proteccion de datos personales y sencibles, procurando siempre la integridad de dichos datos evitando asi el daño, perdida, o el uso, acceso a tratamiento no autorizado por los titulares, la vulnerabilidad surgida por la alteracion de los mismos sera informada por Gestoria Empresarial Global Service SC, en la brevedad posible a los titulares, a fin de que se puedan tomar medidas pertinentes a la defensa de sus derechos tal como lo señala el articulo 20 de la ley, Gestoria Empresarial Global Service SC, por consucto de sus representantes legales, directivos o personal a cargo se compromete a guardar confidencialidad respuecto a los datos de los titulares, confidencialidad que subsistira aun despues de terminada la relacion con Gestoria Empresarial Global Service SC, teniendo asi prohinido el acceso de personas no autorizadas y utilizar los datos personales de los titulares para los fines distintos establecidos de manera contractual o a los establecidos en el presente aviso de privacidad, para visualizar nuestro abiso de privacidad vigente, visitar la pagina de https://gglobals.com.mx/aviso-de-privacidad/` ,40, 640,  {maxWidth: 540, align: 'justify'});


    if (download == 'true') {
      if (this.inf.name_service === 'Contabilidad Rif') {
        doc.save('RCR.pdf');
      } else {
        doc.save('RCE.pdf');
      }
    } 

    if (post) {
      const id_payment = localStorage.getItem('id_payment');
      console.log(id_payment);
      this.adminService.postReceipt(this.id, identificador, date, id_payment, doc.output('blob')).subscribe(response => {
        this.adminService.getReceiptById(response['id_receipt']).subscribe( response => {
          localStorage.setItem('rec', response[0]['name']);
          localStorage.setItem(post, 'no');
          this.reciboName = response[0]['name'];
          this.recibov = `http://192.168.2.18:3000/files/${response[0]['name']}`;
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

    logo.src = `http://192.168.2.18:3000/files/Logo.png`;
    logo.alt = 'alt';

    sparador.src = `http://192.168.2.18:3000/files/separador.png`;
    sparador.alt = 'alt';

    fb.src = `http://192.168.2.18:3000/files/facebook.png`;
    fb.alt = 'alt';

    const doc = new jsPDF('p', 'pt', 'letter');
    doc.setFont('Arial');
    doc.setFontSize(11.5);
    doc.addImage(logo, 'PNG', 50, 20, 130, 45);
    doc.setFont('Arial',"bold");

    // doc.setFontType("bold");
    doc.text('GESTORIA EMPRESARIAL GLOBAL SERVICE S.C.',320, 80,  {maxWidth: 490, align: 'center'});
    doc.text('DEPARTAMENTO DE CONTABILIDAD',320, 90,  {maxWidth: 490, align: 'center'});
    doc.text('ACUSE DE GENEREACIÓN DE CLAVE Y USUARIO PARA APP(GGLOBALS)',320, 110,  {maxWidth: 490, align: 'center'});
    doc.setFontSize(10);
    doc.text( ` RFC: ${this.inf.rfc.toUpperCase()}`,40, 130, {maxWidth: 455, align: 'justify'});
    doc.text(` NOMBRE DE LA PERSONA/RAZON SOCIAL: ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()}`,40, 140,  {maxWidth: 455, align: 'justify'});
    doc.text( ` CORREO ELECTRONICO: ${email}`,40, 150, {maxWidth: 455, align: 'justify'});
    doc.text(` FECHA DE EMISION DE LAS CLAVES: ${date}`, 40, 160, {maxWidth: 455, align: 'justify'});
    // doc.setFontType("normal");
    doc.setFont('Arial',"normal");

    doc.text(`Manifestamos haciendo de su conocimiento de que la contraseña y clave de acceso a su aplicacion (GGlobals), desarrollada por Gestoria Empresarial Global Service Sc, que le proporcionara nuestro ejecutivo de atencion a empresas, por medio de este documento, es personal e intransferible, y que usted: ${(this.inf.first_name).toUpperCase()} ${(this.inf.last_name).toUpperCase()} con RFC: ${this.inf.rfc.toUpperCase()}, es responsable del resguardo y uso de las mismas`,40, 180,  {maxWidth: 530, align: 'justify'});
    doc.text('La aplicacion Gglobals, es un sitio diseñado exclusivamente con el fin de establecer comunicacion de manera directa con cada uno de los clientes del departamento de contabilidad, por este medio podras realizar varias consultas como:' , 40, 240, {maxWidth: 530, align: 'justify'});
    // doc.setFontType("bold");
    doc.setFont('Arial',"bold");

    doc.text('1) Consulta y/o descarga de la constancia de situacion fiscal actualizada', 70, 270, {maxWidth: 530, align: 'justify'});
    doc.text('2) Consulta y/o descarga de la opinion de cumplimiento de obligaciones fiscales', 70, 280, {maxWidth: 530, align: 'justify'});
    doc.text('3) Consulta y/o descarga de sus declaraciones de impuestos',70, 290,  {maxWidth: 530, align: 'justify'});
    doc.text('4) Consulta y/o descarga de sus recibos de pago al departamento',70, 300,  {maxWidth: 530, align: 'justify'});
    doc.text('5) Presentacion de reporte o solicitud al departamento', 70, 310, {maxWidth: 530, align: 'justify'});
    // doc.setFontType("normal");
    doc.setFont('Arial',"normal");


    doc.text( 'Para su uso correcto se encuentra disponible en nuestra pagina de internet www.gglobals.com.mx/appglobals, un tutorial y manual de uso. Dicha aplicacion, se encontrara vigente en las plataformas para sistemas operativos, ANDROID E IOS, y podra descargarse de manera gratuita.', 40, 330,{maxWidth: 530, align: 'justify'});
    doc.text('Para su ACCESO correspondiente, solo es necesario ingresar la clave de acceso y contraseña a continuacion asignada a su empresa:' ,40, 370,  {maxWidth: 530, align: 'justify'});
    doc.text('IMPORTANTE' ,40, 390,  {maxWidth: 530, align: 'justify'});
    doc.text(`CLAVE DE ACCESO:  ${(this.inf.first_name).toUpperCase().slice(0,1)}${arrayDeCadenas[0].toUpperCase()}${arrayDeCadenas[1].toUpperCase().slice(0,1)}` ,320, 410,  {maxWidth: 530, align: 'center'});
    doc.text(`CONTRASEÑA: GG${(this.inf.first_name).toUpperCase().slice(0, 2)}${arrayDeCadenas[0].toUpperCase().slice(0, 2)}${arrayDeCadenas[1].toUpperCase().slice(0, 2)}` , 320, 430, {maxWidth: 530, align: 'center'});
    doc.text('Nota: si por algun motivo su clave de acceso o contraseña se extravia, no recuerda, o las credenciales se dañen, para reestablecerla es necesario reportar de la siguiente manera: ' , 40, 450, {maxWidth: 530, align: 'justify'});
    doc.text('1) enviar el reporte por medio de whatsapp al numero: (614) 163-88-17, o al cirrei: servicioconta@gglobals.com, indicando en asunto "Reestablecer contraseña aplicacion".' , 70, 480, {maxWidth: 530, align: 'justify'});
    doc.text('2) Debera ingresar los siguientes datos en su reporte: Nombre Completo de titular, numero de contrato (numero localizado en la parte superior derecha de su contrato, o en la parte media derecha de cualquier recibo de pago)' , 70, 510, {maxWidth: 530, align: 'justify'});
    doc.text('3) En un lapso no mayor a 1 hora se comunicara uno de nuestris ejecutivos empresariales a los medios de contacto establecidos en su registro indicandole el estatus y resolucion de su reporte.' ,70, 540,  {maxWidth: 530, align: 'justify'});

    doc.setFontSize(11.5);
    doc.text(`Aviso de Privacidad Simplificado` , 240, 590, {maxWidth: 530, align: 'justify'});
    doc.setFontSize(9);
    doc.text(`Gestoria Empresarial Global Service SC, implementa las medidas de seguridad y mecanismos tecnicos necesarios para la proteccion de datos personales y sencibles, procurando siempre la integridad de dichos datos evitando asi el daño, perdida, o el uso, acceso a tratamiento no autorizado por los titulares, la vulnerabilidad surgida por la alteracion de los mismos sera informada por Gestoria Empresarial Global Service SC, en la brevedad posible a los titulares, a fin de que se puedan tomar medidas pertinentes a la defensa de sus derechos tal como lo señala el articulo 20 de la ley, Gestoria Empresarial Global Service SC, por consucto de sus representantes legales, directivos o personal a cargo se compromete a guardar confidencialidad respuecto a los datos de los titulares, confidencialidad que subsistira aun despues de terminada la relacion con Gestoria Empresarial Global Service SC, teniendo asi prohinido el acceso de personas no autorizadas y utilizar los datos personales de los titulares para los fines distintos establecidos de manera contractual o a los establecidos en el presente aviso de privacidad, para visualizar nuestro abiso de privacidad vigente, visitar la pagina de https://gglobals.com.mx/aviso-de-privacidad/` ,40, 610,  {maxWidth: 530, align: 'justify'});



    doc.setFontSize(10);
    doc.addImage(sparador, 'PNG', 190, 730, 60, 40);
    doc.addImage(sparador, 'PNG', 410, 730, 60, 40);
    doc.addImage(fb, 'PNG', 465, 735, 20, 20);
    doc.text(`Tel +52 (614) 415 00 74` , 95, 750, {maxWidth: 455, align: 'justify'});
    doc.text(`Edificio Corporativo Cantera V, Piso 3` ,255, 750,  {maxWidth: 455, align: 'justify'});
    doc.text(`/Gestoria Empresarial` ,485, 750,  {maxWidth: 455, align: 'justify'});
    doc.text( `Chihuahua, Chih.` ,255, 760, {maxWidth: 455, align: 'justify'});

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
    if (localStorage.getItem('payment') === 'terminal') {
      this.methodPayment = 'TRANSFERENCIA';
    }
    this.id = this.activatedRoute.snapshot.params['id_company'];
    this.value = localStorage.getItem('value');
    this.id_payment = localStorage.getItem('id_payment');
    this.firmas = await this.adminService.getFirm().toPromise();
    this.mario = this.firmas[0]['name'];
    this.yadira = this.firmas[1]['name'];
    this.inf = await this.adminService.getInfContract(this.id).toPromise();
    this.recibo = await this.adminService.getLastReceipt().toPromise();
    contrato1 = await this.adminService.getLastContract().toPromise();
    this.contrato = contrato1[0]['id_files'];
    if (localStorage.getItem('post')) {
      this.recibov = `http://192.168.2.18:3000/files/${localStorage.getItem('rec')}`;
      if (this.inf.id_service == 1) {
        this.pdfSrc = `http://192.168.2.18:3000/files/${localStorage.getItem('cont')}`;
      }
      if (this.inf.id_service == 2) {
        this.pdfSrc = `http://192.168.2.18:3000/files/${localStorage.getItem('cont')}`;
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
    await this.adminService.sendEmail(this.email).subscribe();
    console.log('esperar');
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
    localStorage.removeItem('pay');

  }
}
