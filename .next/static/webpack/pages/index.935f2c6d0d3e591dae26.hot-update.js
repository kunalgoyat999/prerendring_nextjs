webpackHotUpdate_N_E("pages/index",{

/***/ "./dummy-data.js":
/*!***********************!*\
  !*** ./dummy-data.js ***!
  \***********************/
/*! exports provided: getFeaturedEvents, getAllEvents, getFilteredEvents, getEventById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredEvents\", function() { return getFilteredEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\nvar DUMMY_EVENTS = [{\n  id: \"e1\",\n  title: \"Programming for everyone\",\n  description: \"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.\",\n  location: \"Somestreet 25, 12345 San Somewhereo\",\n  date: \"2021-05-12\",\n  image: \"images/coding-event.jpg\",\n  isFeatured: false\n}, {\n  id: \"e2\",\n  title: \"Networking for introverts\",\n  description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n  location: \"New Wall Street 5, 98765 New Work\",\n  date: \"2021-05-30\",\n  image: \"2021-05-30\",\n  isFeatured: true\n}, {\n  id: \"e3\",\n  title: \"Networking for extroverts\",\n  description: \"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.\",\n  location: \"My Street 12, 10115 Broke City\",\n  date: \"2022-04-10\",\n  image: \"images/extrovert-event.jpg\",\n  isFeatured: true\n}];\nfunction getFeaturedEvents() {\n  return DUMMY_EVENTS.filter(function (event) {\n    return event.isFeatured;\n  });\n}\nfunction getAllEvents() {\n  return DUMMY_EVENTS;\n}\nfunction getFilteredEvents(dateFilter) {\n  var year = dateFilter.year,\n      month = dateFilter.month;\n  var filteredEvents = DUMMY_EVENTS.filter(function (event) {\n    var eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n  return filteredEvents;\n}\nfunction getEventById(id) {\n  return DUMMY_EVENTS.find(function (event) {\n    return event.id === id;\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZHVtbXktZGF0YS5qcz80NzZiIl0sIm5hbWVzIjpbIkRVTU1ZX0VWRU5UUyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwiZGF0ZSIsImltYWdlIiwiaXNGZWF0dXJlZCIsImdldEZlYXR1cmVkRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJnZXRBbGxFdmVudHMiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsImRhdGVGaWx0ZXIiLCJ5ZWFyIiwibW9udGgiLCJmaWx0ZXJlZEV2ZW50cyIsImV2ZW50RGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RXZlbnRCeUlkIiwiZmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLFlBQVksR0FBRyxDQUNuQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsYUFBVyxFQUNULDRKQUpKO0FBS0VDLFVBQVEsRUFBRSxxQ0FMWjtBQU1FQyxNQUFJLEVBQUUsWUFOUjtBQU9FQyxPQUFLLEVBQUUseUJBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FEbUIsRUFXbkI7QUFDRU4sSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLDJCQUZUO0FBR0VDLGFBQVcsRUFDVCwwSUFKSjtBQUtFQyxVQUFRLEVBQUUsbUNBTFo7QUFNRUMsTUFBSSxFQUFFLFlBTlI7QUFPRUMsT0FBSyxFQUFFLFlBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FYbUIsRUFxQm5CO0FBQ0VOLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSwyQkFGVDtBQUdFQyxhQUFXLEVBQ1QsNklBSko7QUFLRUMsVUFBUSxFQUFFLGdDQUxaO0FBTUVDLE1BQUksRUFBRSxZQU5SO0FBT0VDLE9BQUssRUFBRSw0QkFQVDtBQVFFQyxZQUFVLEVBQUU7QUFSZCxDQXJCbUIsQ0FBckI7QUFpQ08sU0FBU0MsaUJBQVQsR0FBNkI7QUFDbEMsU0FBT1IsWUFBWSxDQUFDUyxNQUFiLENBQW9CLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNILFVBQWpCO0FBQUEsR0FBcEIsQ0FBUDtBQUNEO0FBRU0sU0FBU0ksWUFBVCxHQUF3QjtBQUM3QixTQUFPWCxZQUFQO0FBQ0Q7QUFFTSxTQUFTWSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBdUM7QUFBQSxNQUNwQ0MsSUFEb0MsR0FDcEJELFVBRG9CLENBQ3BDQyxJQURvQztBQUFBLE1BQzlCQyxLQUQ4QixHQUNwQkYsVUFEb0IsQ0FDOUJFLEtBRDhCO0FBRzVDLE1BQUlDLGNBQWMsR0FBR2hCLFlBQVksQ0FBQ1MsTUFBYixDQUFvQixVQUFDQyxLQUFELEVBQVc7QUFDbEQsUUFBTU8sU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU1IsS0FBSyxDQUFDTCxJQUFmLENBQWxCO0FBQ0EsV0FBT1ksU0FBUyxDQUFDRSxXQUFWLE9BQTRCTCxJQUE1QixJQUFvQ0csU0FBUyxDQUFDRyxRQUFWLE9BQXlCTCxLQUFLLEdBQUcsQ0FBNUU7QUFDRCxHQUhvQixDQUFyQjtBQUtBLFNBQU9DLGNBQVA7QUFDRDtBQUVNLFNBQVNLLFlBQVQsQ0FBc0JwQixFQUF0QixFQUEwQjtBQUMvQixTQUFPRCxZQUFZLENBQUNzQixJQUFiLENBQWtCLFVBQUNaLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNULEVBQU4sS0FBYUEsRUFBeEI7QUFBQSxHQUFsQixDQUFQO0FBQ0QiLCJmaWxlIjoiLi9kdW1teS1kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRFVNTVlfRVZFTlRTID0gW1xuICB7XG4gICAgaWQ6IFwiZTFcIixcbiAgICB0aXRsZTogXCJQcm9ncmFtbWluZyBmb3IgZXZlcnlvbmVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRXZlcnlvbmUgY2FuIGxlYXJuIHRvIGNvZGUhIFllcywgZXZlcnlvbmUhIEluIHRoaXMgbGl2ZSBldmVudCwgd2UgYXJlIGdvaW5nIHRvIGdvIHRocm91Z2ggYWxsIHRoZSBrZXkgYmFzaWNzIGFuZCBnZXQgeW91IHN0YXJ0ZWQgd2l0aCBwcm9ncmFtbWluZyBhcyB3ZWxsLlwiLFxuICAgIGxvY2F0aW9uOiBcIlNvbWVzdHJlZXQgMjUsIDEyMzQ1IFNhbiBTb21ld2hlcmVvXCIsXG4gICAgZGF0ZTogXCIyMDIxLTA1LTEyXCIsXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL2NvZGluZy1ldmVudC5qcGdcIixcbiAgICBpc0ZlYXR1cmVkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImUyXCIsXG4gICAgdGl0bGU6IFwiTmV0d29ya2luZyBmb3IgaW50cm92ZXJ0c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXZSBrbm93OiBOZXR3b3JraW5nIGlzIG5vIGZ1biBpZiB5b3UgYXJlIGFuIGludHJvdmVydCBwZXJzb24uIFRoYXQncyB3aHkgd2UgY2FtZSB1cCB3aXRoIHRoaXMgZXZlbnQgLSBpdCdsbCBiZSBzbyBtdWNoIGVhc2llci4gUHJvbWlzZWQhXCIsXG4gICAgbG9jYXRpb246IFwiTmV3IFdhbGwgU3RyZWV0IDUsIDk4NzY1IE5ldyBXb3JrXCIsXG4gICAgZGF0ZTogXCIyMDIxLTA1LTMwXCIsXG4gICAgaW1hZ2U6IFwiMjAyMS0wNS0zMFwiLFxuICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJlM1wiLFxuICAgIHRpdGxlOiBcIk5ldHdvcmtpbmcgZm9yIGV4dHJvdmVydHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiWW91IHByb2JhYmx5IG5lZWQgbm8gaGVscCB3aXRoIG5ldHdvcmtpbmcgaW4gZ2VuZXJhbC4gQnV0IGZvY3VzaW5nIHlvdXIgZW5lcmd5IGNvcnJlY3RseSAtIHRoYXQgaXMgc29tZXRoaW5nIHdoZXJlIG1vc3QgcGVvcGxlIGNhbiBpbXByb3ZlLlwiLFxuICAgIGxvY2F0aW9uOiBcIk15IFN0cmVldCAxMiwgMTAxMTUgQnJva2UgQ2l0eVwiLFxuICAgIGRhdGU6IFwiMjAyMi0wNC0xMFwiLFxuICAgIGltYWdlOiBcImltYWdlcy9leHRyb3ZlcnQtZXZlbnQuanBnXCIsXG4gICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGZWF0dXJlZEV2ZW50cygpIHtcbiAgcmV0dXJuIERVTU1ZX0VWRU5UUy5maWx0ZXIoKGV2ZW50KSA9PiBldmVudC5pc0ZlYXR1cmVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEV2ZW50cygpIHtcbiAgcmV0dXJuIERVTU1ZX0VWRU5UUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbHRlcmVkRXZlbnRzKGRhdGVGaWx0ZXIpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZGF0ZUZpbHRlcjtcblxuICBsZXQgZmlsdGVyZWRFdmVudHMgPSBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgIHJldHVybiBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxO1xuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRFdmVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudEJ5SWQoaWQpIHtcbiAgcmV0dXJuIERVTU1ZX0VWRU5UUy5maW5kKChldmVudCkgPT4gZXZlbnQuaWQgPT09IGlkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dummy-data.js\n");

/***/ })

})