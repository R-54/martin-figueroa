import React from 'react';

import Welcome from '../../components/welcome/Welcome';
import BlockList from '../../components/blockList/BlockList';
import TimeLine from '../../components/timeLine/TimeLine';

const welcomeImage =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/103141_828703.png';
const welcomeText =
  'Es un centro de Investigación y empresa líder en servicios de consultoría y asesoría en sustentabilidad.';
const timeLineBlocks = [
  {
    id: '1',
    title: '2003',
    text: 'Un grupo de profesionales dedicados a la asesoría legal y ambiental forma Servicios Estratégicos Legales y Ambientales (SELA) en el año de 2003, enfocada a impulsar y fortalecer los marcos regulatorios, a través de la defensa de intereses en conflicto o en el desarrollo de política pública.',
  },
  {
    id: '2',
    title: '2014',
    text: 'En el año de 2014 nuestra firma se transformó en la Agencia de Implementación para el Desarrollo (AID) a partir de un proceso internacional para fortalecer capacidades personales e institucionales para la solución de problemas complejos. Como la eficiencia en el uso de los recursos, la conservación y aprovechamiento de los recursos naturales, los fenómenos de contaminación y degradación de ecosistemas así como el cambio climático',
  },
  {
    id: '3',
    title: '2021',
    text: 'Como parte de proceso de maduración de la consultoría crea una oferta de servicios especializados en el campo de la sustentabilidad a partir del esquema de evaluación en Sustentabilidad 4.0 y la Certificación de Impacto Compensado (ICO)',
  },
];
const blocks = [
  {
    id: '1',
    title: 'Mision',
    text: 'Demostramos que existe un balance entre las actividades empresariales y el ambiente.',
    image:
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/58563_492078.png',
  },
  {
    id: '2',
    title: 'Vision',
    text: 'Crear soluciones que mejoren la calidad de vida para todos y en todo lugar.',
    image:
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/659379_301917.png',
  },
  {
    id: '3',
    title: 'Valores',
    text: 'Integridad\nHonestidad\nAdaptabilidad\nTrabajo equipo\nPasión',
    image:
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/852252_103949.png',
  },
];

const More = () => {
  return (
    <>
      <Welcome image={welcomeImage} text={welcomeText} />
      <TimeLine blocks={timeLineBlocks} />
      <BlockList blocks={blocks} />
    </>
  );
};

export default More;
