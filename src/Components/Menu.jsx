import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavElements } from './NavElements.jsx';
import ScrollButton from './ScrollButton.jsx';
import BurgerMenu from './BurgerMenu';

export default function Menu() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const [okay, setOkay] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleVisibility = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setOkay(
          rect.top + rect.height == 0 
        );
      }
    };

    handleVisibility(); // Check visibility initially
    window.addEventListener('resize', handleVisibility);
    window.addEventListener('scroll', handleVisibility);

    return () => {
      window.removeEventListener('resize', handleVisibility);
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  const mappedData = NavElements.map(elem => {
    return (
      <div
        className="group relative flex "
        onClick={() => setActive(pv => !pv)}
        key={elem.id}
        title={elem.name}
      >
        <Link
          className={`${
            location.pathname === elem.path
              ? 'text-primary1 hover:text-primary1 '
              : 'text-slate-300 md:text-white hover:text-primary1 transition-all duration-300'
          } md:drop-shadow-back flex`}
          to={elem.path}
        >
          {elem.icon}

          <div
            className={`${
              location.pathname === elem.path
                ? 'text-primary1'
                : 'text-slate-300'
            } md:hidden md:absolute  right-12 top-0 w-max md:text-black font-bold px-3 py-0.5 capitalize md:bg-slate-300 text-xl 
            rounded-md md:group-hover:block`}
          >
            {elem.name}
          </div>

          <div
            className="absolute hidden w-0 h-0 
              border-t-[9px] border-t-transparent
              border-l-[12px] border-l-slate-300
              border-b-[9px] border-b-transparent
              top-1.5 right-10 rounded-sm md:group-hover:block"
          ></div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <ScrollButton />
      <div
        ref={divRef}
        className={`hidden md:block fixed md:top-[27%] md:w-fit md:right-6 z-20 transition-all duration-300`}
      >
        <div
          className="flex justify-around font-customFont 
          text-white px-3 py-5 w-screen text-3xl bg-secondary1 md:flex-col md:w-max md:space-y-8 md:rounded-full ring-2 -mb-1
           ring-primary3 md:backdrop-blur-sm backdrop-blur-[5px] shadow-shad shadow-primary3"
        >
          {mappedData}
        </div>
      </div>
      {okay && (
       
          <BurgerMenu active={active} setActive={() => setActive(pv => !pv)}>
            {mappedData}
          </BurgerMenu>
      
      )}
    </>
  );
}