'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#about-ref').on('click', scrollAbout)
  $('#portfolio-ref').on('click', scrollPortfolio)
  $('#skills-ref').on('click', scrollSkills)
  $('#contact-ref').on('click', scrollContact)
})

const scrollAbout = function () {
  $('body,html').animate(
    {
      scrollTop: $('#blockquote').offset().top
    },
    800
  )
}

const scrollPortfolio = function () {
  $('body,html').animate(
    {
      scrollTop: $('#works').offset().top
    },
    800
  )
}

const scrollSkills = function () {
  $('body,html').animate(
    {
      scrollTop: $('#my-skills').offset().top
    },
    800
  )
}
const scrollContact = function () {
  $('body,html').animate(
    {
      scrollTop: $('#main-footer').offset().top
    },
    800
  )
}
