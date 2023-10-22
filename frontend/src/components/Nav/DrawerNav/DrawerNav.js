import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Control from '../Controls/Control';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Form from '../Search-Bar/Form';
import { Link } from 'react-router-dom';
import React from 'react'
import './DrawerNav.css'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import Cart from '../../Card/Cart/Cart';
import { useContext } from 'react';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import { Text, LanguageContext } from '../../../languages/Language';
import { Button } from '@mui/material';


const DrawerNav = () => {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);
    const handleLanguageChange = e => userLanguageChange(e.target.value);
    const wishItems = useContext(WishItemsContext)
    const langFunction = ()=>{
      setLangstate(!langstate)
      langstate ? userLanguageChange('en'): userLanguageChange('am')
    }
    
    const languageOptions = {
      am: 'አማርኛ',
      en: 'English',
    };
    const [langstate, setLangstate] = useState({
      left: false,
    });
    const languageContext = useContext(LanguageContext);
        const [state, setState] = useState({
          left: false,
        });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };
    
    
    const list = (anchor) => (
        <Box
        sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <ListItem>
                <ListItemButton>
                  <ListItemText>
                  <Link to="/">{languageContext.dictionary["home"]}</Link>
                  </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                  <ListItemText>
                    <Link to="/shop">{languageContext.dictionary["shop"]}</Link> 
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                  <ListItemText>
                  <Link to="/categories">{languageContext.dictionary["categories"]}</Link>
                   </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                  <ListItemText>
                  <Link to="/account/login">{languageContext.dictionary["login"]}</Link>
                   </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                   <ListItemText>
                  <Link to="/account/register">{languageContext.dictionary["signUp"]}</Link>
                   </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                  <ListItemText>
                     <Link to="/wishlist">
                                   <Badge badgeContent={wishItems.items.length} color="error">
                                       <FavoriteBorderIcon color="black" sx={{ width: '35px'}}/>
                                   </Badge>
                      </Link>
                   </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                  <ListItemText>
                     <Link to="/wishlist">
                         <Cart />
                      </Link>
                   </ListItemText>
                </ListItemButton>
            </ListItem>
          </List>
          <List>
              <ListItem >
                  <button className="drawer-lang" onClick={langFunction} onChange={handleLanguageChange}>{userLanguage == 'am'? languageOptions['en'] : languageOptions['am'] }</button>
              </ListItem>
          </List>
          <List>
            <ListItem>
                <div className="search__drawer">
                    <Form />
                </div>
            </ListItem> 
          </List>
          <Divider />
        </Box>
      );

    return ( 
        <Fragment>
            {['left'].map((anchor) => (
                <Fragment >
                {state.left? <MenuOpenIcon fontSize='large' /> : <MenuIcon fontSize='large' onClick={toggleDrawer(anchor, true)} />}
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
                </Fragment>
            ))}
        </Fragment>
     );
}
 
export default DrawerNav;