var point = function(xcor,ycor){
    let x=xcor;
    let y=ycor;

    function getx(){
        return x;
    }

    function gety(){
        return y;
    }

    function magnitute(){
        let dist= Math.sqrt(x*x+y+y);
        return dist;
    }

    function distanceto(p2){

        let xsquared = (x-p2.getx())*(x-p2.getx());
        let ysquared = (y-p2.gety())*(y-p2.gety());
        return Math.sqrt(xsquared+ysquared);
    }

    function direction(){
        return Math.atn(y/x)*180/Math.PI;
    }
    return{getx,gety,magnitude,distance,direction

    }
}

module.exports = point;
