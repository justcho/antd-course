export default{ 
   dva: {},
   antd: {},
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: 'helloworld',
        component: './HelloWorld'
      },
    ]
  }],
};