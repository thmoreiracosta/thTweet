const textarea = document.querySelector("textarea");
const buttonTweet = document.querySelector("button");
const feed = document.querySelector(".main-content__listTweets");

buttonTweet.addEventListener("click", function (e) {
	e.preventDefault();
	const tweetTextarea = textarea.value;
	createTweet(tweetTextarea);
});

function createTweet(tweetText) {
	
	let time = new Date();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let second = time.getSeconds();
	const tweet = {
		name: "Thiago Costa",
		image: "https://avatars.githubusercontent.com/u/77851466?v=4",
		user: "@thmoreiracosta",
		text: tweetText,
		time: `${hour}:${minute}:${second}`,
	};
	listTweetModel(tweet);
}

function listTweetModel(tweet) {

  const {name, image, user, text, time} = tweet;


  let li = document.createElement('li');
  li.classList.add('main-content__tweet');
  let img = document.createElement('img');
  img.classList.add('tweet__fotoPerfil');
  let div = document.createElement('div');
  div.classList.add('tweetConteiner');
  let h3 = document.createElement('h3');
  let span = document.createElement('span');
  let paragraph = document.createElement('p');
  
  li.appendChild(img);
  img.src = image;
  
  li.appendChild(div);
  div.appendChild(h3);
  h3.innerText = name;
  
  div.appendChild(span);
  span.innerText = `${user} ${time}`;

  div.appendChild(paragraph);
  paragraph.innerText = text;

  feed.appendChild(li);
   
}
