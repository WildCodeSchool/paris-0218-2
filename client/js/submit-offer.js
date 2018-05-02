const form = window.document.getElementById('submit-job')

const submit = postOffer => {
	return fetch("http://localhost:3456/jobs", {
    method : "post",
    headers: {'Content-Type': 'application/json',},
    'credentials': 'include',
		body : JSON.stringify(postOffer)
	}, 
	{'credentials': 'include'})
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const input = {
    contract: window.document.getElementById('contract-modal').value,
    companyName: window.document.getElementById('company-name').value,
    title: window.document.getElementById('job-title').value,
    description: window.document.getElementById('job-description').value,
    salaryRange: window.document.getElementById('salary-range').value,
    city: window.document.getElementById('city').value
  }
  console.log(input)
  submit(input)
	.then(res => res.json())
})
