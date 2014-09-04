goog.provide('Dummy.start')

goog.require('goog.dom');
goog.require('goog.events')
goog.require('goog.events.EventType')
goog.require('goog.events.KeyHandler')
goog.require('goog.style')

Dummy.start = function() {
  var container = goog.dom.createDom('div');
  // goog.style.setSize(container, 200, 300);
  goog.dom.appendChild(goog.global.document.body, container);
  var canvas = goog.dom.createElement('canvas');
  container.appendChild(canvas);
  var size = goog.style.getSize(canvas);
  goog.global.console.log(size.width + ', ' + size.height);
  canvas.setAttribute('class', 'widget');
  // goog.style.setSize(canvas, 640, 480);
  var size = goog.style.getSize(canvas);
  goog.global.console.log(size.width + ', ' + size.height);
}

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('Dummy.start', Dummy.start);
