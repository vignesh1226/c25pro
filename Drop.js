function Drop() {
    this.x = random(0,600);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = random(4,10);
  
    this.fall = function() {
      this.y = this.y + this.yspeed;
      var a = map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + a;
  
      if (this.y > height) {
        this.y = random(-200, -100);
        this.yspeed = random(4,10);
      }
    };
  
    this.show = function() {
      strokeWeight(random(1,4));
      stroke("blue");
      line(this.x, this.y, this.x, this.y + this.len);
    };
  }


