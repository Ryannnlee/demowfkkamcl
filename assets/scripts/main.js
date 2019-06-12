"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// main
var Menu =
/*#__PURE__*/
function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.closeSub();
  }

  _createClass(Menu, [{
    key: "active",
    value: function active(item) {
      $('.menu-item').removeClass('active');
      $(item).addClass('active');
    }
  }, {
    key: "freeze",
    value: function freeze() {
      // console.log('--- FREEZE ---')
      $('body').addClass('freeze');
    }
  }, {
    key: "unfreeze",
    value: function unfreeze() {
      // console.log('--- UNFREEZE ---')
      $('body').removeClass('freeze');
    }
  }, {
    key: "show",
    value: function show() {
      $('header').removeClass('hide');
    }
  }, {
    key: "hide",
    value: function hide() {
      $('header').addClass('hide');
    }
  }, {
    key: "openSub",
    value: function openSub(item) {
      var id = $(item).find('a').attr('id');

      if (id !== 'news' && id !== 'owner') {
        var subMenuGroup = ".subMenu-".concat(id);
        var subMenuHeight = $(subMenuGroup).innerHeight();
        this.freeze();
        $('body').addClass('freeze');
        $('.subMenu-group').removeClass('on');
        $('.subMenu').css('height', subMenuHeight).addClass('on');
        $(subMenuGroup).addClass('on');
      } else {
        // console.log('--- NO SUB MENU ---')
        this.closeSub();
      }
    }
  }, {
    key: "closeSub",
    value: function closeSub() {
      // console.log('--- CLOSE SUB MENU ---')
      this.unfreeze();
      $('.menu-item').removeClass('active');
      $('.subMenu').removeClass('on');
      $('.subMenu-group').removeClass('on');
    }
  }, {
    key: "openSubM",
    value: function openSubM() {
      $('.subMenu').toggleClass('on');
    }
  }, {
    key: "burger",
    value: function burger(item) {
      $(item).toggleClass('on');
    }
  }, {
    key: "accordion",
    value: function accordion(item) {
      $('.subMenu-tab').removeClass('on');
      $(item).addClass('on');
      $('.subMenu-content').height(0);
      var container = $(item).next();
      var contentH = $(item).next().children().innerHeight();
      container.height() <= 0 ? container.height(contentH) : container.height(0);
    }
  }]);

  return Menu;
}();

var FloatBtn =
/*#__PURE__*/
function () {
  function FloatBtn() {
    var _this = this;

    _classCallCheck(this, FloatBtn);

    setTimeout(function () {
      _this.open();
    }, 2000);
  }

  _createClass(FloatBtn, [{
    key: "toggle",
    value: function toggle() {
      $('.floatBtn').toggleClass('off');
    }
  }, {
    key: "open",
    value: function open() {
      $('.floatBtn').removeClass('off');
      var mq1200 = window.matchMedia('(min-width:1200px)');
      if (!mq1200.matches) this.close();
    }
  }, {
    key: "close",
    value: function close() {
      $('.floatBtn').addClass('off');
    }
  }]);

  return FloatBtn;
}();

var menu = new Menu();
var floatBtn = new FloatBtn();
var subMenuScroll = new IScroll('.subMenu', {
  mouseWheel: true,
  scrollbars: true
});
$('.menu-item').on('click', function () {
  menu.active(this);
  menu.openSub(this);
});
$('main').on('click', function () {
  menu.closeSub();
});
$('.burger').on('click', function () {
  menu.burger(this);
  menu.openSubM();
});
$('.subMenu-tab').on('click', function () {
  menu.accordion(this);
  setTimeout(function () {
    subMenuScroll.refresh();
  }, 200);
});
$('.floatBtn-switch').on('click', function () {
  floatBtn.toggle();
});
$(window).on('resize', function () {
  floatBtn.open();
});
$('.slide-card').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  cssEase: 'ease-in-out',
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }]
}).on('setPosition', function (event, slick) {
  slick.$slides.css('height', slick.$slideTrack.height() + 'px');
});