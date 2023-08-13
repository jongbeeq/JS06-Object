let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // *
  //John เนื่องจาก property name ของ obj ที่เรียกใช้คือ john