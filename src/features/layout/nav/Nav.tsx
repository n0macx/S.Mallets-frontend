import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsCart3 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Backdrop from './Backdrop';
import LanguageButtons from './LanguageButtons';
import NavBar from './NavBar';
import logo from '../../../assets/s-logo.svg';
import { activeLogCart, navBurgerStyles, navStyles } from './navStyles';

const Nav = () => {
  const { t, i18n } = useTranslation('navAndFooter');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between sm:h-36 sm:px-3 md:h-44 md:px-6 lg:px-8">
      <div
        className={
          !nav ? 'w-36 p-6 sm:w-48 sm:p-3 md:w-64  lg:w-72 lg:p-4' : 'hidden'
        }
      >
        <NavLink to="/">
          <img src={logo} alt="smallets logo" width="100%" height="100%" />
        </NavLink>
      </div>
      <section className="hidden sm:block">
        <div className="flex justify-end gap-8 p-4 pl-8 text-2xl">
          <NavLink
            to="/login"
            aria-label="login"
            className={({ isActive }) =>
              isActive ? `${activeLogCart}` : undefined
            }
          >
            <BiUser />
          </NavLink>
          <NavLink
            to="/cart"
            aria-label="cart"
            className={({ isActive }) =>
              isActive ? `${activeLogCart}` : undefined
            }
          >
            <BsCart3 />
          </NavLink>
          <LanguageButtons
            changeLanguage={changeLanguage}
            className={'text-sm'}
            language={i18n.language}
          />
        </div>
        <nav className="hidden tracking-wider sm:flex">
          <NavBar t={t} className={navStyles} />
        </nav>
      </section>
      <div
        onClick={handleNav}
        className="absolute right-7 top-7 z-10 block cursor-pointer sm:hidden"
        aria-hidden="true"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <aside
        className={
          nav
            ? 'menu border-r-grey-900 fixed left-0 top-0 z-10 h-full w-3/5 border-r bg-white duration-500 ease-in-out'
            : 'fixed left-[-100%]'
        }
      >
        <header className="flex items-center justify-between pl-6">
          <h1 className="text-2xl font-semibold tracking-wider">Menu</h1>
          <LanguageButtons
            changeLanguage={changeLanguage}
            className="p-6 text-sm"
            language={i18n.language}
          />
        </header>

        <nav className="z-50 flex flex-col p-4 tracking-wider">
          <NavBar t={t} className={navBurgerStyles} handleNav={handleNav} />
        </nav>
        <section className="px-4">
          <NavLink
            className="flex w-full justify-between gap-8 p-2 px-4 hover:underline"
            to="/login"
            onClick={handleNav}
          >
            <p className="text-sm tracking-wider">{t('login')}</p>
            <BiUser className="text-2xl" />
          </NavLink>
          <NavLink
            className="flex w-full justify-between gap-8 border-b p-4 px-4 hover:underline"
            to="/cart"
            onClick={handleNav}
          >
            <p className="text-sm tracking-wider">{t('cart')}</p>
            <BsCart3 className="text-2xl" />
          </NavLink>
        </section>
      </aside>
      {nav && <Backdrop handleNav={handleNav} />}
    </div>
  );
};

export default Nav;
