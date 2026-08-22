/*!
 * ARTAPA CSS — build.js
 * এই স্ক্রিপ্ট src/core.js এর ভেতরের RULES ডিকশনারি থেকেই
 * dist/artapa.css এবং dist/artapa.min.css জেনারেট করে।
 * একটাই সোর্স অফ ট্রুথ — JS ইঞ্জিন আর স্ট্যাটিক CSS কখনো আউট-অফ-সিঙ্ক হবে না।
 *
 * চালানোর নিয়ম: node build.js
 */
const fs = require("fs");
const path = require("path");

// core.js থেকে RULES এবং BREAKPOINTS অবজেক্ট বের করে আনা (sandboxed eval, শুধু বিল্ড-টাইমে)
const coreSrc = fs.readFileSync(path.join(__dirname, "src/core.js"), "utf8");

const rulesMatch = coreSrc.match(/const RULES = (\{[\s\S]*?\n  \});/);
if (!rulesMatch) throw new Error("RULES ডিকশনারি core.js থেকে পার্স করা গেল না।");
const RULES = eval("(" + rulesMatch[1] + ")");

const bpMatch = coreSrc.match(/const BREAKPOINTS = (\{[\s\S]*?\n  \});/);
if (!bpMatch) throw new Error("BREAKPOINTS অবজেক্ট core.js থেকে পার্স করা গেল না।");
const BREAKPOINTS = eval("(" + bpMatch[1] + ")");

const stateMatch = coreSrc.match(/const STATES = (\{[\s\S]*?\n  \});/);
if (!stateMatch) throw new Error("STATES অবজেক্ট core.js থেকে পার্স করা গেল না।");
const STATES = eval("(" + stateMatch[1] + ")");

function cssEscape(cls) {
  return "." + cls.replace(/[:]/g, "\\$&");
}

// namespace অনুযায়ী গ্রুপ করে সাজানো, যাতে ফাইলটা মানুষের পড়ার মতো থাকে
const groups = {};
for (const cls of Object.keys(RULES)) {
  const ns = cls.split(":")[0];
  (groups[ns] = groups[ns] || []).push(cls);
}

let out = `/*!
 * ARTAPA CSS v0.1.0 — Static Build
 * অটো-জেনারেটেড ফাইল, src/core.js এর RULES থেকে বিল্ড করা হয়েছে। ম্যানুয়ালি এডিট করবেন না।
 * ব্যবহার: <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/<user>/artapa-css@v0.1.0/dist/artapa.css">
 */\n\n`;

for (const ns of Object.keys(groups)) {
  out += `/* ---- ${ns} ---- */\n`;
  for (const cls of groups[ns]) {
    out += `${cssEscape(cls)} { ${RULES[cls]} }\n`;
  }
  out += "\n";
}

// ---- Responsive breakpoint variants ----
// প্রতিটা breakpoint-এর জন্য min-width media query-তে সবগুলো ক্লাস বসানো হচ্ছে,
// যাতে static CSS-এও md:layout:flex, lg:font:size-xl ইত্যাদি সিনট্যাক্স কাজ করে।
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

// ---- State variants (hover / focus / active) ----
// static বিল্ডে breakpoint + state কম্বিনেশন (যেমন md:hover:...) জেনারেট করা হয় না,
// কারণ এতে ফাইল সাইজ অনেক বেড়ে যাবে। কম্বিনেশন দরকার হলে JS রানটাইম ইঞ্জিন ব্যবহার করুন।
out += `/* ---- state variants (hover/focus/active) ---- */\n`;
for (const st of Object.keys(STATES)) {
  for (const cls of Object.keys(RULES)) {
    const prefixedClass = `${st}:${cls}`;
    out += `${cssEscape(prefixedClass)}${STATES[st]} { ${RULES[cls]} }\n`;
  }
  out += "\n";
}

fs.writeFileSync(path.join(__dirname, "dist/artapa.css"), out);

// সিম্পল মিনিফিকেশন (কমেন্ট + অতিরিক্ত স্পেস বাদ)
const minified = out
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*\{\s*/g, "{")
  .replace(/\s*\}\s*/g, "}")
  .replace(/;\s+/g, ";")
  .trim();
fs.writeFileSync(path.join(__dirname, "dist/artapa.min.css"), minified);

console.log(`✔ dist/artapa.css       (${out.length} bytes)`);
console.log(`✔ dist/artapa.min.css   (${minified.length} bytes)`);
console.log(`✔ Base classes: ${Object.keys(RULES).length}`);
console.log(`✔ Breakpoints: ${bpNames.join(", ")}`);
console.log(`✔ States: ${Object.keys(STATES).join(", ")}`);
console.log(`✔ Total generated selectors: ${Object.keys(RULES).length * (bpNames.length + 1 + Object.keys(STATES).length)}`);
