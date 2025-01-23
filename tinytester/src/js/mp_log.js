/***************************************************************
 * Get compatibility mode
 ***************************************************************/
function getUserAgent(){
    return(navigator.userAgent)
  }
  
  /***************************************************************
   * Get compatibility mode
   ***************************************************************/
  function getCompatibilityMode(){
    var agentStr = navigator.userAgent;
          var mode;
          if (agentStr.indexOf("Trident/5.0") > -1) {
              if (agentStr.indexOf("MSIE 7.0") > -1)
                  mode = "IE9 Compatibility View";
              else
                  mode = "IE9";
          }
          else if (agentStr.indexOf("Trident/4.0") > -1) {
              if (agentStr.indexOf("MSIE 7.0") > -1)
                  mode = "IE8 Compatibility View";
              else
                  mode = "IE8";
          }
          else
              mode = "IE7";
  
          return(mode);
  }
  
  /***************************************************************
   * Get headers
   ***************************************************************/
  function getHeaders() {
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send(null);
    
    // associate array to store all values
    var data = new Object();
    
    // get all headers in one call and parse each item
    var headers = req.getAllResponseHeaders().toLowerCase();
    var aHeaders = headers.split('\n');
    var i =0;
    for (i= 0; i < aHeaders.length; i++) {
        var thisItem = aHeaders[i];
        var key = thisItem.substring(0, thisItem.indexOf(':'));
        var value = thisItem.substring(thisItem.indexOf(':')+1);
        data[key] = value;
    }	    
    
    // get referer
    var referer = document.referrer;
    data["Referer"] = referer;
    
    //get useragent
    var useragent = navigator.userAgent;
    data["UserAgent"] = useragent;
    
    
    //extra code to display the values in html
    var display = "";
    for(var key in data) {
        if (key != "")
      display += "<b>" + key + "</b> : " + data[key] + "<br>";
    }
    //document.getElementById("dump").innerHTML =  display;  
    return(display);
  }
  
  /***************************************************************
   * IE Version
   ***************************************************************/
  var ieDetector = function() {
    var browser = { // browser object
  
        verIE: null,
        docModeIE: null,
        verIEtrue: null,
        verIE_ua: null
  
      },
      tmp;
  
    tmp = document.documentMode;
    try {
      document.documentMode = "";
    } catch (e) {};
  
    browser.isIE = typeof document.documentMode == "number" || eval("/*@cc_on!@*/!1");
    try {
      document.documentMode = tmp;
    } catch (e) {};
  
    // We only let IE run this code.
    if (browser.isIE) {
      browser.verIE_ua =
        (/^(?:.*?[^a-zA-Z])??(?:MSIE|rv\s*\:)\s*(\d+\.?\d*)/i).test(navigator.userAgent || "") ?
        parseFloat(RegExp.$1, 10) : null;
  
      var e, verTrueFloat, x,
        obj = document.createElement("div"),
  
        CLASSID = [
          "{45EA75A0-A269-11D1-B5BF-0000F8051515}", // Internet Explorer Help
          "{3AF36230-A269-11D1-B5BF-0000F8051515}", // Offline Browsing Pack
          "{89820200-ECBD-11CF-8B85-00AA005B4383}"
        ];
  
      try {
        obj.style.behavior = "url(#default#clientcaps)"
      } catch (e) {};
  
      for (x = 0; x < CLASSID.length; x++) {
        try {
          browser.verIEtrue = obj.getComponentVersion(CLASSID[x], "componentid").replace(/,/g, ".");
        } catch (e) {};
  
        if (browser.verIEtrue) break;
  
      };
      verTrueFloat = parseFloat(browser.verIEtrue || "0", 10);
      browser.docModeIE = document.documentMode ||
        ((/back/i).test(document.compatMode || "") ? 5 : verTrueFloat) ||
        browser.verIE_ua;
      browser.verIE = verTrueFloat || browser.docModeIE;
    };
  
    return {
      isIE: browser.isIE,
      Version: browser.verIE
    };
  
  }();
  
  
  /***************************************************************
   * Collect console logs
   ***************************************************************/
  if (!Array.from) {
      Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
          return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function (value) {
          var number = Number(value);
          if (isNaN(number)) { return 0; }
          if (number === 0 || !isFinite(number)) { return number; }
          return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
          var len = toInteger(value);
          return Math.min(Math.max(len, 0), maxSafeInteger);
        };
  
        // The length property of the from method is 1.
        return function from(arrayLike/*, mapFn, thisArg */) {
          // 1. Let C be the this value.
          var C = this;
  
          // 2. Let items be ToObject(arrayLike).
          var items = Object(arrayLike);
  
          // 3. ReturnIfAbrupt(items).
          if (arrayLike == null) {
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
          }
  
          // 4. If mapfn is undefined, then let mapping be false.
          var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
          var T;
          if (typeof mapFn !== 'undefined') {
            // 5. else
            // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
            if (!isCallable(mapFn)) {
              throw new TypeError('Array.from: when provided, the second argument must be a function');
            }
  
            // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 2) {
              T = arguments[2];
            }
          }
  
          // 10. Let lenValue be Get(items, "length").
          // 11. Let len be ToLength(lenValue).
          var len = toLength(items.length);
  
          // 13. If IsConstructor(C) is true, then
          // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
          // 14. a. Else, Let A be ArrayCreate(len).
          var A = isCallable(C) ? Object(new C(len)) : new Array(len);
  
          // 16. Let k be 0.
          var k = 0;
          // 17. Repeat, while k < len… (also steps a - h)
          var kValue;
          while (k < len) {
            kValue = items[k];
            if (mapFn) {
              A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }
            k += 1;
          }
          // 18. Let putStatus be Put(A, "length", len, true).
          A.length = len;
          // 20. Return A.
          return A;
        };
      }());
    }
    if (console.everything === undefined)
    {
        console.everything = [];
  
        console.defaultLog = console.log.bind(console);
        console.log = function(){
            console.everything.push({"type":"log", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
            console.defaultLog.apply(console, arguments);
        }
        console.defaultError = console.error.bind(console);
        console.error = function(){
            console.everything.push({"type":"error", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
            console.defaultError.apply(console, arguments);
        }
        console.defaultWarn = console.warn.bind(console);
        console.warn = function(){
            console.everything.push({"type":"warn", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
            console.defaultWarn.apply(console, arguments);
        }
        console.defaultDebug = console.debug.bind(console);
        console.debug = function(){
            console.everything.push({"type":"debug", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
            console.defaultDebug.apply(console, arguments);
        }
    }

    function load_console(){
        var x = document.getElementById("mp_log_text");
        var y = document.getElementById("mp_log")
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.width = "400px";
        } else {
          x.style.display = "none";
          y.style.width = "50px";

        }
        document.getElementById('mp_log_text').innerHTML=''
        for(var i=0;i<console.everything.length;i++){
          document.getElementById('mp_log_text').innerHTML+= console.everything[i].value+'<br>'
        }
      };//load_console()
      
      function mp_log(msg){
        console.log(msg)    
        try {
            document.getElementById('growthxp_log_text').innerHTML+= msg+'<br>'
        }
        catch(error){
            console.log(error.message)
        }
      };