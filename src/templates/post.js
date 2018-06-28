window.onscroll = function () {
  const scrollTop = window.scrollY
  const opacity = (scrollTop / 500)
  const background = document.getElementById("post-background")
  background.style.opacity = opacity
  background.style.filter = `alpha(opacity=${opacity * 10})`
}