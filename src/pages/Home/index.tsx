import './index.scss';
import { Carousel, Input, Image } from 'antd';
import React, { useRef } from 'react';
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
import icon_22 from '@/assets/img/icon/icon-22.png';
import icon_17 from '@/assets/img/icon/icon-17.png';
import icon_21 from '@/assets/img/icon/icon-21.png';
import img_02 from '@/assets/img/icon/img-02.png';
import img_03 from '@/assets/img/icon/img-03.png';
import img_04 from '@/assets/img/icon/img-04.png';
import img_05 from '@/assets/img/icon/img-05.png';
import img_06 from '@/assets/img/icon/img-06.png';
import img_07 from '@/assets/img/icon/img-07.png';
import HomeVideo from '@/components/Youtube';
import YouTube, { YouTubeProps } from "react-youtube";
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
  const email = "";
  const jumpTo = (url: any) => {
    const w: any = window.open('_black');
    w.location.href = url;
  };
  const videoList = [
    {
      id: 1,
      img: img_03,
      videoId:'py6R8wYQDAA',
    },
    {
      id: 2,
      img: img_04,
      videoId:'EL_4QrQzyTU',
    },
    {
      id: 3,
      img: img_05,
      videoId:'2SWrgdRl4pY',
    },
    {
      id: 4,
      img: img_06,
      videoId:'VOnKTbIn9Ww',
    },
    {
      id: 5,
      img: img_07,
      videoId:'4rwxXcxpLeM',
    },
    {
      id: 6,
      img: img_03,
      videoId:'Uy6mpc11_ow',
    },
  ]
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
  const [videoCode, setVideoCode] = React.useState(()=>{
    return videoList[0].videoId
  });
  const opts: YouTubeProps['opts'] = {
    height: '610',
    width: '1400',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const checkElapsedTime = (e:any) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      // setModalIsOpen(true);
    }
  };
  const [tabsIndex, setTabsIndex] = useState(0);
  
  const [slider, setSlider] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="home w-full color-fff">
      <HomeVideo isVisible={showVideo} onClose={() => setShowVideo(false)} />

      <div className="home-top relative z-10" style={{ backgroundImage: `url(${heroImg})` }}>
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
              onClick={() => setShowVideo(true)}
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

      <div className="tabs-content py-60 relative z-9">
        <div className="w-1440 mx-auto">
          <div className="tabs-content-desc mt-80 text-18 text-center flex-center-center">
            <span>{t("What's this about?").toLocaleUpperCase()}</span>
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
                {item.title.toLocaleUpperCase()}
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
      <div className="video-content -mt-100 relative z-8">
        <div className="w-1440 mx-auto pt-300 relative color-000 ">
          <div className="video-title text-18 text-right flex-end-center"><span>{t('Photographers From Another Sun').toLocaleUpperCase()}</span></div>
          <div className="flex-end-center mt-10">
            <div className="flex-end-center w-1250 ">
              <Image src={icon_22} preview={false} height={13} width={8}></Image>
              <div className="flex-1 ml-10 mr-20 h-1 b-b border-dashed op-10" style={{borderColor:'#fff'}}></div>
              <div className="text-80 h-64 l-64 color-fff">{t('MEDIA GALLERY')}</div>
            </div>
          </div>
          
          <div className="w-1400 mx-auto flex-center-center bg-color-000 mt-80">
            <YouTube
              videoId={videoCode}
              onStateChange={(e) => checkElapsedTime(e)}
              opts={opts}
            />
          </div>
          <div className="overflow-y-hidden w-1400 h-201 overflow-x-auto video-scroll mx-auto mt-25">
            <div className="w-1800 h-201 video-list">
              {videoList.map((item: any, index: number) => (
                <div
                  className={`video-list-item cursor-pointer flex-center-center relative float-left w-298 h-201 ${
                    videoCode == item.videoId ? 'on' : ''
                  }`}
                  key={index}
                  onClick={() => {
                    setVideoCode(item.videoId);
                  }}
                >
                  <div className="-mt-5 w-268 h-171"><Image src={item.img} preview={false} height={171} width={268}></Image></div>
                  <div className="absolute video-img-mask"><Image src={icon_21} preview={false} height={201} width={298}></Image></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="absolute video-content-img"><Image src={icon_19} preview={false} ></Image></div> */}
      </div>
      <div className="form-content  relative z-8">
        <div className="w-1440 mx-auto pt-300 relative color-000">
          <div className="w-910">
            <div className="text-18 letter-spacing-1 font-600 pl-5">{t('NEWSLETTER')}</div>
            <div className="text-80 letter-spacing-1 font-600 h-60 l-60 mt-10">{t('BE THE FIRST TO KNOW')}</div>
            <div className="text-18 font-600 mt-45 pl-5">{t('Don’t feel like backing just yet? No worries, please consider giving us your email, we’ll send you updates content, lore material, Q&A that might answer your questions, and some offers that you wouldn’t want to miss!')}</div>
            <div className="text-18 font-600 mt-45 pl-5">{t('Having you as a subscriber would already be an incredible proof of support, so thank you in advance!')}</div>
            <div className="mt-60 w-773 h-92 relative">
              <div className="flex-between-center absolute form-content-input width-p-100 pl-30">
                <Input placeholder={`${t('Enter your email')}`} defaultValue={email} bordered={false} />
                <div className="sub-btn text-24 color-fff letter-spacing-1 font-600 cursor-pointer">{t('SUBSCRIBE')}</div>
              </div>
              <Image src={icon_17} preview={false} ></Image>
            </div>
            {/* <div className="text-18 font-600 mt-10 pl-5">{t('fedgfege')}</div> */}
          </div>
          {/* <div className="absolute form-content-img"><Image src={icon_16} preview={false} ></Image></div> */}
        </div>
      </div>
    </div>
  );
}
