import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from './Searchbar';
import logo from '../../../assets/images/logo.png';
import PrimaryDropDownMenu from './PrimaryDropDownMenu';
import SecondaryDropDownMenu from './SecondaryDropDownMenu';
import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const name = useSelector((state) => state.user.name) || 'Phúc';
  const [isLog, setIsLog] = useState(localStorage.getItem('isLog'));
  const { cartItems } = useSelector((state) => state.cart);
  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log(1)

  return (
    <header className="bg-white fixed top-0 w-full z-10 p-3">
      <div className="w-full sm:w-5/6 px-1 sm:px-4 m-auto flex justify-center items-center relative">
        <div className="flex items-center flex-1">
          <a href="/">
            <img draggable="false" style={{width: '150px', marginRight: '40px'}} src={logo} alt="Roced Logo" />
          </a>
          <Searchbar />
        </div>
        <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
          {isAuthenticated !== true ?
            <a href="/login" className="px-3 sm:px-9 py-0.5 text-black bg-white border font-medium rounded-sm cursor-pointer">Login</a>
            :
            (
              <span className="userDropDown flex items-center text-black font-medium gap-1 cursor-pointer" onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}>Xin chào {user.name || ''}
                <span>{togglePrimaryDropDown ? <ExpandLessIcon sx={{ fontSize: "16px" }} /> : <ExpandMoreIcon sx={{ fontSize: "16px" }} />}</span>
              </span>
            )
          }
          {togglePrimaryDropDown && <PrimaryDropDownMenu setTogglePrimaryDropDown={setTogglePrimaryDropDown} user={user} />}
          {/* <span className="moreDropDown hidden sm:flex items-center text-white font-medium gap-1 cursor-pointer" onClick={() => setToggleSecondaryDropDown(!toggleSecondaryDropDown)}>More
            <span>{toggleSecondaryDropDown ? <ExpandLessIcon sx={{ fontSize: "16px" }} /> : <ExpandMoreIcon sx={{ fontSize: "16px" }} />}</span>
          </span>
          {toggleSecondaryDropDown && <SecondaryDropDownMenu />} */}
          <a href="/cart" className="flex items-center text-black font-medium gap-2 relative">
            <span><ShoppingCartIcon /></span>
            {cartItems.length > 0 &&
              <div className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                {cartItems.length}
              </div>
            }
            Cart
          </a>
        </div>
      </div>
    </header>
  )
};

export default Header;
