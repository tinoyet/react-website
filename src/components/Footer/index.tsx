import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
import footerBottomLineImg from '@/assets/img/footer-bottom-line.png';
import footerBottomRImg from '@/assets/img/footer-bottom-r.png';
import footerBottomLImg from '@/assets/img/footer-bottom-l.png';
import { Image } from 'antd';
import logoImg from '@/assets/img/logo.png';
import footerListLineImg from '@/assets/img/footer-list-line.png';
import footeGoBtnImg from '@/assets/img/footer-go-btn.png';
import footeGoIconImg from '@/assets/img/footer-go-icon.png';
import downImg from '@/assets/img/down.png';
import bottom1Img from '@/assets/img/bottom-1.png';
import bottom2Img from '@/assets/img/bottom-2.png';
import bottom3Img from '@/assets/img/bottom-3.png';
import bottom4Img from '@/assets/img/bottom-4.png';

import img1 from '@/assets/img/icon/icon-07.png';
import img2 from '@/assets/img/icon/icon-08.png';
import img3 from '@/assets/img/icon/icon-09.png';
import img4 from '@/assets/img/icon/icon-10.png';
import img5 from '@/assets/img/icon/icon-11.png';

export default function index() {
  const { t } = useTranslation();
  const jumpTo = (url: any) => {
    const w: any = window.open('_black');
    w.location.href = url;
  };

  return (
    <div className="footer w-full h-565px relative bg-transparent flex justify-center -mt-50">
      <div className="w-1500px flex justify-between">
        <div className="pt-122px">
          <img src={logoImg} width={250} alt="" />
          <div className="text-12px color-white mt-54px mb-20px">Join the Discussion</div>
          <div className="flex-y-center h-35px">
            <img src={img1} width={25} alt="" className="mr-20px icon-hover" onClick={() => jumpTo('https://www.youtube.com/@EFAS')} />
            <img src={img2} width={25} alt="" className="mr-20px icon-hover" onClick={() => jumpTo('https://twitter.com/PlayEFAS')} />
            <img src={img3} width={25} alt="" className="mr-20px icon-hover" onClick={() => jumpTo('https://discord.com/invite/efas')} />
            <img src={img4} width={25} alt="" className="mr-20px icon-hover" onClick={() => jumpTo('https://www.instagram.com/earthfromanothersun/')} />
            <img src={img5} width={25} alt="" className="mr-20px icon-hover" onClick={() => jumpTo('https://www.facebook.com/EarthFromAnotherSun')} />
          </div>

          <div className="text-12px color-white mt-44px mb-20px">Contact us</div>
          <div className="underline color-#00b3e0">contact@multiverseinc.com</div>
        </div>
        <div className="pt-156px w-210px color-white text-12px">
          <div className="b-b-1px b-#41494e b-solid h-44px relative mb-20px">
            <span>HELPFUL LINKS</span>
            <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
              <Image src={footerListLineImg} preview={false} height={4} width={22}></Image>
            </div>
          </div>
          <div className="mb-20px">Home</div>
          <div className="mb-20px">About Us</div>
          <div className="mb-20px">News</div>
          <div className="mb-20px">Community</div>
          <div className="mb-20px">Game Pack</div>
        </div>
        <div className="pt-156px w-210px color-white text-12px">
          <div className="b-b-1px b-#41494e b-solid h-44px relative mb-20px">
            <span>SUPPORT LINKS</span>
            <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
              <Image src={footerListLineImg} preview={false} height={4} width={22}></Image>
            </div>
          </div>
          <div className="mb-20px">Privacy Policy</div>
          <div className="mb-20px">Terms of Use</div>
          <div className="mb-20px">Coockies</div>
          <div className="mb-20px">Legal Notice</div>
          <div className="mb-20px">FAQs</div>
        </div>
        <div className="pt-156px w-350px color-white text-12px">
          <div className="width-p-100 b-b-1px b-#41494e b-solid h-44px relative mb-20px">
            <span>NEWSLETTER</span>
            <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
              <Image src={footerListLineImg} preview={false} height={4} width={22}></Image>
            </div>
          </div>
          <div className="mb-20px">Subscribe now and be the first to know about us.</div>
          <div className="go-btn flex justify-between relative">
            <input
              type="text"
              className="bg-transparent w-250px pl-26px border-none outline-none color-#61686e"
              placeholder="Email Address"
            />
            <Image className="cursor-pointer" src={footeGoBtnImg} preview={false}></Image>
            <div className="absolute right-20px top-14px cursor-pointer">
              <Image src={footeGoIconImg} preview={false} width={22}></Image>
            </div>
          </div>
          <div className="flex mt-34px letter-spacing">
            <div>LANGUAGE PREFERENCE：</div>
            <div>
              <div className="b-b-1px b-solid b-#868b8e w-86px mb-8px">
                ENGLISH
                <Image src={downImg} preview={false} width={12} className="rotate-180 ml-8px"></Image>
              </div>
              <div className=" mb-6px">CHINESE</div>
              <div className=" mb-6px">FILIPINO</div>
              <div className=" mb-6px">GERMAN</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-76px w-1250px z-2 flex items-center justify-between">
        <span className="color-#6d7478">Earth from AnotherSuin 2023.All Rights Reserved.</span>
        <div className="flex">
          <div className="mr-36px flex-center">
            <Image src={bottom1Img} width={95} preview={false}></Image>
          </div>
          <div className="mr-36px flex-center">
            <Image src={bottom2Img} width={122} preview={false} className="mr-36px"></Image>
          </div>
          <div className="mr-36px flex-center">
            <Image src={bottom3Img} width={92} preview={false} className="mr-36px"></Image>
          </div>
          <div className=" flex-center">
            <Image src={bottom4Img} width={95} preview={false}></Image>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 overflow-hidden">
        <div className="w-full relative h-97px">
          <Image src={footerBottomLineImg} width={'100%'} preview={false}></Image>
          <div className="absolute h-94px bottom-0 left-0">
            <Image src={footerBottomLImg} width={270} height={94} preview={false}></Image>
          </div>
          <div className="absolute h-94px bottom-0 right-0">
            <Image src={footerBottomRImg} width={270} height={94} preview={false}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
