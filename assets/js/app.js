const cl=console.log;

const li=[...document.querySelectorAll(".tabHeading li")];
const allTabcontent=[...document.querySelectorAll(".tabcontent")];

   const ontablClickHandler=(eve)=>{
	   let getId= eve.target.getAttribute("data-vaish");
	   cl(getId)
	   allTabcontent.forEach(tab=>tab.classList.remove("active"));
	   let card=document.getElementById(getId);
	   card.classList.add("active");
	   li.forEach(li=>li.classList.remove("active"));
	   eve.target.classList.add("active");
   }

   li.forEach(li=>{
	   li.addEventListener("click",ontablClickHandler)
   })

   