import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import WebHookLog from 'src/pages/WebHookLog';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ResetPassword from 'src/pages/ResetPassword'
import ChangePassword from 'src/pages/ChangePassword'
import WebhookList from './pages/WebhookList'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import About from './pages/About';
import SubscriberList from 'src/pages/SubscriberList'
import Checkout from './components/checkout/CheckoutBody';
import Success from './pages/Success';
import Supportpage from './components/support/Supportpage';
import Support from './pages/Support';
import CheckoutBody from './components/checkout/CheckoutBody';
import Policies from './components/policies/Policies';
// import Subscription from 'src/pages/SubscriberList'




const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'about', element: <About /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'subscriberlist', element: <SubscriberList /> },
      { path: 'checkout', element: <Checkout /> },
      // {path: 'success', element: <Success/>},
      { path: 'support', element: <Supportpage /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [

      { path: 'account', element: <Account /> },
      { path: 'log/:id', element: <WebHookLog /> },
      { path: 'webhooks', element: <WebhookList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'support', element: <Supportpage /> },
      { path: 'checkout', element: <CheckoutBody /> },
      { path: 'policies', element: <Policies/> },
      { path: 'subscribe', element: <SubscriberList /> },
      // { path: '*', element: <Navigate to="/404" /> }
      
    ]
  },
  // {
  //   path: 'auth',
  //   element: <MainLayout />,
  //   children: [
  //     { path: '/', element: <Navigate to="/app/webhooks" /> },

  //     { path: '/login', element: <Login /> },
  //     { path: '/reset-password/', element: <ResetPassword /> },
  //     { path: '/change-password/:token/', element: <ChangePassword /> },
  //     { path: '404', element: <NotFound /> },
  //     { path: '*', element: <Navigate to="/404" /> }
  //   ]
  // }
];

export default routes;
