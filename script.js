let sticks = [
  "I love you for who you are",
  "I love your smile",
  "I love how thoughtful you are",
  "I love the effort you put into our relationship",
  "I love the excitement you show for your little hobbies",
  "I love all of the tasty food you cook for me",
  "I love how you take care of me when I'm sick",
  "I love how giving you are",
  "I love how hard-working you are",
  "I love your beautiful face",
  "I love how you're always there for me",
  "I love your frequent obsessions for different things",
  "I love how you try to participate in my hobbies",
  "I love that you're beautiful, inside and out",
  "I love that you make an effort to love me through my love language",
  "I love how you can be funny at times (but not as funny as me)",
  "I love trying new things with you",
  "I love watching new shows with you",
  "I love playing video games with you despite you having the attention span of a rock",
  "I love trying new foods with you",
  "I love the fact that you're my best friend",
  "You complete me",
  "You're my favorite person",
  "I love how hard you try to pleasure me during sex",
  "I love how you're my personal bartender",
  "I love how knowledgeable you are in things I have no idea about",
  "I love how you're always there for me, no matter what",
  "I love how kind you are",
  "I love how you're willing to learn and better yourself as well as to better our relationship",
  "I love the way you motivate me to do better",
  "I love how happy you make me",
  "I love the ways you surprise me with thoughtful gestures",
  "I love how you're open to communication, and encourage me to communicate",
  "I love how you inspire me to be the best version of myself",
  "I love your artistic side",
  "I love the way you support my dreams and goals",
  "I love that you're always there to pick me up when I'm feeling down",
  "I love your fashion sense",
  "I love the way you celebrate my achievements and milestones",
  "I love how you're a great listener when I do need to vent",
  "I love having your shoulder to cry on",
  "I love being able to let my guard down and be vulnerable with you",
  "I love the way you try to keep yourself together despite going through your mental battles",
  "I love how comfortable and relaxed I can be around you",
  "I love the interest you take in my hobbies",
  "I love how I can be myself without being judged by you",
  "I love the way you bring out the best in me",
  "I love all of the random stories you tell me",
  "I love how you're able to understand my humor, although it takes you a while sometimes",
  "I love that you have goals",
  "I love the affection you show me",
  "I love how you're able to take what I might be going into consideration",
  "I love the different ways you do your makeup",
  "I love that you know how to do so many different things like sew, knit, do your nails, etc.",
  "I love the effort you put in to make me happy",
  "I love your personality",
  "I love being your gym partner",
  "I love how we can push each other to become better",
  "I love knowing that we were each other's first New Year's kiss",
  "I love your sense of humor (even though you're not as funny as me)",
  "I wouldn't hesitate to do anything for you",
  "I love how you're able to make me smile even if it's not very visible at times",
  "I love how good you always smell",
  "I love how strong you are as a person",
  "I'm proud of you",
  "I wish you all of the happiness in the world",
  "You deserve everything",
  "I love your fat juicy ass :D",
  "That sloppy toppy goes hard ;)",

];

function transition() {
  let jar = document.getElementById("jar");
  let stickContainer = document.getElementById("stick-container");
  let stick = document.getElementById("stick");
  let text = document.getElementById("text");
  let audio = document.getElementById("audio");

  audio.play();

  jar.style.display = "none";
  stickContainer.style.display = "flex";
  text.style.display = "block";

  let randomIndex = Math.floor(Math.random() * sticks.length);
  text.innerHTML = (randomIndex + 1).toString().concat(". ", sticks[randomIndex]);

  stick.style.opacity = 0;
  text.style.opacity = 0;



  setTimeout(() => {
    stick.style.transition = "opacity .5s ease-in-out";
    stick.style.opacity = 1;
    text.style.transition = "opacity .5s ease-in-out";
    text.style.opacity = 1;
  }, 500);

  let randomNum = Math.floor(Math.random() * 75) + 1;
  document.querySelector("#stick").src = "images/NG/NG (" + randomNum + ").jpg";
}
