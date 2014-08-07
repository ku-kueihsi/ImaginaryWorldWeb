goog.provide('testGl.start')

goog.require('goog.dom');
goog.require('goog.events')
goog.require('goog.events.EventType')
goog.require('goog.events.KeyHandler')

testGl.start = function() {
  return;
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('testGl.start', testGl.start);
