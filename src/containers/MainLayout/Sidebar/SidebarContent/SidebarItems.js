import { Box, Link, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { scroller } from 'react-scroll';
import FeatherIcon from 'feather-icons-react'
import cn from 'classnames';
import { uiActions } from 'store/ui/uiSlice';

const SidebarItems = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const sideBarMenuItems = useSelector(state => state.uiStore.sideBarMenuItems );

  const clickHandler = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      smooth: 'easeInQuad'
    });

    dispatch(uiActions.setSidebarMenuItemActive({ element }));
    dispatch(uiActions.toggleSidebar());
  }

  return (
    <Box sx={{ width: '100%', flexGrow: 1, overflow: "hidden" }}>
      <List className='ListCustomized' component="nav" aria-labelledby="nested-list-subheader" sx={{ paddingX: 4 }}>
        {sideBarMenuItems.map((item,index) => (
          <ListItemButton className={cn('MuiListItemButtonCustomized', { 'active': item.active })} component={Link} key={index} onClick={() => clickHandler(item.to)}>
            <ListItemIcon className='ListItemIconCustomized'>
              <FeatherIcon icon={item.icon}/>
            </ListItemIcon>
            <ListItemText className='ListItemTextCustomized' primary={t(item.label)}/>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default SidebarItems;