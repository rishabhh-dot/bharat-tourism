const cities = [
  {
    name: "Agra",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    places: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    bestTime: "October to March",
    entryFee: "₹50 - ₹250",
    timing: "6:00 AM - 6:00 PM",
    map: "https://www.google.com/maps/search/Agra+tourist+places"
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=900&q=80",
    places: ["Hawa Mahal", "Amber Fort", "City Palace"],
    bestTime: "November to February",
    entryFee: "₹50 - ₹500",
    timing: "9:00 AM - 5:00 PM",
    map: "https://www.google.com/maps/search/Jaipur+tourist+places"
  },
  {
    name: "Delhi",
    state: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    places: ["India Gate", "Red Fort", "Qutub Minar"],
    bestTime: "October to March",
    entryFee: "Free - ₹600",
    timing: "10:00 AM - 6:00 PM",
    map: "https://www.google.com/maps/search/Delhi+tourist+places"
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=900&q=80",
    places: ["Gateway of India", "Marine Drive", "Juhu Beach"],
    bestTime: "November to February",
    entryFee: "Mostly Free",
    timing: "Open most of the day",
    map: "https://www.google.com/maps/search/Mumbai+tourist+places"
  },
  {
    name: "Goa",
    state: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    places: ["Baga Beach", "Fort Aguada", "Dudhsagar Falls"],
    bestTime: "November to February",
    entryFee: "Free - ₹100",
    timing: "Depends on place",
    map: "https://www.google.com/maps/search/Goa+tourist+places"
  },
  {
    name: "Varanasi",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80",
    places: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath"],
    bestTime: "October to March",
    entryFee: "Mostly Free",
    timing: "5:00 AM - 9:00 PM",
    map: "https://www.google.com/maps/search/Varanasi+tourist+places"
  },
  {
    name: "Lucknow",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1624704765325-fd4868c970dc?auto=format&fit=crop&w=900&q=80",
    places: ["Bara Imambara", "Rumi Darwaza", "Ambedkar Park"],
    bestTime: "October to March",
    entryFee: "₹20 - ₹100",
    timing: "10:00 AM - 5:00 PM",
    map: "https://www.google.com/maps/search/Lucknow+tourist+places"
  },
  {
    name: "Manali",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    places: ["Solang Valley", "Hadimba Temple", "Rohtang Pass"],
    bestTime: "March to June",
    entryFee: "Free - ₹550",
    timing: "Depends on place",
    map: "https://www.google.com/maps/search/Manali+tourist+places"
  },
  {
    name: "Shimla",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80",
    places: ["Mall Road", "Jakhoo Temple", "Kufri"],
    bestTime: "March to June",
    entryFee: "Mostly Free",
    timing: "Depends on place",
    map: "https://www.google.com/maps/search/Shimla+tourist+places"
  },
  {
    name: "Amritsar",
    state: "Punjab",
    image: "https://images.unsplash.com/photo-1588096344356-9b4a1d19f160?auto=format&fit=crop&w=900&q=80",
    places: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
    bestTime: "November to March",
    entryFee: "Mostly Free",
    timing: "Open most of the day",
    map: "https://www.google.com/maps/search/Amritsar+tourist+places"
  },
  {
    name: "Udaipur",
    state: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    places: ["City Palace", "Lake Pichola", "Fateh Sagar Lake"],
    bestTime: "September to March",
    entryFee: "₹30 - ₹300",
    timing: "9:00 AM - 6:00 PM",
    map: "https://www.google.com/maps/search/Udaipur+tourist+places"
  },
  {
    name: "Rishikesh",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    places: ["Laxman Jhula", "Triveni Ghat", "River Rafting"],
    bestTime: "September to June",
    entryFee: "Free - Activity Charges",
    timing: "Depends on activity",
    map: "https://www.google.com/maps/search/Rishikesh+tourist+places"
  }
];

const citiesContainer = document.getElementById("cities");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const details = document.getElementById("details");
const closeBtn = document.getElementById("close");

function showCities(cityList) {
  citiesContainer.innerHTML = "";

  cityList.forEach((city) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${city.image}" alt="${city.name}">
      <h3>${city.name}</h3>
      <p style="padding: 0 10px 10px;">${city.state}</p>
    `;

    card.addEventListener("click", () => showDetails(city));
    citiesContainer.appendChild(card);
  });
}

function showDetails(city) {
  details.innerHTML = `
    <h2>${city.name}, ${city.state}</h2>
    <p><strong>Famous Places:</strong> ${city.places.join(", ")}</p>
    <p><strong>Best Time to Visit:</strong> ${city.bestTime}</p>
    <p><strong>Entry Fee:</strong> ${city.entryFee}</p>
    <p><strong>Timing:</strong> ${city.timing}</p>
    <br>
    <a href="${city.map}" target="_blank" class="map-btn">View on Google Map</a>
  `;

  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(value) ||
    city.state.toLowerCase().includes(value)
  );

  showCities(filteredCities);
});

showCities(cities);
