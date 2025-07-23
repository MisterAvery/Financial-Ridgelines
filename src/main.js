let dropddownDisplayed = false;
      
function toggleDropdown() {
    if (dropddownDisplayed) {
      document.getElementById("courses-dropdown").classList.remove("dropdown-active");
      document.getElementById("courses-dropdown-trigger").classList.remove("selected");
      dropddownDisplayed = false;
    } else {
      document.getElementById("courses-dropdown").classList.add("dropdown-active");
      document.getElementById("courses-dropdown-trigger").classList.add("selected");
      
      window.scrollTo(0, 0);
      dropddownDisplayed = true;
    }
}

let selectedTitle;

const courseInformation = {
  "Custom": {
    longName: "Tailored Classes & Relationships",
    description: "We strive to address unique requirements and interests of our audiences and customers. Leveraging keen relationships with trusted partners with Drug Enforcement Administration, Industry, Judicial and Academia, we can build a course or seminar to address unique needs by bringing a vast spectrum of actual experience – not just stories – to the classroom.",
    bullets: [
      "we can build a course or seminar to address unique needs by bringing a vast spectrum of actual experience"
    ]
  },
  
  "FLOE Seminar": {
    longName: "Financial Levers for Operational Effects Seminar",
    description: "The FLOE seminar teaches participants how to understand and apply financial information and intelligence to support and achieve organizational effects and end states – both offensively and defensively. Students learn key concepts of preventing ‘friendly’ financial efforts from negatively impacting operations and our strategic objectives (defense), the economic impacts of the local Operating Environment, as well as exploiting and understanding adversarial efforts to raise, store, move and use financial resources to achieve desired effects (offense) working within an inter-agency and international framework.",
    bullets: [
      "How financial intelligence connects organizational people, operations, logistics and networks.",
      "How ‘value’ and resourcing is generated, stored, moved and used and what opportunities or threats it can present for their mission set.",
      "How to employ financial information to achieve operational effects.",
      "How do protect their own unit’s financial and logistical efforts.",
      "Inter-Agency and International perspectives, authorities and capabilities – and the necessity for a team-oriented approach spanning partner agencies.",
      "The near-universal application of financial information to all occupational specialties and units.",
      "The economic impacts of the operating environment upon military end states as well as military impacts to the local economy."
    ]
  },
  
  "Financial Targeting": {
    longName: "Using Financial Understanding to Target Networks",
    description: "This unique seminar explores the subject of leveraging financial information, people, processes, and systems for network development, understand how it is using its resources and determine indicators, warnings and potential future operations.",
    bullets: [
      "Great for military, intelligence, governmental and law enforcement audiences.",
      "Examines the importance and application of determining how an organization generates, moves, uses and stores its resources",
      "Provides an actionable framework of how to apply that understanding to support mission goals and desired endstates."
    ]
  },
  
  "Global Financial Competition": {
    longName: "Financial Competition Around the Globe",
    description: "This seminar explores how nations compete at that national/strategic level for influence and national strategic end states through the use of cross-border/international payment systems, currencies and the influence of Inter-governmental Financial Organizations.",
    bullets: [
      "examines the economic strategies that countries use to gain influence, access and power in global regions by use of economic and financial systems",
      "Great for military, intelligence, governmental, academic and law enforcement audiences."
    ]
  }
};

function setDropdownInformation(event) {
  document.querySelector("#course-selection-con > .selected").classList.remove("selected");
  selectedTitle = event.target.innerText;
  event.target.classList.add("selected");
  
  document.getElementById("content-header").innerText = courseInformation[selectedTitle].longName;
  document.querySelector("#course-paragraph > p").innerText = courseInformation[selectedTitle].description;
  
  document.getElementById("course-bullets").innerHTML = "<h3>End State: Students Understand</h3>" + courseInformation[selectedTitle].bullets.map(bullet => { return `<li>${bullet}</li>`}).join('');
}

window.onload = () => {
  for (let courseTitle in courseInformation) {
    document.getElementById("course-selection-con").innerHTML += `<h4 class="course-short-title" id="initial" onmouseover="setDropdownInformation(event)">${courseTitle}</h4>`;
  }
  
  document.getElementsByClassName("course-short-title")[0].classList.add("selected");
  
  setDropdownInformation({ target: document.getElementsByClassName("course-short-title")[0] });
};
