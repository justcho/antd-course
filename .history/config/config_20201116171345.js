export default{ 
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
        path: '/',
        component: ''      
      },
    ]
  }],



};