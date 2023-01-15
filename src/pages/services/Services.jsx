import React from 'react';

import Welcome from '../../components/welcome/Welcome';
import Info from '../../components/info/Info';

const infoTitle1 = 'Servicio 1';
const infoImage1 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/955086_917223.png';
const infoTitle2 = 'Servicio 2';
const infoImage2 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/255796_120467.png';
const infoTitle3 = 'Servicio 3';
const infoImage3 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/461835_400905.png';
const infoTitle4 = 'Servicio 4';
const infoImage4 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/999852_868404.png';
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ornare neque. Nulla condimentum vel augue at tincidunt. Nulla nunc purus, fermentum at sapien quis, volutpat venenatis tellus. Fusce eget bibendum neque, a pharetra sapien. Sed porttitor eu ex ut bibendum. Sed ac pellentesque nisl, in faucibus magna. Praesent eget luctus metus, sed dignissim orci. Donec eleifend egestas pulvinar. Nulla facilisi. Aliquam pulvinar mauris mauris, sollicitudin cursus dolor pharetra eu. Aenean tincidunt lacus vel viverra tristique. Fusce ac scelerisque purus, vitae gravida ligula. Nunc at scelerisque justo. Sed massa velit, pellentesque non ex ut, lobortis auctor magna. Mauris non egestas metus. Praesent in augue ut est efficitur interdum vel ac velit.';
const welcomeHeader = 'Cartera de servicios';
const welcomeImage =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/393310_27097.png';
const welcomeText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim vitae velit interdum tincidunt. Integer vitae feugiat risus, sit amet fringilla tortor.';

const Services = () => {
  return (
    <>
      <Welcome header={welcomeHeader} image={welcomeImage} text={welcomeText} />
      <Info align='left' title={infoTitle1} image={infoImage1} text={text} />
      <Info align='right' title={infoTitle2} image={infoImage2} text={text} />
      <Info align='left' title={infoTitle3} image={infoImage3} text={text} />
      <Info align='right' title={infoTitle4} image={infoImage4} text={text} />
    </>
  );
};

export default Services;
