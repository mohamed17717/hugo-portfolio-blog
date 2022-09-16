function unselectAll(tabs) {
  tabs.forEach(elm => elm.classList.remove('selected'))
}

function selectTab(tab) {
  const content = document.querySelector(`.tabcontent#${tab.dataset.rel}`)

  tab.classList.add('selected')
  content.classList.add('selected')
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs li');
  const contents = document.querySelectorAll('.tabcontent');

  tabs.forEach(elm => {
    elm.addEventListener('click', e => {
      unselectAll(tabs)
      unselectAll(contents)

      selectTab(elm)
    })
  })
  selectTab(tabs[0])
})

// TODO create the dark mode for the tabs