/*!
 * ARTAPA CSS v0.1.0-beta.1
 * Runtime On-Demand CSS Generation Engine — AI-Optimized Namespace Syntax
 * https://github.com/<your-username>/artapa-css
 * License: MIT
 *
 * ব্যবহার (CDN):
 * <script src="https://cdn.jsdelivr.net/gh/<user>/artapa-css/dist/core.min.js"></script>
 *
 * সিনট্যাক্স: [namespace]:[property]-[value]
 * উদাহরণ: layout:flex, font:size-lg, border:radius-smooth
 */
(function (global) {
  "use strict";

  // =========================================================
  // 1. RULE DICTIONARY — namespace:property-value -> CSS declaration
  //    এখান থেকেই পুরো ফ্রেমওয়ার্ক গ্রো করবে। নতুন namespace/value
  //    যোগ করতে চাইলে শুধু এই অবজেক্টে entry যোগ করুন।
  // =========================================================
  const RULES = {
    // ---- layout ----
    "layout:flex": "display:flex;",
    "layout:inline-flex": "display:inline-flex;",
    "layout:grid": "display:grid;",
    "layout:block": "display:block;",
    "layout:hidden": "display:none;",
    "layout:col": "flex-direction:column;",
    "layout:row": "flex-direction:row;",
    "layout:wrap": "flex-wrap:wrap;",

    // ---- align / justify ----
    "align:center": "align-items:center;",
    "align:start": "align-items:flex-start;",
    "align:end": "align-items:flex-end;",
    "align:stretch": "align-items:stretch;",
    "justify:between": "justify-content:space-between;",
    "justify:center": "justify-content:center;",
    "justify:start": "justify-content:flex-start;",
    "justify:end": "justify-content:flex-end;",
    "justify:around": "justify-content:space-around;",

    // ---- font / text ----
    "font:size-xs": "font-size:12px;",
    "font:size-sm": "font-size:14px;",
    "font:size-md": "font-size:16px;",
    "font:size-lg": "font-size:20px;",
    "font:size-xl": "font-size:28px;",
    "font:weight-normal": "font-weight:400;",
    "font:weight-medium": "font-weight:500;",
    "font:weight-semibold": "font-weight:600;",
    "font:weight-bold": "font-weight:700;",
    "text:align-center": "text-align:center;",
    "text:align-left": "text-align:left;",
    "text:align-right": "text-align:right;",
    "text:spacing-wide": "letter-spacing:0.05em;",
    "text:color-white": "color:#ffffff;",
    "text:color-black": "color:#0f172a;",
    "text:color-slate": "color:#64748b;",

    // ---- border ----
    "border:radius-none": "border-radius:0;",
    "border:radius-sm": "border-radius:4px;",
    "border:radius-smooth": "border-radius:10px;",
    "border:radius-full": "border-radius:9999px;",
    "border:color-slate": "border:1px solid #cbd5e1;",
    "border:color-none": "border:none;",

    // ---- spacing (padding / margin) ----
    "padding:xs": "padding:4px;",
    "padding:sm": "padding:8px;",
    "padding:md": "padding:16px;",
    "padding:lg": "padding:24px;",
    "padding:xl": "padding:32px;",
    "margin:xs": "margin:4px;",
    "margin:sm": "margin:8px;",
    "margin:md": "margin:16px;",
    "margin:lg": "margin:24px;",
    "margin:auto": "margin:auto;",

    // ---- background ----
    "bg:color-primary": "background-color:#38bdf8;",
    "bg:color-slate": "background-color:#1e293b;",
    "bg:color-white": "background-color:#ffffff;",
    "bg:color-transparent": "background-color:transparent;",

    // ---- color palette (extended, 11 colors x 5 shades) ----
    // ---- slate ----
    "bg:color-slate-100": "background-color:#f1f5f9;",
    "bg:color-slate-300": "background-color:#cbd5e1;",
    "bg:color-slate-500": "background-color:#64748b;",
    "bg:color-slate-700": "background-color:#334155;",
    "bg:color-slate-900": "background-color:#0f172a;",
    "text:color-slate-100": "color:#f1f5f9;",
    "text:color-slate-300": "color:#cbd5e1;",
    "text:color-slate-500": "color:#64748b;",
    "text:color-slate-700": "color:#334155;",
    "text:color-slate-900": "color:#0f172a;",
    "border:color-slate-100": "border-color:#f1f5f9;",
    "border:color-slate-300": "border-color:#cbd5e1;",
    "border:color-slate-500": "border-color:#64748b;",
    "border:color-slate-700": "border-color:#334155;",
    "border:color-slate-900": "border-color:#0f172a;",
    // ---- gray ----
    "bg:color-gray-100": "background-color:#f3f4f6;",
    "bg:color-gray-300": "background-color:#d1d5db;",
    "bg:color-gray-500": "background-color:#6b7280;",
    "bg:color-gray-700": "background-color:#374151;",
    "bg:color-gray-900": "background-color:#111827;",
    "text:color-gray-100": "color:#f3f4f6;",
    "text:color-gray-300": "color:#d1d5db;",
    "text:color-gray-500": "color:#6b7280;",
    "text:color-gray-700": "color:#374151;",
    "text:color-gray-900": "color:#111827;",
    "border:color-gray-100": "border-color:#f3f4f6;",
    "border:color-gray-300": "border-color:#d1d5db;",
    "border:color-gray-500": "border-color:#6b7280;",
    "border:color-gray-700": "border-color:#374151;",
    "border:color-gray-900": "border-color:#111827;",
    // ---- red ----
    "bg:color-red-100": "background-color:#fee2e2;",
    "bg:color-red-300": "background-color:#fca5a5;",
    "bg:color-red-500": "background-color:#ef4444;",
    "bg:color-red-700": "background-color:#b91c1c;",
    "bg:color-red-900": "background-color:#7f1d1d;",
    "text:color-red-100": "color:#fee2e2;",
    "text:color-red-300": "color:#fca5a5;",
    "text:color-red-500": "color:#ef4444;",
    "text:color-red-700": "color:#b91c1c;",
    "text:color-red-900": "color:#7f1d1d;",
    "border:color-red-100": "border-color:#fee2e2;",
    "border:color-red-300": "border-color:#fca5a5;",
    "border:color-red-500": "border-color:#ef4444;",
    "border:color-red-700": "border-color:#b91c1c;",
    "border:color-red-900": "border-color:#7f1d1d;",
    // ---- orange ----
    "bg:color-orange-100": "background-color:#ffedd5;",
    "bg:color-orange-300": "background-color:#fdba74;",
    "bg:color-orange-500": "background-color:#f97316;",
    "bg:color-orange-700": "background-color:#c2410c;",
    "bg:color-orange-900": "background-color:#7c2d12;",
    "text:color-orange-100": "color:#ffedd5;",
    "text:color-orange-300": "color:#fdba74;",
    "text:color-orange-500": "color:#f97316;",
    "text:color-orange-700": "color:#c2410c;",
    "text:color-orange-900": "color:#7c2d12;",
    "border:color-orange-100": "border-color:#ffedd5;",
    "border:color-orange-300": "border-color:#fdba74;",
    "border:color-orange-500": "border-color:#f97316;",
    "border:color-orange-700": "border-color:#c2410c;",
    "border:color-orange-900": "border-color:#7c2d12;",
    // ---- amber ----
    "bg:color-amber-100": "background-color:#fef3c7;",
    "bg:color-amber-300": "background-color:#fcd34d;",
    "bg:color-amber-500": "background-color:#f59e0b;",
    "bg:color-amber-700": "background-color:#b45309;",
    "bg:color-amber-900": "background-color:#78350f;",
    "text:color-amber-100": "color:#fef3c7;",
    "text:color-amber-300": "color:#fcd34d;",
    "text:color-amber-500": "color:#f59e0b;",
    "text:color-amber-700": "color:#b45309;",
    "text:color-amber-900": "color:#78350f;",
    "border:color-amber-100": "border-color:#fef3c7;",
    "border:color-amber-300": "border-color:#fcd34d;",
    "border:color-amber-500": "border-color:#f59e0b;",
    "border:color-amber-700": "border-color:#b45309;",
    "border:color-amber-900": "border-color:#78350f;",
    // ---- green ----
    "bg:color-green-100": "background-color:#dcfce7;",
    "bg:color-green-300": "background-color:#86efac;",
    "bg:color-green-500": "background-color:#22c55e;",
    "bg:color-green-700": "background-color:#15803d;",
    "bg:color-green-900": "background-color:#14532d;",
    "text:color-green-100": "color:#dcfce7;",
    "text:color-green-300": "color:#86efac;",
    "text:color-green-500": "color:#22c55e;",
    "text:color-green-700": "color:#15803d;",
    "text:color-green-900": "color:#14532d;",
    "border:color-green-100": "border-color:#dcfce7;",
    "border:color-green-300": "border-color:#86efac;",
    "border:color-green-500": "border-color:#22c55e;",
    "border:color-green-700": "border-color:#15803d;",
    "border:color-green-900": "border-color:#14532d;",
    // ---- teal ----
    "bg:color-teal-100": "background-color:#ccfbf1;",
    "bg:color-teal-300": "background-color:#5eead4;",
    "bg:color-teal-500": "background-color:#14b8a6;",
    "bg:color-teal-700": "background-color:#0f766e;",
    "bg:color-teal-900": "background-color:#134e4a;",
    "text:color-teal-100": "color:#ccfbf1;",
    "text:color-teal-300": "color:#5eead4;",
    "text:color-teal-500": "color:#14b8a6;",
    "text:color-teal-700": "color:#0f766e;",
    "text:color-teal-900": "color:#134e4a;",
    "border:color-teal-100": "border-color:#ccfbf1;",
    "border:color-teal-300": "border-color:#5eead4;",
    "border:color-teal-500": "border-color:#14b8a6;",
    "border:color-teal-700": "border-color:#0f766e;",
    "border:color-teal-900": "border-color:#134e4a;",
    // ---- blue ----
    "bg:color-blue-100": "background-color:#dbeafe;",
    "bg:color-blue-300": "background-color:#93c5fd;",
    "bg:color-blue-500": "background-color:#3b82f6;",
    "bg:color-blue-700": "background-color:#1d4ed8;",
    "bg:color-blue-900": "background-color:#1e3a8a;",
    "text:color-blue-100": "color:#dbeafe;",
    "text:color-blue-300": "color:#93c5fd;",
    "text:color-blue-500": "color:#3b82f6;",
    "text:color-blue-700": "color:#1d4ed8;",
    "text:color-blue-900": "color:#1e3a8a;",
    "border:color-blue-100": "border-color:#dbeafe;",
    "border:color-blue-300": "border-color:#93c5fd;",
    "border:color-blue-500": "border-color:#3b82f6;",
    "border:color-blue-700": "border-color:#1d4ed8;",
    "border:color-blue-900": "border-color:#1e3a8a;",
    // ---- indigo ----
    "bg:color-indigo-100": "background-color:#e0e7ff;",
    "bg:color-indigo-300": "background-color:#a5b4fc;",
    "bg:color-indigo-500": "background-color:#6366f1;",
    "bg:color-indigo-700": "background-color:#4338ca;",
    "bg:color-indigo-900": "background-color:#312e81;",
    "text:color-indigo-100": "color:#e0e7ff;",
    "text:color-indigo-300": "color:#a5b4fc;",
    "text:color-indigo-500": "color:#6366f1;",
    "text:color-indigo-700": "color:#4338ca;",
    "text:color-indigo-900": "color:#312e81;",
    "border:color-indigo-100": "border-color:#e0e7ff;",
    "border:color-indigo-300": "border-color:#a5b4fc;",
    "border:color-indigo-500": "border-color:#6366f1;",
    "border:color-indigo-700": "border-color:#4338ca;",
    "border:color-indigo-900": "border-color:#312e81;",
    // ---- purple ----
    "bg:color-purple-100": "background-color:#f3e8ff;",
    "bg:color-purple-300": "background-color:#d8b4fe;",
    "bg:color-purple-500": "background-color:#a855f7;",
    "bg:color-purple-700": "background-color:#7e22ce;",
    "bg:color-purple-900": "background-color:#581c87;",
    "text:color-purple-100": "color:#f3e8ff;",
    "text:color-purple-300": "color:#d8b4fe;",
    "text:color-purple-500": "color:#a855f7;",
    "text:color-purple-700": "color:#7e22ce;",
    "text:color-purple-900": "color:#581c87;",
    "border:color-purple-100": "border-color:#f3e8ff;",
    "border:color-purple-300": "border-color:#d8b4fe;",
    "border:color-purple-500": "border-color:#a855f7;",
    "border:color-purple-700": "border-color:#7e22ce;",
    "border:color-purple-900": "border-color:#581c87;",
    // ---- pink ----
    "bg:color-pink-100": "background-color:#fce7f3;",
    "bg:color-pink-300": "background-color:#f9a8d4;",
    "bg:color-pink-500": "background-color:#ec4899;",
    "bg:color-pink-700": "background-color:#be185d;",
    "bg:color-pink-900": "background-color:#831843;",
    "text:color-pink-100": "color:#fce7f3;",
    "text:color-pink-300": "color:#f9a8d4;",
    "text:color-pink-500": "color:#ec4899;",
    "text:color-pink-700": "color:#be185d;",
    "text:color-pink-900": "color:#831843;",
    "border:color-pink-100": "border-color:#fce7f3;",
    "border:color-pink-300": "border-color:#f9a8d4;",
    "border:color-pink-500": "border-color:#ec4899;",
    "border:color-pink-700": "border-color:#be185d;",
    "border:color-pink-900": "border-color:#831843;",

    // ---- sizing ----
    "size:w-full": "width:100%;",
    "size:h-full": "height:100%;",
    "size:w-auto": "width:auto;",
  };

  // =========================================================
  // 1b. BREAKPOINTS — responsive prefix support
  //     সিনট্যাক্স: [breakpoint]:[namespace]:[value]
  //     উদাহরণ: md:layout:flex, lg:font:size-xl
  //     min-width মিডিয়া কোয়েরি ব্যবহার করা হয় (mobile-first, Tailwind-এর মতোই)
  // =========================================================
  const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  // =========================================================
  // 1c. STATES — hover/focus/active pseudo-class support
  //     সিনট্যাক্স: [state]:[namespace]:[value]
  //     উদাহরণ: hover:bg:color-primary, focus:border:color-slate
  //     breakpoint prefix-এর সাথেও কম্বাইন করা যায় (JS runtime-এ),
  //     যেমন: md:hover:bg:color-primary
  // =========================================================
  const STATES = {
    hover: ":hover",
    focus: ":focus",
    active: ":active",
  };

  // ক্লাস স্ট্রিং পার্স করে { breakpoint, state, baseClass } রিটার্ন করে।
  // breakpoint ও state prefix যেকোনো অর্ডারে থাকতে পারে, একটাই বা দুটোই বা কোনোটাই না।
  function parseClass(cls) {
    const parts = cls.split(":");
    let breakpoint = null;
    let state = null;
    let idx = 0;
    // অন্তত namespace:value বাকি রাখার জন্য parts.length - idx >= 2 শর্ত রাখা হলো
    while (idx < parts.length - 2) {
      const piece = parts[idx];
      if (!breakpoint && BREAKPOINTS.hasOwnProperty(piece)) {
        breakpoint = piece;
        idx++;
        continue;
      }
      if (!state && STATES.hasOwnProperty(piece)) {
        state = piece;
        idx++;
        continue;
      }
      break;
    }
    return { breakpoint, state, baseClass: parts.slice(idx).join(":") };
  }

  // =========================================================
  // 2. STATE
  // =========================================================
  const injected = new Set();
  const unknown = new Set(); // অজানা / হ্যালুসিনেটেড ক্লাস ট্র্যাক করার জন্য
  let styleEl = null;
  let observer = null;

  function cssEscape(cls) {
    return "." + cls.replace(/[:]/g, "\\$&");
  }

  function ensureStyleTag() {
    if (styleEl) return styleEl;
    styleEl = document.getElementById("artapa-runtime-style");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "artapa-runtime-style";
      document.head.appendChild(styleEl);
    }
    return styleEl;
  }

  function injectRule(cls) {
    if (injected.has(cls)) return;
    const { breakpoint, state, baseClass } = parseClass(cls);
    const decl = RULES[baseClass];
    if (!decl) {
      if (!unknown.has(cls)) {
        unknown.add(cls);
        console.warn(`[ARTAPA CSS] অজানা ক্লাস: "${cls}" — ai-rules.md অনুযায়ী ভ্যালিড namespace:value ব্যবহার করুন।`);
      }
      return;
    }
    const pseudo = state ? STATES[state] : "";
    const rule = `${cssEscape(cls)}${pseudo}{${decl}}`;
    const finalCSS = breakpoint
      ? `@media (min-width:${BREAKPOINTS[breakpoint]}px){${rule}}\n`
      : `${rule}\n`;
    ensureStyleTag().appendChild(document.createTextNode(finalCSS));
    injected.add(cls);
  }

  function scanElement(el) {
    if (el.classList) el.classList.forEach(injectRule);
  }

  function scanTree(root) {
    scanElement(root);
    if (root.querySelectorAll) root.querySelectorAll("*").forEach(scanElement);
  }

  // =========================================================
  // 3. PUBLIC API — window.ARTAPA
  // =========================================================
  const ARTAPA = {
    version: "0.1.0-beta.1",
    rules: RULES,
    breakpoints: BREAKPOINTS,
    states: STATES,

    // নতুন rule রানটাইমে যোগ করার জন্য (প্লাগইন/থিম extension)
    extend(customRules) {
      Object.assign(RULES, customRules);
    },

    // নতুন breakpoint যোগ/override করার জন্য, যেমন: ARTAPA.setBreakpoint("xs", 480)
    setBreakpoint(name, minWidthPx) {
      BREAKPOINTS[name] = minWidthPx;
    },

    // নতুন state/pseudo-class যোগ করার জন্য, যেমন: ARTAPA.setState("disabled", ":disabled")
    setState(name, pseudoSelector) {
      STATES[name] = pseudoSelector;
    },

    // ম্যানুয়ালি একটা root স্ক্যান করা
    scan(root) {
      scanTree(root || document.body);
    },

    // ইঞ্জিন চালু করা — DOM observe করে নতুন এলিমেন্ট/ক্লাস অটো-ডিটেক্ট করবে
    init(root) {
      const target = root || document.body;
      scanTree(target);
      if (observer) observer.disconnect();
      observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === "childList") {
            m.addedNodes.forEach((node) => {
              if (node.nodeType === 1) scanTree(node);
            });
          } else if (m.type === "attributes" && m.attributeName === "class") {
            scanElement(m.target);
          }
        }
      });
      observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
      return observer;
    },

    stop() {
      if (observer) observer.disconnect();
    },

    // বর্তমান জেনারেটেড CSS টেক্সট হিসেবে বের করা (ডিবাগ/এক্সপোর্টের জন্য)
    getGeneratedCSS() {
      return ensureStyleTag().textContent;
    },

    getUnknownClasses() {
      return Array.from(unknown);
    },
  };

  global.ARTAPA = ARTAPA;

  // অটো-ইনিট: script ট্যাগে data-auto="false" না দিলে DOM ready হওয়ামাত্র চালু হবে
  function autoInit() {
    const scriptTag = document.currentScript || document.querySelector('script[src*="core"]');
    if (scriptTag && scriptTag.dataset && scriptTag.dataset.auto === "false") return;
    ARTAPA.init(document.body);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }
})(window);
