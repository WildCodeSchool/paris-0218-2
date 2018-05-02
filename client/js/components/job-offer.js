export const createJobOffer = jobOffer => `
<div class='job box' id='${jobOffer.idJob}'>
  <div class="offer-width">
    <h3>${jobOffer.title} at ${jobOffer.companyName} </h3>
      <p>
      	<span><img src="./pictures/contract.png" class="img-vign"></span>
      	<span>${jobOffer.contract}</span>
      </p>
   
      <p>
      	<span><img src="./pictures/place.png" class="img-vign"></i></i></span>
      	<span>${jobOffer.city}</span>
      </p>

      <p>
      	<span><img src="./pictures/dolls.png" class="img-vign"></i></span>
      	<span>${jobOffer.salaryRange}</span>
      </p>

      <p>
      	<span><img src="./pictures/contractbis.png" class="img-vign"></span>
      	<span>${jobOffer.companyName}</span>
      </p>

  </div>
</div>
`