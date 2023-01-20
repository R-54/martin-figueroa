import React from 'react';

import Info from '../../components/info/Info';

const infoTitle1 = 'CERTIFICACIÓN ICO Y EVALUACION SUSTENTABILIDAD 4.0';
const infoContent1 =
  'Cumpliendo con estándares internacionales, te ayudamos a medir, reducir y neutralizar tu huella de carbono de manera que agregue valor a tu compañía y al medio ambiente.';
const infoImage1 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/711679_303753.png';
const infoTitle2 = 'ICO - Certificación de Impacto Compensado​';
const infoContent2 =
  'Certificación de carácter voluntario e independiente diseñada para restaurantes, hoteles y la realización de eventos que cumplan con medidas para reducir sus emisiones de carbono generadas.\nLa certificación ICO mide el alcance de la huella de carbono y establece medidas de eficiencia energética y de materiales para neutralizarlo.\nEl aumento en el sentido de apreciación de los consumidores por los beneficios que las empresas aportan por neutralizar su factura de carbono a través de los estímulos a la eficiencia y el ahorro de energía y materiales, se logran a través de los dos niveles de certificación que ICO establece:';
const infoImage2 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/955086_917223.png';
const infoTitle3 = 'SUSTENTABILIDAD 4.0';
const infoContent3 =
  'Las soluciones a los problemas complejos requieren de estrategias fuera de lo ordinario.\nEl modelo de Sustentabilidad 4.0 ha sido desarrollado para establecer planes de acción y priorización de medidas prácticas para contrarrestar la crisis climática incluyendo metodologías para cuantificar los beneficios de la sostenibilidad a largo plazo y la evaluación de los riesgos compensados o prevenidos de las empresas.\nAplicar la Sustentabilidad 4.0 permitirá diversificar la actividad económica a partir de la creación de proyectos para el desarrollo comunitario a través de procesos colaborativos y de economía compartida. Entre las estrategias para combatir el Cambio Climático a partir de este modelo figuran las siguientes:';
const infoImage3 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/255796_120467.png';

const Services = () => {
  return (
    <>
      <Info title={infoTitle1} image={infoImage1} text={infoContent1} />
      <Info title={infoTitle2} image={infoImage2} text={infoContent2} />
      <Info title={infoTitle3} image={infoImage3} text={infoContent3} />
    </>
  );
};

export default Services;
