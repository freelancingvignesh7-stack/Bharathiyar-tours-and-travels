document.addEventListener("DOMContentLoaded", function(){
  const WHATSAPP_NUMBER = "919629808833";
  const PRICE_PER_PERSON = 2500;
  const form = document.getElementById("groupTourForm");
  if (!form) return;

  const dateInput = document.getElementById("travelDate");
  const travellersInput = document.getElementById("travellers");
  const destinationInput = document.getElementById("destination");
  const totalEl = document.getElementById("estimatedTotal");
  const dateFeedback = document.getElementById("dateFeedback");

  function localISO(d){
    const y=d.getFullYear(); const m=String(d.getMonth()+1).padStart(2,"0"); const day=String(d.getDate()).padStart(2,"0");
    return `${y}-${m}-${day}`;
  }
  function nextSaturday(){
    const d=new Date(); d.setHours(0,0,0,0);
    const days=(6-d.getDay()+7)%7;
    d.setDate(d.getDate()+days);
    return d;
  }
  if(dateInput){
    dateInput.min=localISO(new Date());
    if(!dateInput.value) dateInput.value=localISO(nextSaturday());
  }

  function formatMoney(value){ return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(value); }
  function updateTotal(){
    const count=Math.max(1,parseInt(travellersInput?.value||"1",10));
    if(totalEl) totalEl.textContent=formatMoney(count*PRICE_PER_PERSON);
  }
  travellersInput?.addEventListener("input",updateTotal); updateTotal();

  document.querySelectorAll("[data-reserve-destination]").forEach(btn=>{
    btn.addEventListener("click",function(){
      const value=this.dataset.reserveDestination;
      if(destinationInput && value) destinationInput.value=value;
      document.getElementById("groupTourEnquiry")?.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });

  function isSaturday(value){
    if(!value) return false;
    const parts=value.split("-").map(Number);
    return new Date(parts[0],parts[1]-1,parts[2]).getDay()===6;
  }

  form.addEventListener("submit",function(e){
    e.preventDefault();
    const name=document.getElementById("fullName").value.trim();
    const phone=document.getElementById("phoneNumber").value.replace(/\D/g,"");
    const destination=destinationInput.value;
    const travelDate=dateInput.value;
    const slot=document.getElementById("slot").value;
    const travellers=Math.max(1,parseInt(travellersInput.value||"1",10));
    const pickup=document.getElementById("pickupPoint").value;
    const message=document.getElementById("message").value.trim() || "No additional request";
    const consent=document.getElementById("consent").checked;

    if(!name || phone.length!==10 || !destination || !travelDate || !slot || !pickup || !consent){
      form.classList.add("was-validated");
      alert("Please complete all required details correctly.");
      return;
    }
    if(!isSaturday(travelDate)){
      if(dateFeedback) dateFeedback.textContent="Please choose a Saturday departure date.";
      dateInput.classList.add("is-invalid");
      dateInput.focus();
      return;
    }
    dateInput.classList.remove("is-invalid");
    const formattedDate=new Date(travelDate+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});
    const total=formatMoney(travellers*PRICE_PER_PERSON);
    const sabariLine=destination==="Sabarimala" ? "\nSabarimala support: Interstate permit and Kattu Selavu assistance included" : "";
    const text=`Hello Bharathiyar Tours & Travels,

I would like to reserve seats for the Group Tour.

Destination: ${destination}
Travel Date: ${formattedDate}
Selected Slot: ${slot}
Travellers: ${travellers}
Pickup Point: ${pickup}
Rate: ₹2,500 per person
Estimated Package Total: ${total}${sabariLine}

Name: ${name}
Phone: ${phone}
Additional Message: ${message}

Please confirm seat availability, exact reporting time and payment details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,"_blank","noopener");
  });

  document.getElementById("phoneNumber")?.addEventListener("input",function(){this.value=this.value.replace(/\D/g,"").slice(0,10);});
});
