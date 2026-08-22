/*!
 * ARTAPA CSS — build.js
 */
const fs = require("fs");
const path = require("path");


const coreSrc = fs.readFileSync(path.join(__dirname, "src/core.js"), "utf8");

const rulesMatch = coreSrc.match(/const RULES = (\{[\s\S]*?\n  \});/);
if (!rulesMatch) throw new Error("RULES dictionary could not be parsed from core.js.");
const RULES = eval("(" + rulesMatch[1] + ")");

const bpMatch = coreSrc.match(/const BREAKPOINTS = (\{[\s\S]*?\n  \});/);
if (!bpMatch) throw new Error("BREAKPOINTS could not be parsed from core.js.");
const BREAKPOINTS = eval("(" + bpMatch[1] + ")");

const stateMatch = coreSrc.match(/const STATES = (\{[\s\S]*?\n  \});/);
if (!stateMatch) throw new Error("STATE object could not be parsed from core.js.");
const STATES = eval("(" + stateMatch[1] + ")");

function cssEscape(cls) {
  return "." + cls.replace(/[:]/g, "\\$&");
}

//namespace 
const groups = {};
for (const cls of Object.keys(RULES)) {
  const ns = cls.split(":")[0];
  (groups[ns] = groups[ns] || []).push(cls);
}

let out = `/*!
 * ARTAPA CSS v0.1.0 — Static Build
 * Auto-generated file, do not edit manually
 * usage: <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/codegear-2011/artapa-css/core.min.css">
 */\n\n`;

for (const ns of Object.keys(groups)) {
  out += `/* ---- ${ns} ---- */\n`;
  for (const cls of groups[ns]) {
    out += `${cssEscape(cls)} { ${RULES[cls]} }\n`;
  }
  out += "\n";
}

//  Responsive breakpoint variants 
const bpNames = Object.keys(BREAKPOINTS).sort((a, b) => BREAKPOINTS[a] - BREAKPOINTS[b]);
out += `/* ---- responsive breakpoints ---- */\n`;
for (const bp of bpNames) {
  out += `@media (min-width:${BREAKPOINTS[bp]}px){\n`;
  for (const cls of Object.keys(RULES)) {
    const prefixedClass = `${bp}:${cls}`;
    out += `  ${cssEscape(prefixedClass)} { ${RULES[cls]} }\n`;
  }
  out += `}\n\n`;
}

// State variants 
out += `/* ---- state variants (hover/focus/active) ---- */\n`;
for (const st of Object.keys(STATES)) {
  for (const cls of Object.keys(RULES)) {
    const prefixedClass = `${st}:${cls}`;
    out += `${cssEscape(prefixedClass)}${STATES[st]} { ${RULES[cls]} }\n`;
  }
  out += "\n";
}

fs.writeFileSync(path.join(__dirname, "dist/artapa.css"), out);

// Simple Minificationd
const minified = out
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*\{\s*/g, "{")
  .replace(/\s*\}\s*/g, "}")
  .replace(/;\s+/g, ";")
  .trim();
fs.writeFileSync(path.join(__dirname, "dist/artapa.min.css"), minified);

console.log(` dist/artapa.css       (${out.length} bytes)`);
console.log(` dist/artapa.min.css   (${minified.length} bytes)`);
console.log(` Base classes: ${Object.keys(RULES).length}`);
console.log(` Breakpoints: ${bpNames.join(", ")}`);
console.log(` States: ${Object.keys(STATES).join(", ")}`);
console.log(` Total generated selectors: ${Object.keys(RULES).length * (bpNames.length + 1 + Object.keys(STATES).length)}`);
