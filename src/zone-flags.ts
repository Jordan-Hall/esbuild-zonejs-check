import {
    globalEvents,
    compositionEvents,
    vrEvents,
    audioEvents,
    inputEvents,
    focusEvents,
    printEvents,
    wheelEvents,
    networkEvents,
    keyboardEvents,
    websocketEvents,
    xhrEvents,
    zoneConfig,
    windowEvents,
  } from '@rx-angular/cdk/zone-configurations';
  
  zoneConfig.events.disable.UNPATCHED_EVENTS([
    ...globalEvents,
    ...xhrEvents,
    ...windowEvents,
    ...compositionEvents,
    ...vrEvents,
    ...audioEvents,
    ...inputEvents,
    ...focusEvents,
    ...printEvents,
    ...wheelEvents,
    ...networkEvents,
    ...websocketEvents,
  ]);
  zoneConfig.useUnpatchedPassiveScrollEvents();
  zoneConfig.unpatchXHR();
  zoneConfig.global.disable.DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION();
  zoneConfig.global.disable.crypto();
  zoneConfig.global.disable.node_timers();
  zoneConfig.global.disable.registerElement();
  
  zoneConfig.global.disable.on_property();
  zoneConfig.global.disable.nextTick();
  zoneConfig.global.disable.EventTargetLegacy();
  // zoneConfig.global.disable.EventTarget();
  zoneConfig.global.disable.EventEmitter();
  
  zoneConfig.global.disable.geolocation();
  zoneConfig.global.disable.fs();
  zoneConfig.global.disable.defineProperty();
  zoneConfig.global.disable.customElements();
  zoneConfig.global.disable.blocking();
  zoneConfig.global.disable.MutationObserver();
  zoneConfig.global.disable.IntersectionObserver();
  zoneConfig.global.disable.FileReader();
  zoneConfig.global.disable.node_timers();
  zoneConfig.global.disable.requestAnimationFrame();
  zoneConfig.global.disable.timers();
  zoneConfig.global.disable.XHR();
  // zoneConfig.global.disable.ZoneAwarePromise();
  zoneConfig.global.disable.canvas();
  