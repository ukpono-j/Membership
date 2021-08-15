import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';
import ChatIcon from '@material-ui/icons/Chat';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Logo from './Logo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WebAssetIcon from '@material-ui/icons/WebAsset';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const items = [
  // {
  //   href: '/dashboard',
  //   icon: BarChartIcon,
  //   title: 'Dashboard'
  // },
  // {
  //   href: '/customers',
  //   icon: UsersIcon,
  //   title: 'Customers'
  // },
  // {
  //   href: '/app/channels',
  //   icon: ChatIcon,
  //   title: 'Channels'
  // },
  // {
  //   href: '/app/charts',
  //   icon: BarChartIcon,
  //   title: 'Charts'
  // },
  // {
  //   href: '/app/stripeproduct',
  //   icon: ShoppingBagIcon,
  //   title: 'Stripe Products'
  // },
  // {
  //   href: '/app/subscriber',
  //   icon: UsersIcon,
  //   title: 'Subscribers'
  // },
  // {
  //   href: '/app/tasks',
  //   icon: AssignmentIcon,
  //   title: 'Tasks'
  // },
  {
    href: '/app/webhooks',
    icon: WebAssetIcon,
    title: 'Webhooks'
  },
  {
    href: '/dashboard/subscribe',
    icon: SubscriptionsIcon,
    title: 'Subscription'
  },
  {
    href: '/dashboard/checkout',
    icon: ShoppingCartIcon,
    title: 'Checkout'
  },
  {

    href: '/dashboard/support',
    icon: ShoppingBagIcon,
    title: 'Support'
  },
  {
    href: '/dashboard/policies',
    icon: UserIcon,
    title: 'policies'
  },
  {
    href: '/d',
    icon: UserIcon,
    title: 'login'
  },
  {
    href: '/d',
    icon: UserIcon,
    title: 'Sign up'
  },
  // {
  //   href: '/settings',
  //   icon: SettingsIcon,
  //   title: 'Settings'
  // },
  // {
  //   href: '/login',
  //   icon: LockIcon,
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: 'Error'
  // }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          variant="square"
          style={{backgroundColor:"#e5e7e8"}}
          
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          
        >
          <Logo/>
        </Avatar>
        
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Membership portal
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
