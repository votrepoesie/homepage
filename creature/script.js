/** @type {HTMLCanvasElement} */

//plant your own corals & save our ocean 

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;

class Root {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.maxSize = Math.random() * 7 + 1;
        this.size = Math.random() * 1 + 2;
        this.vs = Math.random() * 0.2 + 0.05;
        this.angle = Math.random() * 6.2;
        this.va = Math.random() * 0.6 - 0.3;
        this.lightness = 10;
        this.shape = Math.PI * 2;
        this.color = Math.random() * 100;
    
    }
    update(){
        this.x += this.speedX + Math.sin(this.angle);
        this.y += this.speedY + Math.cos(this.angle) - 1;
        this.angle += this.va;
        this.size += this.vs;
        if (this.color < 300) this.color += 3;
        if (this.lightness < 82) this.lightness += 1;
        if (this.size < this.maxSize){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, this.shape);
            // ctx.ellipse(0, 30, 20, 80);
            ctx.fillStyle = 'hsl(262' + this.color + ',100%,70%)';
            ctx.fill();
            ctx.lineWidth = 0.5;
            ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        } 
    } 
}

window.addEventListener('mousemove', function(e){
    if (drawing){
        for (let i = 0; i < 6; i++){
           const root = new Root(e.x, e.y);
           root.update(); 
        }
    }
});

window.addEventListener('mousedown', function(){
    drawing = true;
});
window.addEventListener('mouseup', function(){
    drawing = false;
});


// protect our oceans! link resources to organizations & resources 
// change background & colors so it reads "coral garden"
// made by referencing using https://www.youtube.com/watch?v=0v4_Dw0K8pw