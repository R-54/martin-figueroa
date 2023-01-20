import React from 'react';

import Welcome from '../../components/welcome/Welcome';
import Info from '../../components/info/Info';

const infoTitle1 = 'Desarrollamos soluciones';
const infoContent1 =
  'Innovadoras con ayuda de tecnologías, socios comerciales disruptivos y metodologías prácticas que redefinen la manera de abordar la sostenibilidad del medio ambiente e implementación práctica de soluciones y mejoras.';
const infoImage1 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/830451_106858.png';
const infoTitle2 =
  'Transformamos y Orientamos tu empresa hacia la sustentabilidad.';
const infoContent2 =
  'Transformando el mundo, una sector a la vez. Elige sustentable, es posible, nosotros te ayudamos.';
const infoImage2 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/814533_624081.png';
const welcomeHeader = 'Agencia de Implementacion para el Desarrollo';
const welcomeImage =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/793718_27115.png';
const welcomeText =
  'Centro de Investigación y empresa líder en asesoría y consultoría ambiental, dedicada a la implementación de prácticas sostenibles, transferencia tecnológica y desarrollo de certificaciones.';

  // Make a form
  // Improve footer
  // add ul li component to services
const Home = () => {
  return (
    <>
      <Welcome header={welcomeHeader} image={welcomeImage} text={welcomeText} />
      <Info title={infoTitle1} image={infoImage1} text={infoContent1} />
      <Info title={infoTitle2} image={infoImage2} text={infoContent2} />
    </>
  );
};

export default Home;
