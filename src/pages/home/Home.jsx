import React from 'react';

import Welcome from '../../components/welcome/Welcome';
import Info from '../../components/info/Info';
import BlockList from '../../components/blockList/BlockList';

const infoTitle1 = 'Desarrollamos soluciones';
const infoImage1 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/830451_106858.png';
const infoTitle2 = 'Transformamos y Orientamos';
const infoImage2 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/814533_624081.png';
const infoTitle3 = '¿Por que Martin Figueroa?​';
const infoImage3 =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/666759_441927.png';
const welcomeHeader = 'Marin Figueroa';
const welcomeImage =
  'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/793718_27115.png';
const buttonText = 'Conoce mas';
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ornare neque. Nulla condimentum vel augue at tincidunt. Nulla nunc purus, fermentum at sapien quis, volutpat venenatis tellus. Fusce eget bibendum neque, a pharetra sapien. Sed porttitor eu ex ut bibendum. Sed ac pellentesque nisl, in faucibus magna. Praesent eget luctus metus, sed dignissim orci. Donec eleifend egestas pulvinar. Nulla facilisi. Aliquam pulvinar mauris mauris, sollicitudin cursus dolor pharetra eu. Aenean tincidunt lacus vel viverra tristique. Fusce ac scelerisque purus, vitae gravida ligula. Nunc at scelerisque justo. Sed massa velit, pellentesque non ex ut, lobortis auctor magna. Mauris non egestas metus. Praesent in augue ut est efficitur interdum vel ac velit.';
const blocks = [
  {
    id: '1',
    title: 'Mision',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim vitae velit interdum tincidunt. Integer vitae feugiat risus, sit amet fringilla tortor.',
    image:
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/58563_492078.png',
  },
  {
    id: '2',
    title: 'Vision',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim vitae velit interdum tincidunt. Integer vitae feugiat risus, sit amet fringilla tortor.',
    image:
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/659379_301917.png',
  },
  {
    id: '3',
    title: 'Valores',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim vitae velit interdum tincidunt. Integer vitae feugiat risus, sit amet fringilla tortor.',
    image:
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/2966289/852252_103949.png',
  },
];
const welcomeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim vitae velit interdum tincidunt. Integer vitae feugiat risus, sit amet fringilla tortor.';

const Home = () => {
  return (
    <>
      <Welcome
        header={welcomeHeader}
        image={welcomeImage}
        showButton={true}
        buttonText={buttonText}
        text={welcomeText}
      />
      <Info
        align='left'
        title={infoTitle1}
        image={infoImage1}
        showButton={true}
        buttonText={buttonText}
        text={text}
      />
      <Info
        align='right'
        title={infoTitle2}
        image={infoImage2}
        showButton={true}
        buttonText={buttonText}
        text={text}
      />
      <Info align='left' title={infoTitle3} image={infoImage3} text={text} />
      <BlockList blocks={blocks} />
    </>
  );
};

export default Home;
