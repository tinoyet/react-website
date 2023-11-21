import './index.scss';
import { Image } from 'antd';
import heroImg from '@/assets/img/hero-image.png';
import icon_01 from '@/assets/img/icon/icon-01.png';
import icon_02 from '@/assets/img/icon/icon-02.png';
import footerListLineImg from '@/assets/img/footer-list-line.png';
import bottom1Img from '@/assets/img/icon/icon-03.png';
import bottom2Img from '@/assets/img/icon/icon-04.png';
import bottom3Img from '@/assets/img/icon/icon-05.png';
import bottom4Img from '@/assets/img/icon/icon-06.png';
import icon_07 from '@/assets/img/icon/icon-07.png';
import icon_08 from '@/assets/img/icon/icon-08.png';
import icon_09 from '@/assets/img/icon/icon-09.png';
import icon_10 from '@/assets/img/icon/icon-10.png';
import icon_11 from '@/assets/img/icon/icon-11.png';
export default function index() {
  const { t } = useTranslation();
  const jumpTo = (url: any) => {
    const w: any = window.open('_black');
    w.location.href = url;
  };
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
    </div>
  );
}
