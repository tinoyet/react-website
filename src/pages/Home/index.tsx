import './index.scss';
import { Image } from 'antd';
import heroImg from '@/assets/img/hero-image.png';
import icon_01 from '@/assets/img/icon/icon-01.png';
import icon_02 from '@/assets/img/icon/icon-02.png';
import footerListLineImg from '@/assets/img/footer-list-line.png';
import footerListLineYellowImg from '@/assets/img/footer-list-line-yellow.png';
import bottom1Img from '@/assets/img/icon/icon-03.png';
import bottom2Img from '@/assets/img/icon/icon-04.png';
import bottom3Img from '@/assets/img/icon/icon-05.png';
import bottom4Img from '@/assets/img/icon/icon-06.png';
import icon_07 from '@/assets/img/icon/icon-07.png';
import icon_08 from '@/assets/img/icon/icon-08.png';
import icon_09 from '@/assets/img/icon/icon-09.png';
import icon_10 from '@/assets/img/icon/icon-10.png';
import icon_11 from '@/assets/img/icon/icon-11.png';
import icon_14 from '@/assets/img/icon/icon-14-2.png';
import img_02 from '@/assets/img/icon/img-02.png';
import { Carousel } from 'antd';
import React, { useRef } from 'react';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function index() {
  const carouselRef: any = useRef(null);
  const { t } = useTranslation();
  const jumpTo = (url: any) => {
    const w: any = window.open('_black');
    w.location.href = url;
  };
  const tabsList = [
    {
      id: 1,
      title: 'CHARACTERS',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 2,
      title: 'Weapons & Abilities',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 3,
      title: 'GAMEPLAY',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 4,
      title: 'MOUNTS & MORE',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 5,
      title: 'COMBAT STYLE',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 6,
      title: 'PLAYER FIRST',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 7,
      title: 'LARGE SCALE SCI-FI BATTLES',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 8,
      title: 'OPEN WORLD GALACTIC PROPORTION',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
    {
      id: 9,
      title: 'MULTIPLAYER CO-OP',
      subTitle: 'FRESH UNIQUE',
      desc: 'There are many great FPS games out there. So, to make things fresh and interesting, we made sure that you have hundreds of gun mods, powers, gadgets, and passives. Enemies also have a large amount of variety and abilities.',
      img: img_02,
    },
  ];

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const befChange = (currentSlide: number) => {
    console.log('bef', currentSlide);
  };
  const [tabsIndex, setTabsIndex] = useState(0);
  const [slider, setSlider] = useState(1);
  return (
    <div className="home w-full color-fff">
      <div className="home-top relative" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="right-btn flex-start-center">
          <div className="font-600">{t('Follow us on')}</div>
          <div className="mx-15 w-40 h-1 bg-color-fff"></div>
          <div className="mr-20 w-20 h-20 icon-image">
            <Image src={icon_07} preview={false} height={20} width={20}></Image>
          </div>
          <div className="mr-20 w-20 h-20 icon-image">
            <Image src={icon_08} preview={false} height={20} width={20}></Image>
          </div>
          <div className="mr-20 w-20 h-20 icon-image">
            <Image src={icon_09} preview={false} height={20} width={20}></Image>
          </div>
          <div className="mr-20 w-20 h-20 icon-image">
            <Image src={icon_10} preview={false} height={20} width={20}></Image>
          </div>
          <div className="mr-20 w-20 h-20 icon-image">
            <Image src={icon_11} preview={false} height={20} width={20}></Image>
          </div>
        </div>
        <div className="w-1460 mx-auto pt-325">
          <div className="w-770">
            <div className="text-60 l-60 pl-25">{t('PLAY')}</div>
            <div className="text-136 l-136 relative border-bottom-1px-41494e pb-10 -mt-10">
              <span className="pl-25">{t('THE ALPHA')}</span>
              <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
                <Image src={footerListLineImg} preview={false} height={4} width={22}></Image>
              </div>
            </div>
            <div className="text-20 pl-25 mt-20 w-690">
              {t(
                'Support our development by purchasing any pack (33% off retail price) of Earth From Another Sun, and get immediate access to the newest build of the game plus every bi-weekly update, forever!',
              )}
            </div>
          </div>
          <div className="flex-start-center pl-20">
            <Image src={icon_01} preview={false} height={220} width={263}></Image>
            <Image
              className="ml-20 cursor-pointer"
              src={icon_02}
              preview={false}
              height={92}
              width={388}
              onClick={() => {
                jumpTo('https://youtu.be/py6R8wYQDAA');
              }}
            ></Image>
          </div>
          <div className="pl-25">
            <div className="text-14">{t('Available on')}:</div>
            <div className="flex-start-center mt-35">
              <div className="mr-36px flex-center">
                <Image src={bottom1Img} width={120} preview={false}></Image>
              </div>
              <div className="mr-36px flex-center">
                <Image src={bottom2Img} width={155} preview={false} className="mr-36px"></Image>
              </div>
              <div className="mr-36px flex-center">
                <Image src={bottom3Img} width={116} preview={false} className="mr-36px"></Image>
              </div>
              <div className=" flex-center">
                <Image src={bottom4Img} width={121} preview={false}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs-content py-60">
        <div className="w-1440 mx-auto">
          <div className="tabs-content-desc mt-80 text-18 text-center">
            {t("What's this about?").toLocaleUpperCase()}
          </div>
          <div className="tabs-content-title mt-20 text-80 h-60 l-60 text-center">
            {t('GAME FEATURES').toLocaleUpperCase()}
          </div>
          <div className="mt-30 tabs-list">
            {tabsList.map((item: any, index: number) => (
              <div
                className={`tabs-list-item cursor-pointer px-25 text-16 text-center mb-10 ${
                  tabsIndex == index ? 'on' : ''
                }`}
                key={index}
                onClick={() => {
                  setTabsIndex(index);
                  setSlider(index);
                  carouselRef.current.goTo(index);
                  // carouselRef.current.prev();
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-content-img relative mt-20">
            <Carousel
              afterChange={onChange}
              beforeChange={befChange}
              dots={false}
              ref={carouselRef}
              className="w-1440 mx-auto h-800"
            >
              {tabsList.map((item: any, index: number) => (
                <div className="relative" key={index}>
                  <Image src={item.img} preview={false} height={800} width={1440}></Image>
                  <div className="img-text" style={{ fontFamily: 'Industry-Book' }}>
                    <div className="color-E8A300 text-14 font-600 letter-spacing-1">{item.subTitle}</div>
                    <div className="img-title text-36 h-50 l-30 letter-spacing-1 color-fff relative mt-5">
                      {item.title}
                      <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
                        <Image src={footerListLineYellowImg} preview={false} height={4} width={22}></Image>
                      </div>
                    </div>
                    <div className="text-18 color-fff l-28 mt-20">{item.desc}</div>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="tabs-content-img-mask">
              <Image src={icon_14} preview={false} height={800} width={1440}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
