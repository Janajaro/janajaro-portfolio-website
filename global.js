const randomMessages = [
  'Hi! This is my website. I like to draw and other silly activities. I am not that good because I tend to loose direction of what I am doing and I meander a lot but I have fun doing it. Hope you enjoy this website! Have you been outside today? Drink some water too! Byeeeeeeeeeeeeeeeeeeeeeee!',
  'I hope you like this site, I coded it entirely myself  ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა ...  I am not like super good at this code stuff, but its a new fun playground for me and definetely a new outlet of creativity.',
  'I am not the best at keeping things updated, so there is probably a lot of projects missing, but who has time for constantly keeping up the date with the digital portfolio when you want to actually do things irl, right?',
  'You probably noticed a lot of rollerskating themes in my work, hehe. I love to rollerskate! Hit me up if you want to go to a skatepark and try some new tricks!',
  'If you like my music and not sure if any gigs might be coming up, feel free to message me ฅ^•ﻌ•^ฅ ... I mean you can message me about whatever basically, like hi, whats up, how are you?',
];

const randomQuoteGenerator = () => {
  const randomQueoteIndex = Math.floor(Math.random() * randomMessages.length);
  return randomMessages[randomQueoteIndex];
};

const quoteElement = document.querySelector('#quoteId');
quoteElement.textContent = randomQuoteGenerator();
