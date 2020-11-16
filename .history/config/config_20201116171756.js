export default{ 
import { Component } from 'react';
   dva: {},
   antd: {},
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: './HelloWorld'
      },
      {
        path: '/helloworld',
        component: './HelloWorld'
      },
      {
        path: '/dashboard',
        routes: [
          {path: '/dashboard/analysis', Component: 'Dashboard/Analysis'},
          {path: '/dashboard/analysis', }
        ]    
      },
    ]
  }],



};