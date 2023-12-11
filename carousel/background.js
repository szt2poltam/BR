var number_of_stars = 150;

var random_number = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createStars = function(){
  var stars_rotation = 'move_right;';
  for(var i=0; i<number_of_stars; i++){
    rot= (stars_rotation=='move_right;'?'move_left;':'move_right;');
    var stars_top = random_number(0,document.documentElement.clientHeight);
    var stars_left = random_number(0,document.documentElement.clientWidth);
    var stars_radius = random_number(0,4);
    var  stars_duration= random_number(6,16);

    document.body.innerHTML += "<div class='stars' style='top: "+stars_top+"px; left: "+stars_left+"px; width: "+stars_radius+"px; height: "+stars_radius+"px; "+
    "animation-name:"+stars_rotation+"; animation-duration: "+stars_duration+";'></div>";
  }
};

createStars();