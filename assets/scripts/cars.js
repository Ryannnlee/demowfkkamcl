"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// cars.js
var CarsMenu =
/*#__PURE__*/
function () {
  function CarsMenu() {
    var _this = this;

    _classCallCheck(this, CarsMenu);

    this.unfixed();
    setTimeout(function () {
      _this.offset = _this.judgeSection().offset;
      _this.txt = _this.judgeSection().txt;
    }, 200);
  }

  _createClass(CarsMenu, [{
    key: "fixed",
    value: function fixed() {
      $('.carsMenu').addClass('fixed');
      menu.hide();
    }
  }, {
    key: "unfixed",
    value: function unfixed() {
      $('.carsMenu').removeClass('fixed');
      menu.show();
    }
  }, {
    key: "toggleSelect",
    value: function toggleSelect() {
      var mq992 = window.matchMedia('(min-width:992px)');
      if (!mq992.matches) $('.carsMenu-list').slideToggle();
    }
  }, {
    key: "goto",
    value: function goto(item) {
      var id = $(item).attr('data-section');
      var offset = $("#".concat(id)).offset().top;
      $('html, body').animate({
        scrollTop: offset - 90
      }, 300);
    }
  }, {
    key: "judgeSection",
    value: function judgeSection() {
      var offset = [];
      var txt = [];
      $('.carsMenu-item').each(function (id, el) {
        var block = $(el).attr('data-section');
        var add = $("#".concat(block)).offset().top;
        add -= $(window).height() / 2;
        var blockTxt = $(el).text();
        offset.push(add);
        txt.push(blockTxt);
      });
      offset.push($('footer').offset().top);
      return {
        offset: offset,
        txt: txt
      };
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(bodyTop) {
      var offset = this.offset;
      var txt = this.txt;

      if (offset && txt) {
        $('.carsMenu-item').removeClass('on');

        if (bodyTop > offset[0] && bodyTop < offset[1]) {
          $('.carsMenu-item:eq(0)').addClass('on');
          $('.carsMenu-selectText').text(txt[0]);
        } else if (bodyTop > offset[1] && bodyTop < offset[2]) {
          $('.carsMenu-item:eq(1)').addClass('on');
          $('.carsMenu-selectText').text(txt[1]);
        } else if (bodyTop > offset[2] && bodyTop < offset[3]) {
          $('.carsMenu-item:eq(2)').addClass('on');
          $('.carsMenu-selectText').text(txt[2]);
        } else if (bodyTop > offset[3] && bodyTop < offset[4]) {
          $('.carsMenu-item:eq(3)').addClass('on');
          $('.carsMenu-selectText').text(txt[3]);
        } else if (bodyTop > offset[4] && bodyTop < offset[5]) {
          $('.carsMenu-item:eq(4)').addClass('on');
          $('.carsMenu-selectText').text(txt[4]);
        } else if (bodyTop > offset[5] && bodyTop < offset[6]) {
          $('.carsMenu-item:eq(5)').addClass('on');
          $('.carsMenu-selectText').text(txt[5]);
        } else if (bodyTop > offset[6] && bodyTop < offset[7]) {
          $('.carsMenu-item:eq(6)').addClass('on');
          $('.carsMenu-selectText').text(txt[6]);
        } else if (bodyTop > offset[7] && bodyTop < offset[8]) {
          $('.carsMenu-item:eq(7)').addClass('on');
          $('.carsMenu-selectText').text(txt[7]);
        } else if (bodyTop > offset[8] && bodyTop > offset[9]) {
          $('.carsMenu-item:eq(8)').addClass('on');
          $('.carsMenu-selectText').text(txt[8]);
        }
      }
    }
  }]);

  return CarsMenu;
}();

var carsMenu = new CarsMenu();
$(window).on('scroll', function () {
  var bodyTop;
  var isSafari = !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== 'undefined' && !window.chrome;
  var isEdge = navigator.userAgent.match(/edge/i);

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isSafari || isEdge) {
    bodyTop = $('body').scrollTop();
  } else {
    bodyTop = $('html,body').scrollTop();
  }

  var kvHeight = $('.kv').innerHeight();

  if (bodyTop >= kvHeight) {
    carsMenu.fixed();
  } else {
    carsMenu.unfixed();
  }

  carsMenu.changeHandler(bodyTop);
});
$(window).on('resize', function () {
  carsMenu.judgeSection();
});
$('.carsMenu-select').on('click', function () {
  carsMenu.toggleSelect();
});
$('.carsMenu-item').on('click', function () {
  carsMenu.toggleSelect();
  carsMenu["goto"](this);
}); // 360 tab

var $defaultLi = $('.tabs li').eq(0).addClass('active');
$($defaultLi.find('a').attr('href')).siblings().hide();
$('.tabs li').click(function (e) {
  e.preventDefault();

  var $this = $(this),
      _clickTab = $this.find('a').attr('href');

  $this.addClass('active').siblings().removeClass('active');
  $(_clickTab).fadeIn().siblings().hide();
});
$('.initTab:eq(1)').on('click', function () {
  int360();
}); // EXT 360

var Ext360 =
/*#__PURE__*/
function () {
  function Ext360() {
    _classCallCheck(this, Ext360);

    this.type = 1;
    this.color = 'a';

    this._init();
  }

  _createClass(Ext360, [{
    key: "_init",
    value: function _init() {
      var self = this;
      $('.ext360-car img').each(function (id, el) {
        var images = "".concat($(el).attr('src').slice(0, -6), "##.jpg|1..24");
        $(el).reel({
          cw: true,
          frame: 24,
          speed: 0,
          velocity: 0,
          brake: 1,
          wheelable: false,
          images: images
        });
      });
      $('.ext360-car').hide();
      $("#car".concat(this.type + this.color)).show();
      $("#tool-btnColor".concat(this.color.toUpperCase())).addClass('on');
      $("#tool-btnType".concat(this.type)).addClass('on');
      $('.tool-btnColor').on('click', function () {
        self.changeColor(this);
      });
      $('.tool-btnType').on('click', function () {
        self.changeType(this);
      });
    }
  }, {
    key: "changeType",
    value: function changeType(item) {
      var type = $(item).attr('id').slice(-1);
      $('.tool-btnType').removeClass('on move');
      $(item).addClass('on');
      var currentFrame = $('#image' + this.type + this.color).reel('frame');
      this.type = type;
      this.carShow(currentFrame);
    }
  }, {
    key: "changeColor",
    value: function changeColor(item) {
      var color = $(item).attr('id').slice(-1).toLowerCase();
      $('.tool-btnColor').removeClass('on');
      $(item).addClass('on');
      var currentFrame = $('#image' + this.type + this.color).reel('frame');
      this.color = color;
      this.carShow(currentFrame);
    }
  }, {
    key: "carShow",
    value: function carShow(currentFrame) {
      $('.ext360-car').hide();
      $("#car".concat(this.type + this.color)).show();
      $('#image' + this.type + this.color).reel('frame', currentFrame);
    }
  }]);

  return Ext360;
}();

var ext360 = new Ext360(); // INT 360

var int_enable = false;

function int360() {
  if (!int_enable) {
    var _pano = new pano2vrPlayer('int360-imgContent');

    var page = $('main.wrapper').attr('id');

    _pano.readConfigUrl("assets/images/cars/".concat(page, "/int/crv_int.xml"));

    var gyro = new pano2vrGyro(_pano, 'int360-imgContent');
    return int_enable = true;
  }
}

$('.toolbar #tool-push').on('click', function () {
  $(this).siblings('.tool-item').toggleClass('move');
});
var interval;
$('body').on('touchend mouseup', function () {
  clearInterval(interval);
  PanoGyroTouch = false;
});
$('#tool-btnLeft').on('touchstart mousedown', function () {
  clearInterval(interval);
  PanoGyroTouch = true;
  interval = setInterval(function () {
    pano.changePan(1);
  }, 33);
});
$('#tool-btnRight').on('touchstart mousedown', function () {
  clearInterval(interval);
  PanoGyroTouch = true;
  interval = setInterval(function () {
    pano.changePan(-1);
  }, 33);
});
$('#tool-btnUp').on('touchstart mousedown', function () {
  clearInterval(interval);
  PanoGyroTouch = true;
  interval = setInterval(function () {
    pano.changeTilt(1);
  }, 33);
});
$('#tool-btnDown').on('touchstart mousedown', function () {
  clearInterval(interval);
  PanoGyroTouch = true;
  interval = setInterval(function () {
    pano.changeTilt(-1);
  }, 33);
});
var zoom = 70;
$('#tool-btnIn').on('touchstart mousedown', function () {
  clearInterval(interval);
  interval = setInterval(function () {
    zoom -= 1;

    if (zoom < 40) {
      zoom = 40;
    }

    pano.setFov(zoom);
  }, 33);
});
$('#tool-btnOut').on('touchstart mousedown', function () {
  clearInterval(interval);
  interval = setInterval(function () {
    zoom += 1;

    if (zoom > 120) {
      zoom = 120;
    }

    pano.setFov(zoom);
  }, 33);
}); // spec slide

$('.s-specForm-name').on('click', function () {
  $(this).siblings().slideToggle().parent('.s-specForm').toggleClass('on');
}); // -- video --

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function ytplayer(block) {
  var _this2 = this;

  var item = $("".concat(block, " .section-video"));
  item.each(function (id, el) {
    var playerId = $(el).attr('data-playerId');
    var videoId = $(el).attr('data-videoId');
    _this2[playerId] = new YT.Player(playerId, {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 0,
        loop: 1,
        autohide: 0,
        rel: 0
      }
    });
  });
}

var tvYt, safetyYt;

function onYouTubeIframeAPIReady() {
  // safety video
  safetyYt = new ytplayer('.s-safety'); // tv video

  tvYt = new ytplayer('.s-tv');
}

$('.video-slide').slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  cssEase: 'ease-in-out'
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var id = event.target.id;

  switch (id) {
    case 'tvYt':
      tvYt["sTvPlayer".concat(currentSlide)].pauseVideo();
      tvYt["sTvPlayer".concat(nextSlide)].playVideo();
      break;

    case 'safetyYt':
      safetyYt["sSafetyPlayer".concat(currentSlide)].pauseVideo();
      safetyYt["sSafetyPlayer".concat(nextSlide)].playVideo();
      break;
  }
});