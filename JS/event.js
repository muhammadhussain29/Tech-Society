// Example data for recent events
let eventData = [
  {
    heading: 'Tech Summit 2025',
    speaker: 'John Doe',
    bgImg: "https://picsum.photos/600/400?random=1",
    txt: "Join us for an exciting exploration of innovation and technology where experts share their insights on emerging trends."
  },
  {
    heading: 'Design Workshop',
    speaker: 'Jane Smith',
    bgImg: "https://picsum.photos/600/400?random=2",
    txt: "A hands-on design session to unleash your creativity and learn the principles of modern UI/UX design."
  },
  {
    heading: 'AI Conference',
    speaker: 'Dr. Emily Johnson',
    bgImg: "https://picsum.photos/600/400?random=3",
    txt: "Dive deep into artificial intelligence with sessions covering neural networks, automation, and real-world AI applications."
  },
  {
    heading: 'Startup Meetup',
    speaker: 'Michael Brown',
    bgImg: "https://picsum.photos/600/400?random=4",
    txt: "Connect with entrepreneurs and innovators at this networking event designed to spark collaboration and new ideas."
  },
  {
    heading: 'Cyber Security Bootcamp',
    speaker: 'Sarah Lee',
    bgImg: "https://picsum.photos/600/400?random=5",
    txt: "Learn how to defend digital systems from modern threats through interactive demos and expert-led workshops."
  },
  {
    heading: 'Web Dev Hackathon',
    speaker: 'David Green',
    bgImg: "https://picsum.photos/600/400?random=6",
    txt: "Showcase your coding skills and creativity in a 24-hour hackathon focused on building powerful web applications."
  }
];


// Set the date to countdown to
const countdownDate = new Date("2024-03-20T00:00:00Z").getTime();

// Update the countdown every second
const countdown = setInterval(function () {

  // Get today's date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  // If the countdown is over, show some text
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    // You can add a message here when the countdown is over
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Event Card Generated Dynamicaly
let cards = document.getElementsByClassName('cards')[0];
function eventCard() {
  return `
  <div class="card p-4">
            <div class="img-holder">
                <img src="${eventData[index].bgImg}" alt="">
            </div>
            <div class="card-content">
                <h2 class="heading-2 col-blue">${eventData[index].heading}</h2>
                <h3 class="txt-1 text-capitalize">${eventData[index].speaker}</h3>
                <p class="txt-2">${eventData[index].txt}</p>
                <button class="btn">
                    <a href="gallery.html">Gallery</a>
                </button>
            </div>
        </div>
  `;
}
let index = 0;
while (index < eventData.length) {
  cards.innerHTML += eventCard();
  index += 1;
}