function addNo(num){
    ans=document.getElementById('ans')
    ans.innerHTML+=num
  }

  function clearAns(){
    ans=document.getElementById('ans')
    ans.innerHTML=""
  }

  function generateAns(){
    ans=document.getElementById('ans')
    finalAns=eval(ans.innerHTML)
    ans.innerHTML=finalAns
  }

  document.addEventListener("keydown",(e)=>{
    if(e.key>=0 && e.key<=9 || e.key=='+'||e.key=='-'||e.key=='*'||e.key=='/'){
      ans.innerHTML+=e.key   
    }

    if(e.key=="Enter"){
      ans=document.getElementById('ans')
      finalAns=eval(ans.innerHTML)
      ans.innerHTML=finalAns
    }

    if(e.key=="Backspace"){
      ans2=document.getElementById('ans').innerHTML
      finalans=ans2.slice(0,-1) 
      ans.innerHTML=finalans
    }
  })