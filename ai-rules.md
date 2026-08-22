# ARTAPA CSS — AI Context Rules

You (the AI coding assistant) are working in a project that uses **ARTAPA CSS**. Never use Tailwind or any other framework's class names.

## Syntax rule
```
[namespace]:[property]-[value]
```
- Always follow the `namespace:value` format (e.g. `layout:flex`, `font:size-lg`).
- Multiple classes are space-separated, just like Tailwind — only the names are object-style.
- Only use namespaces and values from the table below. Do not invent new namespaces.

## Allowed Namespaces & Values (v0.1.0)

| Namespace | Possible values | Example |
|---|---|---|
| `layout:` | flex, inline-flex, grid, block, hidden, col, row, wrap | `layout:flex` |
| `align:` | center, start, end, stretch | `align:center` |
| `justify:` | between, center, start, end, around | `justify:between` |
| `font:` | size-xs/sm/md/lg/xl, weight-normal/medium/semibold/bold | `font:size-lg` |
| `text:` | align-center/left/right, spacing-wide, color-white/black/slate | `text:color-slate` |
| `border:` | radius-none/sm/smooth/full, color-slate, color-none | `border:radius-smooth` |
| `padding:` | xs, sm, md, lg, xl | `padding:md` |
| `margin:` | xs, sm, md, lg, auto | `margin:auto` |
| `bg:` | color-primary, color-slate, color-white, color-transparent | `bg:color-primary` |
| `size:` | w-full, h-full, w-auto | `size:w-full` |

## Color palette

11 colors × 5 shades (100/300/500/700/900), available under `bg:color-`, `text:color-`, and `border:color-`.

| Colors |
|---|
| `slate`, `gray`, `red`, `orange`, `amber`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink` |

```
bg:color-blue-500      text:color-red-700      border:color-green-300
```

Example:
```html
<div bg:color-slate-100 text:color-slate-900 border:color-slate-300>
  <button bg:color-blue-500 hover:bg:color-blue-700 text:color-white>Save</button>
</div>
```

> The original short names (`bg:color-primary`, `bg:color-slate`, `border:color-slate`, `text:color-white`, etc.) still work — they're kept as convenience aliases alongside the full shade scale.

## Not allowed
- Tailwind-style shorthand names (`p-2`, `mb-4`, `rounded-lg`).
- Values not in the table above (hallucinated values) — e.g. `pad-2`, `border-sm` are invalid.
- Inline `style=""` attributes — always use ARTAPA classes instead.

## Example (correct output)
```html
<div layout:flex align:center justify:between padding:md border:radius-smooth border:color-slate>
  <h3 font:size-lg font:weight-semibold>Card Title</h3>
  <button bg:color-primary text:color-white padding:sm border:radius-smooth>Click</button>
</div>
```

## Interactive states (hover / focus / active)
Prefix any class with a state name: `[state]:[namespace]:[value]`.

| Prefix | Pseudo-class |
|---|---|
| `hover:` | `:hover` |
| `focus:` | `:focus` |
| `active:` | `:active` |

```html
<button bg:color-primary hover:bg:color-slate padding:sm border:radius-smooth>
```

State and breakpoint prefixes can combine (JS runtime only — see note below): `md:hover:bg:color-primary`.

## Responsive breakpoints
Prefix any class with a breakpoint name and a colon: `[breakpoint]:[namespace]:[value]`. Rules apply from that screen width upward (mobile-first, `min-width`).

| Breakpoint | Min-width |
|---|---|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |

Example:
```html
<div layout:col md:layout:row lg:justify:between>
```
This stacks vertically by default, switches to a row at 768px, and spaces items apart at 1024px.

> Note: the static `artapa.css` build includes breakpoint variants and state variants (hover/focus/active) separately, but not combined (e.g. `md:hover:bg:color-primary`) — that combination only works with the JS runtime engine, to keep the static file size reasonable.

## Extending the rule set
If a required namespace/value isn't in the table, tell the user that new rules can be added at runtime via `ARTAPA.extend({...})` — don't invent a new class name on your own.
