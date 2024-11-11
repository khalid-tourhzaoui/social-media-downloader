import { Drawer } from 'vaul';
import { FiSend } from 'react-icons/fi';
import myLogo from '../assets/avatar.png';
import SocialMediaIcon from './SocialMediaIcon';

const ScrollerVaul = () => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>
          {' '}
          <NeumorphismButton />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content
          aria-describedby={undefined}
          className="bg-[#191836] z-50 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 border-t-2 border-l-2 border-r-2 border-primary5"
        >
          <div className="p-4  backdrop-blur-md rounded-t-[10px] w-full bg-[#1d1b3d] ">
            <div className="mx-auto w-20 h-1.5  rounded-full bg-primary5 mb-5" />

            <Drawer.Title className="font-bold text-xl text-white text-center uppercase">
              Get In Touch
            </Drawer.Title>
          </div>
          <div className="p-4 border-t w-full border-primary5 mt-auto">
            <div className="flex flex-col space-y-5 justify-center items-center pt-1">
              <div className="w-full flex justify-around items-center ">
                {' '}
                <div className="-ml-12 ">
                  {' '}
                  <img
                    src={myLogo}
                    className="w-48 drop-shadow-back3  "
                    alt="Logo"
                  />
                </div>
                <div className="flex flex-col justify-center self-center  space-y-4">
                  {' '}
                  <SocialMediaIcon text="black" />
                </div>
              </div>
              <div className="font-semibold text-center text-white space-y-2">
                <div>
                  Email :{' '}
                  <span className="md:text-lg font-bold">
                    khalidtourhzaoui@gmail.com
                  </span>
                </div>
                <div>
                  {' '}
                  &copy; 2024 Khalid Tourhzaoui . All&nbsp;Rights&nbsp;Reserved{' '}
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ScrollerVaul;

const NeumorphismButton = () => {
  return (
    <div
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-black
        font-bold
        shadow-shad
        shadow-primary5
        ring 
        ring-primary4
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
        bg-white
    `}
    >
      <span className='text-2xl'>
        <FiSend />
      </span>
      <span>Let&apos;s Connect</span>
    </div>
  );
};