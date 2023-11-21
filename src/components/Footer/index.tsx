import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
import footerBottomLineImg from '@/assets/img/footer-bottom-line.png';
import footerBottomRImg from '@/assets/img/footer-bottom-r.png';
import footerBottomLImg from '@/assets/img/footer-bottom-l.png';
import { Image } from 'antd';
import logoImg from '@/assets/img/logo.png';
import footerPlatformImg from '@/assets/img/footer-platform.png';
import footerListLineImg from '@/assets/img/footer-list-line.png';
import footeGoBtnImg from '@/assets/img/footer-go-btn.png';
import footeGoIconImg from '@/assets/img/footer-go-icon.png';
import downImg from '@/assets/img/down.png';
import bottom1Img from '@/assets/img/bottom-1.png';
import bottom2Img from '@/assets/img/bottom-2.png';
import bottom3Img from '@/assets/img/bottom-3.png';
import bottom4Img from '@/assets/img/bottom-4.png';
export default function index() {
  const { t } = useTranslation();

  return (
    <div className="footer w-full h-565px relative bg-transparent flex justify-center">
      <div className="w-1400px flex justify-between">
        <div className="pt-122px">
          <Image src={logoImg} preview={false}></Image>
          <div className="text-12px color-white mt-54px mb-26px">Join the Discussion</div>
          <Image src={footerPlatformImg} preview={false}></Image>
          <div className="text-12px color-white mt-44px mb-26px">Contact us</div>
          <div className="underline color-#00b3e0">contact@multiverseinc.com</div>
        </div>
        <div className="pt-156px w-210px color-white text-12px">
          <div className="b-b-1px b-#41494e b-solid h-44px relative mb-26px">
            <span>HELPFUL LINKS</span>
            <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
              <Image src={footerListLineImg} preview={false} height={4} width={22}></Image>
            </div>
          </div>
          <div className="mb-26px">Home</div>
          <div className="mb-26px">About Us</div>
          <div className="mb-26px">News</div>
          <div className="mb-26px">Community</div>
          <div className="mb-26px">Game Pack</div>
        </div>
        <div className="pt-156px w-210px color-white text-12px">
          <div className="b-b-1px b-#41494e b-solid h-44px relative mb-26px">
            <span>SUPPORT LINKS</span>
            <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
              <Image src={footerListLineImg} preview={false} height={4} width={22}></Image>
            </div>
          </div>
          <div className="mb-26px">Privacy Policy</div>
          <div className="mb-26px">Terms of Use</div>
          <div className="mb-26px">Coockies</div>
          <div className="mb-26px">Legal Notice</div>
          <div className="mb-26px">FAQs</div>
        </div>
        <div className="pt-156px w-350px color-white text-12px">
          <div className="w-210px b-b-1px b-#41494e b-solid h-44px relative mb-26px">
            <span>NEWSLETTER</span>
            <div className="absolute w-22px h-4px bottom-0 left-0 flex-center">
              <Image src={footerListLineImg} preview={false} height={4} width={22}></Image>
            </div>
          </div>
          <div className="mb-26px">Subscribe now and be the first to know about us.</div>
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
