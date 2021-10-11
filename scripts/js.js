const speakers = [{
  name: 'nametest', title: 'functiontest1', function: 'roletest1', image: 'speaker1.png',
}, {
  name: 'nametest2', title: 'functiontest2', function: 'roletest2', image: 'speaker2.png',
}];
const speakersoutput = document.querySelector('.speakers');
for (let x = 0; x < speakers.length; x += 1) {
  const speaker = speakers[x];
  speakersoutput.innerHTML += `<div class='speaker'><div class='speakerleft'><img src='assets/images/${speaker.image}'></div><div class='speakerright'><p class='speakername'>${speaker.name}</p><p class='speakertitle'>${speaker.title}</p><hr class='speakerhr'><p class='speakerfunction'>${speaker.function}</p></div></div>`;
}