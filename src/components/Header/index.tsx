import { Dropdown, Image, MenuProps, Space } from 'antd';
import './index.scss';
import logoImg from '@/assets/img/logo.png';
import headerLineImg from '@/assets/img/header-line.png';
import navActiveImg from '@/assets/img/nav-active.png';
import loginIconImg from '@/assets/img/login-icon.png';
import buyNowSignImg from '@/assets/img/buy-now-sign.png';
import languageImg from '@/assets/img/language.png';
import downImg from '@/assets/img/down.png';
export default function index() {
  const [active, setActive] = useState('GAME PACK');
  const [selectLang, setSelectLang] = useState('1');
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div>EN</div>,
    },
    {
      key: '2',
      label: <div>ZH</div>,
    },
  ];

  const tabs: string[] = ['GAME PACK', 'MEDIA', 'NEWS', 'COMMUNITY', 'SUPPORT'];

  const tabsHandle = (active: string) => setActive(active);

  return (
    <div className="header h-135px w-full min-w-1680 max-w-1850 mx-auto flex items-center justify-between relative px-34px box-border z-11">
      <div className="flex items-center ">
        <div className="w-18.95vw max-w-364px">
          <Image src={logoImg} width={'100%'} preview={false}></Image>
        </div>
        <div className="h-full flex text-12px color-white ml-78px pb-27px">
          {tabs.map((item: any) => (
            <div
              key={item}
              className={`w-7.6vw max-w-146px min-w-100px h-108px flex-center relative cursor-pointer`}
              onClick={() => tabsHandle(item)}
            >
              <span className={` flex-center h-50px hover ${active == item ? 'nav-cur color-00CFFF' : ''}`}>
                {item}
              </span>
              {active == item && (
                <img src={navActiveImg} width={120} className="absolute bottom--67px left-0 h-142px w-full" alt="" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex pb-27px">
        <div className="login-btn flex-center cursor-pointer">
          <Image src={loginIconImg} width={14} preview={false}></Image>
          <span className="ml-14px">LOGIN</span>
        </div>
        <div className="buy-now flex-center cursor-pointer relative">
          BUY NOW
          <div className="absolute top-0px right-0">
            <Image src={buyNowSignImg} width={14} preview={false}></Image>
          </div>
        </div>
        <div className="flex-center cursor-pointer relative ml-64px">
          <Dropdown menu={{ items }}>
            <div className="flex-center">
              <Image src={languageImg} width={22} preview={false}></Image>
              <span className="color-white mx-8px text-12px">EN</span>
              <Image src={downImg} width={8} preview={false}></Image>
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="header-line w-full h-27px absolute bottom-0px left-26px">
        <Image src={headerLineImg} width={'100%'} preview={false}></Image>
      </div>
    </div>
  );
}
