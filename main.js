const linksSocialMedia = {
  github: 'fbresolin',
  youtube: 'fbresolin',
  instagram: 'fbresolin',
  facebook: 'fbresolin',
  twitter: 'fbresolin'
}

function asjdfkasdfhkl() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
asjdfkasdfhkl()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      uname.textContent = data.name
      userbio.textContent = data.bio
      userLink.href = data.html_url
      userphoto.src = data.avatar_url
      gituser.textContent = data.login
    })
  //alert(data)
}
getGitHubProfileInfo()
