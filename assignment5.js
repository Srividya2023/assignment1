let giftsList=["Laptop","Saree","Dress","Flight-Trip","Fridge","Cooler","Air-conditioner","Mobile"]




function getGift(){
    let noOfGifts=giftsList.length;
    let randomGift=giftsList[Math.ceil(Math.random()*noOfGifts)-1];
    
    return randomGift;

   
}






let giftBoxContainer=document.getElementById("giftBoxContainer");


let countdown=500;

let intervalId=setInterval(function(){

    

    countdown=countdown-1;
    
    timerEl.textContent="Time Limit: "+ countdown +" s";
    


    



    if(countdown===0){
        document.getElementById("imageChanger");
        imageChanger.setAttribute("src", "https://img.freepik.com/premium-photo/i-am-sorry-message-card-envelope_264726-410.jpg?size=626&ext=jpg&ga=GA1.1.1610026223.1669570657&semt=sph");
        
        timerEl.textContent="Boom!!.... Better luck next time";
        clearInterval(intervalId);
    }
},1000);





let timerEl=document.getElementById("timer");

let defuserEl=document.getElementById("defuser");




let timeCount=0;
    
defuserEl.addEventListener("click", function() {

   
    let giftMsgEl=document.createElement("span");
    let temp=getGift();
    
    timeCount+=1;

   


    if( countdown!==0 && timeCount===1){
        giftMsgEl.textContent="Congrats!!.... you won a " + temp;
        giftBoxContainer.appendChild(giftMsgEl);
        document.getElementById("imageChanger");
        if( temp==="Laptop"){
            
            imageChanger.setAttribute("src", "https://img.freepik.com/free-psd/laptop-screen-mockup-design-isolated_53876-98834.jpg?size=626&ext=jpg&ga=GA1.1.1610026223.1669570657&semt=sph");
        }

        else if( temp==="Saree"){
            imageChanger.setAttribute("src", "https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502963.jpg?size=626&ext=jpg&ga=GA1.2.1610026223.1669570657&semt=ais");
        
        }
        else if( temp==="Dress"){
            imageChanger.setAttribute("src", "https://img.freepik.com/premium-vector/female-fashion-dress-isolated-icon-design_25030-13121.jpg?size=626&ext=jpg&ga=GA1.1.1610026223.1669570657&semt=ais");
         
        }
        else if( temp==="Flight-Trip"){
            imageChanger.setAttribute("src", "https://img.freepik.com/free-psd/plane-mockup_1310-1053.jpg?size=626&ext=jpg&ga=GA1.2.1610026223.1669570657&semt=ais");
        
        }
        else if( temp==="Fridge"){
            imageChanger.setAttribute("src", "https://img.freepik.com/free-vector/refrigerator-with-closed-opened-door_1308-95206.jpg?size=626&ext=jpg&ga=GA1.1.1610026223.1669570657&semt=sph");
        
        }
        else if( temp==="Cooler"){
            imageChanger.setAttribute("src", "https://img.freepik.com/free-vector/realistic-digital-air-purifier-floor-cozy-room-vector-illustration_1284-70561.jpg?size=626&ext=jpg&ga=GA1.2.1610026223.1669570657&semt=sph");
        
        }
        else if(temp==="Air-conditioner"){
            imageChanger.setAttribute("src", "https://img.freepik.com/free-vector/air-conditioner-with-cold-wind-waves-conditioning_107791-2937.jpg?size=626&ext=jpg&ga=GA1.1.1610026223.1669570657&semt=ais");
        

        }
        else if(temp==="Mobile"){
            imageChanger.setAttribute("src", "https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?size=626&ext=jpg&ga=GA1.1.1610026223.1669570657&semt=sph");
        

        }
        
    
        clearInterval(intervalId);
    }
    

});
   
let changedWhole=document.getElementById("changedWhole");
let innerWhole=document.getElementById("innerWhole");




let visaEl=document.getElementById("visa");
visaEl.onclick=function(){

    let labelEl=document.createElement("label");
   // labelEl.setAttribute("for",)
    labelEl.textContent="Amount to be paid: ";
    labelEl.classList.add("delivery-and-payment-section-description");

    let inputEl=document.createElement("input");
    inputEl.type="text";
    //inputEl.id=""
    inputEl.setAttribute("placeholder","Enter amount");
    inputEl.classList.add("input-element");

    
    innerWhole.textContent="";
    changedWhole.appendChild(labelEl);
    let breakElement=document.createElement("br");
    changedWhole.appendChild(breakElement);
    changedWhole.appendChild(inputEl);

    inputEl.addEventListener("keydown",function(event){
        let paidAmount=inputEl.value;
       
        if(event.key==="Enter" && paidAmount!==""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Your payment is successful";           
        }

        else if(event.key==="Enter" && paidAmount===""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Please....... enter money "; 
        }
    })
    
    
}



let MasterCardEl=document.getElementById("MasterCard");
MasterCardEl.onclick=function(){

    let labelEl=document.createElement("label");
   // labelEl.setAttribute("for",)
    labelEl.textContent="Amount to be paid: ";
    labelEl.classList.add("delivery-and-payment-section-description");


    let inputEl=document.createElement("input");
    inputEl.type="text";
    //inputEl.id=""
    inputEl.setAttribute("placeholder","Enter amount");
    inputEl.classList.add("input-element");


    innerWhole.textContent="";
    changedWhole.appendChild(labelEl);
    let breakElement=document.createElement("br");
    changedWhole.appendChild(breakElement);
    changedWhole.appendChild(inputEl);

    inputEl.addEventListener("keydown",function(event){
        let paidAmount=inputEl.value;
       
        if(event.key==="Enter" && paidAmount!==""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Your payment is successful";           
        }

        else if(event.key==="Enter" && paidAmount===""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Please....... enter money "; 
        }
    })
    
    
}



let payPalEl=document.getElementById("payPal");
payPalEl.onclick=function(){

    let labelEl=document.createElement("label");
   // labelEl.setAttribute("for",)
    labelEl.textContent="Amount to be paid: ";
    labelEl.classList.add("delivery-and-payment-section-description");


    let inputEl=document.createElement("input");
    inputEl.type="text";
    //inputEl.id=""
    inputEl.setAttribute("placeholder","Enter amount");
    inputEl.classList.add("input-element");


    innerWhole.textContent="";
    changedWhole.appendChild(labelEl);
    let breakElement=document.createElement("br");
    changedWhole.appendChild(breakElement);
    changedWhole.appendChild(inputEl);

    inputEl.addEventListener("keydown",function(event){
        let paidAmount=inputEl.value;
       
        if(event.key==="Enter" && paidAmount!==""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Your payment is successful";           
        }

        else if(event.key==="Enter" && paidAmount===""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Please....... enter money "; 
        }
    })
    
    
}



let americanExpressEl=document.getElementById("americanExpress");
americanExpressEl.onclick=function(){

    let labelEl=document.createElement("label");
   // labelEl.setAttribute("for",)
    labelEl.textContent="Amount to be paid: ";
    labelEl.classList.add("delivery-and-payment-section-description");


    let inputEl=document.createElement("input");
    inputEl.type="text";
    //inputEl.id=""
    inputEl.setAttribute("placeholder","Enter amount");
    inputEl.classList.add("input-element");

    innerWhole.textContent="";
    changedWhole.appendChild(labelEl);
    let breakElement=document.createElement("br");
    changedWhole.appendChild(breakElement);
    changedWhole.appendChild(inputEl);

    inputEl.addEventListener("keydown",function(event){
        let paidAmount=inputEl.value;
       
        if(event.key==="Enter" && paidAmount!==""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/successful-purchase-concept-illustration_114360-1003.jpg?size=626&ext=jpg&ga=GA1.2.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Your payment is successful";           
        }

        else if(event.key==="Enter" && paidAmount===""){
            let imageEl=document.createElement("img");

            imageEl.setAttribute("src","https://img.freepik.com/free-vector/flat-design-bankruptcy-man-losing-his-salary_23-2148493135.jpg?size=626&ext=jpg&ga=GA1.1.80563711.1681980854&semt=ais");
            imageEl.classList.add("image-width");
            changedWhole.textContent="";
            changedWhole.appendChild(imageEl);

            let paraEl=document.getElementById("paraEl");

            paraEl.textContent="Please....... enter money "; 
        }
    })
    
    
}



