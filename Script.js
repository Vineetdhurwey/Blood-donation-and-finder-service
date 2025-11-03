const donorList = [];

document.getElementById("donorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  const donor = {
    name: inputs[0].value,
    bloodGroup: inputs[1].value.toUpperCase(),
    city: inputs[2].value.toLowerCase(),
    contact: inputs[3].value,
  };
  donorList.push(donor);
  alert("Donor registered successfully!");
  this.reset();
});

function searchDonors() {
  const group = document.getElementById("searchGroup").value.toUpperCase();
  const city = document.getElementById("searchCity").value.toLowerCase();
  const results = donorList.filter(
    d => d.bloodGroup === group && d.city === city
  );

  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  if (results.length === 0) {
    resultsList.innerHTML = "<li>No donors found.</li>";
  } else {
    results.forEach(donor => {
      const li = document.createElement("li");
      li.textContent = `${donor.name} - ${donor.bloodGroup} - ${donor.contact}`;
      resultsList.appendChild(li);
    });
  }
}

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
