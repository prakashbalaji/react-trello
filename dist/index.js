(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.Lane = exports.Board = undefined;

var _Board = require('./lib/Board');

var _Board2 = _interopRequireDefault(_Board);

var _Lane = require('./lib/Lane');

var _Lane2 = _interopRequireDefault(_Lane);

var _Card = require('./lib/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Board = _Board2.default;
exports.Lane = _Lane2.default;
exports.Card = _Card2.default;

window.Board = exports.Board;
window.Lane = exports.Lane;
window.Card = exports.Card;

},{"./lib/Board":2,"./lib/Card":3,"./lib/Lane":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../styles/Base');

var _dragula = require('dragula');

var _dragula2 = _interopRequireDefault(_dragula);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_Component) {
  _inherits(Board, _Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.draggable) {
        (0, _dragula2.default)([].concat(_toConsumableArray(document.querySelectorAll('.drag-inner-list')))).on('drag', function (el) {
          return el.classList.add('is-moving');
        }).on('dragend', function (el) {
          return el.classList.remove('is-moving');
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Base.BoardDiv,
        null,
        this.props.children
      );
    }
  }]);

  return Board;
}(_react.Component);

exports.default = Board;


Board.propTypes = {
  children: _react2.default.PropTypes.node,
  draggable: _react2.default.PropTypes.bool,
  onDragStart: _react2.default.PropTypes.func,
  onDragEnd: _react2.default.PropTypes.func
};
},{"../styles/Base":6,"dragula":15,"react":71}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../styles/Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          rightHeader = _props.rightHeader,
          otherProps = _objectWithoutProperties(_props, ['title', 'description', 'rightHeader']);

      return _react2.default.createElement(
        _Base.CardWrapper,
        _extends({ key: title }, otherProps),
        _react2.default.createElement(
          _Base.CardHeader,
          null,
          _react2.default.createElement(
            _Base.CardTitle,
            null,
            title
          ),
          _react2.default.createElement(
            _Base.CardRightContent,
            null,
            rightHeader
          )
        ),
        _react2.default.createElement(
          _Base.Detail,
          null,
          description
        )
      );
    }
  }]);

  return Card;
}(_react.Component);

exports.default = Card;


Card.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  description: _react2.default.PropTypes.string,
  rightHeader: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func,
  id: _react2.default.PropTypes.string
};
},{"../styles/Base":6,"react":71}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Base = require('../styles/Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lane = function (_Component) {
  _inherits(Lane, _Component);

  function Lane() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Lane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Lane.__proto__ || Object.getPrototypeOf(Lane)).call.apply(_ref, [this].concat(args))), _this), _this.state = { cards: _this.props.cards, loading: false, currentPage: 1 }, _this.handleScroll = function (evt) {
      var node = evt.target;
      var elemScrolPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      var onScroll = _this.props.onScroll;

      if (elemScrolPosition <= 0 && onScroll && !_this.state.loading) {
        (function () {
          var _this$state = _this.state,
              currentPage = _this$state.currentPage,
              cards = _this$state.cards;

          _this.setState({ loading: true });
          var nextPage = currentPage + 1;
          onScroll(nextPage, _this.props.id).then(function (moreCards) {
            _this.setState({ cards: [].concat(_toConsumableArray(cards), _toConsumableArray(moreCards)), loading: false, currentPage: nextPage });
          });
        })();
      }
    }, _this.laneDidMount = function (node) {
      if (node) {
        node.addEventListener('scroll', _this.handleScroll);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Lane, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ cards: nextProps.cards });
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;

      var _props = this.props,
          title = _props.title,
          rightHeader = _props.rightHeader,
          cards = _props.cards,
          onScroll = _props.onScroll,
          otherProps = _objectWithoutProperties(_props, ['title', 'rightHeader', 'cards', 'onScroll']);

      return _react2.default.createElement(
        _Base.Section,
        _extends({}, otherProps, { innerRef: this.laneDidMount }),
        _react2.default.createElement(
          _Base.Header,
          null,
          _react2.default.createElement(
            _Base.Title,
            null,
            title
          ),
          _react2.default.createElement(
            _Base.RightContent,
            null,
            rightHeader
          )
        ),
        _react2.default.createElement(
          _Base.DraggableList,
          null,
          this.state.cards && this.state.cards.map(function (card) {
            return _react2.default.createElement(_Card2.default, { key: card.key,
              title: card.title,
              description: card.description });
          }),
          this.props.children
        ),
        loading && _react2.default.createElement(_Loader2.default, null)
      );
    }
  }]);

  return Lane;
}(_react.Component);

exports.default = Lane;


Lane.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  cards: _react2.default.PropTypes.array,
  rightHeader: _react2.default.PropTypes.string,
  onScroll: _react2.default.PropTypes.func
};
},{"../styles/Base":6,"./Card":3,"./Loader":5,"react":71}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('../styles/Loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _Loader.LoaderDiv,
    null,
    _react2.default.createElement(_Loader.LoadingBar, null),
    _react2.default.createElement(_Loader.LoadingBar, null),
    _react2.default.createElement(_Loader.LoadingBar, null),
    _react2.default.createElement(_Loader.LoadingBar, null)
  );
};

exports.default = Loader;
},{"../styles/Loader":7,"react":71}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Detail = exports.CardRightContent = exports.CardTitle = exports.CardHeader = exports.CardWrapper = exports.DraggableList = exports.RightContent = exports.Title = exports.Header = exports.Section = exports.BoardDiv = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #23719F;\n  overflow-y: hidden;\n  padding: 5px;\n  font: 14px/18px "Helvetica Neue", Arial, Helvetica, sans-serif;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n'], ['\n  background-color: #23719F;\n  overflow-y: hidden;\n  padding: 5px;\n  font: 14px/18px "Helvetica Neue", Arial, Helvetica, sans-serif;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: #E3E3E3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  padding: 10px;\n  min-width: 250px;\n  height: auto;\n  max-height: 95%;\n  overflow-y: auto;\n'], ['\n  background-color: #E3E3E3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  padding: 10px;\n  min-width: 250px;\n  height: auto;\n  max-height: 95%;\n  overflow-y: auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n'], ['\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: grab;\n  width: 80%;\n'], ['\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: grab;\n  width: 80%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 30%;\n  text-align: right;\n  font-size: 13px;\n'], ['\n  width: 30%;\n  text-align: right;\n  font-size: 13px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  min-height: 100px;\n'], ['\n  min-height: 100px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  border-radius: 3px;\n  margin: 10px 0px;  \n  border-bottom: 1px solid #CCC;\n  padding: 6px 8px;\n  cursor: pointer;\n  transition: all .3s cubic-bezier(0.23, 1, 0.32, 1);;\n  background-color: #FFF;\n  \n  &:hover {\n    background-color: #F0F0F0;\n  }\n  \n  &.is-moving {\n    background-color: rgba(black, 0.8);\n  }\n'], ['\n  border-radius: 3px;\n  margin: 10px 0px;  \n  border-bottom: 1px solid #CCC;\n  padding: 6px 8px;\n  cursor: pointer;\n  transition: all .3s cubic-bezier(0.23, 1, 0.32, 1);;\n  background-color: #FFF;\n  \n  &:hover {\n    background-color: #F0F0F0;\n  }\n  \n  &.is-moving {\n    background-color: rgba(black, 0.8);\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n'], ['\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n font-size: 14px;\n'], ['\n font-size: 14px;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  font-size: 10px;\n'], ['\n  font-size: 10px;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  color: #4d4d4d;\n'], ['\n  font-size: 12px;\n  color: #4d4d4d;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BoardDiv = exports.BoardDiv = _styledComponents2.default.div(_templateObject);

var Section = exports.Section = _styledComponents2.default.section(_templateObject2);

var Header = exports.Header = _styledComponents2.default.header(_templateObject3);

var Title = exports.Title = _styledComponents2.default.span(_templateObject4);

var RightContent = exports.RightContent = _styledComponents2.default.span(_templateObject5);

var DraggableList = exports.DraggableList = _styledComponents2.default.div(_templateObject6);

var CardWrapper = exports.CardWrapper = _styledComponents2.default.article(_templateObject7);

var CardHeader = exports.CardHeader = (0, _styledComponents2.default)(Header)(_templateObject8);

var CardTitle = exports.CardTitle = (0, _styledComponents2.default)(Title)(_templateObject9);

var CardRightContent = exports.CardRightContent = (0, _styledComponents2.default)(RightContent)(_templateObject10);

var Detail = exports.Detail = _styledComponents2.default.div(_templateObject11);
},{"styled-components":77}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingBar = exports.LoaderDiv = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    0% {\n      transform: scale(1);\n    }\n    20% {\n      transform: scale(1, 2.2);\n    }\n    40% {\n      transform: scale(1);\n    }\n'], ['\n    0% {\n      transform: scale(1);\n    }\n    20% {\n      transform: scale(1, 2.2);\n    }\n    40% {\n      transform: scale(1);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  text-align: center;\n  margin: 15px 0px;\n'], ['\n  text-align: center;\n  margin: 15px 0px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin: 0px 2px;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: ', ' 1s ease-in-out infinite;\n  background-color: #777;\n  \n  &:nth-child(1) {\n    animation-delay: 0.0001s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.09s;\n  }\n  &:nth-child(3) {\n    animation-delay: .18s;\n  }\n  &:nth-child(4) {\n    animation-delay: .27s;\n  }\n'], ['\n  display: inline-block;\n  margin: 0px 2px;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: ', ' 1s ease-in-out infinite;\n  background-color: #777;\n  \n  &:nth-child(1) {\n    animation-delay: 0.0001s;\n  }\n  &:nth-child(2) {\n    animation-delay: 0.09s;\n  }\n  &:nth-child(3) {\n    animation-delay: .18s;\n  }\n  &:nth-child(4) {\n    animation-delay: .27s;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var keyframeAnimation = (0, _styledComponents.keyframes)(_templateObject);
var LoaderDiv = exports.LoaderDiv = _styledComponents2.default.div(_templateObject2);

var LoadingBar = exports.LoadingBar = _styledComponents2.default.div(_templateObject3, keyframeAnimation);
},{"styled-components":77}],8:[function(require,module,exports){
module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }

},{}],9:[function(require,module,exports){
'use strict';

var ticky = require('ticky');

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};

},{"ticky":120}],10:[function(require,module,exports){
'use strict';

var atoa = require('atoa');
var debounce = require('./debounce');

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};

},{"./debounce":9,"atoa":8}],11:[function(require,module,exports){
(function (global){
'use strict';

var customEvent = require('custom-event');
var eventmap = require('./eventmap');
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./eventmap":12,"custom-event":13}],12:[function(require,module,exports){
(function (global){
'use strict';

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],13:[function(require,module,exports){
(function (global){

var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],14:[function(require,module,exports){
'use strict';

var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};

},{}],15:[function(require,module,exports){
(function (global){
'use strict';

var emitter = require('contra/emitter');
var crossvent = require('crossvent');
var classes = require('./classes');
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./classes":14,"contra/emitter":10,"crossvent":11}],16:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;
},{}],17:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

var camelize = require('./camelize');

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;
},{"./camelize":16}],18:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],19:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
}).call(this,require('_process'))
},{"_process":121}],20:[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;
},{}],21:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

var hyphenate = require('./hyphenate');

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;
},{"./hyphenate":20}],22:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":121}],23:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":18,"_process":121}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}
},{}],25:[function(require,module,exports){
'use strict';

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":39,"../../utils/joinPrefixedValue":40}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":40}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];
},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":39,"../../utils/joinPrefixedValue":40}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return { position: ['-webkit-sticky', 'sticky'] };
  }
}
module.exports = exports['default'];
},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":40}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = require('../../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = require('../prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];
},{"../../utils/capitalizeString":37,"../../utils/isPrefixedValue":39,"../prefixProps":36,"hyphenate-style-name":25}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = require('../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('../utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// special flexbox specifications


var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return (0, _sortPrefixedStyle2.default)(styles);
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"../utils/capitalizeString":37,"../utils/sortPrefixedStyle":41,"./plugins/calc":26,"./plugins/cursor":27,"./plugins/flex":28,"./plugins/flexboxIE":29,"./plugins/flexboxOld":30,"./plugins/gradient":31,"./plugins/position":32,"./plugins/sizing":33,"./plugins/transition":34,"./prefixProps":36}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];
},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];
},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
};

module.exports = exports["default"];
},{}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];
},{}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];
},{}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortPrefixedStyle;

var _isPrefixedProperty = require('./isPrefixedProperty');

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortPrefixedStyle(style) {
  return Object.keys(style).sort(function (left, right) {
    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
      return -1;
    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
      return 1;
    }
    return 0;
  }).reduce(function (sortedStyle, prop) {
    sortedStyle[prop] = style[prop];
    return sortedStyle;
  }, {});
}
module.exports = exports['default'];
},{"./isPrefixedProperty":38}],42:[function(require,module,exports){
module.exports = require('./lib/static/prefixAll')

},{"./lib/static/prefixAll":35}],43:[function(require,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],44:[function(require,module,exports){
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;
  
  if (isObjectObject(o) === false) return false;
  
  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;
  
  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;
  
  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }
  
  // Most likely a plain Object
  return true;
};

},{"isobject":45}],45:[function(require,module,exports){
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function isObject(val) {
  return val != null && typeof val === 'object'
    && !Array.isArray(val);
};

},{}],46:[function(require,module,exports){
'use strict';
/* eslint-disable no-unused-vars */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],47:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;
},{}],48:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var invariant = require('fbjs/lib/invariant');

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;
}).call(this,require('_process'))
},{"./reactProdInvariant":69,"_process":121,"fbjs/lib/invariant":22}],49:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _assign = require('object-assign');

var ReactChildren = require('./ReactChildren');
var ReactComponent = require('./ReactComponent');
var ReactPureComponent = require('./ReactPureComponent');
var ReactClass = require('./ReactClass');
var ReactDOMFactories = require('./ReactDOMFactories');
var ReactElement = require('./ReactElement');
var ReactPropTypes = require('./ReactPropTypes');
var ReactVersion = require('./ReactVersion');

var onlyChild = require('./onlyChild');
var warning = require('fbjs/lib/warning');

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator = require('./ReactElementValidator');
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;

if (process.env.NODE_ENV !== 'production') {
  var warned = false;
  __spread = function () {
    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
    warned = true;
    return _assign.apply(null, arguments);
  };
}

var React = {

  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactComponent,
  PureComponent: ReactPureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: ReactClass.createClass,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

module.exports = React;
}).call(this,require('_process'))
},{"./ReactChildren":50,"./ReactClass":51,"./ReactComponent":52,"./ReactDOMFactories":55,"./ReactElement":56,"./ReactElementValidator":58,"./ReactPropTypes":61,"./ReactPureComponent":63,"./ReactVersion":64,"./onlyChild":68,"_process":121,"fbjs/lib/warning":23,"object-assign":46}],50:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var PooledClass = require('./PooledClass');
var ReactElement = require('./ReactElement');

var emptyFunction = require('fbjs/lib/emptyFunction');
var traverseAllChildren = require('./traverseAllChildren');

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;
},{"./PooledClass":48,"./ReactElement":56,"./traverseAllChildren":70,"fbjs/lib/emptyFunction":18}],51:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant'),
    _assign = require('object-assign');

var ReactComponent = require('./ReactComponent');
var ReactElement = require('./ReactElement');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

/**
 * Policies that describe methods in `ReactClassInterface`.
 */


var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: 'DEFINE_MANY',

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: 'DEFINE_MANY',

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: 'DEFINE_MANY',

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: 'DEFINE_MANY',

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: 'DEFINE_MANY',

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: 'DEFINE_MANY_MERGED',

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: 'DEFINE_MANY_MERGED',

  /**
   * @return {object}
   * @optional
   */
  getChildContext: 'DEFINE_MANY_MERGED',

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
  render: 'DEFINE_ONCE',

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: 'DEFINE_MANY',

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: 'DEFINE_MANY',

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: 'DEFINE_MANY',

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: 'DEFINE_ONCE',

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: 'DEFINE_MANY',

  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: 'OVERRIDE_BASE'

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function (Constructor, childContextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, childContextTypes, 'childContext');
    }
    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
  },
  contextTypes: function (Constructor, contextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, contextTypes, 'context');
    }
    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function (Constructor, propTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, propTypes, 'prop');
    }
    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
  },
  statics: function (Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  },
  autobind: function () {} };

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
    }
  }
}

function validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    if (process.env.NODE_ENV !== 'production') {
      var typeofSpec = typeof spec;
      var isMixinValid = typeofSpec === 'object' && spec !== null;

      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
    }

    return;
  }

  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    validateMethodOverride(isAlreadyDefined, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === 'DEFINE_MANY_MERGED') {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === 'DEFINE_MANY') {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if (process.env.NODE_ENV !== 'production') {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

    var isInherited = name in Constructor;
    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
      one[key] = two[key];
    }
  }
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if (process.env.NODE_ENV !== 'production') {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function (newThis) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
      } else if (!args.length) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
        return boundMethod;
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
    };
  }
  return boundMethod;
}

/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);
  }
};

var ReactClassComponent = function () {};
_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function (mixin) {
      injectedMixins.push(mixin);
    }
  }

};

module.exports = ReactClass;
}).call(this,require('_process'))
},{"./ReactComponent":52,"./ReactElement":56,"./ReactNoopUpdateQueue":59,"./ReactPropTypeLocationNames":60,"./reactProdInvariant":69,"_process":121,"fbjs/lib/emptyObject":19,"fbjs/lib/invariant":22,"fbjs/lib/warning":23,"object-assign":46}],52:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var canDefineProperty = require('./canDefineProperty');
var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

module.exports = ReactComponent;
}).call(this,require('_process'))
},{"./ReactNoopUpdateQueue":59,"./canDefineProperty":65,"./reactProdInvariant":69,"_process":121,"fbjs/lib/emptyObject":19,"fbjs/lib/invariant":22,"fbjs/lib/warning":23}],53:[function(require,module,exports){
(function (process){
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactCurrentOwner = require('./ReactCurrentOwner');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

module.exports = ReactComponentTreeHook;
}).call(this,require('_process'))
},{"./ReactCurrentOwner":54,"./reactProdInvariant":69,"_process":121,"fbjs/lib/invariant":22,"fbjs/lib/warning":23}],54:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;
},{}],55:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var ReactElement = require('./ReactElement');

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator = require('./ReactElementValidator');
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;
}).call(this,require('_process'))
},{"./ReactElement":56,"./ReactElementValidator":58,"_process":121}],56:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _assign = require('object-assign');

var ReactCurrentOwner = require('./ReactCurrentOwner');

var warning = require('fbjs/lib/warning');
var canDefineProperty = require('./canDefineProperty');
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = require('./ReactElementSymbol');

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;
}).call(this,require('_process'))
},{"./ReactCurrentOwner":54,"./ReactElementSymbol":57,"./canDefineProperty":65,"_process":121,"fbjs/lib/warning":23,"object-assign":46}],57:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;
},{}],58:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

'use strict';

var ReactCurrentOwner = require('./ReactCurrentOwner');
var ReactComponentTreeHook = require('./ReactComponentTreeHook');
var ReactElement = require('./ReactElement');

var checkReactTypeSpec = require('./checkReactTypeSpec');

var canDefineProperty = require('./canDefineProperty');
var getIteratorFn = require('./getIteratorFn');
var warning = require('fbjs/lib/warning');

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
        }
        info += getDeclarationErrorAddendum();
        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

};

module.exports = ReactElementValidator;
}).call(this,require('_process'))
},{"./ReactComponentTreeHook":53,"./ReactCurrentOwner":54,"./ReactElement":56,"./canDefineProperty":65,"./checkReactTypeSpec":66,"./getIteratorFn":67,"_process":121,"fbjs/lib/warning":23}],59:[function(require,module,exports){
(function (process){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var warning = require('fbjs/lib/warning');

function warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;
}).call(this,require('_process'))
},{"_process":121,"fbjs/lib/warning":23}],60:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;
}).call(this,require('_process'))
},{"_process":121}],61:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var ReactElement = require('./ReactElement');
var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactPropTypesSecret = require('./ReactPropTypesSecret');

var emptyFunction = require('fbjs/lib/emptyFunction');
var getIteratorFn = require('./getIteratorFn');
var warning = require('fbjs/lib/warning');

/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */

var ANONYMOUS = '<<anonymous>>';

var ReactPropTypes = {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  func: createPrimitiveTypeChecker('function'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),
  symbol: createPrimitiveTypeChecker('symbol'),

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  element: createElementTypeChecker(),
  instanceOf: createInstanceTypeChecker,
  node: createNodeChecker(),
  objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker
};

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
/*eslint-disable no-self-compare*/
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/*eslint-enable no-self-compare*/

/**
 * We use an Error-like object for backward compatibility as people may call
 * PropTypes directly and inspect their output. However we don't use real
 * Errors anymore. We don't inspect their stack anyway, and creating them
 * is prohibitively expensive if they are created too often, such as what
 * happens in oneOfType() for any type before the one that matched.
 */
function PropTypeError(message) {
  this.message = message;
  this.stack = '';
}
// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype = Error.prototype;

function createChainableTypeChecker(validate) {
  if (process.env.NODE_ENV !== 'production') {
    var manualPropTypeCallCache = {};
  }
  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
    componentName = componentName || ANONYMOUS;
    propFullName = propFullName || propName;
    if (process.env.NODE_ENV !== 'production') {
      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
        var cacheKey = componentName + ':' + propName;
        if (!manualPropTypeCallCache[cacheKey]) {
          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
          manualPropTypeCallCache[cacheKey] = true;
        }
      }
    }
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        if (props[propName] === null) {
          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
        }
        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
      }
      return null;
    } else {
      return validate(props, propName, componentName, location, propFullName);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName, secret) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns(null));
}

function createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
    }
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
    }
    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
      if (error instanceof Error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createElementTypeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!ReactElement.isValidElement(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location, propFullName) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || ANONYMOUS;
      var actualClassName = getClassName(props[propName]);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createEnumTypeChecker(expectedValues) {
  if (!Array.isArray(expectedValues)) {
    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
    return emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (is(propValue, expectedValues[i])) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
  }
  return createChainableTypeChecker(validate);
}

function createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
    }
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createUnionTypeChecker(arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
    return emptyFunction.thatReturnsNull;
  }

  function validate(props, propName, componentName, location, propFullName) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
        return null;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
  }
  return createChainableTypeChecker(validate);
}

function createNodeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!isNode(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
      if (error) {
        return error;
      }
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function isNode(propValue) {
  switch (typeof propValue) {
    case 'number':
    case 'string':
    case 'undefined':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(isNode);
      }
      if (propValue === null || ReactElement.isValidElement(propValue)) {
        return true;
      }

      var iteratorFn = getIteratorFn(propValue);
      if (iteratorFn) {
        var iterator = iteratorFn.call(propValue);
        var step;
        if (iteratorFn !== propValue.entries) {
          while (!(step = iterator.next()).done) {
            if (!isNode(step.value)) {
              return false;
            }
          }
        } else {
          // Iterator will provide entry [k,v] tuples rather than values.
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              if (!isNode(entry[1])) {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }

      return true;
    default:
      return false;
  }
}

function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === 'symbol') {
    return true;
  }

  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
  if (propValue['@@toStringTag'] === 'Symbol') {
    return true;
  }

  // Fallback for non-spec compliant Symbols which are polyfilled.
  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
    return true;
  }

  return false;
}

// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';
  }
  if (isSymbol(propType, propValue)) {
    return 'symbol';
  }
  return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

// Returns class name of the object, if any.
function getClassName(propValue) {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;
  }
  return propValue.constructor.name;
}

module.exports = ReactPropTypes;
}).call(this,require('_process'))
},{"./ReactElement":56,"./ReactPropTypeLocationNames":60,"./ReactPropTypesSecret":62,"./getIteratorFn":67,"_process":121,"fbjs/lib/emptyFunction":18,"fbjs/lib/warning":23}],62:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;
},{}],63:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _assign = require('object-assign');

var ReactComponent = require('./ReactComponent');
var ReactNoopUpdateQueue = require('./ReactNoopUpdateQueue');

var emptyObject = require('fbjs/lib/emptyObject');

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = ReactPureComponent;
},{"./ReactComponent":52,"./ReactNoopUpdateQueue":59,"fbjs/lib/emptyObject":19,"object-assign":46}],64:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

module.exports = '15.4.2';
},{}],65:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;
}).call(this,require('_process'))
},{"_process":121}],66:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactPropTypeLocationNames = require('./ReactPropTypeLocationNames');
var ReactPropTypesSecret = require('./ReactPropTypesSecret');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = require('./ReactComponentTreeHook');
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = require('./ReactComponentTreeHook');
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;
}).call(this,require('_process'))
},{"./ReactComponentTreeHook":53,"./ReactPropTypeLocationNames":60,"./ReactPropTypesSecret":62,"./reactProdInvariant":69,"_process":121,"fbjs/lib/invariant":22,"fbjs/lib/warning":23}],67:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;
},{}],68:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactElement = require('./ReactElement');

var invariant = require('fbjs/lib/invariant');

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;
}).call(this,require('_process'))
},{"./ReactElement":56,"./reactProdInvariant":69,"_process":121,"fbjs/lib/invariant":22}],69:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
'use strict';

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;
},{}],70:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var _prodInvariant = require('./reactProdInvariant');

var ReactCurrentOwner = require('./ReactCurrentOwner');
var REACT_ELEMENT_TYPE = require('./ReactElementSymbol');

var getIteratorFn = require('./getIteratorFn');
var invariant = require('fbjs/lib/invariant');
var KeyEscapeUtils = require('./KeyEscapeUtils');
var warning = require('fbjs/lib/warning');

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      !false ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;
}).call(this,require('_process'))
},{"./KeyEscapeUtils":47,"./ReactCurrentOwner":54,"./ReactElementSymbol":57,"./getIteratorFn":67,"./reactProdInvariant":69,"_process":121,"fbjs/lib/invariant":22,"fbjs/lib/warning":23}],71:[function(require,module,exports){
'use strict';

module.exports = require('./lib/React');

},{"./lib/React":49}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interleave = require('../utils/interleave');

var _interleave2 = _interopRequireDefault(_interleave);

var _flatten = require('../utils/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_RuleSet = require('../types').babelPluginFlowReactPropTypes_proptype_RuleSet || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

exports.default = function (strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  return (0, _flatten2.default)((0, _interleave2.default)(strings, interpolations));
};

module.exports = exports['default'];
},{"../types":85,"../utils/flatten":89,"../utils/interleave":91,"react":71}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

var _GlobalStyle = require('../models/GlobalStyle');

var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

var injectGlobal = function injectGlobal(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var globalStyle = new _GlobalStyle2.default(_css2.default.apply(undefined, [strings].concat(interpolations)));
  globalStyle.generateAndInject();
};

exports.default = injectGlobal;
module.exports = exports['default'];
},{"../models/GlobalStyle":80,"../types":85,"./css":72,"react":71}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hash = require('glamor/lib/hash');

var _hash2 = _interopRequireDefault(_hash);

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

var _GlobalStyle = require('../models/GlobalStyle');

var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_NameGenerator = require('../types').babelPluginFlowReactPropTypes_proptype_NameGenerator || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

exports.default = function (nameGenerator) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    var rules = _css2.default.apply(undefined, [strings].concat(interpolations));
    var hash = (0, _hash2.default)(replaceWhitespace(JSON.stringify(rules)));
    var name = nameGenerator(hash);
    var keyframes = new _GlobalStyle2.default(rules, '@keyframes ' + name);
    keyframes.generateAndInject();
    return name;
  };
};

module.exports = exports['default'];
},{"../models/GlobalStyle":80,"../types":85,"./css":72,"glamor/lib/hash":24,"react":71}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

var _domElements = require('../utils/domElements');

var _domElements2 = _interopRequireDefault(_domElements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

exports.default = function (styledComponent) {
  var styled = function styled(tag) {
    return function (strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key];
      }

      return styledComponent(tag, _css2.default.apply(undefined, [strings].concat(interpolations)));
    };
  };

  // Shorthands for all valid HTML Elements
  _domElements2.default.forEach(function (domElement) {
    styled[domElement] = styled(domElement);
  });

  return styled;
};

module.exports = exports['default'];
},{"../types":85,"../utils/domElements":88,"./css":72,"react":71}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeProvider = require('../models/ThemeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* globals ReactClass */

exports.default = function (Component) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        if (!this.context[_ThemeProvider.CHANNEL]) {
          throw new Error('[withTheme] Please use ThemeProvider to be able to use withTheme');
        }

        var subscribe = this.context[_ThemeProvider.CHANNEL];
        this.unsubscribe = subscribe(function (theme) {
          _this2.setState({ theme: theme });
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof this.unsubscribe === 'function') this.unsubscribe();
      }
    }, {
      key: 'render',
      value: function render() {
        var theme = this.state.theme;


        return _react2.default.createElement(Component, _extends({ theme: theme }, this.props));
      }
    }]);

    return _class;
  }(_react2.default.Component), _class.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _react2.default.PropTypes.func), _temp2;
};

module.exports = exports['default'];
},{"../models/ThemeProvider":84,"react":71}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;

var _generateAlphabeticName = require('./utils/generateAlphabeticName');

var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);

var _css = require('./constructors/css');

var _css2 = _interopRequireDefault(_css);

var _injectGlobal = require('./constructors/injectGlobal');

var _injectGlobal2 = _interopRequireDefault(_injectGlobal);

var _StyledComponent = require('./models/StyledComponent');

var _StyledComponent2 = _interopRequireDefault(_StyledComponent);

var _styled2 = require('./constructors/styled');

var _styled3 = _interopRequireDefault(_styled2);

var _keyframes2 = require('./constructors/keyframes');

var _keyframes3 = _interopRequireDefault(_keyframes2);

var _ComponentStyle2 = require('./models/ComponentStyle');

var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);

var _ThemeProvider = require('./models/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _withTheme = require('./hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Instantiate singletons */


/* Import components */


/* Import singleton constructors */
var keyframes = (0, _keyframes3.default)(_generateAlphabeticName2.default);

/* Import Higher Order Components */


/* Import singletons */

var styled = (0, _styled3.default)((0, _StyledComponent2.default)((0, _ComponentStyle3.default)(_generateAlphabeticName2.default)));

/* Export everything */
exports.default = styled;
exports.css = _css2.default;
exports.keyframes = keyframes;
exports.injectGlobal = _injectGlobal2.default;
exports.ThemeProvider = _ThemeProvider2.default;
exports.withTheme = _withTheme2.default;
},{"./constructors/css":72,"./constructors/injectGlobal":73,"./constructors/keyframes":74,"./constructors/styled":75,"./hoc/withTheme":76,"./models/ComponentStyle":79,"./models/StyledComponent":83,"./models/ThemeProvider":84,"./utils/generateAlphabeticName":90}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _ThemeProvider = require('./ThemeProvider');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStyledComponent = function (_Component) {
  _inherits(AbstractStyledComponent, _Component);

  function AbstractStyledComponent() {
    _classCallCheck(this, AbstractStyledComponent);

    return _possibleConstructorReturn(this, (AbstractStyledComponent.__proto__ || Object.getPrototypeOf(AbstractStyledComponent)).apply(this, arguments));
  }

  return AbstractStyledComponent;
}(_react.Component);

exports.default = AbstractStyledComponent;


AbstractStyledComponent.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _react.PropTypes.func);
module.exports = exports['default'];
},{"./ThemeProvider":84,"react":71}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hash = require('glamor/lib/hash');

var _hash2 = _interopRequireDefault(_hash);

var _flatten = require('../utils/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _parse = require('../vendor/postcss-safe-parser/parse');

var _parse2 = _interopRequireDefault(_parse);

var _postcssNested = require('../vendor/postcss-nested');

var _postcssNested2 = _interopRequireDefault(_postcssNested);

var _autoprefix = require('../utils/autoprefix');

var _autoprefix2 = _interopRequireDefault(_autoprefix);

var _StyleSheet = require('./StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var babelPluginFlowReactPropTypes_proptype_NameGenerator = require('../types').babelPluginFlowReactPropTypes_proptype_NameGenerator || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_RuleSet = require('../types').babelPluginFlowReactPropTypes_proptype_RuleSet || require('react').PropTypes.any;

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
exports.default = function (nameGenerator) {
  var inserted = {};

  var ComponentStyle = function () {
    function ComponentStyle(rules) {
      _classCallCheck(this, ComponentStyle);

      this.rules = rules;
      if (!_StyleSheet2.default.injected) _StyleSheet2.default.inject();
      this.insertedRule = _StyleSheet2.default.insert('');
    }

    /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a ._hashName {}
     * Parses that with PostCSS then runs PostCSS-Nested on it
     * Returns the hash to be injected on render()
     * */


    _createClass(ComponentStyle, [{
      key: 'generateAndInjectStyles',
      value: function generateAndInjectStyles(executionContext) {
        var flatCSS = (0, _flatten2.default)(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
        var hash = (0, _hash2.default)(flatCSS);
        if (!inserted[hash]) {
          var selector = nameGenerator(hash);
          inserted[hash] = selector;
          var root = (0, _parse2.default)('.' + selector + ' { ' + flatCSS + ' }');
          (0, _postcssNested2.default)(root);
          (0, _autoprefix2.default)(root);
          this.insertedRule.appendRule(root.toResult().css);
        }
        return inserted[hash];
      }
    }]);

    return ComponentStyle;
  }();

  return ComponentStyle;
};

module.exports = exports['default'];
},{"../types":85,"../utils/autoprefix":86,"../utils/flatten":89,"../vendor/postcss-nested":95,"../vendor/postcss-safe-parser/parse":96,"./StyleSheet":82,"glamor/lib/hash":24,"react":71}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parse = require('../vendor/postcss-safe-parser/parse');

var _parse2 = _interopRequireDefault(_parse);

var _postcssNested = require('../vendor/postcss-nested');

var _postcssNested2 = _interopRequireDefault(_postcssNested);

var _flatten = require('../utils/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _GlobalStyleSheet = require('./GlobalStyleSheet');

var _GlobalStyleSheet2 = _interopRequireDefault(_GlobalStyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var babelPluginFlowReactPropTypes_proptype_RuleSet = require('../types').babelPluginFlowReactPropTypes_proptype_RuleSet || require('react').PropTypes.any;

var ComponentStyle = function () {
  function ComponentStyle(rules, selector) {
    _classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.selector = selector;
  }

  _createClass(ComponentStyle, [{
    key: 'generateAndInject',
    value: function generateAndInject() {
      if (!_GlobalStyleSheet2.default.injected) _GlobalStyleSheet2.default.inject();
      var flatCSS = (0, _flatten2.default)(this.rules).join('');
      if (this.selector) {
        flatCSS = this.selector + ' {' + flatCSS + '\n}';
      }
      var root = (0, _parse2.default)(flatCSS);
      (0, _postcssNested2.default)(root);
      _GlobalStyleSheet2.default.insert(root.toResult().css);
    }
  }]);

  return ComponentStyle;
}();

exports.default = ComponentStyle;
module.exports = exports['default'];
},{"../types":85,"../utils/flatten":89,"../vendor/postcss-nested":95,"../vendor/postcss-safe-parser/parse":96,"./GlobalStyleSheet":81,"react":71}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sheet = require('../vendor/glamor/sheet');

/* Don't specify a maxLength, since these rules are defined at initialization
*  and should remain static after that */
exports.default = new _sheet.StyleSheet({ speedy: false });

/* Wraps glamor's stylesheet and exports a singleton for global styles. */

module.exports = exports['default'];
},{"../vendor/glamor/sheet":94}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sheet = require('../vendor/glamor/sheet');

exports.default = new _sheet.StyleSheet({ speedy: false, maxLength: 40 });

/* Wraps glamor's stylesheet and exports a singleton for styled components
to use. */

module.exports = exports['default'];
},{"../vendor/glamor/sheet":94}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _validAttr = require('../utils/validAttr');

var _validAttr2 = _interopRequireDefault(_validAttr);

var _isTag = require('../utils/isTag');

var _isTag2 = _interopRequireDefault(_isTag);

var _AbstractStyledComponent = require('./AbstractStyledComponent');

var _AbstractStyledComponent2 = _interopRequireDefault(_AbstractStyledComponent);

var _ThemeProvider = require('./ThemeProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var babelPluginFlowReactPropTypes_proptype_Theme = require('./ThemeProvider').babelPluginFlowReactPropTypes_proptype_Theme || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any;

var babelPluginFlowReactPropTypes_proptype_RuleSet = require('../types').babelPluginFlowReactPropTypes_proptype_RuleSet || require('react').PropTypes.any;

exports.default = function (ComponentStyle) {
  // eslint-disable-next-line no-undef
  var createStyledComponent = function createStyledComponent(target, rules, parent) {
    /* Handle styled(OtherStyledComponent) differently */
    var isStyledComponent = _AbstractStyledComponent2.default.isPrototypeOf(target);
    if (!(0, _isTag2.default)(target) && isStyledComponent) {
      return createStyledComponent(target.target, target.rules.concat(rules), target);
    }

    var componentStyle = new ComponentStyle(rules);
    var ParentComponent = parent || _AbstractStyledComponent2.default;

    var StyledComponent = function (_ParentComponent) {
      _inherits(StyledComponent, _ParentComponent);

      function StyledComponent() {
        _classCallCheck(this, StyledComponent);

        var _this = _possibleConstructorReturn(this, (StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).call(this));

        _this.state = {
          theme: null,
          generatedClassName: ''
        };
        return _this;
      }

      _createClass(StyledComponent, [{
        key: 'generateAndInjectStyles',
        value: function generateAndInjectStyles(theme, props) {
          var executionContext = _extends({}, props, { theme: theme });
          return componentStyle.generateAndInjectStyles(executionContext);
        }
      }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
          var _this2 = this;

          // If there is a theme in the context, subscribe to the event emitter. This
          // is necessary due to pure components blocking context updates, this circumvents
          // that by updating when an event is emitted
          if (this.context[_ThemeProvider.CHANNEL]) {
            var subscribe = this.context[_ThemeProvider.CHANNEL];
            this.unsubscribe = subscribe(function (nextTheme) {
              // This will be called once immediately
              var defaultProps = _this2.constructor.defaultProps;
              // Props should take precedence over ThemeProvider, which should take precedence over
              // defaultProps, but React automatically puts defaultProps on props.

              var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
              var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
              var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
              _this2.setState({ theme: theme, generatedClassName: generatedClassName });
            });
          } else {
            var _theme = this.props.theme || {};
            var generatedClassName = this.generateAndInjectStyles(_theme, this.props);
            this.setState({ theme: _theme, generatedClassName: generatedClassName });
          }
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var _this3 = this;

          this.setState(function (oldState) {
            var theme = nextProps.theme || oldState.theme;
            var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

            return { theme: theme, generatedClassName: generatedClassName };
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.unsubscribe) {
            this.unsubscribe();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this4 = this;

          var _props = this.props,
              className = _props.className,
              children = _props.children,
              innerRef = _props.innerRef;
          var generatedClassName = this.state.generatedClassName;


          var propsForElement = {};
          /* Don't pass through non HTML tags through to HTML elements */
          Object.keys(this.props).filter(function (propName) {
            return !(0, _isTag2.default)(target) || (0, _validAttr2.default)(propName);
          }).forEach(function (propName) {
            propsForElement[propName] = _this4.props[propName];
          });
          propsForElement.className = [className, generatedClassName].filter(function (x) {
            return x;
          }).join(' ');
          if (innerRef) {
            propsForElement.ref = innerRef;
            if ((0, _isTag2.default)(target)) delete propsForElement.innerRef;
          }

          return (0, _react.createElement)(target, propsForElement, children);
        }
      }]);

      return StyledComponent;
    }(ParentComponent);

    StyledComponent.contextTypes = ParentComponent.contextTypes;


    StyledComponent.target = target;
    StyledComponent.rules = rules;

    StyledComponent.displayName = (0, _isTag2.default)(target) ? 'styled.' + target : 'Styled(' + (target.displayName || target.name) + ')';

    return StyledComponent;
  };

  return createStyledComponent;
};

module.exports = exports['default'];
},{"../types":85,"../utils/isTag":92,"../utils/validAttr":93,"./AbstractStyledComponent":78,"./ThemeProvider":84,"react":71}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANNEL = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isFunction = require('is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isPlainObject = require('is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _createBroadcast = require('../utils/create-broadcast');

var _createBroadcast2 = _interopRequireDefault(_createBroadcast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* globals React$Element */


// NOTE: DO NOT CHANGE, changing this is a semver major change!
var babelPluginFlowReactPropTypes_proptype_Broadcast = require('../utils/create-broadcast').babelPluginFlowReactPropTypes_proptype_Broadcast || require('react').PropTypes.any;

var CHANNEL = exports.CHANNEL = '__styled-components__';

Object.defineProperty(module.exports, 'babelPluginFlowReactPropTypes_proptype_Theme', {
  value: require('react').PropTypes.shape({})
});

/**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */
var ThemeProvider = function (_Component) {
  _inherits(ThemeProvider, _Component);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    var _this = _possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call(this));

    _this.getTheme = _this.getTheme.bind(_this);
    return _this;
  }

  _createClass(ThemeProvider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
      // with the outer theme
      if (this.context[CHANNEL]) {
        var subscribe = this.context[CHANNEL];
        this.unsubscribeToOuter = subscribe(function (theme) {
          _this2.outerTheme = theme;
        });
      }
      this.broadcast = (0, _createBroadcast2.default)(this.getTheme());
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return _extends({}, this.context, _defineProperty({}, CHANNEL, this.broadcast.subscribe));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.context[CHANNEL]) {
        this.unsubscribeToOuter();
      }
    }

    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation

  }, {
    key: 'getTheme',
    value: function getTheme(passedTheme) {
      var theme = passedTheme || this.props.theme;
      if ((0, _isFunction2.default)(theme)) {
        var mergedTheme = theme(this.outerTheme);
        if (!(0, _isPlainObject2.default)(mergedTheme)) {
          throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
        }
        return mergedTheme;
      }
      if (!(0, _isPlainObject2.default)(theme)) {
        throw new Error('[ThemeProvider] Please make your theme prop a plain object');
      }
      return _extends({}, this.outerTheme, theme);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.children) {
        return null;
      }
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ThemeProvider;
}(_react.Component);

ThemeProvider.propTypes = {
  children: require('react').PropTypes.any,
  theme: require('react').PropTypes.oneOfType([require('react').PropTypes.shape({}), require('react').PropTypes.func]).isRequired
};


ThemeProvider.childContextTypes = _defineProperty({}, CHANNEL, _react.PropTypes.func.isRequired);
ThemeProvider.contextTypes = _defineProperty({}, CHANNEL, _react.PropTypes.func);

exports.default = ThemeProvider;
},{"../utils/create-broadcast":87,"is-function":43,"is-plain-object":44,"react":71}],85:[function(require,module,exports){
"use strict";
},{}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelizeStyleName = require('fbjs/lib/camelizeStyleName');

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _hyphenateStyleName = require('fbjs/lib/hyphenateStyleName');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _static = require('inline-style-prefixer/static');

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line


var babelPluginFlowReactPropTypes_proptype_Container = require('../vendor/postcss/container').babelPluginFlowReactPropTypes_proptype_Container || require('react').PropTypes.any;

exports.default = function (root) {
  root.walkDecls(function (decl) {
    /* No point even checking custom props */
    if (/^--/.test(decl.prop)) return;

    var objStyle = _defineProperty({}, (0, _camelizeStyleName2.default)(decl.prop), decl.value);
    var prefixed = (0, _static2.default)(objStyle);
    Object.keys(prefixed).reverse().forEach(function (newProp) {
      var newVals = prefixed[newProp];
      var newValArray = Array.isArray(newVals) ? newVals : [newVals];
      newValArray.forEach(function (newVal) {
        decl.cloneBefore({
          prop: (0, _hyphenateStyleName2.default)(newProp),
          value: newVal
        });
      });
    });
    decl.remove();
  });
};

module.exports = exports['default'];
},{"../vendor/postcss/container":100,"fbjs/lib/camelizeStyleName":17,"fbjs/lib/hyphenateStyleName":21,"inline-style-prefixer/static":42,"react":71}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(module.exports, "babelPluginFlowReactPropTypes_proptype_Broadcast", {
  value: require("react").PropTypes.shape({
    publish: require("react").PropTypes.func.isRequired,
    subscribe: require("react").PropTypes.func.isRequired
  })
});
/**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

var createBroadcast = function createBroadcast(initialValue) {
  var listeners = [];
  var currentValue = initialValue;

  return {
    publish: function publish(value) {
      currentValue = value;
      listeners.forEach(function (listener) {
        return listener(currentValue);
      });
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);

      // Publish to this subscriber once immediately.
      listener(currentValue);

      return function () {
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    }
  };
};

exports.default = createBroadcast;
module.exports = exports["default"];
},{"react":71}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Thanks to ReactDOMFactories for this handy list!

exports.default = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
module.exports = exports['default'];
},{}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objToCss = undefined;

var _hyphenateStyleName = require('fbjs/lib/hyphenateStyleName');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _isPlainObject = require('is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

var objToCss = exports.objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).map(function (key) {
    if ((0, _isPlainObject2.default)(obj[key])) return objToCss(obj[key], key);
    return (0, _hyphenateStyleName2.default)(key) + ': ' + obj[key] + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

var flatten = function flatten(chunks, executionContext) {
  return chunks.reduce(function (ruleSet, chunk) {
    /* Remove falsey values */
    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
    /* Flatten ruleSet */
    if (Array.isArray(chunk)) return [].concat(_toConsumableArray(ruleSet), _toConsumableArray(flatten(chunk, executionContext)));
    /* Either execute or defer the function */
    if (typeof chunk === 'function') {
      return executionContext ? ruleSet.concat.apply(ruleSet, _toConsumableArray(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
    }

    /* Handle objects */
    // $FlowFixMe have to add %checks somehow to isPlainObject
    return ruleSet.concat((0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
  }, []);
};

exports.default = flatten;
},{"../types":85,"fbjs/lib/hyphenateStyleName":21,"is-plain-object":44,"react":71}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/* Some high number, usually 9-digit base-10. Map it to base-😎 */
var generateAlphabeticName = function generateAlphabeticName(code) {
  var lastDigit = chars[code % chars.length];
  return code > chars.length ? '' + generateAlphabeticName(Math.floor(code / chars.length)) + lastDigit : lastDigit;
};

exports.default = generateAlphabeticName;
module.exports = exports['default'];
},{}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

exports.default = function (strings, interpolations) {
  return interpolations.reduce(function (array, interp, i) {
    return array.concat(interp, strings[i + 1]);
  }, [strings[0]]);
};

module.exports = exports['default'];
},{"../types":85,"react":71}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTag;

var babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any;

function isTag(target) /* : %checks */{
  return typeof target === 'string';
}
module.exports = exports['default'];
},{"../types":85,"react":71}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/* Trying to avoid the unknown-prop errors on styled components
 by filtering by React's attribute whitelist.
 */

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = {
  children: true,
  dangerouslySetInnerHTML: true,
  key: true,
  ref: true,
  autoFocus: true,
  defaultValue: true,
  valueLink: true,
  defaultChecked: true,
  checkedLink: true,
  innerHTML: true,
  suppressContentEditableWarning: true,
  onFocusIn: true,
  onFocusOut: true,
  className: true,

  /* List copied from https://facebook.github.io/react/docs/events.html */
  onCopy: true,
  onCut: true,
  onPaste: true,
  onCompositionEnd: true,
  onCompositionStart: true,
  onCompositionUpdate: true,
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  onFocus: true,
  onBlur: true,
  onChange: true,
  onInput: true,
  onSubmit: true,
  onClick: true,
  onContextMenu: true,
  onDoubleClick: true,
  onDrag: true,
  onDragEnd: true,
  onDragEnter: true,
  onDragExit: true,
  onDragLeave: true,
  onDragOver: true,
  onDragStart: true,
  onDrop: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOut: true,
  onMouseOver: true,
  onMouseUp: true,
  onSelect: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchMove: true,
  onTouchStart: true,
  onScroll: true,
  onWheel: true,
  onAbort: true,
  onCanPlay: true,
  onCanPlayThrough: true,
  onDurationChange: true,
  onEmptied: true,
  onEncrypted: true,
  onEnded: true,
  onError: true,
  onLoadedData: true,
  onLoadedMetadata: true,
  onLoadStart: true,
  onPause: true,
  onPlay: true,
  onPlaying: true,
  onProgress: true,
  onRateChange: true,
  onSeeked: true,
  onSeeking: true,
  onStalled: true,
  onSuspend: true,
  onTimeUpdate: true,
  onVolumeChange: true,
  onWaiting: true,
  onLoad: true,
  onAnimationStart: true,
  onAnimationEnd: true,
  onAnimationIteration: true,
  onTransitionEnd: true,

  onCopyCapture: true,
  onCutCapture: true,
  onPasteCapture: true,
  onCompositionEndCapture: true,
  onCompositionStartCapture: true,
  onCompositionUpdateCapture: true,
  onKeyDownCapture: true,
  onKeyPressCapture: true,
  onKeyUpCapture: true,
  onFocusCapture: true,
  onBlurCapture: true,
  onChangeCapture: true,
  onInputCapture: true,
  onSubmitCapture: true,
  onClickCapture: true,
  onContextMenuCapture: true,
  onDoubleClickCapture: true,
  onDragCapture: true,
  onDragEndCapture: true,
  onDragEnterCapture: true,
  onDragExitCapture: true,
  onDragLeaveCapture: true,
  onDragOverCapture: true,
  onDragStartCapture: true,
  onDropCapture: true,
  onMouseDownCapture: true,
  onMouseEnterCapture: true,
  onMouseLeaveCapture: true,
  onMouseMoveCapture: true,
  onMouseOutCapture: true,
  onMouseOverCapture: true,
  onMouseUpCapture: true,
  onSelectCapture: true,
  onTouchCancelCapture: true,
  onTouchEndCapture: true,
  onTouchMoveCapture: true,
  onTouchStartCapture: true,
  onScrollCapture: true,
  onWheelCapture: true,
  onAbortCapture: true,
  onCanPlayCapture: true,
  onCanPlayThroughCapture: true,
  onDurationChangeCapture: true,
  onEmptiedCapture: true,
  onEncryptedCapture: true,
  onEndedCapture: true,
  onErrorCapture: true,
  onLoadedDataCapture: true,
  onLoadedMetadataCapture: true,
  onLoadStartCapture: true,
  onPauseCapture: true,
  onPlayCapture: true,
  onPlayingCapture: true,
  onProgressCapture: true,
  onRateChangeCapture: true,
  onSeekedCapture: true,
  onSeekingCapture: true,
  onStalledCapture: true,
  onSuspendCapture: true,
  onTimeUpdateCapture: true,
  onVolumeChangeCapture: true,
  onWaitingCapture: true,
  onLoadCapture: true,
  onAnimationStartCapture: true,
  onAnimationEndCapture: true,
  onAnimationIterationCapture: true,
  onTransitionEndCapture: true
};

/* From HTMLDOMPropertyConfig */
var htmlProps = {
  /**
   * Standard Properties
   */
  accept: true,
  acceptCharset: true,
  accessKey: true,
  action: true,
  allowFullScreen: true,
  allowTransparency: true,
  alt: true,
  // specifies target context for links with `preload` type
  as: true,
  async: true,
  autoComplete: true,
  // autoFocus is polyfilled/normalized by AutoFocusUtils
  // autoFocus: true,
  autoPlay: true,
  capture: true,
  cellPadding: true,
  cellSpacing: true,
  charSet: true,
  challenge: true,
  checked: true,
  cite: true,
  classID: true,
  className: true,
  cols: true,
  colSpan: true,
  content: true,
  contentEditable: true,
  contextMenu: true,
  controls: true,
  coords: true,
  crossOrigin: true,
  data: true, // For `<object />` acts as `src`.
  dateTime: true,
  default: true,
  defer: true,
  dir: true,
  disabled: true,
  download: true,
  draggable: true,
  encType: true,
  form: true,
  formAction: true,
  formEncType: true,
  formMethod: true,
  formNoValidate: true,
  formTarget: true,
  frameBorder: true,
  headers: true,
  height: true,
  hidden: true,
  high: true,
  href: true,
  hrefLang: true,
  htmlFor: true,
  httpEquiv: true,
  icon: true,
  id: true,
  inputMode: true,
  integrity: true,
  is: true,
  keyParams: true,
  keyType: true,
  kind: true,
  label: true,
  lang: true,
  list: true,
  loop: true,
  low: true,
  manifest: true,
  marginHeight: true,
  marginWidth: true,
  max: true,
  maxLength: true,
  media: true,
  mediaGroup: true,
  method: true,
  min: true,
  minLength: true,
  // Caution; `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`.
  multiple: true,
  muted: true,
  name: true,
  nonce: true,
  noValidate: true,
  open: true,
  optimum: true,
  pattern: true,
  placeholder: true,
  playsInline: true,
  poster: true,
  preload: true,
  profile: true,
  radioGroup: true,
  readOnly: true,
  referrerPolicy: true,
  rel: true,
  required: true,
  reversed: true,
  role: true,
  rows: true,
  rowSpan: true,
  sandbox: true,
  scope: true,
  scoped: true,
  scrolling: true,
  seamless: true,
  selected: true,
  shape: true,
  size: true,
  sizes: true,
  span: true,
  spellCheck: true,
  src: true,
  srcDoc: true,
  srcLang: true,
  srcSet: true,
  start: true,
  step: true,
  style: true,
  summary: true,
  tabIndex: true,
  target: true,
  title: true,
  // Setting .type throws on non-<input> tags
  type: true,
  useMap: true,
  value: true,
  width: true,
  wmode: true,
  wrap: true,

  /**
   * RDFa Properties
   */
  about: true,
  datatype: true,
  inlist: true,
  prefix: true,
  // property is also supported for OpenGraph in meta tags.
  property: true,
  resource: true,
  typeof: true,
  vocab: true,

  /**
   * Non-standard Properties
   */
  // autoCapitalize and autoCorrect are supported in Mobile Safari for
  // keyboard hints.
  autoCapitalize: true,
  autoCorrect: true,
  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
  autoSave: true,
  // color is for Safari mask-icon link
  color: true,
  // itemProp, itemScope, itemType are for
  // Microdata support. See http://schema.org/docs/gs.html
  itemProp: true,
  itemScope: true,
  itemType: true,
  // itemID and itemRef are for Microdata support as well but
  // only specified in the WHATWG spec document. See
  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
  itemID: true,
  itemRef: true,
  // results show looking glass icon and recent searches on input
  // search fields in WebKit/Blink
  results: true,
  // IE-only attribute that specifies security restrictions on an iframe
  // as an alternative to the sandbox attribute on IE<10
  security: true,
  // IE-only attribute that controls focus behavior
  unselectable: 0
};

var svgProps = {
  accentHeight: true,
  accumulate: true,
  additive: true,
  alignmentBaseline: true,
  allowReorder: true,
  alphabetic: true,
  amplitude: true,
  arabicForm: true,
  ascent: true,
  attributeName: true,
  attributeType: true,
  autoReverse: true,
  azimuth: true,
  baseFrequency: true,
  baseProfile: true,
  baselineShift: true,
  bbox: true,
  begin: true,
  bias: true,
  by: true,
  calcMode: true,
  capHeight: true,
  clip: true,
  clipPath: true,
  clipRule: true,
  clipPathUnits: true,
  colorInterpolation: true,
  colorInterpolationFilters: true,
  colorProfile: true,
  colorRendering: true,
  contentScriptType: true,
  contentStyleType: true,
  cursor: true,
  cx: true,
  cy: true,
  d: true,
  decelerate: true,
  descent: true,
  diffuseConstant: true,
  direction: true,
  display: true,
  divisor: true,
  dominantBaseline: true,
  dur: true,
  dx: true,
  dy: true,
  edgeMode: true,
  elevation: true,
  enableBackground: true,
  end: true,
  exponent: true,
  externalResourcesRequired: true,
  fill: true,
  fillOpacity: true,
  fillRule: true,
  filter: true,
  filterRes: true,
  filterUnits: true,
  floodColor: true,
  floodOpacity: true,
  focusable: true,
  fontFamily: true,
  fontSize: true,
  fontSizeAdjust: true,
  fontStretch: true,
  fontStyle: true,
  fontVariant: true,
  fontWeight: true,
  format: true,
  from: true,
  fx: true,
  fy: true,
  g1: true,
  g2: true,
  glyphName: true,
  glyphOrientationHorizontal: true,
  glyphOrientationVertical: true,
  glyphRef: true,
  gradientTransform: true,
  gradientUnits: true,
  hanging: true,
  horizAdvX: true,
  horizOriginX: true,
  ideographic: true,
  imageRendering: true,
  in: true,
  in2: true,
  intercept: true,
  k: true,
  k1: true,
  k2: true,
  k3: true,
  k4: true,
  kernelMatrix: true,
  kernelUnitLength: true,
  kerning: true,
  keyPoints: true,
  keySplines: true,
  keyTimes: true,
  lengthAdjust: true,
  letterSpacing: true,
  lightingColor: true,
  limitingConeAngle: true,
  local: true,
  markerEnd: true,
  markerMid: true,
  markerStart: true,
  markerHeight: true,
  markerUnits: true,
  markerWidth: true,
  mask: true,
  maskContentUnits: true,
  maskUnits: true,
  mathematical: true,
  mode: true,
  numOctaves: true,
  offset: true,
  opacity: true,
  operator: true,
  order: true,
  orient: true,
  orientation: true,
  origin: true,
  overflow: true,
  overlinePosition: true,
  overlineThickness: true,
  paintOrder: true,
  panose1: true,
  pathLength: true,
  patternContentUnits: true,
  patternTransform: true,
  patternUnits: true,
  pointerEvents: true,
  points: true,
  pointsAtX: true,
  pointsAtY: true,
  pointsAtZ: true,
  preserveAlpha: true,
  preserveAspectRatio: true,
  primitiveUnits: true,
  r: true,
  radius: true,
  refX: true,
  refY: true,
  renderingIntent: true,
  repeatCount: true,
  repeatDur: true,
  requiredExtensions: true,
  requiredFeatures: true,
  restart: true,
  result: true,
  rotate: true,
  rx: true,
  ry: true,
  scale: true,
  seed: true,
  shapeRendering: true,
  slope: true,
  spacing: true,
  specularConstant: true,
  specularExponent: true,
  speed: true,
  spreadMethod: true,
  startOffset: true,
  stdDeviation: true,
  stemh: true,
  stemv: true,
  stitchTiles: true,
  stopColor: true,
  stopOpacity: true,
  strikethroughPosition: true,
  strikethroughThickness: true,
  string: true,
  stroke: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeLinecap: true,
  strokeLinejoin: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  surfaceScale: true,
  systemLanguage: true,
  tableValues: true,
  targetX: true,
  targetY: true,
  textAnchor: true,
  textDecoration: true,
  textRendering: true,
  textLength: true,
  to: true,
  transform: true,
  u1: true,
  u2: true,
  underlinePosition: true,
  underlineThickness: true,
  unicode: true,
  unicodeBidi: true,
  unicodeRange: true,
  unitsPerEm: true,
  vAlphabetic: true,
  vHanging: true,
  vIdeographic: true,
  vMathematical: true,
  values: true,
  vectorEffect: true,
  version: true,
  vertAdvY: true,
  vertOriginX: true,
  vertOriginY: true,
  viewBox: true,
  viewTarget: true,
  visibility: true,
  widths: true,
  wordSpacing: true,
  writingMode: true,
  x: true,
  xHeight: true,
  x1: true,
  x2: true,
  xChannelSelector: true,
  xlinkActuate: true,
  xlinkArcrole: true,
  xlinkHref: true,
  xlinkRole: true,
  xlinkShow: true,
  xlinkTitle: true,
  xlinkType: true,
  xmlBase: true,
  xmlns: true,
  xmlnsXlink: true,
  xmlLang: true,
  xmlSpace: true,
  y: true,
  y1: true,
  y2: true,
  yChannelSelector: true,
  z: true,
  zoomAndPan: true
};

/* From DOMProperty */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

var hasOwnProperty = {}.hasOwnProperty;

exports.default = function (name) {
  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
};

module.exports = exports['default'];
},{}],94:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof document !== 'undefined';
var isDev = function (x) {
  return x === 'development' || !x;
}(process.env.NODE_ENV);
var isTest = process.env.NODE_ENV === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

var StyleSheet = exports.StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$speedy = _ref.speedy,
        speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
        _ref$maxLength = _ref.maxLength,
        maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

    _classCallCheck(this, StyleSheet);

    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
    this.sheet = undefined;
    this.tags = [];
    this.maxLength = maxLength;
    this.ctr = 0;
  }

  _createClass(StyleSheet, [{
    key: 'inject',
    value: function inject() {
      var _this = this;

      if (this.injected) {
        throw new Error('already injected stylesheet!');
      }
      if (isBrowser) {
        // this section is just weird alchemy I found online off many sources
        this.tags[0] = makeStyleTag();
        // this weirdness brought to you by firefox
        this.sheet = sheetForTag(this.tags[0]);
      } else {
        // server side 'polyfill'. just enough behavior to be useful.
        this.sheet = {
          cssRules: [],
          insertRule: function insertRule(rule) {
            // enough 'spec compliance' to be able to extract the rules later
            // in other words, just the cssText field
            var serverRule = { cssText: rule };
            _this.sheet.cssRules.push(serverRule);
            return { serverRule: serverRule, appendRule: function appendRule(newCss) {
                return serverRule.cssText += newCss;
              } };
          }
        };
      }
      this.injected = true;
    }
  }, {
    key: 'speedy',
    value: function speedy(bool) {
      if (this.ctr !== 0) {
        throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
      }
      this.isSpeedy = !!bool;
    }
  }, {
    key: '_insert',
    value: function _insert(rule) {
      // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
      try {
        this.sheet.insertRule(rule, this.sheet.cssRules.length); // todo - correct index here
      } catch (e) {
        if (isDev) {
          // might need beter dx for this
          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
        }
      }
    }
  }, {
    key: 'insert',
    value: function insert(rule) {
      var _this2 = this;

      var insertedRule = void 0;

      if (isBrowser) {
        // this is the ultrafast version, works across browsers
        if (this.isSpeedy && this.sheet.insertRule) {
          this._insert(rule);
        } else {
          (function () {
            var textNode = document.createTextNode(rule);
            last(_this2.tags).appendChild(textNode);
            insertedRule = { textNode: textNode, appendRule: function appendRule(newCss) {
                return textNode.appendData(newCss);
              } };

            if (!_this2.isSpeedy) {
              // sighhh
              _this2.sheet = sheetForTag(last(_this2.tags));
            }
          })();
        }
      } else {
        // server side is pretty simple
        insertedRule = this.sheet.insertRule(rule);
      }

      this.ctr++;
      if (isBrowser && this.ctr % this.maxLength === 0) {
        this.tags.push(makeStyleTag());
        this.sheet = sheetForTag(last(this.tags));
      }
      return insertedRule;
    }
  }, {
    key: 'flush',
    value: function flush() {
      if (isBrowser) {
        this.tags.forEach(function (tag) {
          return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.sheet = null;
        this.ctr = 0;
        // todo - look for remnants in document.styleSheets
      } else {
        // simpler on server
        this.sheet.cssRules = [];
      }
      this.injected = false;
    }
  }, {
    key: 'rules',
    value: function rules() {
      if (!isBrowser) {
        return this.sheet.cssRules;
      }
      var arr = [];
      this.tags.forEach(function (tag) {
        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
      });
      return arr;
    }
  }]);

  return StyleSheet;
}();
}).call(this,require('_process'))
},{"_process":121}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function selectors(parent, node) {
  var result = [];
  parent.selectors.forEach(function (i) {
    node.selectors.forEach(function (j) {
      if (j.indexOf('&') === -1) {
        result.push(i + ' ' + j);
      } else {
        result.push(j.replace(/&/g, i));
      }
    });
  });
  return result;
}

function pickComment(comment, after) {
  if (comment && comment.type === 'comment') {
    return comment.moveAfter(after);
  } else {
    return after;
  }
}

function atruleChilds(rule, atrule) {
  var children = [];
  atrule.each(function (child) {
    if (child.type === 'comment') {
      children.push(child);
    }
    if (child.type === 'decl') {
      children.push(child);
    } else if (child.type === 'rule') {
      child.selectors = selectors(rule, child);
    } else if (child.type === 'atrule') {
      atruleChilds(rule, child);
    }
  });
  if (children.length) {
    var clone = rule.clone({ nodes: [] });
    for (var i = 0; i < children.length; i++) {
      children[i].moveTo(clone);
    }atrule.prepend(clone);
  }
}

function processRule(rule, bubble) {
  var unwrapped = false;
  var after = rule;
  rule.each(function (child) {
    if (child.type === 'rule') {
      unwrapped = true;
      child.selectors = selectors(rule, child);
      after = pickComment(child.prev(), after);
      after = child.moveAfter(after);
    } else if (child.type === 'atrule') {
      if (bubble.indexOf(child.name) !== -1) {
        unwrapped = true;
        atruleChilds(rule, child);
        after = pickComment(child.prev(), after);
        after = child.moveAfter(after);
      }
    }
  });
  if (unwrapped) {
    rule.raws.semicolon = true;
    if (rule.nodes.length === 0) rule.remove();
  }
}

var bubble = ['media', 'supports', 'document'];

var process = function process(node) {
  node.each(function (child) {
    if (child.type === 'rule') {
      processRule(child, bubble);
    } else if (child.type === 'atrule') {
      process(child);
    }
  });
};

exports.default = process;
module.exports = exports['default'];
},{}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = safeParse;

var _input = require('../postcss/input');

var _input2 = _interopRequireDefault(_input);

var _safeParser = require('./safe-parser');

var _safeParser2 = _interopRequireDefault(_safeParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function safeParse(css, opts) {
    var input = new _input2.default(css, opts);

    var parser = new _safeParser2.default(input);
    parser.tokenize();
    parser.loop();

    return parser.root;
}
module.exports = exports['default'];
},{"../postcss/input":103,"./safe-parser":97}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tokenize2 = require('../postcss/tokenize');

var _tokenize3 = _interopRequireDefault(_tokenize2);

var _comment = require('../postcss/comment');

var _comment2 = _interopRequireDefault(_comment);

var _parser = require('../postcss/parser');

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SafeParser = function (_Parser) {
    _inherits(SafeParser, _Parser);

    function SafeParser() {
        _classCallCheck(this, SafeParser);

        return _possibleConstructorReturn(this, (SafeParser.__proto__ || Object.getPrototypeOf(SafeParser)).apply(this, arguments));
    }

    _createClass(SafeParser, [{
        key: 'tokenize',
        value: function tokenize() {
            this.tokens = (0, _tokenize3.default)(this.input, { ignoreErrors: true });
        }
    }, {
        key: 'comment',
        value: function comment(token) {
            var node = new _comment2.default();
            this.init(node, token[2], token[3]);
            node.source.end = { line: token[4], column: token[5] };

            var text = token[1].slice(2);
            if (text.slice(-2) === '*/') text = text.slice(0, -2);

            if (/^\s*$/.test(text)) {
                node.text = '';
                node.raws.left = text;
                node.raws.right = '';
            } else {
                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
                node.text = match[2];
                node.raws.left = match[1];
                node.raws.right = match[3];
            }
        }
    }, {
        key: 'unclosedBracket',
        value: function unclosedBracket() {}
    }, {
        key: 'unknownWord',
        value: function unknownWord(start) {
            var buffer = this.tokens.slice(start, this.pos + 1);
            this.spaces += buffer.map(function (i) {
                return i[1];
            }).join('');
        }
    }, {
        key: 'unexpectedClose',
        value: function unexpectedClose() {
            this.current.raws.after += '}';
        }
    }, {
        key: 'doubleColon',
        value: function doubleColon() {}
    }, {
        key: 'unnamedAtrule',
        value: function unnamedAtrule(node) {
            node.name = '';
        }
    }, {
        key: 'precheckMissedSemicolon',
        value: function precheckMissedSemicolon(tokens) {
            var colon = this.colon(tokens);
            if (colon === false) return;

            var split = void 0;
            for (split = colon - 1; split >= 0; split--) {
                if (tokens[split][0] === 'word') break;
            }
            for (split -= 1; split >= 0; split--) {
                if (tokens[split][0] !== 'space') {
                    split += 1;
                    break;
                }
            }
            var other = tokens.splice(split, tokens.length - split);
            this.decl(other);
        }
    }, {
        key: 'checkMissedSemicolon',
        value: function checkMissedSemicolon() {}
    }, {
        key: 'endFile',
        value: function endFile() {
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.current.raws.after = (this.current.raws.after || '') + this.spaces;

            while (this.current.parent) {
                this.current = this.current.parent;
                this.current.raws.after = '';
            }
        }
    }]);

    return SafeParser;
}(_parser2.default);

exports.default = SafeParser;
module.exports = exports['default'];
},{"../postcss/comment":99,"../postcss/parser":108,"../postcss/tokenize":116}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
 *
 * const charset = root.first;
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last;
 * media.nodes   //=> []
 */
var AtRule = function (_Container) {
    _inherits(AtRule, _Container);

    function AtRule(defaults) {
        _classCallCheck(this, AtRule);

        var _this = _possibleConstructorReturn(this, (AtRule.__proto__ || Object.getPrototypeOf(AtRule)).call(this, defaults));

        _this.type = 'atrule';
        return _this;
    }

    _createClass(AtRule, [{
        key: 'append',
        value: function append() {
            var _get2;

            if (!this.nodes) this.nodes = [];

            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
                children[_key] = arguments[_key];
            }

            return (_get2 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'append', this)).call.apply(_get2, [this].concat(children));
        }
    }, {
        key: 'prepend',
        value: function prepend() {
            var _get3;

            if (!this.nodes) this.nodes = [];

            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                children[_key2] = arguments[_key2];
            }

            return (_get3 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'prepend', this)).call.apply(_get3, [this].concat(children));
        }
    }, {
        key: 'afterName',
        get: function get() {
            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
            return this.raws.afterName;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
            this.raws.afterName = val;
        }
    }, {
        key: '_params',
        get: function get() {
            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
            return this.raws.params;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
            this.raws.params = val;
        }

        /**
         * @memberof AtRule#
         * @member {string} name - the at-rule’s name immediately follows the `@`
         *
         * @example
         * const root  = postcss.parse('@media print {}');
         * media.name //=> 'media'
         * const media = root.first;
         */

        /**
         * @memberof AtRule#
         * @member {string} params - the at-rule’s parameters, the values
         *                           that follow the at-rule’s name but precede
         *                           any {} block
         *
         * @example
         * const root  = postcss.parse('@media print, screen {}');
         * const media = root.first;
         * media.params //=> 'print, screen'
         */

        /**
         * @memberof AtRule#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `after`: the space symbols after the last child of the node
         *   to the end of the node.
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `semicolon`: contains true if the last child has
         *   an (optional) semicolon.
         * * `afterName`: the space between the at-rule name and its parameters.
         *
         * PostCSS cleans at-rule parameters from comments and extra spaces,
         * but it stores origin content in raws properties.
         * As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('  @media\nprint {\n}')
         * root.first.first.raws //=> { before: '  ',
         *                       //     between: ' ',
         *                       //     afterName: '\n',
         *                       //     after: '\n' }
         */

    }]);

    return AtRule;
}(_container2.default);

exports.default = AtRule;
module.exports = exports['default'];
},{"./container":100,"./warn-once":117}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */
var Comment = function (_Node) {
    _inherits(Comment, _Node);

    function Comment(defaults) {
        _classCallCheck(this, Comment);

        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, defaults));

        _this.type = 'comment';
        return _this;
    }

    _createClass(Comment, [{
        key: 'left',
        get: function get() {
            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
            return this.raws.left;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
            this.raws.left = val;
        }
    }, {
        key: 'right',
        get: function get() {
            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
            return this.raws.right;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
            this.raws.right = val;
        }

        /**
         * @memberof Comment#
         * @member {string} text - the comment’s text
         */

        /**
         * @memberof Comment#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node.
         * * `left`: the space symbols between `/*` and the comment’s text.
         * * `right`: the space symbols between the comment’s text.
         */

    }]);

    return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];
},{"./node":106,"./warn-once":117}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

var _rule = require('./rule');

var _rule2 = _interopRequireDefault(_rule);

var _atRule = require('./at-rule');

var _atRule2 = _interopRequireDefault(_atRule);

var _declaration = require('./declaration');

var _declaration2 = _interopRequireDefault(_declaration);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _comment = require('./comment');

var _comment2 = _interopRequireDefault(_comment);

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function cleanSource(nodes) {
    return nodes.map(function (i) {
        if (i.nodes) i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
    });
}

/**
 * @callback childCondition
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @param {Node[]} nodes - all container children
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @return {false|undefined} returning `false` will break iteration
 */

/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */

var Container = function (_Node) {
    _inherits(Container, _Node);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'push',
        value: function push(child) {
            child.parent = this;
            this.nodes.push(child);
            return this;
        }

        /**
         * Iterates through the container’s immediate children,
         * calling `callback` for each child.
         *
         * Returning `false` in the callback will break iteration.
         *
         * This method only iterates through the container’s immediate children.
         * If you need to recursively iterate through all the container’s descendant
         * nodes, use {@link Container#walk}.
         *
         * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
         * if you are mutating the array of child nodes during iteration.
         * PostCSS will adjust the current index to match the mutations.
         *
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * const root = postcss.parse('a { color: black; z-index: 1 }');
         * const rule = root.first;
         *
         * for ( let decl of rule.nodes ) {
         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
         *     // Cycle will be infinite, because cloneBefore moves the current node
         *     // to the next index
         * }
         *
         * rule.each(decl => {
         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
         *     // Will be executed only for color and z-index
         * });
         */

    }, {
        key: 'each',
        value: function each(callback) {
            if (!this.lastEach) this.lastEach = 0;
            if (!this.indexes) this.indexes = {};

            this.lastEach += 1;
            var id = this.lastEach;
            this.indexes[id] = 0;

            if (!this.nodes) return undefined;

            var index = void 0,
                result = void 0;
            while (this.indexes[id] < this.nodes.length) {
                index = this.indexes[id];
                result = callback(this.nodes[index], index);
                if (result === false) break;

                this.indexes[id] += 1;
            }

            delete this.indexes[id];

            return result;
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each node.
         *
         * Like container.each(), this method is safe to use
         * if you are mutating arrays during iteration.
         *
         * If you only need to iterate through the container’s immediate children,
         * use {@link Container#each}.
         *
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walk(node => {
         *   // Traverses all descendant nodes.
         * });
         */

    }, {
        key: 'walk',
        value: function walk(callback) {
            return this.each(function (child, i) {
                var result = callback(child, i);
                if (result !== false && child.walk) {
                    result = child.walk(callback);
                }
                return result;
            });
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each declaration node.
         *
         * If you pass a filter, iteration will only happen over declarations
         * with matching properties.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {string|RegExp} [prop]   - string or regular expression
         *                                   to filter declarations by property name
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walkDecls(decl => {
         *   checkPropertySupport(decl.prop);
         * });
         *
         * root.walkDecls('border-radius', decl => {
         *   decl.remove();
         * });
         *
         * root.walkDecls(/^background/, decl => {
         *   decl.value = takeFirstColorFromGradient(decl.value);
         * });
         */

    }, {
        key: 'walkDecls',
        value: function walkDecls(prop, callback) {
            if (!callback) {
                callback = prop;
                return this.walk(function (child, i) {
                    if (child.type === 'decl') {
                        return callback(child, i);
                    }
                });
            } else if (prop instanceof RegExp) {
                return this.walk(function (child, i) {
                    if (child.type === 'decl' && prop.test(child.prop)) {
                        return callback(child, i);
                    }
                });
            } else {
                return this.walk(function (child, i) {
                    if (child.type === 'decl' && child.prop === prop) {
                        return callback(child, i);
                    }
                });
            }
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each rule node.
         *
         * If you pass a filter, iteration will only happen over rules
         * with matching selectors.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {string|RegExp} [selector] - string or regular expression
         *                                     to filter rules by selector
         * @param {childIterator} callback   - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * const selectors = [];
         * root.walkRules(rule => {
         *   selectors.push(rule.selector);
         * });
         * console.log(`Your CSS uses ${selectors.length} selectors`);
         */

    }, {
        key: 'walkRules',
        value: function walkRules(selector, callback) {
            if (!callback) {
                callback = selector;

                return this.walk(function (child, i) {
                    if (child.type === 'rule') {
                        return callback(child, i);
                    }
                });
            } else if (selector instanceof RegExp) {
                return this.walk(function (child, i) {
                    if (child.type === 'rule' && selector.test(child.selector)) {
                        return callback(child, i);
                    }
                });
            } else {
                return this.walk(function (child, i) {
                    if (child.type === 'rule' && child.selector === selector) {
                        return callback(child, i);
                    }
                });
            }
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each at-rule node.
         *
         * If you pass a filter, iteration will only happen over at-rules
         * that have matching names.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {string|RegExp} [name]   - string or regular expression
         *                                   to filter at-rules by name
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walkAtRules(rule => {
         *   if ( isOld(rule.name) ) rule.remove();
         * });
         *
         * let first = false;
         * root.walkAtRules('charset', rule => {
         *   if ( !first ) {
         *     first = true;
         *   } else {
         *     rule.remove();
         *   }
         * });
         */

    }, {
        key: 'walkAtRules',
        value: function walkAtRules(name, callback) {
            if (!callback) {
                callback = name;
                return this.walk(function (child, i) {
                    if (child.type === 'atrule') {
                        return callback(child, i);
                    }
                });
            } else if (name instanceof RegExp) {
                return this.walk(function (child, i) {
                    if (child.type === 'atrule' && name.test(child.name)) {
                        return callback(child, i);
                    }
                });
            } else {
                return this.walk(function (child, i) {
                    if (child.type === 'atrule' && child.name === name) {
                        return callback(child, i);
                    }
                });
            }
        }

        /**
         * Traverses the container’s descendant nodes, calling callback
         * for each comment node.
         *
         * Like {@link Container#each}, this method is safe
         * to use if you are mutating arrays during iteration.
         *
         * @param {childIterator} callback - iterator receives each node and index
         *
         * @return {false|undefined} returns `false` if iteration was broke
         *
         * @example
         * root.walkComments(comment => {
         *   comment.remove();
         * });
         */

    }, {
        key: 'walkComments',
        value: function walkComments(callback) {
            return this.walk(function (child, i) {
                if (child.type === 'comment') {
                    return callback(child, i);
                }
            });
        }

        /**
         * Inserts new nodes to the start of the container.
         *
         * @param {...(Node|object|string|Node[])} children - new nodes
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
         * rule.append(decl1, decl2);
         *
         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
         * root.append({ selector: 'a' });                       // rule
         * rule.append({ prop: 'color', value: 'black' });       // declaration
         * rule.append({ text: 'Comment' })                      // comment
         *
         * root.append('a {}');
         * root.first.append('color: black; z-index: 1');
         */

    }, {
        key: 'append',
        value: function append() {
            var _this2 = this;

            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
                children[_key] = arguments[_key];
            }

            children.forEach(function (child) {
                var nodes = _this2.normalize(child, _this2.last);
                nodes.forEach(function (node) {
                    return _this2.nodes.push(node);
                });
            });
            return this;
        }

        /**
         * Inserts new nodes to the end of the container.
         *
         * @param {...(Node|object|string|Node[])} children - new nodes
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
         * rule.prepend(decl1, decl2);
         *
         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
         * root.append({ selector: 'a' });                       // rule
         * rule.append({ prop: 'color', value: 'black' });       // declaration
         * rule.append({ text: 'Comment' })                      // comment
         *
         * root.append('a {}');
         * root.first.append('color: black; z-index: 1');
         */

    }, {
        key: 'prepend',
        value: function prepend() {
            var _this3 = this;

            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                children[_key2] = arguments[_key2];
            }

            children = children.reverse();
            children.forEach(function (child) {
                var nodes = _this3.normalize(child, _this3.first, 'prepend').reverse();
                nodes.forEach(function (node) {
                    return _this3.nodes.unshift(node);
                });
                for (var id in _this3.indexes) {
                    _this3.indexes[id] = _this3.indexes[id] + nodes.length;
                }
            });
            return this;
        }
    }, {
        key: 'cleanRaws',
        value: function cleanRaws(keepBetween) {
            _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'cleanRaws', this).call(this, keepBetween);
            if (this.nodes) {
                this.nodes.forEach(function (node) {
                    return node.cleanRaws(keepBetween);
                });
            }
        }

        /**
         * Insert new node before old node within the container.
         *
         * @param {Node|number} exist             - child or child’s index.
         * @param {Node|object|string|Node[]} add - new node
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
         */

    }, {
        key: 'insertBefore',
        value: function insertBefore(exist, add) {
            var _this4 = this;

            exist = this.index(exist);

            var type = exist === 0 ? 'prepend' : false;
            var nodes = this.normalize(add, this.nodes[exist], type).reverse();
            nodes.forEach(function (node) {
                return _this4.nodes.splice(exist, 0, node);
            });

            var index = void 0;
            for (var id in this.indexes) {
                index = this.indexes[id];
                if (exist <= index) {
                    this.indexes[id] = index + nodes.length;
                }
            }

            return this;
        }

        /**
         * Insert new node after old node within the container.
         *
         * @param {Node|number} exist             - child or child’s index
         * @param {Node|object|string|Node[]} add - new node
         *
         * @return {Node} this node for methods chain
         */

    }, {
        key: 'insertAfter',
        value: function insertAfter(exist, add) {
            var _this5 = this;

            exist = this.index(exist);

            var nodes = this.normalize(add, this.nodes[exist]).reverse();
            nodes.forEach(function (node) {
                return _this5.nodes.splice(exist + 1, 0, node);
            });

            var index = void 0;
            for (var id in this.indexes) {
                index = this.indexes[id];
                if (exist < index) {
                    this.indexes[id] = index + nodes.length;
                }
            }

            return this;
        }
    }, {
        key: 'remove',
        value: function remove(child) {
            if (typeof child !== 'undefined') {
                (0, _warnOnce2.default)('Container#remove is deprecated. ' + 'Use Container#removeChild');
                this.removeChild(child);
            } else {
                _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'remove', this).call(this);
            }
            return this;
        }

        /**
         * Removes node from the container and cleans the parent properties
         * from the node and its children.
         *
         * @param {Node|number} child - child or child’s index
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * rule.nodes.length  //=> 5
         * rule.removeChild(decl);
         * rule.nodes.length  //=> 4
         * decl.parent        //=> undefined
         */

    }, {
        key: 'removeChild',
        value: function removeChild(child) {
            child = this.index(child);
            this.nodes[child].parent = undefined;
            this.nodes.splice(child, 1);

            var index = void 0;
            for (var id in this.indexes) {
                index = this.indexes[id];
                if (index >= child) {
                    this.indexes[id] = index - 1;
                }
            }

            return this;
        }

        /**
         * Removes all children from the container
         * and cleans their parent properties.
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * rule.removeAll();
         * rule.nodes.length //=> 0
         */

    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.nodes.forEach(function (node) {
                return node.parent = undefined;
            });
            this.nodes = [];
            return this;
        }

        /**
         * Passes all declaration values within the container that match pattern
         * through callback, replacing those values with the returned result
         * of callback.
         *
         * This method is useful if you are using a custom unit or function
         * and need to iterate through all values.
         *
         * @param {string|RegExp} pattern      - replace pattern
         * @param {object} opts                - options to speed up the search
         * @param {string|string[]} opts.props - an array of property names
         * @param {string} opts.fast           - string that’s used
         *                                       to narrow down values and speed up
                                                 the regexp search
         * @param {function|string} callback   - string to replace pattern
         *                                       or callback that returns a new
         *                                       value.
         *                                       The callback will receive
         *                                       the same arguments as those
         *                                       passed to a function parameter
         *                                       of `String#replace`.
         *
         * @return {Node} this node for methods chain
         *
         * @example
         * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
         *   return 15 * parseInt(string) + 'px';
         * });
         */

    }, {
        key: 'replaceValues',
        value: function replaceValues(pattern, opts, callback) {
            if (!callback) {
                callback = opts;
                opts = {};
            }

            this.walkDecls(function (decl) {
                if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
                if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;

                decl.value = decl.value.replace(pattern, callback);
            });

            return this;
        }

        /**
         * Returns `true` if callback returns `true`
         * for all of the container’s children.
         *
         * @param {childCondition} condition - iterator returns true or false.
         *
         * @return {boolean} is every child pass condition
         *
         * @example
         * const noPrefixes = rule.every(i => i.prop[0] !== '-');
         */

    }, {
        key: 'every',
        value: function every(condition) {
            return this.nodes.every(condition);
        }

        /**
         * Returns `true` if callback returns `true` for (at least) one
         * of the container’s children.
         *
         * @param {childCondition} condition - iterator returns true or false.
         *
         * @return {boolean} is some child pass condition
         *
         * @example
         * const hasPrefix = rule.some(i => i.prop[0] === '-');
         */

    }, {
        key: 'some',
        value: function some(condition) {
            return this.nodes.some(condition);
        }

        /**
         * Returns a `child`’s index within the {@link Container#nodes} array.
         *
         * @param {Node} child - child of the current container.
         *
         * @return {number} child index
         *
         * @example
         * rule.index( rule.nodes[2] ) //=> 2
         */

    }, {
        key: 'index',
        value: function index(child) {
            if (typeof child === 'number') {
                return child;
            } else {
                return this.nodes.indexOf(child);
            }
        }

        /**
         * The container’s first child.
         *
         * @type {Node}
         *
         * @example
         * rule.first == rules.nodes[0];
         */

    }, {
        key: 'normalize',
        value: function normalize(nodes, sample) {
            var _this6 = this;

            if (typeof nodes === 'string') {
                nodes = cleanSource((0, _parse2.default)(nodes).nodes);
            } else if (!Array.isArray(nodes)) {
                if (nodes.type === 'root') {
                    nodes = nodes.nodes;
                } else if (nodes.type) {
                    nodes = [nodes];
                } else if (nodes.prop) {
                    if (typeof nodes.value === 'undefined') {
                        throw new Error('Value field is missed in node creation');
                    } else if (typeof nodes.value !== 'string') {
                        nodes.value = String(nodes.value);
                    }
                    nodes = [new _declaration2.default(nodes)];
                } else if (nodes.selector) {
                    nodes = [new _rule2.default(nodes)];
                } else if (nodes.name) {
                    nodes = [new _atRule2.default(nodes)];
                } else if (nodes.text) {
                    nodes = [new _comment2.default(nodes)];
                } else {
                    throw new Error('Unknown node type in node creation');
                }
            }

            var processed = nodes.map(function (i) {
                if (typeof i.raws === 'undefined') i = _this6.rebuild(i);

                if (i.parent) i = i.clone();
                if (typeof i.raws.before === 'undefined') {
                    if (sample && typeof sample.raws.before !== 'undefined') {
                        i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
                    }
                }
                i.parent = _this6;
                return i;
            });

            return processed;
        }
    }, {
        key: 'rebuild',
        value: function rebuild(node, parent) {
            var _this7 = this;

            var fix = void 0;
            if (node.type === 'root') {
                fix = new _root2.default();
            } else if (node.type === 'atrule') {
                fix = new _atRule2.default();
            } else if (node.type === 'rule') {
                fix = new _rule2.default();
            } else if (node.type === 'decl') {
                fix = new _declaration2.default();
            } else if (node.type === 'comment') {
                fix = new _comment2.default();
            }

            for (var i in node) {
                if (i === 'nodes') {
                    fix.nodes = node.nodes.map(function (j) {
                        return _this7.rebuild(j, fix);
                    });
                } else if (i === 'parent' && parent) {
                    fix.parent = parent;
                } else if (node.hasOwnProperty(i)) {
                    fix[i] = node[i];
                }
            }

            return fix;
        }
    }, {
        key: 'eachInside',
        value: function eachInside(callback) {
            (0, _warnOnce2.default)('Container#eachInside is deprecated. ' + 'Use Container#walk instead.');
            return this.walk(callback);
        }
    }, {
        key: 'eachDecl',
        value: function eachDecl(prop, callback) {
            (0, _warnOnce2.default)('Container#eachDecl is deprecated. ' + 'Use Container#walkDecls instead.');
            return this.walkDecls(prop, callback);
        }
    }, {
        key: 'eachRule',
        value: function eachRule(selector, callback) {
            (0, _warnOnce2.default)('Container#eachRule is deprecated. ' + 'Use Container#walkRules instead.');
            return this.walkRules(selector, callback);
        }
    }, {
        key: 'eachAtRule',
        value: function eachAtRule(name, callback) {
            (0, _warnOnce2.default)('Container#eachAtRule is deprecated. ' + 'Use Container#walkAtRules instead.');
            return this.walkAtRules(name, callback);
        }
    }, {
        key: 'eachComment',
        value: function eachComment(callback) {
            (0, _warnOnce2.default)('Container#eachComment is deprecated. ' + 'Use Container#walkComments instead.');
            return this.walkComments(callback);
        }
    }, {
        key: 'first',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[0];
        }

        /**
         * The container’s last child.
         *
         * @type {Node}
         *
         * @example
         * rule.last == rule.nodes[rule.nodes.length - 1];
         */

    }, {
        key: 'last',
        get: function get() {
            if (!this.nodes) return undefined;
            return this.nodes[this.nodes.length - 1];
        }
    }, {
        key: 'semicolon',
        get: function get() {
            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
            return this.raws.semicolon;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
            this.raws.semicolon = val;
        }
    }, {
        key: 'after',
        get: function get() {
            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
            return this.raws.after;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
            this.raws.after = val;
        }

        /**
         * @memberof Container#
         * @member {Node[]} nodes - an array containing the container’s children
         *
         * @example
         * const root = postcss.parse('a { color: black }');
         * root.nodes.length           //=> 1
         * root.nodes[0].selector      //=> 'a'
         * root.nodes[0].nodes[0].prop //=> 'color'
         */

    }]);

    return Container;
}(_node2.default);

exports.default = Container;
module.exports = exports['default'];
},{"./at-rule":98,"./comment":99,"./declaration":102,"./node":106,"./parse":107,"./root":111,"./rule":112,"./warn-once":117}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _supportsColor = require('supports-color');

var _supportsColor2 = _interopRequireDefault(_supportsColor);

var _terminalHighlight = require('./terminal-highlight');

var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if ( error.name === 'CssSyntaxError' ) {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
 */
var CssSyntaxError = function () {

    /**
     * @param {string} message  - error message
     * @param {number} [line]   - source line of the error
     * @param {number} [column] - source column of the error
     * @param {string} [source] - source code of the broken file
     * @param {string} [file]   - absolute path to the broken file
     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
     */
    function CssSyntaxError(message, line, column, source, file, plugin) {
        _classCallCheck(this, CssSyntaxError);

        /**
         * @member {string} - Always equal to `'CssSyntaxError'`. You should
         *                    always check error type
         *                    by `error.name === 'CssSyntaxError'` instead of
         *                    `error instanceof CssSyntaxError`, because
         *                    npm could have several PostCSS versions.
         *
         * @example
         * if ( error.name === 'CssSyntaxError' ) {
         *   error //=> CssSyntaxError
         * }
         */
        this.name = 'CssSyntaxError';
        /**
         * @member {string} - Error message.
         *
         * @example
         * error.message //=> 'Unclosed block'
         */
        this.reason = message;

        if (file) {
            /**
             * @member {string} - Absolute path to the broken file.
             *
             * @example
             * error.file       //=> 'a.sass'
             * error.input.file //=> 'a.css'
             */
            this.file = file;
        }
        if (source) {
            /**
             * @member {string} - Source code of the broken file.
             *
             * @example
             * error.source       //=> 'a { b {} }'
             * error.input.column //=> 'a b { }'
             */
            this.source = source;
        }
        if (plugin) {
            /**
             * @member {string} - Plugin name, if error came from plugin.
             *
             * @example
             * error.plugin //=> 'postcss-vars'
             */
            this.plugin = plugin;
        }
        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
            /**
             * @member {number} - Source line of the error.
             *
             * @example
             * error.line       //=> 2
             * error.input.line //=> 4
             */
            this.line = line;
            /**
             * @member {number} - Source column of the error.
             *
             * @example
             * error.column       //=> 1
             * error.input.column //=> 4
             */
            this.column = column;
        }

        this.setMessage();

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }

    _createClass(CssSyntaxError, [{
        key: 'setMessage',
        value: function setMessage() {
            /**
             * @member {string} - Full error text in the GNU error format
             *                    with plugin, file, line and column.
             *
             * @example
             * error.message //=> 'a.css:1:1: Unclosed block'
             */
            this.message = this.plugin ? this.plugin + ': ' : '';
            this.message += this.file ? this.file : '<css input>';
            if (typeof this.line !== 'undefined') {
                this.message += ':' + this.line + ':' + this.column;
            }
            this.message += ': ' + this.reason;
        }

        /**
         * Returns a few lines of CSS source that caused the error.
         *
         * If the CSS has an input source map without `sourceContent`,
         * this method will return an empty string.
         *
         * @param {boolean} [color] whether arrow will be colored red by terminal
         *                          color codes. By default, PostCSS will detect
         *                          color support by `process.stdout.isTTY`
         *                          and `process.env.NODE_DISABLE_COLORS`.
         *
         * @example
         * error.showSourceCode() //=> "  4 | }
         *                        //      5 | a {
         *                        //    > 6 |   bad
         *                        //        |   ^
         *                        //      7 | }
         *                        //      8 | b {"
         *
         * @return {string} few lines of CSS source that caused the error
         */

    }, {
        key: 'showSourceCode',
        value: function showSourceCode(color) {
            var _this = this;

            if (!this.source) return '';

            var css = this.source;
            if (typeof color === 'undefined') color = _supportsColor2.default;
            if (color) css = (0, _terminalHighlight2.default)(css);

            var lines = css.split(/\r?\n/);
            var start = Math.max(this.line - 3, 0);
            var end = Math.min(this.line + 2, lines.length);

            var maxWidth = String(end).length;

            return lines.slice(start, end).map(function (line, index) {
                var number = start + 1 + index;
                var padded = (' ' + number).slice(-maxWidth);
                var gutter = ' ' + padded + ' | ';
                if (number === _this.line) {
                    var spacing = gutter.replace(/\d/g, ' ') + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
                    return '>' + gutter + line + '\n ' + spacing + '^';
                } else {
                    return ' ' + gutter + line;
                }
            }).join('\n');
        }

        /**
         * Returns error position, message and source code of the broken part.
         *
         * @example
         * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
         *                  //    > 1 | a {
         *                  //        | ^"
         *
         * @return {string} error position, message and source code
         */

    }, {
        key: 'toString',
        value: function toString() {
            var code = this.showSourceCode();
            if (code) {
                code = '\n\n' + code + '\n';
            }
            return this.name + ': ' + this.message + code;
        }
    }, {
        key: 'generated',
        get: function get() {
            (0, _warnOnce2.default)('CssSyntaxError#generated is depreacted. Use input instead.');
            return this.input;
        }

        /**
         * @memberof CssSyntaxError#
         * @member {Input} input - Input object with PostCSS internal information
         *                         about input file. If input has source map
         *                         from previous tool, PostCSS will use origin
         *                         (for example, Sass) source. You can use this
         *                         object to get PostCSS input source.
         *
         * @example
         * error.input.file //=> 'a.css'
         * error.file       //=> 'a.sass'
         */

    }]);

    return CssSyntaxError;
}();

exports.default = CssSyntaxError;
module.exports = exports['default'];
},{"./terminal-highlight":115,"./warn-once":117,"supports-color":119}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }');
 * const decl = root.first.first;
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */
var Declaration = function (_Node) {
    _inherits(Declaration, _Node);

    function Declaration(defaults) {
        _classCallCheck(this, Declaration);

        var _this = _possibleConstructorReturn(this, (Declaration.__proto__ || Object.getPrototypeOf(Declaration)).call(this, defaults));

        _this.type = 'decl';
        return _this;
    }

    _createClass(Declaration, [{
        key: '_value',
        get: function get() {
            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
            return this.raws.value;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
            this.raws.value = val;
        }
    }, {
        key: '_important',
        get: function get() {
            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
            return this.raws.important;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
            this.raws.important = val;
        }

        /**
         * @memberof Declaration#
         * @member {string} prop - the declaration’s property name
         *
         * @example
         * const root = postcss.parse('a { color: black }');
         * const decl = root.first.first;
         * decl.prop //=> 'color'
         */

        /**
         * @memberof Declaration#
         * @member {string} value - the declaration’s value
         *
         * @example
         * const root = postcss.parse('a { color: black }');
         * const decl = root.first.first;
         * decl.value //=> 'black'
         */

        /**
         * @memberof Declaration#
         * @member {boolean} important - `true` if the declaration
         *                               has an !important annotation.
         *
         * @example
         * const root = postcss.parse('a { color: black !important; color: red }');
         * root.first.first.important //=> true
         * root.first.last.important  //=> undefined
         */

        /**
         * @memberof Declaration#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `important`: the content of the important statement,
         *   if it is not just `!important`.
         *
         * PostCSS cleans declaration from comments and extra spaces,
         * but it stores origin content in raws properties.
         * As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('a {\n  color:black\n}')
         * root.first.first.raws //=> { before: '\n  ', between: ':' }
         */

    }]);

    return Declaration;
}(_node2.default);

exports.default = Declaration;
module.exports = exports['default'];
},{"./node":106,"./warn-once":117}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // break cyclical dependency deadlock – #87

require('./root');

var _cssSyntaxError = require('./css-syntax-error');

var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import PreviousMap    from './previous-map';

var sequence = 0;

/**
 * @typedef  {object} filePosition
 * @property {string} file   - path to file
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

/**
 * Represents the source CSS.
 *
 * @example
 * const root  = postcss.parse(css, { from: file });
 * const input = root.source.input;
 */

var Input = function () {

    /**
     * @param {string} css    - input CSS source
     * @param {object} [opts] - {@link Processor#process} options
     */
    function Input(css) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Input);

        /**
         * @member {string} - input CSS source
         *
         * @example
         * const input = postcss.parse('a{}', { from: file }).input;
         * input.css //=> "a{}";
         */
        this.css = css.toString();

        if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
            this.css = this.css.slice(1);
        }

        if (opts.from) {
            if (/^\w+:\/\//.test(opts.from)) {
                /**
                 * @member {string} - The absolute path to the CSS source file
                 *                    defined with the `from` option.
                 *
                 * @example
                 * const root = postcss.parse(css, { from: 'a.css' });
                 * root.source.input.file //=> '/home/ai/a.css'
                 */
                this.file = opts.from;
            } else {
                this.file = path.resolve(opts.from);
            }
        }

        /*
                let map = new PreviousMap(this.css, opts);
                if ( map.text ) {
                    /!**
                     * @member {PreviousMap} - The input source map passed from
                     *                         a compilation step before PostCSS
                     *                         (for example, from Sass compiler).
                     *
                     * @example
                     * root.source.input.map.consumer().sources //=> ['a.sass']
                     *!/
                    this.map = map;
                    let file = map.consumer().file;
                    if ( !this.file && file ) this.file = this.mapResolve(file);
                }
        */

        if (!this.file) {
            sequence += 1;
            /**
             * @member {string} - The unique ID of the CSS source. It will be
             *                    created if `from` option is not provided
             *                    (because PostCSS does not know the file path).
             *
             * @example
             * const root = postcss.parse(css);
             * root.source.input.file //=> undefined
             * root.source.input.id   //=> "<input css 1>"
             */
            this.id = '<input css ' + sequence + '>';
        }
        if (this.map) this.map.file = this.from;
    }

    _createClass(Input, [{
        key: 'error',
        value: function error(message, line, column) {
            var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var result = void 0;
            var origin = this.origin(line, column);
            if (origin) {
                result = new _cssSyntaxError2.default(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
            } else {
                result = new _cssSyntaxError2.default(message, line, column, this.css, this.file, opts.plugin);
            }

            result.input = { line: line, column: column, source: this.css };
            if (this.file) result.input.file = this.file;

            return result;
        }

        /**
         * Reads the input source map and returns a symbol position
         * in the input source (e.g., in a Sass file that was compiled
         * to CSS before being passed to PostCSS).
         *
         * @param {number} line   - line in input CSS
         * @param {number} column - column in input CSS
         *
         * @return {filePosition} position in input source
         *
         * @example
         * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
         */

    }, {
        key: 'origin',
        value: function origin(line, column) {
            if (!this.map) return false;
            var consumer = this.map.consumer();

            var from = consumer.originalPositionFor({ line: line, column: column });
            if (!from.source) return false;

            var result = {
                file: this.mapResolve(from.source),
                line: from.line,
                column: from.column
            };

            var source = consumer.sourceContentFor(from.source);
            if (source) result.source = source;

            return result;
        }
    }, {
        key: 'mapResolve',
        value: function mapResolve(file) {
            if (/^\w+:\/\//.test(file)) {
                return file;
            } else {
                return path.resolve(this.map.consumer().sourceRoot || '.', file);
            }
        }

        /**
         * The CSS source identifier. Contains {@link Input#file} if the user
         * set the `from` option, or {@link Input#id} if they did not.
         * @type {string}
         *
         * @example
         * const root = postcss.parse(css, { from: 'a.css' });
         * root.source.input.from //=> "/home/ai/a.css"
         *
         * const root = postcss.parse(css);
         * root.source.input.from //=> "<input css 1>"
         */

    }, {
        key: 'from',
        get: function get() {
            return this.file || this.id;
        }
    }]);

    return Input;
}();

exports.default = Input;
module.exports = exports['default'];
},{"./css-syntax-error":101,"./root":111}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stringify2 = require('./stringify');

var _stringify3 = _interopRequireDefault(_stringify2);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _result = require('./result');

var _result2 = _interopRequireDefault(_result);

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function isPromise(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.then === 'function';
}

/**
 * @callback onFulfilled
 * @param {Result} result
 */

/**
 * @callback onRejected
 * @param {Error} error
 */

/**
 * A Promise proxy for the result of PostCSS transformations.
 *
 * A `LazyResult` instance is returned by {@link Processor#process}.
 *
 * @example
 * const lazy = postcss([cssnext]).process(css);
 */

var LazyResult = function () {
    function LazyResult(processor, css, opts) {
        _classCallCheck(this, LazyResult);

        this.stringified = false;
        this.processed = false;

        var root = void 0;
        if ((typeof css === 'undefined' ? 'undefined' : _typeof(css)) === 'object' && css.type === 'root') {
            root = css;
        } else if (css instanceof LazyResult || css instanceof _result2.default) {
            root = css.root;
            if (css.map) {
                if (typeof opts.map === 'undefined') opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            var parser = _parse2.default;
            if (opts.syntax) parser = opts.syntax.parse;
            if (opts.parser) parser = opts.parser;
            if (parser.parse) parser = parser.parse;

            try {
                root = parser(css, opts);
            } catch (error) {
                this.error = error;
            }
        }

        this.result = new _result2.default(processor, root, opts);
    }

    /**
     * Returns a {@link Processor} instance, which will be used
     * for CSS transformations.
     * @type {Processor}
     */


    _createClass(LazyResult, [{
        key: 'warnings',


        /**
         * Processes input CSS through synchronous plugins
         * and calls {@link Result#warnings()}.
         *
         * @return {Warning[]} warnings from plugins
         */
        value: function warnings() {
            return this.sync().warnings();
        }

        /**
         * Alias for the {@link LazyResult#css} property.
         *
         * @example
         * lazy + '' === lazy.css;
         *
         * @return {string} output CSS
         */

    }, {
        key: 'toString',
        value: function toString() {
            return this.css;
        }

        /**
         * Processes input CSS through synchronous and asynchronous plugins
         * and calls `onFulfilled` with a Result instance. If a plugin throws
         * an error, the `onRejected` callback will be executed.
         *
         * It implements standard Promise API.
         *
         * @param {onFulfilled} onFulfilled - callback will be executed
         *                                    when all plugins will finish work
         * @param {onRejected}  onRejected  - callback will be execited on any error
         *
         * @return {Promise} Promise API to make queue
         *
         * @example
         * postcss([cssnext]).process(css).then(result => {
         *   console.log(result.css);
         * });
         */

    }, {
        key: 'then',
        value: function then(onFulfilled, onRejected) {
            return this.async().then(onFulfilled, onRejected);
        }

        /**
         * Processes input CSS through synchronous and asynchronous plugins
         * and calls onRejected for each error thrown in any plugin.
         *
         * It implements standard Promise API.
         *
         * @param {onRejected} onRejected - callback will be execited on any error
         *
         * @return {Promise} Promise API to make queue
         *
         * @example
         * postcss([cssnext]).process(css).then(result => {
         *   console.log(result.css);
         * }).catch(error => {
         *   console.error(error);
         * });
         */

    }, {
        key: 'catch',
        value: function _catch(onRejected) {
            return this.async().catch(onRejected);
        }
    }, {
        key: 'handleError',
        value: function handleError(error, plugin) {
            try {
                this.error = error;
                if (error.name === 'CssSyntaxError' && !error.plugin) {
                    error.plugin = plugin.postcssPlugin;
                    error.setMessage();
                } else if (plugin.postcssVersion) {
                    var pluginName = plugin.postcssPlugin;
                    var pluginVer = plugin.postcssVersion;
                    var runtimeVer = this.result.processor.version;
                    var a = pluginVer.split('.');
                    var b = runtimeVer.split('.');

                    if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
                        (0, _warnOnce2.default)('Your current PostCSS version ' + 'is ' + runtimeVer + ', but ' + pluginName + ' ' + 'uses ' + pluginVer + '. Perhaps this is ' + 'the source of the error below.');
                    }
                }
            } catch (err) {
                if (console && console.error) console.error(err);
            }
        }
    }, {
        key: 'asyncTick',
        value: function asyncTick(resolve, reject) {
            var _this = this;

            if (this.plugin >= this.processor.plugins.length) {
                this.processed = true;
                return resolve();
            }

            try {
                (function () {
                    var plugin = _this.processor.plugins[_this.plugin];
                    var promise = _this.run(plugin);
                    _this.plugin += 1;

                    if (isPromise(promise)) {
                        promise.then(function () {
                            _this.asyncTick(resolve, reject);
                        }).catch(function (error) {
                            _this.handleError(error, plugin);
                            _this.processed = true;
                            reject(error);
                        });
                    } else {
                        _this.asyncTick(resolve, reject);
                    }
                })();
            } catch (error) {
                this.processed = true;
                reject(error);
            }
        }
    }, {
        key: 'async',
        value: function async() {
            var _this2 = this;

            if (this.processed) {
                return new Promise(function (resolve, reject) {
                    if (_this2.error) {
                        reject(_this2.error);
                    } else {
                        resolve(_this2.stringify());
                    }
                });
            }
            if (this.processing) {
                return this.processing;
            }

            this.processing = new Promise(function (resolve, reject) {
                if (_this2.error) return reject(_this2.error);
                _this2.plugin = 0;
                _this2.asyncTick(resolve, reject);
            }).then(function () {
                _this2.processed = true;
                return _this2.stringify();
            });

            return this.processing;
        }
    }, {
        key: 'sync',
        value: function sync() {
            var _this3 = this;

            if (this.processed) return this.result;
            this.processed = true;

            if (this.processing) {
                throw new Error('Use process(css).then(cb) to work with async plugins');
            }

            if (this.error) throw this.error;

            this.result.processor.plugins.forEach(function (plugin) {
                var promise = _this3.run(plugin);
                if (isPromise(promise)) {
                    throw new Error('Use process(css).then(cb) to work with async plugins');
                }
            });

            return this.result;
        }
    }, {
        key: 'run',
        value: function run(plugin) {
            this.result.lastPlugin = plugin;

            try {
                return plugin(this.result.root, this.result);
            } catch (error) {
                this.handleError(error, plugin);
                throw error;
            }
        }
    }, {
        key: 'stringify',
        value: function stringify() {
            if (this.stringified) return this.result;
            this.stringified = true;

            this.sync();

            var opts = this.result.opts;
            var str = _stringify3.default;
            if (opts.syntax) str = opts.syntax.stringify;
            if (opts.stringifier) str = opts.stringifier;
            if (str.stringify) str = str.stringify;

            var result = '';
            str(this.root, function (i) {
                result += i;
            });
            this.result.css = result;

            return this.result;
        }
    }, {
        key: 'processor',
        get: function get() {
            return this.result.processor;
        }

        /**
         * Options from the {@link Processor#process} call.
         * @type {processOptions}
         */

    }, {
        key: 'opts',
        get: function get() {
            return this.result.opts;
        }

        /**
         * Processes input CSS through synchronous plugins, converts `Root`
         * to a CSS string and returns {@link Result#css}.
         *
         * This property will only work with synchronous plugins.
         * If the processor contains any asynchronous plugins
         * it will throw an error. This is why this method is only
         * for debug purpose, you should always use {@link LazyResult#then}.
         *
         * @type {string}
         * @see Result#css
         */

    }, {
        key: 'css',
        get: function get() {
            return this.stringify().css;
        }

        /**
         * An alias for the `css` property. Use it with syntaxes
         * that generate non-CSS output.
         *
         * This property will only work with synchronous plugins.
         * If the processor contains any asynchronous plugins
         * it will throw an error. This is why this method is only
         * for debug purpose, you should always use {@link LazyResult#then}.
         *
         * @type {string}
         * @see Result#content
         */

    }, {
        key: 'content',
        get: function get() {
            return this.stringify().content;
        }

        /**
         * Processes input CSS through synchronous plugins
         * and returns {@link Result#map}.
         *
         * This property will only work with synchronous plugins.
         * If the processor contains any asynchronous plugins
         * it will throw an error. This is why this method is only
         * for debug purpose, you should always use {@link LazyResult#then}.
         *
         * @type {SourceMapGenerator}
         * @see Result#map
         */

    }, {
        key: 'map',
        get: function get() {
            return this.stringify().map;
        }

        /**
         * Processes input CSS through synchronous plugins
         * and returns {@link Result#root}.
         *
         * This property will only work with synchronous plugins. If the processor
         * contains any asynchronous plugins it will throw an error.
         *
         * This is why this method is only for debug purpose,
         * you should always use {@link LazyResult#then}.
         *
         * @type {Root}
         * @see Result#root
         */

    }, {
        key: 'root',
        get: function get() {
            return this.sync().root;
        }

        /**
         * Processes input CSS through synchronous plugins
         * and returns {@link Result#messages}.
         *
         * This property will only work with synchronous plugins. If the processor
         * contains any asynchronous plugins it will throw an error.
         *
         * This is why this method is only for debug purpose,
         * you should always use {@link LazyResult#then}.
         *
         * @type {Message[]}
         * @see Result#messages
         */

    }, {
        key: 'messages',
        get: function get() {
            return this.sync().messages;
        }
    }]);

    return LazyResult;
}();

exports.default = LazyResult;
module.exports = exports['default'];
},{"./parse":107,"./result":110,"./stringify":114,"./warn-once":117}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Contains helpers for safely splitting lists of CSS values,
 * preserving parentheses and quotes.
 *
 * @example
 * const list = postcss.list;
 *
 * @namespace list
 */
var list = {
    split: function split(string, separators, last) {
        var array = [];
        var current = '';
        var split = false;

        var func = 0;
        var quote = false;
        var escape = false;

        for (var i = 0; i < string.length; i++) {
            var letter = string[i];

            if (quote) {
                if (escape) {
                    escape = false;
                } else if (letter === '\\') {
                    escape = true;
                } else if (letter === quote) {
                    quote = false;
                }
            } else if (letter === '"' || letter === '\'') {
                quote = letter;
            } else if (letter === '(') {
                func += 1;
            } else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.indexOf(letter) !== -1) split = true;
            }

            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else {
                current += letter;
            }
        }

        if (last || current !== '') array.push(current.trim());
        return array;
    },


    /**
     * Safely splits space-separated values (such as those for `background`,
     * `border-radius`, and other shorthand properties).
     *
     * @param {string} string - space-separated values
     *
     * @return {string[]} splitted values
     *
     * @example
     * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
     */
    space: function space(string) {
        var spaces = [' ', '\n', '\t'];
        return list.split(string, spaces);
    },


    /**
     * Safely splits comma-separated values (such as those for `transition-*`
     * and `background` properties).
     *
     * @param {string} string - comma-separated values
     *
     * @return {string[]} splitted values
     *
     * @example
     * postcss.list.comma('black, linear-gradient(white, black)')
     * //=> ['black', 'linear-gradient(white, black)']
     */
    comma: function comma(string) {
        var comma = ',';
        return list.split(string, [comma], true);
    }
};

exports.default = list;
module.exports = exports['default'];
},{}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _cssSyntaxError = require('./css-syntax-error');

var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

var _stringifier = require('./stringifier');

var _stringifier2 = _interopRequireDefault(_stringifier);

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {object} position
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

/**
 * @typedef {object} source
 * @property {Input} input    - {@link Input} with input file
 * @property {position} start - The starting position of the node’s source
 * @property {position} end   - The ending position of the node’s source
 */

var cloneNode = function cloneNode(obj, parent) {
    var cloned = new obj.constructor();

    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        var value = obj[i];
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

        if (i === 'parent' && type === 'object') {
            if (parent) cloned[i] = parent;
        } else if (i === 'source') {
            cloned[i] = value;
        } else if (value instanceof Array) {
            cloned[i] = value.map(function (j) {
                return cloneNode(j, cloned);
            });
        } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
            if (type === 'object' && value !== null) value = cloneNode(value);
            cloned[i] = value;
        }
    }

    return cloned;
};

/**
 * All node classes inherit the following common methods.
 *
 * @abstract
 */

var Node = function () {

    /**
     * @param {object} [defaults] - value for node properties
     */
    function Node() {
        var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Node);

        this.raws = {};
        for (var name in defaults) {
            this[name] = defaults[name];
        }
    }

    /**
     * Returns a CssSyntaxError instance containing the original position
     * of the node in the source, showing line and column numbers and also
     * a small excerpt to facilitate debugging.
     *
     * If present, an input source map will be used to get the original position
     * of the source, even from a previous compilation step
     * (e.g., from Sass compilation).
     *
     * This method produces very useful error messages.
     *
     * @param {string} message     - error description
     * @param {object} [opts]      - options
     * @param {string} opts.plugin - plugin name that created this error.
     *                               PostCSS will set it automatically.
     * @param {string} opts.word   - a word inside a node’s string that should
     *                               be highlighted as the source of the error
     * @param {number} opts.index  - an index inside a node’s string that should
     *                               be highlighted as the source of the error
     *
     * @return {CssSyntaxError} error object to throw it
     *
     * @example
     * if ( !variables[name] ) {
     *   throw decl.error('Unknown variable ' + name, { word: name });
     *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
     *   //   color: $black
     *   // a
     *   //          ^
     *   //   background: white
     * }
     */


    _createClass(Node, [{
        key: 'error',
        value: function error(message) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.source) {
                var pos = this.positionBy(opts);
                return this.source.input.error(message, pos.line, pos.column, opts);
            } else {
                return new _cssSyntaxError2.default(message);
            }
        }

        /**
         * This method is provided as a convenience wrapper for {@link Result#warn}.
         *
         * @param {Result} result      - the {@link Result} instance
         *                               that will receive the warning
         * @param {string} text        - warning message
         * @param {object} [opts]      - options
         * @param {string} opts.plugin - plugin name that created this warning.
         *                               PostCSS will set it automatically.
         * @param {string} opts.word   - a word inside a node’s string that should
         *                               be highlighted as the source of the warning
         * @param {number} opts.index  - an index inside a node’s string that should
         *                               be highlighted as the source of the warning
         *
         * @return {Warning} created warning object
         *
         * @example
         * const plugin = postcss.plugin('postcss-deprecated', () => {
         *   return (root, result) => {
         *     root.walkDecls('bad', decl => {
         *       decl.warn(result, 'Deprecated property bad');
         *     });
         *   };
         * });
         */

    }, {
        key: 'warn',
        value: function warn(result, text, opts) {
            var data = { node: this };
            for (var i in opts) {
                data[i] = opts[i];
            }return result.warn(text, data);
        }

        /**
         * Removes the node from its parent and cleans the parent properties
         * from the node and its children.
         *
         * @example
         * if ( decl.prop.match(/^-webkit-/) ) {
         *   decl.remove();
         * }
         *
         * @return {Node} node to make calls chain
         */

    }, {
        key: 'remove',
        value: function remove() {
            if (this.parent) {
                this.parent.removeChild(this);
            }
            this.parent = undefined;
            return this;
        }

        /**
         * Returns a CSS string representing the node.
         *
         * @param {stringifier|syntax} [stringifier] - a syntax to use
         *                                             in string generation
         *
         * @return {string} CSS string of this node
         *
         * @example
         * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
         */

    }, {
        key: 'toString',
        value: function toString() {
            var stringifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stringify2.default;

            if (stringifier.stringify) stringifier = stringifier.stringify;
            var result = '';
            stringifier(this, function (i) {
                result += i;
            });
            return result;
        }

        /**
         * Returns a clone of the node.
         *
         * The resulting cloned node and its (cloned) children will have
         * a clean parent and code style properties.
         *
         * @param {object} [overrides] - new properties to override in the clone.
         *
         * @example
         * const cloned = decl.clone({ prop: '-moz-' + decl.prop });
         * cloned.raws.before  //=> undefined
         * cloned.parent       //=> undefined
         * cloned.toString()   //=> -moz-transform: scale(0)
         *
         * @return {Node} clone of the node
         */

    }, {
        key: 'clone',
        value: function clone() {
            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var cloned = cloneNode(this);
            for (var name in overrides) {
                cloned[name] = overrides[name];
            }
            return cloned;
        }

        /**
         * Shortcut to clone the node and insert the resulting cloned node
         * before the current node.
         *
         * @param {object} [overrides] - new properties to override in the clone.
         *
         * @example
         * decl.cloneBefore({ prop: '-moz-' + decl.prop });
         *
         * @return {Node} - new node
         */

    }, {
        key: 'cloneBefore',
        value: function cloneBefore() {
            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var cloned = this.clone(overrides);
            this.parent.insertBefore(this, cloned);
            return cloned;
        }

        /**
         * Shortcut to clone the node and insert the resulting cloned node
         * after the current node.
         *
         * @param {object} [overrides] - new properties to override in the clone.
         *
         * @return {Node} - new node
         */

    }, {
        key: 'cloneAfter',
        value: function cloneAfter() {
            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var cloned = this.clone(overrides);
            this.parent.insertAfter(this, cloned);
            return cloned;
        }

        /**
         * Inserts node(s) before the current node and removes the current node.
         *
         * @param {...Node} nodes - node(s) to replace current one
         *
         * @example
         * if ( atrule.name == 'mixin' ) {
         *   atrule.replaceWith(mixinRules[atrule.params]);
         * }
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'replaceWith',
        value: function replaceWith() {
            var _this = this;

            if (this.parent) {
                for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
                    nodes[_key] = arguments[_key];
                }

                nodes.forEach(function (node) {
                    _this.parent.insertBefore(_this, node);
                });

                this.remove();
            }

            return this;
        }

        /**
         * Removes the node from its current parent and inserts it
         * at the end of `newParent`.
         *
         * This will clean the `before` and `after` code {@link Node#raws} data
         * from the node and replace them with the indentation style of `newParent`.
         * It will also clean the `between` property
         * if `newParent` is in another {@link Root}.
         *
         * @param {Container} newParent - container node where the current node
         *                                will be moved
         *
         * @example
         * atrule.moveTo(atrule.root());
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'moveTo',
        value: function moveTo(newParent) {
            this.cleanRaws(this.root() === newParent.root());
            this.remove();
            newParent.append(this);
            return this;
        }

        /**
         * Removes the node from its current parent and inserts it into
         * a new parent before `otherNode`.
         *
         * This will also clean the node’s code style properties just as it would
         * in {@link Node#moveTo}.
         *
         * @param {Node} otherNode - node that will be before current node
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'moveBefore',
        value: function moveBefore(otherNode) {
            this.cleanRaws(this.root() === otherNode.root());
            this.remove();
            otherNode.parent.insertBefore(otherNode, this);
            return this;
        }

        /**
         * Removes the node from its current parent and inserts it into
         * a new parent after `otherNode`.
         *
         * This will also clean the node’s code style properties just as it would
         * in {@link Node#moveTo}.
         *
         * @param {Node} otherNode - node that will be after current node
         *
         * @return {Node} current node to methods chain
         */

    }, {
        key: 'moveAfter',
        value: function moveAfter(otherNode) {
            this.cleanRaws(this.root() === otherNode.root());
            this.remove();
            otherNode.parent.insertAfter(otherNode, this);
            return this;
        }

        /**
         * Returns the next child of the node’s parent.
         * Returns `undefined` if the current node is the last child.
         *
         * @return {Node|undefined} next node
         *
         * @example
         * if ( comment.text === 'delete next' ) {
         *   const next = comment.next();
         *   if ( next ) {
         *     next.remove();
         *   }
         * }
         */

    }, {
        key: 'next',
        value: function next() {
            var index = this.parent.index(this);
            return this.parent.nodes[index + 1];
        }

        /**
         * Returns the previous child of the node’s parent.
         * Returns `undefined` if the current node is the first child.
         *
         * @return {Node|undefined} previous node
         *
         * @example
         * const annotation = decl.prev();
         * if ( annotation.type == 'comment' ) {
         *  readAnnotation(annotation.text);
         * }
         */

    }, {
        key: 'prev',
        value: function prev() {
            var index = this.parent.index(this);
            return this.parent.nodes[index - 1];
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var fixed = {};

            for (var name in this) {
                if (!this.hasOwnProperty(name)) continue;
                if (name === 'parent') continue;
                var value = this[name];

                if (value instanceof Array) {
                    fixed[name] = value.map(function (i) {
                        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && i.toJSON) {
                            return i.toJSON();
                        } else {
                            return i;
                        }
                    });
                } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.toJSON) {
                    fixed[name] = value.toJSON();
                } else {
                    fixed[name] = value;
                }
            }

            return fixed;
        }

        /**
         * Returns a {@link Node#raws} value. If the node is missing
         * the code style property (because the node was manually built or cloned),
         * PostCSS will try to autodetect the code style property by looking
         * at other nodes in the tree.
         *
         * @param {string} prop          - name of code style property
         * @param {string} [defaultType] - name of default value, it can be missed
         *                                 if the value is the same as prop
         *
         * @example
         * const root = postcss.parse('a { background: white }');
         * root.nodes[0].append({ prop: 'color', value: 'black' });
         * root.nodes[0].nodes[1].raws.before   //=> undefined
         * root.nodes[0].nodes[1].raw('before') //=> ' '
         *
         * @return {string} code style value
         */

    }, {
        key: 'raw',
        value: function raw(prop, defaultType) {
            var str = new _stringifier2.default();
            return str.raw(this, prop, defaultType);
        }

        /**
         * Finds the Root instance of the node’s tree.
         *
         * @example
         * root.nodes[0].nodes[0].root() === root
         *
         * @return {Root} root parent
         */

    }, {
        key: 'root',
        value: function root() {
            var result = this;
            while (result.parent) {
                result = result.parent;
            }return result;
        }
    }, {
        key: 'cleanRaws',
        value: function cleanRaws(keepBetween) {
            delete this.raws.before;
            delete this.raws.after;
            if (!keepBetween) delete this.raws.between;
        }
    }, {
        key: 'positionInside',
        value: function positionInside(index) {
            var string = this.toString();
            var column = this.source.start.column;
            var line = this.source.start.line;

            for (var i = 0; i < index; i++) {
                if (string[i] === '\n') {
                    column = 1;
                    line += 1;
                } else {
                    column += 1;
                }
            }

            return { line: line, column: column };
        }
    }, {
        key: 'positionBy',
        value: function positionBy(opts) {
            var pos = this.source.start;
            if (opts.index) {
                pos = this.positionInside(opts.index);
            } else if (opts.word) {
                var index = this.toString().indexOf(opts.word);
                if (index !== -1) pos = this.positionInside(index);
            }
            return pos;
        }
    }, {
        key: 'removeSelf',
        value: function removeSelf() {
            (0, _warnOnce2.default)('Node#removeSelf is deprecated. Use Node#remove.');
            return this.remove();
        }
    }, {
        key: 'replace',
        value: function replace(nodes) {
            (0, _warnOnce2.default)('Node#replace is deprecated. Use Node#replaceWith');
            return this.replaceWith(nodes);
        }
    }, {
        key: 'style',
        value: function style(own, detect) {
            (0, _warnOnce2.default)('Node#style() is deprecated. Use Node#raw()');
            return this.raw(own, detect);
        }
    }, {
        key: 'cleanStyles',
        value: function cleanStyles(keepBetween) {
            (0, _warnOnce2.default)('Node#cleanStyles() is deprecated. Use Node#cleanRaws()');
            return this.cleanRaws(keepBetween);
        }
    }, {
        key: 'before',
        get: function get() {
            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
            return this.raws.before;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
            this.raws.before = val;
        }
    }, {
        key: 'between',
        get: function get() {
            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
            return this.raws.between;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
            this.raws.between = val;
        }

        /**
         * @memberof Node#
         * @member {string} type - String representing the node’s type.
         *                         Possible values are `root`, `atrule`, `rule`,
         *                         `decl`, or `comment`.
         *
         * @example
         * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
         */

        /**
         * @memberof Node#
         * @member {Container} parent - the node’s parent node.
         *
         * @example
         * root.nodes[0].parent == root;
         */

        /**
         * @memberof Node#
         * @member {source} source - the input source of the node
         *
         * The property is used in source map generation.
         *
         * If you create a node manually (e.g., with `postcss.decl()`),
         * that node will not have a `source` property and will be absent
         * from the source map. For this reason, the plugin developer should
         * consider cloning nodes to create new ones (in which case the new node’s
         * source will reference the original, cloned node) or setting
         * the `source` property manually.
         *
         * ```js
         * // Bad
         * const prefixed = postcss.decl({
         *   prop: '-moz-' + decl.prop,
         *   value: decl.value
         * });
         *
         * // Good
         * const prefixed = decl.clone({ prop: '-moz-' + decl.prop });
         * ```
         *
         * ```js
         * if ( atrule.name == 'add-link' ) {
         *   const rule = postcss.rule({ selector: 'a', source: atrule.source });
         *   atrule.parent.insertBefore(atrule, rule);
         * }
         * ```
         *
         * @example
         * decl.source.input.from //=> '/home/ai/a.sass'
         * decl.source.start      //=> { line: 10, column: 2 }
         * decl.source.end        //=> { line: 10, column: 12 }
         */

        /**
         * @memberof Node#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `after`: the space symbols after the last child of the node
         *   to the end of the node.
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `semicolon`: contains true if the last child has
         *   an (optional) semicolon.
         * * `afterName`: the space between the at-rule name and its parameters.
         * * `left`: the space symbols between `/*` and the comment’s text.
         * * `right`: the space symbols between the comment’s text
         *   and <code>*&#47;</code>.
         * * `important`: the content of the important statement,
         *   if it is not just `!important`.
         *
         * PostCSS cleans selectors, declaration values and at-rule parameters
         * from comments and extra spaces, but it stores origin content in raws
         * properties. As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('a {\n  color:black\n}')
         * root.first.first.raws //=> { before: '\n  ', between: ':' }
         */

    }]);

    return Node;
}();

exports.default = Node;
module.exports = exports['default'];
},{"./css-syntax-error":101,"./stringifier":113,"./stringify":114,"./warn-once":117}],107:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parse;

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(css, opts) {
    if (opts && opts.safe) {
        throw new Error('Option safe was removed. ' + 'Use parser: require("postcss-safe-parser")');
    }

    var input = new _input2.default(css, opts);

    var parser = new _parser2.default(input);
    try {
        parser.tokenize();
        parser.loop();
    } catch (e) {
        if (e.name === 'CssSyntaxError' && opts && opts.from) {
            if (/\.scss$/i.test(opts.from)) {
                e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
            } else if (/\.less$/i.test(opts.from)) {
                e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
            }
        }
        throw e;
    }

    return parser.root;
}
module.exports = exports['default'];
},{"./input":103,"./parser":108}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _declaration = require('./declaration');

var _declaration2 = _interopRequireDefault(_declaration);

var _tokenize = require('./tokenize');

var _tokenize2 = _interopRequireDefault(_tokenize);

var _comment = require('./comment');

var _comment2 = _interopRequireDefault(_comment);

var _atRule = require('./at-rule');

var _atRule2 = _interopRequireDefault(_atRule);

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

var _rule = require('./rule');

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {
    function Parser(input) {
        _classCallCheck(this, Parser);

        this.input = input;

        this.pos = 0;
        this.root = new _root2.default();
        this.current = this.root;
        this.spaces = '';
        this.semicolon = false;

        this.root.source = { input: input, start: { line: 1, column: 1 } };
    }

    _createClass(Parser, [{
        key: 'tokenize',
        value: function tokenize() {
            this.tokens = (0, _tokenize2.default)(this.input);
        }
    }, {
        key: 'loop',
        value: function loop() {
            var token = void 0;
            while (this.pos < this.tokens.length) {
                token = this.tokens[this.pos];

                switch (token[0]) {

                    case 'space':
                    case ';':
                        this.spaces += token[1];
                        break;

                    case '}':
                        this.end(token);
                        break;

                    case 'comment':
                        this.comment(token);
                        break;

                    case 'at-word':
                        this.atrule(token);
                        break;

                    case '{':
                        this.emptyRule(token);
                        break;

                    default:
                        this.other();
                        break;
                }

                this.pos += 1;
            }
            this.endFile();
        }
    }, {
        key: 'comment',
        value: function comment(token) {
            var node = new _comment2.default();
            this.init(node, token[2], token[3]);
            node.source.end = { line: token[4], column: token[5] };

            var text = token[1].slice(2, -2);
            if (/^\s*$/.test(text)) {
                node.text = '';
                node.raws.left = text;
                node.raws.right = '';
            } else {
                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
                node.text = match[2];
                node.raws.left = match[1];
                node.raws.right = match[3];
            }
        }
    }, {
        key: 'emptyRule',
        value: function emptyRule(token) {
            var node = new _rule2.default();
            this.init(node, token[2], token[3]);
            node.selector = '';
            node.raws.between = '';
            this.current = node;
        }
    }, {
        key: 'other',
        value: function other() {
            var token = void 0;
            var end = false;
            var type = null;
            var colon = false;
            var bracket = null;
            var brackets = [];

            var start = this.pos;
            while (this.pos < this.tokens.length) {
                token = this.tokens[this.pos];
                type = token[0];

                if (type === '(' || type === '[') {
                    if (!bracket) bracket = token;
                    brackets.push(type === '(' ? ')' : ']');
                } else if (brackets.length === 0) {
                    if (type === ';') {
                        if (colon) {
                            this.decl(this.tokens.slice(start, this.pos + 1));
                            return;
                        } else {
                            break;
                        }
                    } else if (type === '{') {
                        this.rule(this.tokens.slice(start, this.pos + 1));
                        return;
                    } else if (type === '}') {
                        this.pos -= 1;
                        end = true;
                        break;
                    } else if (type === ':') {
                        colon = true;
                    }
                } else if (type === brackets[brackets.length - 1]) {
                    brackets.pop();
                    if (brackets.length === 0) bracket = null;
                }

                this.pos += 1;
            }
            if (this.pos === this.tokens.length) {
                this.pos -= 1;
                end = true;
            }

            if (brackets.length > 0) this.unclosedBracket(bracket);

            if (end && colon) {
                while (this.pos > start) {
                    token = this.tokens[this.pos][0];
                    if (token !== 'space' && token !== 'comment') break;
                    this.pos -= 1;
                }
                this.decl(this.tokens.slice(start, this.pos + 1));
                return;
            }

            this.unknownWord(start);
        }
    }, {
        key: 'rule',
        value: function rule(tokens) {
            tokens.pop();

            var node = new _rule2.default();
            this.init(node, tokens[0][2], tokens[0][3]);

            node.raws.between = this.spacesFromEnd(tokens);
            this.raw(node, 'selector', tokens);
            this.current = node;
        }
    }, {
        key: 'decl',
        value: function decl(tokens) {
            var node = new _declaration2.default();
            this.init(node);

            var last = tokens[tokens.length - 1];
            if (last[0] === ';') {
                this.semicolon = true;
                tokens.pop();
            }
            if (last[4]) {
                node.source.end = { line: last[4], column: last[5] };
            } else {
                node.source.end = { line: last[2], column: last[3] };
            }

            while (tokens[0][0] !== 'word') {
                node.raws.before += tokens.shift()[1];
            }
            node.source.start = { line: tokens[0][2], column: tokens[0][3] };

            node.prop = '';
            while (tokens.length) {
                var type = tokens[0][0];
                if (type === ':' || type === 'space' || type === 'comment') {
                    break;
                }
                node.prop += tokens.shift()[1];
            }

            node.raws.between = '';

            var token = void 0;
            while (tokens.length) {
                token = tokens.shift();

                if (token[0] === ':') {
                    node.raws.between += token[1];
                    break;
                } else {
                    node.raws.between += token[1];
                }
            }

            if (node.prop[0] === '_' || node.prop[0] === '*') {
                node.raws.before += node.prop[0];
                node.prop = node.prop.slice(1);
            }
            node.raws.between += this.spacesFromStart(tokens);
            this.precheckMissedSemicolon(tokens);

            for (var i = tokens.length - 1; i > 0; i--) {
                token = tokens[i];
                if (token[1] === '!important') {
                    node.important = true;
                    var string = this.stringFrom(tokens, i);
                    string = this.spacesFromEnd(tokens) + string;
                    if (string !== ' !important') node.raws.important = string;
                    break;
                } else if (token[1] === 'important') {
                    var cache = tokens.slice(0);
                    var str = '';
                    for (var j = i; j > 0; j--) {
                        var _type = cache[j][0];
                        if (str.trim().indexOf('!') === 0 && _type !== 'space') {
                            break;
                        }
                        str = cache.pop()[1] + str;
                    }
                    if (str.trim().indexOf('!') === 0) {
                        node.important = true;
                        node.raws.important = str;
                        tokens = cache;
                    }
                }

                if (token[0] !== 'space' && token[0] !== 'comment') {
                    break;
                }
            }

            this.raw(node, 'value', tokens);

            if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
        }
    }, {
        key: 'atrule',
        value: function atrule(token) {
            var node = new _atRule2.default();
            node.name = token[1].slice(1);
            if (node.name === '') {
                this.unnamedAtrule(node, token);
            }
            this.init(node, token[2], token[3]);

            var last = false;
            var open = false;
            var params = [];

            this.pos += 1;
            while (this.pos < this.tokens.length) {
                token = this.tokens[this.pos];

                if (token[0] === ';') {
                    node.source.end = { line: token[2], column: token[3] };
                    this.semicolon = true;
                    break;
                } else if (token[0] === '{') {
                    open = true;
                    break;
                } else if (token[0] === '}') {
                    this.end(token);
                    break;
                } else {
                    params.push(token);
                }

                this.pos += 1;
            }
            if (this.pos === this.tokens.length) {
                last = true;
            }

            node.raws.between = this.spacesFromEnd(params);
            if (params.length) {
                node.raws.afterName = this.spacesFromStart(params);
                this.raw(node, 'params', params);
                if (last) {
                    token = params[params.length - 1];
                    node.source.end = { line: token[4], column: token[5] };
                    this.spaces = node.raws.between;
                    node.raws.between = '';
                }
            } else {
                node.raws.afterName = '';
                node.params = '';
            }

            if (open) {
                node.nodes = [];
                this.current = node;
            }
        }
    }, {
        key: 'end',
        value: function end(token) {
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.semicolon = false;

            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
            this.spaces = '';

            if (this.current.parent) {
                this.current.source.end = { line: token[2], column: token[3] };
                this.current = this.current.parent;
            } else {
                this.unexpectedClose(token);
            }
        }
    }, {
        key: 'endFile',
        value: function endFile() {
            if (this.current.parent) this.unclosedBlock();
            if (this.current.nodes && this.current.nodes.length) {
                this.current.raws.semicolon = this.semicolon;
            }
            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
        }

        // Helpers

    }, {
        key: 'init',
        value: function init(node, line, column) {
            this.current.push(node);

            node.source = { start: { line: line, column: column }, input: this.input };
            node.raws.before = this.spaces;
            this.spaces = '';
            if (node.type !== 'comment') this.semicolon = false;
        }
    }, {
        key: 'raw',
        value: function raw(node, prop, tokens) {
            var token = void 0,
                type = void 0;
            var length = tokens.length;
            var value = '';
            var clean = true;
            for (var i = 0; i < length; i += 1) {
                token = tokens[i];
                type = token[0];
                if (type === 'comment' || type === 'space' && i === length - 1) {
                    clean = false;
                } else {
                    value += token[1];
                }
            }
            if (!clean) {
                var raw = tokens.reduce(function (all, i) {
                    return all + i[1];
                }, '');
                node.raws[prop] = { value: value, raw: raw };
            }
            node[prop] = value;
        }
    }, {
        key: 'spacesFromEnd',
        value: function spacesFromEnd(tokens) {
            var lastTokenType = void 0;
            var spaces = '';
            while (tokens.length) {
                lastTokenType = tokens[tokens.length - 1][0];
                if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
                spaces = tokens.pop()[1] + spaces;
            }
            return spaces;
        }
    }, {
        key: 'spacesFromStart',
        value: function spacesFromStart(tokens) {
            var next = void 0;
            var spaces = '';
            while (tokens.length) {
                next = tokens[0][0];
                if (next !== 'space' && next !== 'comment') break;
                spaces += tokens.shift()[1];
            }
            return spaces;
        }
    }, {
        key: 'stringFrom',
        value: function stringFrom(tokens, from) {
            var result = '';
            for (var i = from; i < tokens.length; i++) {
                result += tokens[i][1];
            }
            tokens.splice(from, tokens.length - from);
            return result;
        }
    }, {
        key: 'colon',
        value: function colon(tokens) {
            var brackets = 0;
            var token = void 0,
                type = void 0,
                prev = void 0;
            for (var i = 0; i < tokens.length; i++) {
                token = tokens[i];
                type = token[0];

                if (type === '(') {
                    brackets += 1;
                } else if (type === ')') {
                    brackets -= 1;
                } else if (brackets === 0 && type === ':') {
                    if (!prev) {
                        this.doubleColon(token);
                    } else if (prev[0] === 'word' && prev[1] === 'progid') {
                        continue;
                    } else {
                        return i;
                    }
                }

                prev = token;
            }
            return false;
        }

        // Errors

    }, {
        key: 'unclosedBracket',
        value: function unclosedBracket(bracket) {
            throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
        }
    }, {
        key: 'unknownWord',
        value: function unknownWord(start) {
            var token = this.tokens[start];
            throw this.input.error('Unknown word', token[2], token[3]);
        }
    }, {
        key: 'unexpectedClose',
        value: function unexpectedClose(token) {
            throw this.input.error('Unexpected }', token[2], token[3]);
        }
    }, {
        key: 'unclosedBlock',
        value: function unclosedBlock() {
            var pos = this.current.source.start;
            throw this.input.error('Unclosed block', pos.line, pos.column);
        }
    }, {
        key: 'doubleColon',
        value: function doubleColon(token) {
            throw this.input.error('Double colon', token[2], token[3]);
        }
    }, {
        key: 'unnamedAtrule',
        value: function unnamedAtrule(node, token) {
            throw this.input.error('At-rule without name', token[2], token[3]);
        }
    }, {
        key: 'precheckMissedSemicolon',
        value: function precheckMissedSemicolon(tokens) {
            // Hook for Safe Parser
            tokens;
        }
    }, {
        key: 'checkMissedSemicolon',
        value: function checkMissedSemicolon(tokens) {
            var colon = this.colon(tokens);
            if (colon === false) return;

            var founded = 0;
            var token = void 0;
            for (var j = colon - 1; j >= 0; j--) {
                token = tokens[j];
                if (token[0] !== 'space') {
                    founded += 1;
                    if (founded === 2) break;
                }
            }
            throw this.input.error('Missed semicolon', token[2], token[3]);
        }
    }]);

    return Parser;
}();

exports.default = Parser;
module.exports = exports['default'];
},{"./at-rule":98,"./comment":99,"./declaration":102,"./root":111,"./rule":112,"./tokenize":116}],109:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lazyResult = require('./lazy-result');

var _lazyResult2 = _interopRequireDefault(_lazyResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @callback builder
 * @param {string} part          - part of generated CSS connected to this node
 * @param {Node}   node          - AST node
 * @param {"start"|"end"} [type] - node’s part type
 */

/**
 * @callback parser
 *
 * @param {string|toString} css   - string with input CSS or any object
 *                                  with toString() method, like a Buffer
 * @param {processOptions} [opts] - options with only `from` and `map` keys
 *
 * @return {Root} PostCSS AST
 */

/**
 * @callback stringifier
 *
 * @param {Node} node       - start node for stringifing. Usually {@link Root}.
 * @param {builder} builder - function to concatenate CSS from node’s parts
 *                            or generate string and source map
 *
 * @return {void}
 */

/**
 * @typedef {object} syntax
 * @property {parser} parse          - function to generate AST by string
 * @property {stringifier} stringify - function to generate string by AST
 */

/**
 * @typedef {object} toString
 * @property {function} toString
 */

/**
 * @callback pluginFunction
 * @param {Root} root     - parsed input CSS
 * @param {Result} result - result to set warnings or check other plugins
 */

/**
 * @typedef {object} Plugin
 * @property {function} postcss - PostCSS plugin function
 */

/**
 * @typedef {object} processOptions
 * @property {string} from             - the path of the CSS source file.
 *                                       You should always set `from`,
 *                                       because it is used in source map
 *                                       generation and syntax error messages.
 * @property {string} to               - the path where you’ll put the output
 *                                       CSS file. You should always set `to`
 *                                       to generate correct source maps.
 * @property {parser} parser           - function to generate AST by string
 * @property {stringifier} stringifier - class to generate string by AST
 * @property {syntax} syntax           - object with `parse` and `stringify`
 * @property {object} map              - source map options
 * @property {boolean} map.inline                    - does source map should
 *                                                     be embedded in the output
 *                                                     CSS as a base64-encoded
 *                                                     comment
 * @property {string|object|false|function} map.prev - source map content
 *                                                     from a previous
 *                                                     processing step
 *                                                     (for example, Sass).
 *                                                     PostCSS will try to find
 *                                                     previous map
 *                                                     automatically, so you
 *                                                     could disable it by
 *                                                     `false` value.
 * @property {boolean} map.sourcesContent            - does PostCSS should set
 *                                                     the origin content to map
 * @property {string|false} map.annotation           - does PostCSS should set
 *                                                     annotation comment to map
 * @property {string} map.from                       - override `from` in map’s
 *                                                     `sources`
 */

/**
 * Contains plugins to process CSS. Create one `Processor` instance,
 * initialize its plugins, and then use that instance on numerous CSS files.
 *
 * @example
 * const processor = postcss([autoprefixer, precss]);
 * processor.process(css1).then(result => console.log(result.css));
 * processor.process(css2).then(result => console.log(result.css));
 */
var Processor = function () {

  /**
   * @param {Array.<Plugin|pluginFunction>|Processor} plugins - PostCSS
   *        plugins. See {@link Processor#use} for plugin format.
   */
  function Processor() {
    var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Processor);

    /**
     * @member {string} - Current PostCSS version.
     *
     * @example
     * if ( result.processor.version.split('.')[0] !== '5' ) {
     *   throw new Error('This plugin works only with PostCSS 5');
     * }
     */
    this.version = '5.2.0';
    /**
     * @member {pluginFunction[]} - Plugins added to this processor.
     *
     * @example
     * const processor = postcss([autoprefixer, precss]);
     * processor.plugins.length //=> 2
     */
    this.plugins = this.normalize(plugins);
  }

  /**
   * Adds a plugin to be used as a CSS processor.
   *
   * PostCSS plugin can be in 4 formats:
   * * A plugin created by {@link postcss.plugin} method.
   * * A function. PostCSS will pass the function a @{link Root}
   *   as the first argument and current {@link Result} instance
   *   as the second.
   * * An object with a `postcss` method. PostCSS will use that method
   *   as described in #2.
   * * Another {@link Processor} instance. PostCSS will copy plugins
   *   from that instance into this one.
   *
   * Plugins can also be added by passing them as arguments when creating
   * a `postcss` instance (see [`postcss(plugins)`]).
   *
   * Asynchronous plugins should return a `Promise` instance.
   *
   * @param {Plugin|pluginFunction|Processor} plugin - PostCSS plugin
   *                                                   or {@link Processor}
   *                                                   with plugins
   *
   * @example
   * const processor = postcss()
   *   .use(autoprefixer)
   *   .use(precss);
   *
   * @return {Processes} current processor to make methods chain
   */


  _createClass(Processor, [{
    key: 'use',
    value: function use(plugin) {
      this.plugins = this.plugins.concat(this.normalize([plugin]));
      return this;
    }

    /**
     * Parses source CSS and returns a {@link LazyResult} Promise proxy.
     * Because some plugins can be asynchronous it doesn’t make
     * any transformations. Transformations will be applied
     * in the {@link LazyResult} methods.
     *
     * @param {string|toString|Result} css - String with input CSS or
     *                                       any object with a `toString()`
     *                                       method, like a Buffer.
     *                                       Optionally, send a {@link Result}
     *                                       instance and the processor will
     *                                       take the {@link Root} from it.
     * @param {processOptions} [opts]      - options
     *
     * @return {LazyResult} Promise proxy
     *
     * @example
     * processor.process(css, { from: 'a.css', to: 'a.out.css' })
     *   .then(result => {
     *      console.log(result.css);
     *   });
     */

  }, {
    key: 'process',
    value: function process(css) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return new _lazyResult2.default(this, css, opts);
    }
  }, {
    key: 'normalize',
    value: function normalize(plugins) {
      var normalized = [];
      plugins.forEach(function (i) {
        if (i.postcss) i = i.postcss;

        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && Array.isArray(i.plugins)) {
          normalized = normalized.concat(i.plugins);
        } else if (typeof i === 'function') {
          normalized.push(i);
        } else {
          throw new Error(i + ' is not a PostCSS plugin');
        }
      });
      return normalized;
    }
  }]);

  return Processor;
}();

exports.default = Processor;
module.exports = exports['default'];
},{"./lazy-result":104}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = require('./warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef  {object} Message
 * @property {string} type   - message type
 * @property {string} plugin - source PostCSS plugin name
 */

/**
 * Provides the result of the PostCSS transformations.
 *
 * A Result instance is returned by {@link LazyResult#then}
 * or {@link Root#toResult} methods.
 *
 * @example
 * postcss([cssnext]).process(css).then(function (result) {
 *    console.log(result.css);
 * });
 *
 * @example
 * var result2 = postcss.parse(css).toResult();
 */
var Result = function () {

  /**
   * @param {Processor} processor - processor used for this transformation.
   * @param {Root}      root      - Root node after all transformations.
   * @param {processOptions} opts - options from the {@link Processor#process}
   *                                or {@link Root#toResult}
   */
  function Result(processor, root, opts) {
    _classCallCheck(this, Result);

    /**
     * @member {Processor} - The Processor instance used
     *                       for this transformation.
     *
     * @example
     * for ( let plugin of result.processor.plugins) {
     *   if ( plugin.postcssPlugin === 'postcss-bad' ) {
     *     throw 'postcss-good is incompatible with postcss-bad';
     *   }
     * });
     */
    this.processor = processor;
    /**
     * @member {Message[]} - Contains messages from plugins
     *                       (e.g., warnings or custom messages).
     *                       Each message should have type
     *                       and plugin properties.
     *
     * @example
     * postcss.plugin('postcss-min-browser', () => {
     *   return (root, result) => {
     *     var browsers = detectMinBrowsersByCanIUse(root);
     *     result.messages.push({
     *       type:    'min-browser',
     *       plugin:  'postcss-min-browser',
     *       browsers: browsers
     *     });
     *   };
     * });
     */
    this.messages = [];
    /**
     * @member {Root} - Root node after all transformations.
     *
     * @example
     * root.toResult().root == root;
     */
    this.root = root;
    /**
     * @member {processOptions} - Options from the {@link Processor#process}
     *                            or {@link Root#toResult} call
     *                            that produced this Result instance.
     *
     * @example
     * root.toResult(opts).opts == opts;
     */
    this.opts = opts;
    /**
     * @member {string} - A CSS string representing of {@link Result#root}.
     *
     * @example
     * postcss.parse('a{}').toResult().css //=> "a{}"
     */
    this.css = undefined;
    /**
     * @member {SourceMapGenerator} - An instance of `SourceMapGenerator`
     *                                class from the `source-map` library,
     *                                representing changes
     *                                to the {@link Result#root} instance.
     *
     * @example
     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
     *
     * @example
     * if ( result.map ) {
     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString());
     * }
     */
    this.map = undefined;
  }

  /**
   * Returns for @{link Result#css} content.
   *
   * @example
   * result + '' === result.css
   *
   * @return {string} string representing of {@link Result#root}
   */


  _createClass(Result, [{
    key: 'toString',
    value: function toString() {
      return this.css;
    }

    /**
     * Creates an instance of {@link Warning} and adds it
     * to {@link Result#messages}.
     *
     * @param {string} text        - warning message
     * @param {Object} [opts]      - warning options
     * @param {Node}   opts.node   - CSS node that caused the warning
     * @param {string} opts.word   - word in CSS source that caused the warning
     * @param {number} opts.index  - index in CSS node string that caused
     *                               the warning
     * @param {string} opts.plugin - name of the plugin that created
     *                               this warning. {@link Result#warn} fills
     *                               this property automatically.
     *
     * @return {Warning} created warning
     */

  }, {
    key: 'warn',
    value: function warn(text) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!opts.plugin) {
        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
          opts.plugin = this.lastPlugin.postcssPlugin;
        }
      }

      var warning = new _warning2.default(text, opts);
      this.messages.push(warning);

      return warning;
    }

    /**
     * Returns warnings from plugins. Filters {@link Warning} instances
     * from {@link Result#messages}.
     *
     * @example
     * result.warnings().forEach(warn => {
     *   console.warn(warn.toString());
     * });
     *
     * @return {Warning[]} warnings from plugins
     */

  }, {
    key: 'warnings',
    value: function warnings() {
      return this.messages.filter(function (i) {
        return i.type === 'warning';
      });
    }

    /**
     * An alias for the {@link Result#css} property.
     * Use it with syntaxes that generate non-CSS output.
     * @type {string}
     *
     * @example
     * result.css === result.content;
     */

  }, {
    key: 'content',
    get: function get() {
      return this.css;
    }
  }]);

  return Result;
}();

exports.default = Result;
module.exports = exports['default'];
},{"./warning":118}],111:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

require('./rule');

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _lazyResult = require('./lazy-result');

var _lazyResult2 = _interopRequireDefault(_lazyResult);

var _processor = require('./processor');

var _processor2 = _interopRequireDefault(_processor);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // break cyclical dependency deadlock – #87

/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{color:black} b{z-index:2}');
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 */
var Root = function (_Container) {
    _inherits(Root, _Container);

    function Root(defaults) {
        _classCallCheck(this, Root);

        var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, defaults));

        _this.type = 'root';
        if (!_this.nodes) _this.nodes = [];
        return _this;
    }

    _createClass(Root, [{
        key: 'removeChild',
        value: function removeChild(child) {
            child = this.index(child);

            if (child === 0 && this.nodes.length > 1) {
                this.nodes[1].raws.before = this.nodes[child].raws.before;
            }

            return _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'removeChild', this).call(this, child);
        }
    }, {
        key: 'normalize',
        value: function normalize(child, sample, type) {
            var nodes = _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'normalize', this).call(this, child);

            if (sample) {
                if (type === 'prepend') {
                    if (this.nodes.length > 1) {
                        sample.raws.before = this.nodes[1].raws.before;
                    } else {
                        delete sample.raws.before;
                    }
                } else if (this.first !== sample) {
                    nodes.forEach(function (node) {
                        node.raws.before = sample.raws.before;
                    });
                }
            }

            return nodes;
        }

        /**
         * Returns a {@link Result} instance representing the root’s CSS.
         *
         * @param {processOptions} [opts] - options with only `to` and `map` keys
         *
         * @return {Result} result with current root’s CSS
         *
         * @example
         * const root1 = postcss.parse(css1, { from: 'a.css' });
         * const root2 = postcss.parse(css2, { from: 'b.css' });
         * root1.append(root2);
         * const result = root1.toResult({ to: 'all.css', map: true });
         */

    }, {
        key: 'toResult',
        value: function toResult() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var lazy = new _lazyResult2.default(new _processor2.default(), this, opts);
            return lazy.stringify();
        }
    }, {
        key: 'remove',
        value: function remove(child) {
            (0, _warnOnce2.default)('Root#remove is deprecated. Use Root#removeChild');
            this.removeChild(child);
        }
    }, {
        key: 'prevMap',
        value: function prevMap() {
            (0, _warnOnce2.default)('Root#prevMap is deprecated. Use Root#source.input.map');
            return this.source.input.map;
        }

        /**
         * @memberof Root#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `after`: the space symbols after the last child to the end of file.
         * * `semicolon`: is the last child has an (optional) semicolon.
         *
         * @example
         * postcss.parse('a {}\n').raws //=> { after: '\n' }
         * postcss.parse('a {}').raws   //=> { after: '' }
         */

    }]);

    return Root;
}(_container2.default);

exports.default = Root;
module.exports = exports['default'];
},{"./container":100,"./lazy-result":104,"./processor":109,"./rule":112,"./warn-once":117}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./at-rule');

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _warnOnce = require('./warn-once');

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // break cyclical dependency deadlock – #87

/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}');
 * const rule = root.first;
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */
var Rule = function (_Container) {
    _inherits(Rule, _Container);

    function Rule(defaults) {
        _classCallCheck(this, Rule);

        var _this = _possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).call(this, defaults));

        _this.type = 'rule';
        if (!_this.nodes) _this.nodes = [];
        return _this;
    }

    /**
     * An array containing the rule’s individual selectors.
     * Groups of selectors are split at commas.
     *
     * @type {string[]}
     *
     * @example
     * const root = postcss.parse('a, b { }');
     * const rule = root.first;
     *
     * rule.selector  //=> 'a, b'
     * rule.selectors //=> ['a', 'b']
     *
     * rule.selectors = ['a', 'strong'];
     * rule.selector //=> 'a, strong'
     */


    _createClass(Rule, [{
        key: 'selectors',
        get: function get() {
            return _list2.default.comma(this.selector);
        },
        set: function set(values) {
            var match = this.selector ? this.selector.match(/,\s*/) : null;
            var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
            this.selector = values.join(sep);
        }
    }, {
        key: '_selector',
        get: function get() {
            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
            return this.raws.selector;
        },
        set: function set(val) {
            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
            this.raws.selector = val;
        }

        /**
         * @memberof Rule#
         * @member {string} selector - the rule’s full selector represented
         *                             as a string
         *
         * @example
         * const root = postcss.parse('a, b { }');
         * const rule = root.first;
         * rule.selector //=> 'a, b'
         */

        /**
         * @memberof Rule#
         * @member {object} raws - Information to generate byte-to-byte equal
         *                         node string as it was in the origin input.
         *
         * Every parser saves its own properties,
         * but the default CSS parser uses:
         *
         * * `before`: the space symbols before the node. It also stores `*`
         *   and `_` symbols before the declaration (IE hack).
         * * `after`: the space symbols after the last child of the node
         *   to the end of the node.
         * * `between`: the symbols between the property and value
         *   for declarations, selector and `{` for rules, or last parameter
         *   and `{` for at-rules.
         * * `semicolon`: contains true if the last child has
         *   an (optional) semicolon.
         *
         * PostCSS cleans selectors from comments and extra spaces,
         * but it stores origin content in raws properties.
         * As such, if you don’t change a declaration’s value,
         * PostCSS will use the raw value with comments.
         *
         * @example
         * const root = postcss.parse('a {\n  color:black\n}')
         * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
         */

    }]);

    return Rule;
}(_container2.default);

exports.default = Rule;
module.exports = exports['default'];
},{"./at-rule":98,"./container":100,"./list":105,"./warn-once":117}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable valid-jsdoc */

var defaultRaw = {
    colon: ': ',
    indent: '    ',
    beforeDecl: '\n',
    beforeRule: '\n',
    beforeOpen: ' ',
    beforeClose: '\n',
    beforeComment: '\n',
    after: '\n',
    emptyBody: '',
    commentLeft: ' ',
    commentRight: ' '
};

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

var Stringifier = function () {
    function Stringifier(builder) {
        _classCallCheck(this, Stringifier);

        this.builder = builder;
    }

    _createClass(Stringifier, [{
        key: 'stringify',
        value: function stringify(node, semicolon) {
            this[node.type](node, semicolon);
        }
    }, {
        key: 'root',
        value: function root(node) {
            this.body(node);
            if (node.raws.after) this.builder(node.raws.after);
        }
    }, {
        key: 'comment',
        value: function comment(node) {
            var left = this.raw(node, 'left', 'commentLeft');
            var right = this.raw(node, 'right', 'commentRight');
            this.builder('/*' + left + node.text + right + '*/', node);
        }
    }, {
        key: 'decl',
        value: function decl(node, semicolon) {
            var between = this.raw(node, 'between', 'colon');
            var string = node.prop + between + this.rawValue(node, 'value');

            if (node.important) {
                string += node.raws.important || ' !important';
            }

            if (semicolon) string += ';';
            this.builder(string, node);
        }
    }, {
        key: 'rule',
        value: function rule(node) {
            this.block(node, this.rawValue(node, 'selector'));
        }
    }, {
        key: 'atrule',
        value: function atrule(node, semicolon) {
            var name = '@' + node.name;
            var params = node.params ? this.rawValue(node, 'params') : '';

            if (typeof node.raws.afterName !== 'undefined') {
                name += node.raws.afterName;
            } else if (params) {
                name += ' ';
            }

            if (node.nodes) {
                this.block(node, name + params);
            } else {
                var end = (node.raws.between || '') + (semicolon ? ';' : '');
                this.builder(name + params + end, node);
            }
        }
    }, {
        key: 'body',
        value: function body(node) {
            var last = node.nodes.length - 1;
            while (last > 0) {
                if (node.nodes[last].type !== 'comment') break;
                last -= 1;
            }

            var semicolon = this.raw(node, 'semicolon');
            for (var i = 0; i < node.nodes.length; i++) {
                var child = node.nodes[i];
                var before = this.raw(child, 'before');
                if (before) this.builder(before);
                this.stringify(child, last !== i || semicolon);
            }
        }
    }, {
        key: 'block',
        value: function block(node, start) {
            var between = this.raw(node, 'between', 'beforeOpen');
            this.builder(start + between + '{', node, 'start');

            var after = void 0;
            if (node.nodes && node.nodes.length) {
                this.body(node);
                after = this.raw(node, 'after');
            } else {
                after = this.raw(node, 'after', 'emptyBody');
            }

            if (after) this.builder(after);
            this.builder('}', node, 'end');
        }
    }, {
        key: 'raw',
        value: function raw(node, own, detect) {
            var value = void 0;
            if (!detect) detect = own;

            // Already had
            if (own) {
                value = node.raws[own];
                if (typeof value !== 'undefined') return value;
            }

            var parent = node.parent;

            // Hack for first rule in CSS
            if (detect === 'before') {
                if (!parent || parent.type === 'root' && parent.first === node) {
                    return '';
                }
            }

            // Floating child without parent
            if (!parent) return defaultRaw[detect];

            // Detect style by other nodes
            var root = node.root();
            if (!root.rawCache) root.rawCache = {};
            if (typeof root.rawCache[detect] !== 'undefined') {
                return root.rawCache[detect];
            }

            if (detect === 'before' || detect === 'after') {
                return this.beforeAfter(node, detect);
            } else {
                var method = 'raw' + capitalize(detect);
                if (this[method]) {
                    value = this[method](root, node);
                } else {
                    root.walk(function (i) {
                        value = i.raws[own];
                        if (typeof value !== 'undefined') return false;
                    });
                }
            }

            if (typeof value === 'undefined') value = defaultRaw[detect];

            root.rawCache[detect] = value;
            return value;
        }
    }, {
        key: 'rawSemicolon',
        value: function rawSemicolon(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && i.nodes.length && i.last.type === 'decl') {
                    value = i.raws.semicolon;
                    if (typeof value !== 'undefined') return false;
                }
            });
            return value;
        }
    }, {
        key: 'rawEmptyBody',
        value: function rawEmptyBody(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && i.nodes.length === 0) {
                    value = i.raws.after;
                    if (typeof value !== 'undefined') return false;
                }
            });
            return value;
        }
    }, {
        key: 'rawIndent',
        value: function rawIndent(root) {
            if (root.raws.indent) return root.raws.indent;
            var value = void 0;
            root.walk(function (i) {
                var p = i.parent;
                if (p && p !== root && p.parent && p.parent === root) {
                    if (typeof i.raws.before !== 'undefined') {
                        var parts = i.raws.before.split('\n');
                        value = parts[parts.length - 1];
                        value = value.replace(/[^\s]/g, '');
                        return false;
                    }
                }
            });
            return value;
        }
    }, {
        key: 'rawBeforeComment',
        value: function rawBeforeComment(root, node) {
            var value = void 0;
            root.walkComments(function (i) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.indexOf('\n') !== -1) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            });
            if (typeof value === 'undefined') {
                value = this.raw(node, null, 'beforeDecl');
            }
            return value;
        }
    }, {
        key: 'rawBeforeDecl',
        value: function rawBeforeDecl(root, node) {
            var value = void 0;
            root.walkDecls(function (i) {
                if (typeof i.raws.before !== 'undefined') {
                    value = i.raws.before;
                    if (value.indexOf('\n') !== -1) {
                        value = value.replace(/[^\n]+$/, '');
                    }
                    return false;
                }
            });
            if (typeof value === 'undefined') {
                value = this.raw(node, null, 'beforeRule');
            }
            return value;
        }
    }, {
        key: 'rawBeforeRule',
        value: function rawBeforeRule(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && (i.parent !== root || root.first !== i)) {
                    if (typeof i.raws.before !== 'undefined') {
                        value = i.raws.before;
                        if (value.indexOf('\n') !== -1) {
                            value = value.replace(/[^\n]+$/, '');
                        }
                        return false;
                    }
                }
            });
            return value;
        }
    }, {
        key: 'rawBeforeClose',
        value: function rawBeforeClose(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.nodes && i.nodes.length > 0) {
                    if (typeof i.raws.after !== 'undefined') {
                        value = i.raws.after;
                        if (value.indexOf('\n') !== -1) {
                            value = value.replace(/[^\n]+$/, '');
                        }
                        return false;
                    }
                }
            });
            return value;
        }
    }, {
        key: 'rawBeforeOpen',
        value: function rawBeforeOpen(root) {
            var value = void 0;
            root.walk(function (i) {
                if (i.type !== 'decl') {
                    value = i.raws.between;
                    if (typeof value !== 'undefined') return false;
                }
            });
            return value;
        }
    }, {
        key: 'rawColon',
        value: function rawColon(root) {
            var value = void 0;
            root.walkDecls(function (i) {
                if (typeof i.raws.between !== 'undefined') {
                    value = i.raws.between.replace(/[^\s:]/g, '');
                    return false;
                }
            });
            return value;
        }
    }, {
        key: 'beforeAfter',
        value: function beforeAfter(node, detect) {
            var value = void 0;
            if (node.type === 'decl') {
                value = this.raw(node, null, 'beforeDecl');
            } else if (node.type === 'comment') {
                value = this.raw(node, null, 'beforeComment');
            } else if (detect === 'before') {
                value = this.raw(node, null, 'beforeRule');
            } else {
                value = this.raw(node, null, 'beforeClose');
            }

            var buf = node.parent;
            var depth = 0;
            while (buf && buf.type !== 'root') {
                depth += 1;
                buf = buf.parent;
            }

            if (value.indexOf('\n') !== -1) {
                var indent = this.raw(node, null, 'indent');
                if (indent.length) {
                    for (var step = 0; step < depth; step++) {
                        value += indent;
                    }
                }
            }

            return value;
        }
    }, {
        key: 'rawValue',
        value: function rawValue(node, prop) {
            var value = node[prop];
            var raw = node.raws[prop];
            if (raw && raw.value === value) {
                return raw.raw;
            } else {
                return value;
            }
        }
    }]);

    return Stringifier;
}();

exports.default = Stringifier;
module.exports = exports['default'];
},{}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = stringify;

var _stringifier = require('./stringifier');

var _stringifier2 = _interopRequireDefault(_stringifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringify(node, builder) {
    var str = new _stringifier2.default(builder);
    str.stringify(node);
}
module.exports = exports['default'];
},{"./stringifier":113}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tokenize = require('./tokenize');

var _tokenize2 = _interopRequireDefault(_tokenize);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HIGHLIGHT_THEME = {
    'brackets': [36, 39], // cyan
    'string': [31, 39], // red
    'at-word': [31, 39], // red
    'comment': [90, 39], // gray
    '{': [32, 39], // green
    '}': [32, 39], // green
    ':': [1, 22], // bold
    ';': [1, 22], // bold
    '(': [1, 22], // bold
    ')': [1, 22] // bold
};

function code(color) {
    return '\x1B[' + color + 'm';
}

function terminalHighlight(css) {
    var tokens = (0, _tokenize2.default)(new _input2.default(css), { ignoreErrors: true });
    var result = [];
    tokens.forEach(function (token) {
        var color = HIGHLIGHT_THEME[token[0]];
        if (color) {
            result.push(token[1].split(/\r?\n/).map(function (i) {
                return code(color[0]) + i + code(color[1]);
            }).join('\n'));
        } else {
            result.push(token[1]);
        }
    });
    return result.join('');
}

exports.default = terminalHighlight;
module.exports = exports['default'];
},{"./input":103,"./tokenize":116}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = tokenize;
var SINGLE_QUOTE = '\''.charCodeAt(0);
var DOUBLE_QUOTE = '"'.charCodeAt(0);
var BACKSLASH = '\\'.charCodeAt(0);
var SLASH = '/'.charCodeAt(0);
var NEWLINE = '\n'.charCodeAt(0);
var SPACE = ' '.charCodeAt(0);
var FEED = '\f'.charCodeAt(0);
var TAB = '\t'.charCodeAt(0);
var CR = '\r'.charCodeAt(0);
var OPEN_SQUARE = '['.charCodeAt(0);
var CLOSE_SQUARE = ']'.charCodeAt(0);
var OPEN_PARENTHESES = '('.charCodeAt(0);
var CLOSE_PARENTHESES = ')'.charCodeAt(0);
var OPEN_CURLY = '{'.charCodeAt(0);
var CLOSE_CURLY = '}'.charCodeAt(0);
var SEMICOLON = ';'.charCodeAt(0);
var ASTERISK = '*'.charCodeAt(0);
var COLON = ':'.charCodeAt(0);
var AT = '@'.charCodeAt(0);

var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
var RE_BAD_BRACKET = /.[\\\/\("'\n]/;

function tokenize(input) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tokens = [];
    var css = input.css.valueOf();

    var ignore = options.ignoreErrors;

    var code = void 0,
        next = void 0,
        quote = void 0,
        lines = void 0,
        last = void 0,
        content = void 0,
        escape = void 0,
        nextLine = void 0,
        nextOffset = void 0,
        escaped = void 0,
        escapePos = void 0,
        prev = void 0,
        n = void 0;

    var length = css.length;
    var offset = -1;
    var line = 1;
    var pos = 0;

    function unclosed(what) {
        throw input.error('Unclosed ' + what, line, pos - offset);
    }

    while (pos < length) {
        code = css.charCodeAt(pos);

        if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
            offset = pos;
            line += 1;
        }

        switch (code) {
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                next = pos;
                do {
                    next += 1;
                    code = css.charCodeAt(next);
                    if (code === NEWLINE) {
                        offset = next;
                        line += 1;
                    }
                } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

                tokens.push(['space', css.slice(pos, next)]);
                pos = next - 1;
                break;

            case OPEN_SQUARE:
                tokens.push(['[', '[', line, pos - offset]);
                break;

            case CLOSE_SQUARE:
                tokens.push([']', ']', line, pos - offset]);
                break;

            case OPEN_CURLY:
                tokens.push(['{', '{', line, pos - offset]);
                break;

            case CLOSE_CURLY:
                tokens.push(['}', '}', line, pos - offset]);
                break;

            case COLON:
                tokens.push([':', ':', line, pos - offset]);
                break;

            case SEMICOLON:
                tokens.push([';', ';', line, pos - offset]);
                break;

            case OPEN_PARENTHESES:
                prev = tokens.length ? tokens[tokens.length - 1][1] : '';
                n = css.charCodeAt(pos + 1);
                if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(')', next + 1);
                        if (next === -1) {
                            if (ignore) {
                                next = pos;
                                break;
                            } else {
                                unclosed('bracket');
                            }
                        }
                        escapePos = next;
                        while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    } while (escaped);

                    tokens.push(['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                    pos = next;
                } else {
                    next = css.indexOf(')', pos + 1);
                    content = css.slice(pos, next + 1);

                    if (next === -1 || RE_BAD_BRACKET.test(content)) {
                        tokens.push(['(', '(', line, pos - offset]);
                    } else {
                        tokens.push(['brackets', content, line, pos - offset, line, next - offset]);
                        pos = next;
                    }
                }

                break;

            case CLOSE_PARENTHESES:
                tokens.push([')', ')', line, pos - offset]);
                break;

            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                quote = code === SINGLE_QUOTE ? '\'' : '"';
                next = pos;
                do {
                    escaped = false;
                    next = css.indexOf(quote, next + 1);
                    if (next === -1) {
                        if (ignore) {
                            next = pos + 1;
                            break;
                        } else {
                            unclosed('quote');
                        }
                    }
                    escapePos = next;
                    while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                        escapePos -= 1;
                        escaped = !escaped;
                    }
                } while (escaped);

                content = css.slice(pos, next + 1);
                lines = content.split('\n');
                last = lines.length - 1;

                if (last > 0) {
                    nextLine = line + last;
                    nextOffset = next - lines[last].length;
                } else {
                    nextLine = line;
                    nextOffset = offset;
                }

                tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);

                offset = nextOffset;
                line = nextLine;
                pos = next;
                break;

            case AT:
                RE_AT_END.lastIndex = pos + 1;
                RE_AT_END.test(css);
                if (RE_AT_END.lastIndex === 0) {
                    next = css.length - 1;
                } else {
                    next = RE_AT_END.lastIndex - 2;
                }
                tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                pos = next;
                break;

            case BACKSLASH:
                next = pos;
                escape = true;
                while (css.charCodeAt(next + 1) === BACKSLASH) {
                    next += 1;
                    escape = !escape;
                }
                code = css.charCodeAt(next + 1);
                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                    next += 1;
                }
                tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                pos = next;
                break;

            default:
                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                    next = css.indexOf('*/', pos + 2) + 1;
                    if (next === 0) {
                        if (ignore) {
                            next = css.length;
                        } else {
                            unclosed('comment');
                        }
                    }

                    content = css.slice(pos, next + 1);
                    lines = content.split('\n');
                    last = lines.length - 1;

                    if (last > 0) {
                        nextLine = line + last;
                        nextOffset = next - lines[last].length;
                    } else {
                        nextLine = line;
                        nextOffset = offset;
                    }

                    tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset]);

                    offset = nextOffset;
                    line = nextLine;
                    pos = next;
                } else {
                    RE_WORD_END.lastIndex = pos + 1;
                    RE_WORD_END.test(css);
                    if (RE_WORD_END.lastIndex === 0) {
                        next = css.length - 1;
                    } else {
                        next = RE_WORD_END.lastIndex - 2;
                    }

                    tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
                    pos = next;
                }

                break;
        }

        pos++;
    }

    return tokens;
}
module.exports = exports['default'];
},{}],117:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = warnOnce;
var printed = {};

function warnOnce(message) {
    if (printed[message]) return;
    printed[message] = true;

    if (typeof console !== 'undefined' && console.warn) console.warn(message);
}
module.exports = exports['default'];
},{}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
 *
 * @example
 * if ( decl.important ) {
 *     decl.warn(result, 'Avoid !important', { word: '!important' });
 * }
 */
var Warning = function () {

  /**
   * @param {string} text        - warning message
   * @param {Object} [opts]      - warning options
   * @param {Node}   opts.node   - CSS node that caused the warning
   * @param {string} opts.word   - word in CSS source that caused the warning
   * @param {number} opts.index  - index in CSS node string that caused
   *                               the warning
   * @param {string} opts.plugin - name of the plugin that created
   *                               this warning. {@link Result#warn} fills
   *                               this property automatically.
   */
  function Warning(text) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Warning);

    /**
     * @member {string} - Type to filter warnings from
     *                    {@link Result#messages}. Always equal
     *                    to `"warning"`.
     *
     * @example
     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
     */
    this.type = 'warning';
    /**
     * @member {string} - The warning message.
     *
     * @example
     * warning.text //=> 'Try to avoid !important'
     */
    this.text = text;

    if (opts.node && opts.node.source) {
      var pos = opts.node.positionBy(opts);
      /**
       * @member {number} - Line in the input file
       *                    with this warning’s source
       *
       * @example
       * warning.line //=> 5
       */
      this.line = pos.line;
      /**
       * @member {number} - Column in the input file
       *                    with this warning’s source.
       *
       * @example
       * warning.column //=> 6
       */
      this.column = pos.column;
    }

    for (var opt in opts) {
      this[opt] = opts[opt];
    }
  }

  /**
   * Returns a warning position and message.
   *
   * @example
   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
   *
   * @return {string} warning position and message
   */


  _createClass(Warning, [{
    key: 'toString',
    value: function toString() {
      if (this.node) {
        return this.node.error(this.text, {
          plugin: this.plugin,
          index: this.index,
          word: this.word
        }).message;
      } else if (this.plugin) {
        return this.plugin + ': ' + this.text;
      } else {
        return this.text;
      }
    }

    /**
     * @memberof Warning#
     * @member {string} plugin - The name of the plugin that created
     *                           it will fill this property automatically.
     *                           this warning. When you call {@link Node#warn}
     *
     * @example
     * warning.plugin //=> 'postcss-important'
     */

    /**
     * @memberof Warning#
     * @member {Node} node - Contains the CSS node that caused the warning.
     *
     * @example
     * warning.node.toString() //=> 'color: white !important'
     */

  }]);

  return Warning;
}();

exports.default = Warning;
module.exports = exports['default'];
},{}],119:[function(require,module,exports){
'use strict';
module.exports = false;

},{}],120:[function(require,module,exports){
var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
},{}],121:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
