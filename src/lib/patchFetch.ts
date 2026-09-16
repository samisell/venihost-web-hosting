/**
 * Polyfill/Patch for browsers or iframe environments where window.fetch or Window.prototype.fetch
 * is defined with only a getter (no setter). Third-party libraries/ponyfills (e.g. tawk.to)
 * inherit from window or Window.prototype and run `this.fetch = false;` or assign to fetch,
 * which throws `TypeError: Cannot set property fetch of #<Window> which has only a getter`.
 */
export function initFetchPatch(): void {
  if (typeof window === 'undefined') return;

  function patchTarget(target: any) {
    if (!target) return;
    let curr = target;
    while (curr && curr !== Object.prototype) {
      try {
        const desc = Object.getOwnPropertyDescriptor(curr, 'fetch');
        if (desc && !desc.set && desc.configurable) {
          const originalGet = desc.get || (() => desc.value);
          Object.defineProperty(curr, 'fetch', {
            get: originalGet,
            set(v: any) {
              Object.defineProperty(this, 'fetch', {
                value: v,
                writable: true,
                configurable: true,
                enumerable: true,
              });
            },
            configurable: true,
            enumerable: desc.enumerable !== false,
          });
        }
      } catch {
        // Ignore descriptor access errors
      }
      curr = Object.getPrototypeOf(curr);
    }
  }

  patchTarget(window);
  if (typeof Window !== 'undefined' && Window.prototype) {
    patchTarget(Window.prototype);
  }
  if (typeof globalThis !== 'undefined') {
    patchTarget(globalThis);
  }

  // Prevent uncaught errors from crashing the page if an external script still triggers this
  window.addEventListener(
    'error',
    (event) => {
      if (
        event &&
        event.message &&
        event.message.includes('fetch') &&
        event.message.includes('has only a getter')
      ) {
        event.preventDefault();
        if (typeof event.stopImmediatePropagation === 'function') {
          event.stopImmediatePropagation();
        }
        return true;
      }
    },
    true
  );
}

initFetchPatch();
