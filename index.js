function clock(){

   var hours=document.getElementById("hours");
   var minutes=document.getElementById("min");
   var seconds=document.getElementById("sec");
   var am=document.getElementById("am");

   var time=new Date();
   var a=time.getHours();
   var b=time.getMinutes();
   var c=time.getSeconds();

   if(a>12){
      a=a-12;
   }
   if(a==0){
      a==12;

   }
   
   if(a<10){
      a= '0'+a;
   }
   if(b<10){
      b= '0'+b;
   }
   if(c<10){
      c= '0'+c;
   }
 
   
   hours.innerHTML=a;
   minutes.innerHTML=b;
   seconds.innerHTML=c;
   am.innerHTML='PM';

  
  
}

setInterval(clock,1000);



function myfunction(){
   document.getElementById("morning").innerHTML = "Good Morning!! Wake up!!";
}
settime();

function settime(){
   
   
   var i=document.getElementById('wakeUpTimeselector').Value;
   var hourr=new Date().getHours();
   

   if(i==hourr){
      
      document.getElementById('lunch').innerHTML="GRAB SOME HEALTHY BREAKFAST";
      document.getElementById('textt').style.backgroundImage="url(breakfast1.img)";
      
   }

   
   var i=document.getElementById('wakeUpTimeselector1').Value;
   var hourr=new Date().getHours();

   if(i==hourr){
      document.getElementById('lunch').innerHTML="Lets Have Some lunch.";
      document.getElementById('textt').style.backgroundImage="url(lunch.img)";

   }

   var i=document.getElementById('wakeUpTimeselector2').Value;
   var hourr=new Date().getHours();

   if(i==hourr){
      document.getElementById('lunch').innerHTML="STOP YAWNING, GET SOME TEA. ITS JUT EVENING!";
      document.getElementById('textt').style.backgroundImage="url(evening.img)";
      
   }

   var i=document.getElementById('wakeUpTimeselector3').Value;
   var hourr=new Date().getHours();

   if(i==hourr){
      document.getElementById('lunch').innerHTML="CLOSE YOUR EYES AND GOTO SLEEP.";
      document.getElementById('textt').style.backgroundImage="url(night.img)";
      
   }

}







   
