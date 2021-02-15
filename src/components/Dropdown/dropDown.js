import React, { useState, useEffect, useRef } from 'react';
import './drop.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as HomeIcon } from './icons/homepage.svg';
import { ReactComponent as LogOut } from './icons/switch-off.svg';
import { CSSTransition } from 'react-transition-group';
import Button from '@material-ui/core/Button';

import Loging from './log';

function Dropp() {
  return (
    <Navbar>
      <Return icon={<HomeIcon />} />
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <div className="navbar1">
      <ul className="navbar-nav1">{props.children}</ul>
    
    </div>
  );
}


function Return(props) {
  return (
    <li className="nav-item1">
    <a href="#" className="icon-button1"  onClick={() => (window.location.href = "homepage")}>
    {props.icon}
    </a>
    </li>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item1">
  
      <a href="#" className="icon-button1" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
    
      {open && props.children}
    </li>
 
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {

    return (
      <a href="#" className="menu-item1" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button1">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right1">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown1" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary1"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu1">
          <DropdownItem>
            <Button onClick={() => (window.location.href = "profile")} >My Profile</Button>
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<LogOut />}>
              <Loging/>
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary1"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu1">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary1"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu1">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}


export default Dropp;

