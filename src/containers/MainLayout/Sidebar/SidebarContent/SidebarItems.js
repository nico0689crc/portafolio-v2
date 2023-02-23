import FeatherIcon from 'feather-icons-react'
import { scroller } from 'react-scroll';
import { Box, Link, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const items = [{
  icon: "home",
  to: "home",
  label: "Home"
},{
  icon: "user",
  to: "about",
  label: "About Me"
},{
  icon: "book",
  to: "portfolio",
  label: "Portfolio",
},{
  icon: "mail",
  to: "contact",
  label: "Contact Me",
}];

const SidebarItems = () => {

  const clickHandler = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: 'easeOutQuint'
    })
  }

  return (
    <Box sx={{ width: '100%', flexGrow: 1, overflow: "scroll" }}>
      <List component="nav" aria-labelledby="nested-list-subheader">
        {items.map((item,index) => (
          <ListItemButton component={Link} key={index} onClick={() => clickHandler(item.to)}>
            <ListItemIcon>
              <FeatherIcon icon={item.icon}/>
            </ListItemIcon>
            <ListItemText primary={item.label}/>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default SidebarItems;