/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['util/getBrownies.js']) {
  _$jscoverage['util/getBrownies.js'] = [];
  _$jscoverage['util/getBrownies.js'][11] = 0;
  _$jscoverage['util/getBrownies.js'][13] = 0;
  _$jscoverage['util/getBrownies.js'][15] = 0;
  _$jscoverage['util/getBrownies.js'][18] = 0;
  _$jscoverage['util/getBrownies.js'][19] = 0;
  _$jscoverage['util/getBrownies.js'][20] = 0;
  _$jscoverage['util/getBrownies.js'][22] = 0;
  _$jscoverage['util/getBrownies.js'][31] = 0;
  _$jscoverage['util/getBrownies.js'][34] = 0;
  _$jscoverage['util/getBrownies.js'][37] = 0;
  _$jscoverage['util/getBrownies.js'][40] = 0;
}
_$jscoverage['util/getBrownies.js'].source = ["<span class=\"c\">/*global $:false */</span>","<span class=\"c\">/*jshint quotmark: false */</span>","<span class=\"c\">/*jshint loopfunc: true */</span>","<span class=\"c\">/*jslint latedef:false*/</span>","<span class=\"c\">/*jslint browser:true */</span>","<span class=\"c\">/*jshint maxparams: 5 */</span>","<span class=\"c\">/*global define*/</span>","","<span class=\"c\">/*var $ = require (\"../lib/jquery.js\"); */</span>","","define<span class=\"k\">([</span>","<span class=\"k\">],</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","  <span class=\"s\">'use strict'</span><span class=\"k\">;</span>","","  <span class=\"k\">return</span> <span class=\"k\">{</span>","    getPoints<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>uname<span class=\"k\">)</span> <span class=\"k\">{</span>","","      <span class=\"k\">if</span> <span class=\"k\">(</span>uname<span class=\"k\">.</span>length <span class=\"k\">!==</span> <span class=\"s\">0</span> <span class=\"k\">&amp;&amp;</span> $ <span class=\"k\">!==</span> undefined <span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> points <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","        <span class=\"k\">var</span> url <span class=\"k\">=</span> <span class=\"s\">'https://www.freecodecamp.com/api/users/about?username='</span><span class=\"k\">+</span> uname<span class=\"k\">.</span>toLowerCase<span class=\"k\">();</span>","","        $<span class=\"k\">.</span>ajax<span class=\"k\">(</span><span class=\"k\">{</span>","          type<span class=\"k\">:</span> <span class=\"s\">'GET'</span><span class=\"k\">,</span>","          url<span class=\"k\">:</span> url<span class=\"k\">,</span>","          <span class=\"c\">//data:data,</span>","          async<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","          dataType<span class=\"k\">:</span> <span class=\"s\">'json'</span><span class=\"k\">,</span>","          success<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>data<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"c\">//Do stuff with the JSON data</span>","            <span class=\"c\">// points = data.about.browniePoints;</span>","            points <span class=\"k\">=</span> <span class=\"s\">310</span><span class=\"k\">;</span>","          <span class=\"k\">}</span><span class=\"k\">,</span>","          error<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span> <span class=\"c\">/* xhr, textStatus, errorThrown */</span> <span class=\"k\">)</span> <span class=\"k\">{</span>","            points <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","          <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">);</span> ","        <span class=\"k\">return</span> points<span class=\"k\">;</span>","      <span class=\"k\">}</span>","      <span class=\"k\">else</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"s\">0</span><span class=\"k\">;</span> ","      <span class=\"k\">}</span>","","    <span class=\"k\">}</span>","  <span class=\"k\">}</span>","","<span class=\"k\">}</span><span class=\"k\">);</span>",""];
_$jscoverage['util/getBrownies.js'][11]++;
define([], (function () {
  _$jscoverage['util/getBrownies.js'][13]++;
  "use strict";
  _$jscoverage['util/getBrownies.js'][15]++;
  return ({getPoints: (function (uname) {
  _$jscoverage['util/getBrownies.js'][18]++;
  if (((uname.length !== 0) && ($ !== undefined))) {
    _$jscoverage['util/getBrownies.js'][19]++;
    var points = 0;
    _$jscoverage['util/getBrownies.js'][20]++;
    var url = ("https://www.freecodecamp.com/api/users/about?username=" + uname.toLowerCase());
    _$jscoverage['util/getBrownies.js'][22]++;
    $.ajax({type: "GET", url: url, async: false, dataType: "json", success: (function (data) {
  _$jscoverage['util/getBrownies.js'][31]++;
  points = 310;
}), error: (function () {
  _$jscoverage['util/getBrownies.js'][34]++;
  points = 0;
})});
    _$jscoverage['util/getBrownies.js'][37]++;
    return points;
  }
  else {
    _$jscoverage['util/getBrownies.js'][40]++;
    return 0;
  }
})});
}));
