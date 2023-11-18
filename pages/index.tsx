import anime from 'animejs';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';

type TSection = {
  description: string;
  items: string[];
}

type TMenu = {
  [section: string]: TSection;
}

const MENU_ITEMS: TMenu = {
  'imbibe.': {
    description: 'al a carte',
    items: [
      'oolong milk tea',
      'watermelon sake',
      'saigon flip',
    ],
  },
  'indulge.': {
    description: 'four-course menu',
    items: [
      'arancini',
      'labneh + carrot',
      'braised short rip',
      'mushroom forest',
    ],
  },
};

export default function Home(): JSX.Element {
  const [imgSrc, setImgSrc] = useState('gifs/light_up_shroom.gif');
  const ids = [styles.title, styles.menu];

  useEffect(() => {

    setTimeout(() => {
      setImgSrc('gifs/pulsating_shroom.gif');

      ids.map(id =>  anime({
        targets: `#${id}`,
        opacity: [0, 1],
        easing: 'easeInOutQuart',
        duration: 700,
        translateY: ['5px', '0px'],
      }));
    }, 1500);

  }, []);


  return (
    <Layout id={styles.container}>
      <h1 id={styles.title}>
        EFAS.
      </h1>
      <div id={styles.mushroom}>
        <img src={imgSrc}/>
      </div>
      <div id={styles.menu}>
        {Object.entries(MENU_ITEMS).map(([sectionTitle, {description, items}]) => {
          return (
            <div className={styles.section} key={sectionTitle}>
              <h3>{sectionTitle}</h3>
              <p>{description}</p>
              {items.map(item => <h4 key={item}>{item}</h4>)}
            </div>
          );
        })}
      </div>

    </Layout>
  );
}

