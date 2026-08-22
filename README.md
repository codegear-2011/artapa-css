# ARTAPA CSS

**AI-optimized, zero-config, runtime CSS framework.**
Namespace-based class syntax (`layout:flex`, `font:size-lg`) + real-time in-browser CSS generation — no Node.js, Vite, or Webpack setup required.

## Two ways to use it

ARTAPA CSS ships in two forms — pick whichever fits your use case.

### Option 1: Runtime Engine (JS) — zero-config, recommended for development

```html
<script src="https://cdn.jsdelivr.net/gh/<your-username>/artapa-css@v0.1.0-beta.1/dist/core.min.js"></script>
```

Only the CSS for classes actually used on the page is generated in real time in the browser (powered by `MutationObserver`). Best for prototyping and trying out new namespaces/values quickly.

### Option 2: Static `artapa.css` — no JS, fastest for production

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/<your-username>/artapa-css@v0.1.0-beta.1/dist/artapa.min.css">
```

A plain, pre-compiled CSS file — every namespace:value class is already written out (~2KB minified). No runtime JavaScript or MutationObserver needed; it works exactly like a normal `<link>` stylesheet, similar to Bootstrap's or Tailwind's compiled CSS output.

> `dist/artapa.css` and the `RULES` object inside `dist/core.js` are both generated from the same source (`src/core.js`) via `node build.js`, so they never fall out of sync.

Once loaded, just write ARTAPA classes on any element:

```html
<div layout:flex align:center justify:between padding:md border:radius-smooth border:color-slate>
  <h3 font:size-lg font:weight-semibold>ARTAPA Card</h3>
  <button bg:color-primary text:color-white padding:sm border:radius-smooth>Click</button>
</div>
```

## How it works
1. As soon as `core.min.js` loads, it scans the entire `<body>` and generates CSS for the classes in use, injecting them into a `<style id="artapa-runtime-style">` tag.
2. A `MutationObserver` detects new elements or class changes in the DOM in real time and adds the required rules on the fly.
3. Only rules for classes actually used are generated — the whole framework is never processed at once, so page performance stays fast.
4. Classes already processed are tracked in an internal `Set`, so edits are incremental — changing two lines of code doesn't recompile the whole stylesheet, only the new/changed classes are added.

## Color palette

11 colors × 5 shades each (100 / 300 / 500 / 700 / 900) — `slate`, `gray`, `red`, `orange`, `amber`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`. Applied across three namespaces:

```
bg:color-<name>-<shade>       e.g. bg:color-blue-500
text:color-<name>-<shade>     e.g. text:color-red-700
border:color-<name>-<shade>   e.g. border:color-green-300
```

```html
<button bg:color-blue-500 hover:bg:color-blue-700 text:color-white padding:sm border:radius-smooth>
  Save
</button>
```

The original short aliases (`bg:color-primary`, `text:color-white`, `border:color-slate`, etc.) are unchanged and still work.

## Interactive states (hover / focus / active)

Prefix any class with a state name: `[state]:[namespace]:[value]`.

| Prefix | Pseudo-class |
|---|---|
| `hover:` | `:hover` |
| `focus:` | `:focus` |
| `active:` | `:active` |

```html
<button bg:color-primary hover:bg:color-slate padding:sm border:radius-smooth>
  Click me
</button>
```

State and breakpoint prefixes can be combined in the JS runtime (e.g. `md:hover:bg:color-primary`). The static `artapa.css` build includes each prefix type separately but not combined, to keep file size down — use the JS runtime engine if you need combined prefixes.

## Responsive breakpoints

Prefix any class with a breakpoint name: `[breakpoint]:[namespace]:[value]`. Mobile-first (`min-width`), same convention as Tailwind's prefixes but keeping ARTAPA's namespace grammar.

| Prefix | Min-width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

```html
<div layout:col md:layout:row lg:justify:between>
  <!-- column on mobile, row from 768px, spaced-out from 1024px -->
</div>
```

Works identically whether you're using the JS runtime or the static `artapa.css` — both are generated from the same `BREAKPOINTS` config in `src/core.js`.

## Public API

```js
ARTAPA.init(rootEl)          // Start/restart the engine (auto-starts by default)
ARTAPA.scan(rootEl)          // Manually scan a specific subtree
ARTAPA.extend({ "spacing:xxl": "padding:48px;" }) // Add new rules at runtime
ARTAPA.setBreakpoint("xs", 480)  // Add/override a breakpoint at runtime
ARTAPA.setState("disabled", ":disabled") // Add/override a state at runtime
ARTAPA.getGeneratedCSS()     // Get the CSS generated so far, as text
ARTAPA.getUnknownClasses()   // Classes not found in the dictionary (helps catch hallucinated class names)
ARTAPA.stop()                // Disconnect the MutationObserver
```

To disable auto-init:
```html
<script src=".../core.min.js" data-auto="false"></script>
<script>ARTAPA.init(document.getElementById("app"));</script>
```

## For AI coding assistants
Give your AI code assistant (Cursor, VS Code Copilot, etc.) the `ai-rules.md` file — it's the complete namespace/value reference for ARTAPA, so the AI won't hallucinate invalid class names.

## Project structure
```
artapa-css/
├── src/core.js          # Source of truth — RULES dictionary + runtime engine
├── build.js              # Generates dist/artapa.css from src/core.js
├── dist/core.js          # Unminified runtime engine
├── dist/core.min.js      # Minified runtime engine — use this on CDN (~4KB)
├── dist/artapa.css       # Static pre-compiled CSS (readable)
├── dist/artapa.min.css   # Static pre-compiled CSS (minified, ~2KB)
└── ai-rules.md            # AI context document
```

To add a new namespace/value, edit the `RULES` object in `src/core.js`, then run `node build.js` — `dist/artapa.css` updates automatically.

## Roadmap
- [x] Responsive breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- [x] State variants (`hover:`, `focus:`, `active:`)
- [x] Extended color palette (11 colors × 5 shades)
- [ ] **Production build/purge tool — now the top priority.** With 221 base classes and combined breakpoint/state variants, the static CSS build has grown to ~86KB minified. A tool that scans actual project HTML and outputs only the CSS in use is needed before this framework is production-ready.
- [ ] Production build command — scan actual HTML usage and output a purged, project-specific static CSS file (removes runtime JS)
- [ ] Theme config file (color palette overrides)

## License
MIT
