const speakers = [
  {
    name: "Yochai benkler",
    title:
      "Berkman professor of Entrepeneurial legal studies at Harvard law school",
    function:
      "Benkler studies commors-based peer production, and published his seminal book The wealth of networks in 2006.",
    image: "speaker1.png",
  },
  {
    name: "Killnam Chon",
    title:
      "",
    function:
      "Killnam Chon helped bring the internet to asia and is an outspoken advocate for the open web and digital commons. In 2012, he was included into the inaqual class of the open society (ISOO) Internet hall of fame.",
    image: "speaker2.png",
  },
  {
    name: "sohYeong noh",
    title: "Director of art center Nairobi nd a board member of CC Korea",
    function:
      "As the main venue for new medea art production in Korea, Nabi promotes cross-disciplinairy collaboration and understanding among science technology, humanitie and the arts.",
    image: "speaker3.png",
  },
  {
    name: "Julia Leda",
    title: "President of young pirates of Europe",
    function:
      "Europen ingetation, political democrazy and participantion of youth trough online as her major concern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
    image: "speaker4.png",
  },
  {
    name: "Lila Tretikov",
    title: "Executive director of the Wikimedia foundation",
    function:
      "Lila Tretikov is the executive director of the wikimedia foundation, the nonprofit organisation that operates wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month",
    image: "speaker5.png",
  },
  {
    name: "Ryan Merkley",
    title: "CEO of creative common,ex COO of the Mozzilla foundation",
    function:
      "Ryan has been leading open-source projects at the Mozilla foundation such as the open source move-ment",
    image: "speaker6.png",
  },
];
const speakersoutput = document.querySelector(".speakers");
for (let x = 0; x < speakers.length; x += 1) {
  const speaker = speakers[x];
  speakersoutput.innerHTML += `<div class='speaker'><div class='speakerleft'><img src='assets/images/${speaker.image}'></div><div class='speakerright'><p class='speakername'>${speaker.name}</p><p class='speakertitle'>${speaker.title}</p><hr class='speakerhr'><p class='speakerfunction'>${speaker.function}</p></div></div>`;
}
