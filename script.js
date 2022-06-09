// const apiPromise = fetch("").then((res) =>
//   res.json()
// );
// console.log(apiPromise);

// Fetch requests
// fetch("https://www.reddit.com/r/aww/.json")
//   // Promise is resolved
//   .then((res) => res.json()) // Getting json response from the Response object
//   .then((jsonData) => console.log(jsonData));

// // Async function
// async function fetcher() {
//   const promise = await fetch("https://www.reddit.com/r/aww/.json");
//   const response = await promise.json(); // Getting json response from the Response object
//   return response;
// }

// const displayData = async () => {
//   const data = await fetcher();
//   console.log(data);
// };

// displayData();

const reddit = fetch("https://www.reddit.com/r/aww/.json").then((res) =>
  res.json()
);

function displayChildren(data) {
  const child = data.children[0];
}

reddit.then((data) => {
  console.log(data);
  console.log(data.data.children);
  const post = data.data.children;

  for (let data of post) {
    console.log(data);
    const div = document.createElement("div");

    const name = data.data.title;
    console.log(name);
    const heading = document.createElement("h1");
    heading.innerHTML = name;

    div.appendChild(heading);

    const cimg = document.createElement("img");
    cimg.src = data.data.thumbnail;
    div.appendChild(cimg);

    const link = document.createElement("a");
    link.href = data.data.url;
    div.appendChild(link);

    document.body.appendChild(div);
  }
});

// function displayChildren(data) {
//   const child = data.children[0];
//   const div = document.getElementById("myData");
// }

// const Name = child.author;
// const heading = document.createElement("h1");
// heading.innerHTML = childrenName;
// div.appendChild(heading);

// const cimg = document.createElement("img");
// cimg.src = child.thumbnail;
// div.appendChild(cimg);
// document.body.style.thumbnail =
//   "https:b.thumbs.redditmedia.com/bOiv2eCLMlW3TsKlN2gxIJykNk3IYuZDHFjGtNofKlc.jpg";
