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
  
  "Custom": {
    longName: "Custom",
    description: "Make it up",
    bullets: [
      "foo",
      "bar"
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

document.onload = setDropdownInformation({ target: document.getElementById("initial")});