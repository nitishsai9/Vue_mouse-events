var app = new Vue({
    el: '#app',
    data: {
      title: 'Hello Vue!',
      cords:
      {
      x: 0,
      y: 0
      },
    },
  
   methods:{
     Events(e)
     {

     },
     logs(e)
     {
        this.cords.x=e.offsetX
        this.cords.y=e.offsetY
     }
   }
  })