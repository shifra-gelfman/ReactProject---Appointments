import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {store} from './store/store'
import { Provider } from 'react-redux'
import { UserDetails } from './components/user-details.tsx';
import { About } from './components/About.tsx';
import { SignIn } from './components/SignIn.tsx';
import { SignUp } from './components/SignUp.tsx';
import Counter from './components/Counter/index.ts';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: '',
      Component: UserDetails,
    }, {
      path: 'about',
      Component: About,
    }, {
      path: 'counter',
      Component: Counter,
    }]
  }, {
    path: '/signin',
    Component: SignIn
  }, {
    path: '/signup',
    Component: SignUp
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* provider - קומפויננטה שצריכה לעטוף את כל אפליקצית ריאקט, ומקבלת את אוביקט ה store
      הבסיס של רידקס, ומקשרת בין ריאקט לבין רידקס
    */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
   
  </React.StrictMode>,
)
