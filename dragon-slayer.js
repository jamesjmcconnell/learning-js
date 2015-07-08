var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit){
     console.log("you cut a dragon you badass");  
     totalDamage += damageThisRound;
     if(totalDamage >= 4){
         console.log("u killed him gj");
         slaying = false;
     }else{
         youHit = Math.floor(Math.random() * 2);
     }
    }else{
     console.log("u missed, rip");   
    }
 slaying = false   
}