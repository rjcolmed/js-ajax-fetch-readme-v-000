const app = "I don't do much.";
const token = '855e9d7775c30c0d79516d236d5bddc62f24da13'
fetch('https://api.github.com/rjcolmed/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
.then(res => res.json())
.then(json => console.log(json));
