import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape, h as createEventDispatcher, o as onDestroy, i as null_to_empty } from './ssr-qY00rz1j.js';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

const FoodsTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rows } = $$props;
  let { selectedRows } = $$props;
  let { favorites } = $$props;
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.selectedRows === void 0 && $$bindings.selectedRows && selectedRows !== void 0)
    $$bindings.selectedRows(selectedRows);
  if ($$props.favorites === void 0 && $$bindings.favorites && favorites !== void 0)
    $$bindings.favorites(favorites);
  return `<div class="favorites grid grid-cols-10 gap-2">${each(favorites, (favFood, i) => {
    return `<button${add_attribute("id", i, 0)}><img${add_attribute("src", favFood.photo, 0)}${add_attribute("alt", favFood.name, 0)} class="w-full h-full object-cover"> </button>`;
  })}</div> <div id="food-table" class="border border-carb-dark"><div id="food-table-header" class="grid grid-cols-12 gap-0 font-bold" data-svelte-h="svelte-1srntug"><th class=""></th> <th class="grid grid-cols-subgrid col-span-5">Name</th> <th class="">GI</th> <th class="">GL</th> <th class="">kcal</th> <th class="">Carbs</th> <th class="">Prots</th> <th class="">Fats</th></div> <div id="food-table-content" class="">${each(rows, (food, i) => {
    return `<button${add_attribute("id", i, 0)} class="border border-carb-dark row group grid grid-cols-12 gap-0 w-full"><td class="group-hover:bg-fat-dark "><img class="object-cover w-full h-full " loading="lazy" decoding="async"${add_attribute("src", food.photo, 0)}${add_attribute("alt", food.name, 0)}></td> <td id="food-name" class="grid grid-cols-subgrid col-span-5 border group-hover:bg-fat-dark align-center h-full"><div id="name&button" class="col-start-1 col-end-6 text-left "><span class="">${escape(food.name)}</span> ${!favorites.some((fav) => fav.name === food.name) || !favorites.length ? `<button class="text-fat-dark"${add_attribute("id", i, 0)} data-svelte-h="svelte-bbnkb0">★ </button>` : `<span class="" data-svelte-h="svelte-15ubbwq">★</span>`} </div></td> <td class="text-left align-middle h-full group-hover:bg-fat-dark">${escape(food.GI)}</td> <td class="text-left align-middle h-full group-hover:bg-fat-dark">${escape(food.GL)}</td> <td class="text-left align-middle h-full group-hover:bg-fat-dark">${escape(food.calories)}</td> <td class="text-left align-middle h-full group-hover:bg-fat-dark">${escape(food.carbohydrates)}</td> <td class="text-left align-middle h-full group-hover:bg-fat-dark">${escape(food.proteins)}</td> <td class="text-left align-middle h-full group-hover:bg-fat-dark">${escape(food.fats)}</td> </button>`;
  })}</div> </div>`;
});
const css$2 = {
  code: "#alphabet.svelte-u79n47{@media (max-width: 1024px) { \r\n            display: none; \r\n    }}",
  map: null
};
const FilterByInitial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rows } = $$props;
  let { filteredRows } = $$props;
  let selectedLetter = "A";
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.filteredRows === void 0 && $$bindings.filteredRows && filteredRows !== void 0)
    $$bindings.filteredRows(filteredRows);
  $$result.css.add(css$2);
  filteredRows = rows.filter((row) => row.name[0] === selectedLetter);
  return `<div id="alphabet" class="svelte-u79n47">${each(alphabet, (letter) => {
    return `<button class="">${escape(letter)}</button>`;
  })} </div>`;
});
const FilterByQuery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rows } = $$props;
  let { filteredRows } = $$props;
  let stringFragment = "";
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.filteredRows === void 0 && $$bindings.filteredRows && filteredRows !== void 0)
    $$bindings.filteredRows(filteredRows);
  filteredRows = rows.filter((row) => row.name.toLowerCase().includes(stringFragment.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name));
  return `<div class="query flex flex-row justify-end"><span class="flex items-center" data-svelte-h="svelte-osm1ka">Search</span> <input class="flex items-center w-1/4 h-8 rounded" type="text"${add_attribute("value", stringFragment, 0)}></div>`;
});
const FoodsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { listedFoods } = $$props;
  let { total } = $$props;
  let gramsArray = [];
  if ($$props.listedFoods === void 0 && $$bindings.listedFoods && listedFoods !== void 0)
    $$bindings.listedFoods(listedFoods);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  return `<div class="flex justify-between"><h3 class="font-bold" data-svelte-h="svelte-ull019">Selected meals</h3> <input placeholder="day" type="date"> <button class="bg-kcal-light rounded text-black border-b-red" data-svelte-h="svelte-1e559oj">Submit</button></div> <div class="grid grid-cols-2">${each(listedFoods, (food, i) => {
    return `<div class="grid grid-cols-6 border"><img class="col-span-1"${add_attribute("src", food.photo, 0)}${add_attribute("alt", food.name, 0)}> <input class="col-span-4" name="grams" type="number" placeholder="grams"${add_attribute("value", gramsArray[i], 0)}> <button class="bg-white border border-gray-500"${add_attribute("id", i, 0)} data-svelte-h="svelte-19efdnf">X</button> </div>`;
  })}</div>`;
});
function sumMacros(meals) {
  let total = {};
  total.calories = sum(meals, "calories");
  total.carbohydrates = sum(meals, "carbohydrates");
  total.proteins = sum(meals, "proteins");
  total.fats = sum(meals, "fats");
  total.grams = sum(meals, "grams");
  function sum(meals2, macro) {
    return meals2.reduce(
      (total2, meal) => {
        return Math.round(total2 + meal[macro], 1);
      },
      0
    );
  }
  return total;
}
const TotalMacros = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meals } = $$props;
  let { totalMacros } = $$props;
  if ($$props.meals === void 0 && $$bindings.meals && meals !== void 0)
    $$bindings.meals(meals);
  if ($$props.totalMacros === void 0 && $$bindings.totalMacros && totalMacros !== void 0)
    $$bindings.totalMacros(totalMacros);
  totalMacros = sumMacros(meals);
  return `<div>${totalMacros ? `<div id="macros-summary" class="w-full"><h3 data-svelte-h="svelte-1sjxw1i">Summary</h3> <div id="summary-header" class="grid grid-cols-6" data-svelte-h="svelte-1h27msz"><th class="">Food</th> <th class="">g</th> <th class="">kcal</th> <th class="">C</th> <th class="">P</th> <th class="">F</th></div> ${each(meals, (meal) => {
    return `<div id="summary-content" class="grid grid-cols-6"><td class="flex items-center justify-center"><img${add_attribute("src", meal.photo, 0)}${add_attribute("alt", meal.name, 0)} class="w"></td> <td class="text-center">${escape(meal.grams)}</td> <td class="text-center">${escape(meal.calories)}</td> <td class="text-center">${escape(meal.carbohydrates)}</td> <td class="text-center">${escape(meal.proteins)}</td> <td class="text-center">${escape(meal.fats)}</td> </div>`;
  })} <div id="summary-totals" class="grid grid-cols-6"><th id="tf" data-svelte-h="svelte-yc0tcs">Total</th> <th id="tf">${escape(totalMacros.grams)}</th> <th id="tf">${escape(totalMacros.calories)}</th> <th id="tf">${escape(totalMacros.carbohydrates)}</th> <th id="tf">${escape(totalMacros.proteins)}</th> <th id="tf">${escape(totalMacros.fats)}</th></div></div>` : ``} </div>`;
});
const css$1 = {
  code: ".fillParent.svelte-kyrhf8{overflow:visible}.fillParentWidth.svelte-kyrhf8{width:0 !important;max-width:0 !important}.fillParentHeight.svelte-kyrhf8{height:0 !important;max-height:0 !important}",
  map: null
};
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 300;
const Plot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let debounceWait;
  let debounceOptions;
  let layout_;
  let config_;
  let draw;
  let fillParentWidth;
  let fillParentHeight;
  let parent;
  const browser = typeof window === "object";
  const nextFrame = browser ? requestAnimationFrame : () => void 0;
  async function loadPlotly() {
    if (!browser)
      return;
    if (libPlotly === void 0) {
      if (window.Plotly) {
        libPlotly = window.Plotly;
      } else {
        const p = await import('./plotly-c5b3Xwwh.js').then(function (n) { return n.p; });
        if (libPlotly === void 0)
          libPlotly = "default" in p ? p.default : p;
      }
    }
  }
  const events = {
    plotly_afterexport: "afterExport",
    plotly_afterplot: "afterPlot",
    plotly_animated: "animated",
    plotly_animating: "animating",
    plotly_animatingframe: "animatingFrame",
    plotly_animationinterrupted: "animationInterrupted",
    plotly_autosize: "autoSize",
    plotly_beforeexport: "beforeExport",
    plotly_beforehover: "beforeHover",
    plotly_beforeplot: "beforePlot",
    plotly_buttonclicked: "buttonClicked",
    plotly_click: "click",
    plotly_clickannotation: "clickAnnotation",
    plotly_deselect: "deselect",
    plotly_doubleclick: "doubleClick",
    plotly_framework: "framework",
    plotly_hover: "hover",
    plotly_legendclick: "legendClick",
    plotly_legenddoubleclick: "legendDoubleClick",
    plotly_react: "react",
    plotly_redraw: "redraw",
    plotly_relayout: "relayout",
    plotly_relayouting: "relayouting",
    plotly_restyle: "restyle",
    plotly_selected: "selected",
    plotly_selecting: "selecting",
    plotly_sliderchange: "sliderChange",
    plotly_sliderend: "sliderEnd",
    plotly_sliderstart: "sliderStart",
    plotly_sunburstclick: "sunburstClick",
    plotly_transitioned: "transitioned",
    plotly_transitioning: "transitioning",
    plotly_transitioninterrupted: "transitionInterrupted",
    plotly_unhover: "unhover",
    plotly_update: "update",
    plotly_webglcontextlost: "webGLContextLost"
  };
  const dispatch = createEventDispatcher();
  let { element = void 0 } = $$props;
  let { plot = void 0 } = $$props;
  let { libPlotly = void 0 } = $$props;
  let { data } = $$props;
  let { layout = void 0 } = $$props;
  let { config = void 0 } = $$props;
  let { fillParent = false } = $$props;
  let { debounce: debounce$1 = 0 } = $$props;
  let { class: className = "" } = $$props;
  let datarevision = 0;
  let previousLib = libPlotly;
  let previousPlot = plot;
  let width = DEFAULT_WIDTH;
  let height = DEFAULT_HEIGHT;
  const drawUndebounced = (lib, e, d, l, c) => {
    if (e)
      lib?.react(e, d, l, c).then((p) => plot = p);
  };
  onDestroy(() => element && libPlotly?.purge(element));
  function onResize() {
    if (!parent || !element)
      return;
    const { offsetHeight, offsetWidth } = parent;
    const { paddingLeft, paddingTop, paddingRight, paddingBottom } = window.getComputedStyle(parent);
    const maxWidth = offsetWidth - parseInt(paddingLeft) - parseInt(paddingRight);
    const maxHeight = offsetHeight - parseInt(paddingTop) - parseInt(paddingRight);
    width = fillParentWidth ? maxWidth : DEFAULT_WIDTH;
    height = fillParentHeight ? maxHeight : DEFAULT_HEIGHT;
  }
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.plot === void 0 && $$bindings.plot && plot !== void 0)
    $$bindings.plot(plot);
  if ($$props.libPlotly === void 0 && $$bindings.libPlotly && libPlotly !== void 0)
    $$bindings.libPlotly(libPlotly);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  if ($$props.fillParent === void 0 && $$bindings.fillParent && fillParent !== void 0)
    $$bindings.fillParent(fillParent);
  if ($$props.debounce === void 0 && $$bindings.debounce && debounce$1 !== void 0)
    $$bindings.debounce(debounce$1);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css$1);
  debounceWait = typeof debounce$1 === "object" ? debounce$1.wait : debounce$1 ?? 0;
  debounceOptions = typeof debounce$1 === "object" ? debounce$1 : {};
  {
    datarevision = (datarevision + 1) % 1e3;
  }
  layout_ = { datarevision, width, height, ...layout };
  config_ = { displaylogo: false, ...config };
  draw = debounce(drawUndebounced, debounceWait, debounceOptions);
  {
    draw(libPlotly, element, data, layout_, config_);
  }
  {
    {
      if (element && previousLib !== libPlotly) {
        previousLib?.purge(element);
        plot = void 0;
      }
      previousLib = libPlotly;
      loadPlotly();
    }
  }
  {
    if (previousPlot !== plot) {
      for (const [plotlyEvent, svelteEvent] of Object.entries(events)) {
        previousPlot?.removeAllListeners?.(plotlyEvent);
        plot?.on(plotlyEvent, (e) => dispatch(svelteEvent, e));
      }
      previousPlot = plot;
    }
  }
  {
    nextFrame(onResize);
  }
  fillParentWidth = fillParent === true || fillParent === "width";
  fillParentHeight = fillParent === true || fillParent === "height";
  parent = element?.parentElement;
  return `<div class="${[
    escape(null_to_empty(className), true) + " svelte-kyrhf8",
    (fillParent ? "fillParent" : "") + " " + (fillParentWidth ? "fillParentWidth" : "") + " " + (fillParentHeight ? "fillParentHeight" : "")
  ].join(" ").trim()}"${add_attribute("this", element, 0)}></div>`;
});
function generateData(data) {
  let dataGenerated = [
    {
      values: [data.carbohydrates, data.proteins, data.fats],
      labels: ["Carbohydrates[g]", "Proteins[g]", "Fats[g]"],
      type: "pie",
      hole: 0.4,
      //text: `${macrosSingleDayObj.calories}<br>kcal`,
      marker: {
        colors: ["#c68b59", "#911f27", "#face7f"]
      },
      automargin: true
    }
  ];
  return dataGenerated;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dataOpts;
  let layoutOpts;
  let { data } = $$props;
  function generateLayout(data2) {
    let layoutOpts2 = {
      annotations: [
        {
          font: { size: 16, color: "#32502e" },
          showarrow: false,
          text: `${data2.calories}<br>kcal`,
          x: 0.5,
          y: 0.5
        }
      ],
      showlegend: false,
      height: 400,
      width: 350,
      plot_bgcolor: "rgba(255, 255, 255, 0)",
      paper_bgcolor: "rgba(255, 255, 255, 0)"
    };
    return layoutOpts2;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  dataOpts = generateData(data);
  layoutOpts = generateLayout(data);
  return `${dataOpts ? `<div id="chart-container" class="flex justify-center">${validate_component(Plot, "Plot").$$render($$result, Object.assign({}, { data: dataOpts, layout: layoutOpts }), {}, {})}</div>` : ``}`;
});
const css = {
  code: ".svelte-1eckc7e{font-family:'roboto';color:#402218\r\n}.food-menu.svelte-1eckc7e,.selected-foods.svelte-1eckc7e{background-color:#FCF0C8;border-radius:1em;border:0.25em solid #865439\r\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let favoriteFoods;
  let foodsToShow;
  let selectedFoods;
  let totalMeals;
  let totalMacros;
  let { data } = $$props;
  let foods = data.foods;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    favoriteFoods = [];
    foodsToShow = [];
    selectedFoods = [];
    totalMeals = [];
    totalMacros = {};
    $$rendered = `<div class="container flex flex-col lg:flex-row-reverse svelte-1eckc7e"><div class="food-menu w-full lg:w-4/6 order-2 p-2 m-2 border svelte-1eckc7e">${validate_component(FilterByInitial, "FilterByInitial").$$render(
      $$result,
      { rows: foods, filteredRows: foodsToShow },
      {
        filteredRows: ($$value) => {
          foodsToShow = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FilterByQuery, "FilterByQuery").$$render(
      $$result,
      { rows: foods, filteredRows: foodsToShow },
      {
        filteredRows: ($$value) => {
          foodsToShow = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${foods ? `${validate_component(FoodsTable, "FoodsTable").$$render(
      $$result,
      {
        rows: foodsToShow,
        selectedRows: selectedFoods,
        favorites: favoriteFoods
      },
      {
        selectedRows: ($$value) => {
          selectedFoods = $$value;
          $$settled = false;
        },
        favorites: ($$value) => {
          favoriteFoods = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> ${selectedFoods.length ? `<div class="selected-foods w-full lg:w-2/6 order-1 p-2 m-2 svelte-1eckc7e">${selectedFoods.length ? `${validate_component(FoodsList, "FoodsList").$$render(
      $$result,
      {
        listedFoods: selectedFoods,
        total: totalMeals
      },
      {
        listedFoods: ($$value) => {
          selectedFoods = $$value;
          $$settled = false;
        },
        total: ($$value) => {
          totalMeals = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${totalMeals.length !== 0 ? `${validate_component(TotalMacros, "TotalMacros").$$render(
      $$result,
      { meals: totalMeals, totalMacros },
      {
        meals: ($$value) => {
          totalMeals = $$value;
          $$settled = false;
        },
        totalMacros: ($$value) => {
          totalMacros = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${"calories" in totalMacros ? `${validate_component(Chart, "Chart").$$render(
      $$result,
      { data: totalMacros },
      {
        data: ($$value) => {
          totalMacros = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>` : ``} </div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-YYypOFQ7.js.map
