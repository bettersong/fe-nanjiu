```js
// 坐标
class Crood {

    constructor(x = 0, y = 0) {

      this.x = x;

      this.y = y;

    }

    setCrood(x, y) {

      this.x = x;

      this.y = y;

    }

    copy() {

      return new Crood(this.x, this.y);

    }

}

// 流星
class ShootingStar {

    constructor(init = new Crood, final = new Crood, size = 3, speed = 200, onDistory = null) {

    this.init = init;
    // 初始位置

    this.final = final;
    // 最终位置

    this.size = size;
    // 大小

    this.speed = speed;
    // 速度：像素/s

    // 飞行总时间

    this.dur = Math.sqrt(Math.pow(this.final.x - this.init.x, 2) + Math.pow(this.final.y - this.init.y, 2)) * 1000 / this.speed;

    this.pass = 0;
    // 已过去的时间

    this.prev = this.init.copy();
    // 上一帧位置

    this.now = this.init.copy();
    // 当前位置

    this.onDistory = onDistory;

}

draw(ctx, delta) {

    this.pass += delta;

    this.pass = Math.min(this.pass, this.dur);

    let percent = this.pass / this.dur;

    this.now.setCrood(

    this.init.x + (this.final.x - this.init.x) * percent,

    this.init.y + (this.final.y - this.init.y) * percent

    );

    // canvas
    ctx.strokeStyle = '#fff';

    ctx.lineCap = 'round';

    ctx.lineWidth = this.size;

    ctx.beginPath();

    ctx.moveTo(this.now.x, this.now.y);

    ctx.lineTo(this.prev.x, this.prev.y);

    ctx.stroke();

    this.prev.setCrood(this.now.x, this.now.y);

    if (this.pass === this.dur) {

    this.distory();

    }

}

distory() {

	this.onDistory && this.onDistory();

}

}

// effet
let cvs = document.querySelector('canvas');

let ctx = cvs.getContext('2d');

let T;

let shootingStar = new ShootingStar(new Crood(100, 100), new Crood(400, 400),3,200,() = >{
	cancelAnimationFrame(T)
});

let tick = (function() {

    let now = (new Date()).getTime();

    let last = now;

    let delta;

    return function() {

    delta = now - last;

    delta = delta > 500 ? 30 : (delta < 16 ? 16 : delta);

    last = now;

    // console.log(delta);

    T = requestAnimationFrame(tick);

    ctx.save();

    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    // 每一帧用 “半透明” 的背景色清除画布
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    ctx.restore();

    shootingStar.draw(ctx, delta);

		}

})();

tick();
```

