import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
       <CottageOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NotificationsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Notification" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FavoriteBorderOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Shop" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EmailOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="conversation" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <WalletOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Wallet" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="my profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
     
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      {/* <ListItemText primary="Current month" /> */}
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      {/* <ListItemText primary="Last quarter" /> */}
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        {/* <AssignmentIcon /> */}
      </ListItemIcon>
      {/* <ListItemText primary="Year-end sale" /> */}
    </ListItemButton>
  </React.Fragment>
);
