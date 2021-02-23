const Cargos = [ 
    { value: null, text: 'Seleccione una opción' },
    {
       value:'148',
       text:'AUXILIAR AREA SALUD - AUXILIAR EN ENFERMERÍA'
    },
    {
       value:'146',
       text:'AUXILIAR AREA SALUD - AUXILIAR EN SALUD ORAL'
    },
    {
       value:'149',
       text:'AUXILIAR AREA SALUD - AUXILIAR EN SALUD ORAL'
    },
    {
       value:'172',
       text:'AUXILIAR AREA SALUD - AUXILIAR EN SALUD PÚBLICA'
    },
    {
       value:'147',
       text:'AUXILIAR AREA SALUD - AUXILIAR EN SERVICIOS FARMACÉUTICOS'
    },
    {
       value:'151',
       text:'AUXILIAR AREA SALUD - LABORATORIO CLÍNICO'
    },
    {
       value:'121',
       text:'ENFERMERO - ENFERMERÍA'
    },
    {
       value:'122',
       text:'ENFERMERO ESPECIALISTA - ATENCIÓN MATERNO-PERINATAL'
    },
    {
       value:'123',
       text:'ENFERMERO ESPECIALISTA - CUIDADO CRITICO Y\/O INTENSIVO'
    },
    {
       value:'124',
       text:'ENFERMERO ESPECIALISTA - NEFROLOGÍA'
    },
    {
       value:'125',
       text:'ENFERMERO ESPECIALISTA - NEONATOLOGÍA'
    },
    {
       value:'126',
       text:'ENFERMERO ESPECIALISTA - ONCOLOGÍA'
    },
    {
       value:'127',
       text:'ENFERMERO ESPECIALISTA - PATOLOGÍA CARDIO-RESPIRATORIA'
    },
    {
       value:'128',
       text:'ENFERMERO ESPECIALISTA - PATOLOGÍA CARDIO-VASCULAR'
    },
    {
       value:'129',
       text:'ENFERMERO ESPECIALISTA - SALUD MENTAL'
    },
    {
       value:'190',
       text:'JEFE DE OFICINA (OPERATIVO) - ÁREA ASISTENCIAL'
    },
    {
       value:'015',
       text:'MÉDICO ESPECIALISTA - ALERGOLOGÍA'
    },
    {
       value:'016',
       text:'MÉDICO ESPECIALISTA - ANATOMÍA PATOLÓGICA'
    },
    {
       value:'017',
       text:'MÉDICO ESPECIALISTA - ANESTESIA Y REANIMACIÓN'
    },
    {
       value:'175',
       text:'MÉDICO ESPECIALISTA - CARDIOLOGÍA'
    },
    {
       value:'018',
       text:'MÉDICO ESPECIALISTA - CARDIOLOGÍA INTERVENCIONISTA Y HEMODINAMIA'
    },
    {
       value:'019',
       text:'MÉDICO ESPECIALISTA - CARDIOLOGÍA PEDIÁTRICA'
    },
    {
       value:'020',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA CARDIO-VASCULAR'
    },
    {
       value:'021',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA DE CABEZA Y CUELLO'
    },
    {
       value:'022',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA DE COLUMNA'
    },
    {
       value:'023',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA DE LA MANO'
    },
    {
       value:'024',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA DE MAMA Y TUMORES DE TEJIDOS BLANDOS'
    },
    {
       value:'025',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA GASTROINTESTINAL Y\/O ENDOSCOPIA DIGESTIVA'
    },
    {
       value:'026',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA GENERAL'
    },
    {
       value:'027',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA MAXILOFACIAL.'
    },
    {
       value:'176',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA ONCOLÓGICA'
    },
    {
       value:'028',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA PEDIÁTRICA'
    },
    {
       value:'029',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA PLÁSTICA'
    },
    {
       value:'177',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA PLASTICA ONCOLÓGICA'
    },
    {
       value:'030',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA TORÁCICA'
    },
    {
       value:'031',
       text:'MÉDICO ESPECIALISTA - CIRUGÍA VASCULAR PERIFÉRICA'
    },
    {
       value:'032',
       text:'MÉDICO ESPECIALISTA - COLOPROCTOLOGÍA'
    },
    {
       value:'075',
       text:'MÉDICO ESPECIALISTA - CUIDADO CRITICO'
    },
    {
       value:'033',
       text:'MÉDICO ESPECIALISTA - DERMATOLOGÍA'
    },
    {
       value:'034',
       text:'MÉDICO ESPECIALISTA - ENDOCRINOLOGÍA'
    },
    {
       value:'178',
       text:'MÉDICO ESPECIALISTA - GASTROENTEROLOGÍA'
    },
    {
       value:'035',
       text:'MÉDICO ESPECIALISTA - GENÉTICA'
    },
    {
       value:'036',
       text:'MÉDICO ESPECIALISTA - GERIATRÍA'
    },
    {
       value:'179',
       text:'MÉDICO ESPECIALISTA - GERONTOLOGÍA'
    },
    {
       value:'037',
       text:'MÉDICO ESPECIALISTA - GINECOLOGÍA ONCOLOGICA'
    },
    {
       value:'038',
       text:'MÉDICO ESPECIALISTA - GINECOLOGÍA Y OBSTETRICIA'
    },
    {
       value:'040',
       text:'MÉDICO ESPECIALISTA - HEMATOLOGÍA Y ONCOLOGÍA CLÍNICA'
    },
    {
       value:'039',
       text:'MÉDICO ESPECIALISTA - HEPATOLOGÍA'
    },
    {
       value:'041',
       text:'MÉDICO ESPECIALISTA - INFECTOLOGÍA'
    },
    {
       value:'180',
       text:'MÉDICO ESPECIALISTA - INMUNOLOGÍA'
    },
    {
       value:'181',
       text:'MÉDICO ESPECIALISTA - MEDICINA ALTERNATIVA - TERAPIA ALTERNATIVA'
    },
    {
       value:'042',
       text:'MÉDICO ESPECIALISTA - MEDICINA DEL DEPORTE'
    },
    {
       value:'043',
       text:'MÉDICO ESPECIALISTA - MEDICINA DEL TRABAJO Y\/O SALUD OCUPACIONAL'
    },
    {
       value:'044',
       text:'MÉDICO ESPECIALISTA - MEDICINA FAMILIAR'
    },
    {
       value:'182',
       text:'MÉDICO ESPECIALISTA - MEDICINA FÍSICA Y REHABILITACIÓN'
    },
    {
       value:'045',
       text:'MÉDICO ESPECIALISTA - MEDICINA FORENSE'
    },
    {
       value:'046',
       text:'MÉDICO ESPECIALISTA - MEDICINA INTERNA'
    },
    {
       value:'047',
       text:'MÉDICO ESPECIALISTA - MEDICINA NUCLEAR'
    },
    {
       value:'048',
       text:'MÉDICO ESPECIALISTA - NEFROLOGÍA'
    },
    {
       value:'049',
       text:'MÉDICO ESPECIALISTA - NEFROLOGÍA PEDIÁTRICA'
    },
    {
       value:'050',
       text:'MÉDICO ESPECIALISTA - NEONATOLOGÍA'
    },
    {
       value:'051',
       text:'MÉDICO ESPECIALISTA - NEUMOLOGÍA'
    },
    {
       value:'052',
       text:'MÉDICO ESPECIALISTA - NEUMOLOGÍA PEDIÁTRICA'
    },
    {
       value:'053',
       text:'MÉDICO ESPECIALISTA - NEUROCIRUGÍA'
    },
    {
       value:'054',
       text:'MÉDICO ESPECIALISTA - NEUROFISIOLOGÍA CLÍNICA'
    },
    {
       value:'055',
       text:'MÉDICO ESPECIALISTA - NEUROLOGÍA CLÍNICA'
    },
    {
       value:'056',
       text:'MÉDICO ESPECIALISTA - NEUROLOGÍA INFANTIL'
    },
    {
       value:'057',
       text:'MÉDICO ESPECIALISTA - NEUROPATOLOGÍA'
    },
    {
       value:'058',
       text:'MÉDICO ESPECIALISTA - NEUROPEDIATRÍA'
    },
    {
       value:'059',
       text:'MÉDICO ESPECIALISTA - OFTALMOLOGÍA'
    },
    {
       value:'183',
       text:'MÉDICO ESPECIALISTA - OFTALMOLOGÍA ONCOLÓGICA'
    },
    {
       value:'060',
       text:'MÉDICO ESPECIALISTA - ONCOHEMATOLOGÍA PEDIÁTRICA'
    },
    {
       value:'061',
       text:'MÉDICO ESPECIALISTA - ONCOLOGÍA CLÍNICA'
    },
    {
       value:'062',
       text:'MÉDICO ESPECIALISTA - ORTOPEDIA INFANTIL'
    },
    {
       value:'063',
       text:'MÉDICO ESPECIALISTA - ORTOPEDIA Y TRAUMATOLOGÍA'
    },
    {
       value:'064',
       text:'MÉDICO ESPECIALISTA - OTORRINOLARINGOLOGÍA'
    },
    {
       value:'076',
       text:'MÉDICO ESPECIALISTA - OTRO'
    },
    {
       value:'184',
       text:'MÉDICO ESPECIALISTA - PATOLOGÍA'
    },
    {
       value:'065',
       text:'MÉDICO ESPECIALISTA - PEDIATRÍA'
    },
    {
       value:'066',
       text:'MÉDICO ESPECIALISTA - PSIQUIATRÍA'
    },
    {
       value:'067',
       text:'MÉDICO ESPECIALISTA - PSIQUIATRÍA INFANTIL Y DEL ADOLESCENTE'
    },
    {
       value:'068',
       text:'MÉDICO ESPECIALISTA - RADIOLOGÍA E IMÁGENES DIAGNOSTICAS'
    },
    {
       value:'069',
       text:'MÉDICO ESPECIALISTA - RADIOTERAPIA'
    },
    {
       value:'070',
       text:'MÉDICO ESPECIALISTA - REHABILITACIÓN'
    },
    {
       value:'071',
       text:'MÉDICO ESPECIALISTA - REUMATOLOGÍA'
    },
    {
       value:'072',
       text:'MÉDICO ESPECIALISTA - TOXICOLOGÍA CLÍNICA'
    },
    {
       value:'073',
       text:'MÉDICO ESPECIALISTA - UROLOGÍA'
    },
    {
       value:'074',
       text:'MÉDICO ESPECIALISTA - UROLOGÍA ONCOLOGICA'
    },
    {
       value:'014',
       text:'MÉDICO GENERAL - MEDICINA GENERAL'
    },
    {
       value:'077',
       text:'ODONTÓLOGO - ODONTOLOGÍA'
    },
    {
       value:'078',
       text:'ODONTÓLOGO ESPECIALISTA - CIRUGÍA ORAL Y MAXILOFACIAL'
    },
    {
       value:'079',
       text:'ODONTÓLOGO ESPECIALISTA - ENDODONCIA'
    },
    {
       value:'080',
       text:'ODONTÓLOGO ESPECIALISTA - ESTOMATOLOGÍA PEDIÁTRICA'
    },
    {
       value:'086',
       text:'ODONTÓLOGO ESPECIALISTA - IMPLANTOLOGÍA'
    },
    {
       value:'081',
       text:'ODONTÓLOGO ESPECIALISTA - ODONTOPEDIATRÍA Y ORTOPEDIA MAXILAR'
    },
    {
       value:'082',
       text:'ODONTÓLOGO ESPECIALISTA - ORTODONCIA Y ORTOPEDIA MAXILAR'
    },
    {
       value:'087',
       text:'ODONTÓLOGO ESPECIALISTA - OTRO'
    },
    {
       value:'083',
       text:'ODONTÓLOGO ESPECIALISTA - PERIODONCIA'
    },
    {
       value:'084',
       text:'ODONTÓLOGO ESPECIALISTA - PROSTODONCIA'
    },
    {
       value:'085',
       text:'ODONTÓLOGO ESPECIALISTA - REHABILITACIÓN ORAL'
    },
    {
       value:'095',
       text:'PROFESIONAL ESPECIALIZADO - PROFESIONAL ESPECIALIZADO'
    },
    {
       value:'107',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - BACTERIÓLOGO ESPECIALISTA EN BANCO DE SANGRE Y TRANSFUSIÓN SANGUÍNEA'
    },
    {
       value:'108',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - BACTERIÓLOGO ESPECIALISTA EN INMUNOLOGÍA'
    },
    {
       value:'109',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - BACTERIÓLOGO ESPECIALISTA EN MICROBIOLOGÍA CLÍNICA'
    },
    {
       value:'112',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - EPIDEMIOLOGÍA'
    },
    {
       value:'110',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - FONOAUDIOLOGÍA Y FONIATRÍA'
    },
    {
       value:'111',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - NEUROREHABILITACIÓN'
    },
    {
       value:'120',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - OTRO'
    },
    {
       value:'115',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - PROMOCIÓN Y PREVENCIÓN'
    },
    {
       value:'114',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - SALUD AMBIENTAL'
    },
    {
       value:'116',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - SALUD COMUNITARIA'
    },
    {
       value:'117',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - SALUD FAMILIAR'
    },
    {
       value:'118',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - SALUD OCUPACIONAL'
    },
    {
       value:'113',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - SALUD PÚBLICA'
    },
    {
       value:'119',
       text:'PROFESIONAL ESPECIALIZADO AREA SALUD - TOXICOLOGÍA'
    },
    {
       value:'088',
       text:'PROFESIONAL SERVICIO SOCIAL OBLIGATORIO - BACTERIOLOGÍA SERVICIO SOCIAL OBLIGATORIO'
    },
    {
       value:'089',
       text:'PROFESIONAL SERVICIO SOCIAL OBLIGATORIO - ENFERMERÍA SERVICIO SOCIAL OBLIGATORIO'
    },
    {
       value:'090',
       text:'PROFESIONAL SERVICIO SOCIAL OBLIGATORIO - MEDICINA GENERAL SERVICIO OBLIGATORIO'
    },
    {
       value:'091',
       text:'PROFESIONAL SERVICIO SOCIAL OBLIGATORIO - ODONTOLOGÍA SERVICIOS SOCIAL OBLIGATORIO'
    },
    {
       value:'092',
       text:'PROFESIONAL UNIVERSITARIO - PROFESIONAL UNIVERSITARIO'
    },
    {
       value:'093',
       text:'PROFESIONAL UNIVERSITARIO - PSICÓLOGO'
    },
    {
       value:'094',
       text:'PROFESIONAL UNIVERSITARIO - TRABAJO SOCIAL'
    },
    {
       value:'097',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - BACTERIÓLOGO Y LABORATORISTA CLÍNICO'
    },
    {
       value:'105',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - FONOAUDIOLOGÍA'
    },
    {
       value:'098',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - INSTRUCCIÓN EN SALUD'
    },
    {
       value:'101',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - INSTRUMENTADOR QUIRÚRGICO'
    },
    {
       value:'099',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - MEDICINA VETERINARIA'
    },
    {
       value:'100',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - NUTRICIONISTA DIETISTA'
    },
    {
       value:'096',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - OPTOMETRÍA'
    },
    {
       value:'106',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - OTRO'
    },
    {
       value:'102',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - TERAPISTA FÍSICA'
    },
    {
       value:'103',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - TERAPISTA OCUPACIONAL'
    },
    {
       value:'104',
       text:'PROFESIONAL UNIVERSITARIO AREA SALUD - TERAPISTA RESPIRATORIA'
    },
    {
       value:'138',
       text:'TÉCNICO AREA SALUD - INSTRUMENTACIÓN QUIRÚRGICA'
    },
    {
       value:'133',
       text:'TÉCNICO AREA SALUD - LABORATORIO CLÍNICO'
    },
    {
       value:'134',
       text:'TÉCNICO AREA SALUD - LABORATORIO DENTAL'
    },
    {
       value:'131',
       text:'TÉCNICO AREA SALUD - OTRO'
    },
    {
       value:'132',
       text:'TÉCNICO AREA SALUD - RADIOLOGÍA E IMÁGENES DIAGNOSTICAS'
    },
    {
       value:'173',
       text:'TÉCNICO AREA SALUD - REGENCIA DE FARMACIA'
    },
    {
       value:'136',
       text:'TÉCNICO AREA SALUD - SALUD AMBIENTAL'
    },
    {
       value:'174',
       text:'TÉCNICO AREA SALUD - SALUD COMUNITARIA'
    },
    {
       value:'135',
       text:'TÉCNICO AREA SALUD - SALUD OCUPACIONAL'
    },
    {
       value:'137',
       text:'TÉCNICO AREA SALUD - TERAPIA'
    }
 ]

 export default Cargos