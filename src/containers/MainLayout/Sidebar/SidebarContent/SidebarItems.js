import FeatherIcon from 'feather-icons-react'
import { scroller } from 'react-scroll';
import cn from 'classnames';
import { Box, Link, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from 'react';

const items = [{
  icon: "home",
  to: "home",
  label: "Home",
  active: true
},{
  icon: "user",
  to: "about",
  label: "About Me",
  active: false
},{
  icon: "book",
  to: "portfolio",
  label: "Portfolio",
  active: false
},{
  icon: "mail",
  to: "contact",
  label: "Contact Me",
  active: false
}];

const SidebarItems = () => {
  const [menuItems, setMenuItems] = useState(items);

  const clickHandler = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      smooth: 'easeInQuad'
    });

    setMenuItems(menuItems.map(item => ({
      ...item,
      active: item.to === element
    })));
  }

  return (
    <Box sx={{ width: '100%', flexGrow: 1, overflow: "scroll" }}>
      <List className='ListCustomized' component="nav" aria-labelledby="nested-list-subheader" sx={{ paddingX: 4 }}>
        {menuItems.map((item,index) => (
          <ListItemButton className={cn('MuiListItemButtonCustomized', { 'active': item.active })} component={Link} key={index} onClick={() => clickHandler(item.to)}>
            <ListItemIcon className='ListItemIconCustomized'>
              <FeatherIcon icon={item.icon}/>
            </ListItemIcon>
            <ListItemText className='ListItemTextCustomized' primary={item.label}/>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default SidebarItems;