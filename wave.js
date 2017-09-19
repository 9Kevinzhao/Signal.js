const point = require('./Point.js');

var wave =function(array){
  var numberOfPoints=array.length;
  var points=array;
  var transformedPoints=array;
  var range;
  var period;

function getRange(){
  return range;
}

function getPeriod(){
  return period;
}

function getPointArray(){
  return points;
}

function shiftx(v){
  for(let i=0;i<numberOfPoints;i++){
    let oldx=transformedPoints[i].getx();
    let oldy=transformedPoints[i].gety();
    oldx = oldx+v;
    let changedpoint=new point(oldx,oldy);
    transformedPoints[i]= changedpoint;
  }
}

function shifty(v){
  for(let i=0;i<numberOfPoints;i++){
    let oldx=transformedPoints[i].getx();
    let oldy=transformedPoints[i].gety();
    oldy = oldy+v;
    let changedpoint=new point(oldx,oldy);
    transformedPoints[i]= changedpoint;
  }
}

function stretchx(v){
  for(i=0;i<numberOfPoints;i++){
    let oldx=transformedPoints[i].getx();
    let oldy=transformedPoints[i].gety();
    oldx = oldx*v;
    let changedpoint=new point(oldx,oldy);
    transformedPoints[i]= changedpoint;
  }
}

function stretchy(v){
  for(i=0;i<numberOfPoints;i++){
    let oldx=transformedPoints[i].getx();
    let oldy=transformedPoints[i].gety();
    oldy = oldy*v;
    let changedpoint=new point(oldx,oldy);
    transformedPoints[i]= changedpoint;
  }
}

  function transform(){
    return transformedPoints
  }

  function calculateSpan(array){
  period=Math.max(...array)-Math.min(...array);
  }

  function outputOf(xvalue){
      let reminder= xvalue%period;
        return array[reminder].gety();
  }


  return{shiftx,shifty,stretchx,stretchy,transform,outputOf}
}

module.exports = wave;
