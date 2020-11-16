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
    ]
  }],


  
};