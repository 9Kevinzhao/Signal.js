const point = require('./Point.js');

var wave =function(array){
  var numberOfPoints=array.length;
  var Points=array;
  var transformedPoints=array;
  var range;
  var Period;

function getRange(){
  return range;
}

function getPeriod(){
  return Period;
}

function getPointArray(){
  return Points;
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

  function outputOf(xvalue){
      let reminder= xvalue%(numberOfPoints)
        return transformedPoints[reminder].gety();
  }

  function calculateSpan(array){
    Math.max(array)-Math.min(array);
  }
  return{shiftx,shifty,stretchx,stretchy,transform,outputOf}
}

module.exports = wave;
