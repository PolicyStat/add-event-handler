# add-event-handler

Unifies adding event handlers across browsers, whether they have `Element.prototype.addEventListener` or `Element.prototype.attachEvent`.

``` js
var add = require("add-event-handler");
add(element, type, handler);
```

There isn't much more, really.
