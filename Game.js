class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("game start",120,100);
Player.getPlayerInfo();
if(allPlayers!==undefined){
  var display_position=130;
  if(plr==="player"+player.index)
fill("red");
else
fill(0);
  display_position+=20;
  text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);

}
    
  }
  if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50;
    player.update();

  }

}
