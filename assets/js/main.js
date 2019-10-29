(function ($) {
  'use strict'
  $(() => {
    $('#about-ref').on('click', scrollAbout)
    $('#portfolio-ref').on('click', scrollPortfolio)
    $('#skills-ref').on('click', scrollSkills)
    $('#contact-ref').on('click', scrollContact)
    $('#resume-ref').on('click', scrollResume)
    $('.filters ul li').on('click', isotope)
  })

  const isotope = function () {
    $('.filters ul li').removeClass('active')
    $(this).addClass('active')

    const data = $(this).attr('data-filter')
    $('.grid').isotope({
      filter: data
    })
  }

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
        scrollTop: $('#features').offset().top
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
  const scrollResume = function () {
    $('body,html').animate(
      {
        scrollTop: $('#resume').offset().top
      },
      800
    )
  }
}(window.jQuery)
)
