function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import "./style.css";
var ScrollWrapper = function ScrollWrapper(Comp) {
  return function (props) {
    var scrollView = useRef(null);
    var thumb = useRef(null);
    var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      viewPortH = _useState2[0],
      setViewPortH = _useState2[1];
    var _useState3 = useState(1),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollH = _useState4[0],
      setScrollH = _useState4[1];
    var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      scrollT = _useState6[0],
      setScrollT = _useState6[1];
    var _useState7 = useState(1),
      _useState8 = _slicedToArray(_useState7, 2),
      scrollR = _useState8[0],
      setScrollR = _useState8[1];
    var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isPressing = _useState10[0],
      setIsPressing = _useState10[1];
    var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showScrollBar = _useState12[0],
      setShowScrollBar = _useState12[1];
    var _useState13 = useState(''),
      _useState14 = _slicedToArray(_useState13, 2),
      shadowStyle = _useState14[0],
      setShadowStyle = _useState14[1];
    var scrollHandle = function scrollHandle() {
      if (scrollView.current) {
        setScrollT(scrollView.current.scrollTop);
      }
    };
    var mouseUpHandle = function mouseUpHandle(e) {
      setIsPressing(false);
    };
    var mouseDownHandle = function mouseDownHandle(e) {
      setIsPressing(true);
    };
    var mouseMovingHandle = function mouseMovingHandle(e) {
      if (isPressing !== true) return;
      if (scrollT < 0) {
        setScrollT(0);
      } else if (scrollT > scrollH - viewPortH) {
        setScrollT(scrollH - viewPortH);
      } else {
        var movementY = e.nativeEvent.movementY;
        setScrollT(function (preScrollT) {
          return preScrollT + movementY / scrollR;
        });
      }
    };
    var thumbHeight = function thumbHeight() {
      return viewPortH * scrollR;
    };
    var transH = function transH() {
      return scrollT * scrollR;
    };
    useEffect(function () {
      addEventListener('mouseup', mouseUpHandle);
      return function () {
        removeEventListener('mouseup', mouseUpHandle);
      };
    }, []);
    useEffect(function () {
      if (scrollView.current) {
        setViewPortH(scrollView.current.clientHeight);
        setScrollH(scrollView.current.scrollHeight);
      }
    }, [props.data]);
    useLayoutEffect(function () {
      if (scrollView.current) {
        scrollView.current.scrollTop = scrollT;
      }
      if (showScrollBar !== true) return;
      if (scrollT <= 0) {
        setShadowStyle('shadow_bottom');
      } else if (scrollT >= scrollH - viewPortH) {
        setShadowStyle('shadow_top');
      } else {
        setShadowStyle('shadow_vertical');
      }
    }, [scrollT]);
    useEffect(function () {
      var sr = viewPortH / scrollH;
      setScrollR(sr);
      if (viewPortH < scrollH) {
        setShowScrollBar(true);
      } else {
        setShowScrollBar(false);
      }
    }, [scrollH]);
    useEffect(function () {
      if (props.scrollToBottom) {
        setScrollT(scrollH - viewPortH);
      }
    }, [scrollR]);
    return /*#__PURE__*/React.createElement("div", {
      className: "scroll_wrapper"
    }, /*#__PURE__*/React.createElement("section", {
      style: props.style,
      className: "wrapper_content ".concat(shadowStyle)
    }, /*#__PURE__*/React.createElement("div", {
      className: "list_block",
      ref: scrollView,
      onScroll: scrollHandle
    }, /*#__PURE__*/React.createElement(Comp, props)), /*#__PURE__*/React.createElement("aside", {
      className: "scroll_bar_block",
      style: {
        width: showScrollBar ? 8 : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      ref: thumb,
      className: "scroll_thumb",
      onMouseDown: mouseDownHandle,
      onMouseMove: mouseMovingHandle,
      style: {
        height: thumbHeight(),
        transform: "translateY(".concat(transH(), "px)")
      }
    }))));
  };
};
export default ScrollWrapper;