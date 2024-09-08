const fs = require("fs")
const path = require("path")

const devCSS = fs.readFileSync(
  path.join(__dirname, "../output/dev.css"),
  "utf8"
)
const prodCSS = fs.readFileSync(
  path.join(__dirname, "../output/prod.css"),
  "utf8"
)

console.log("Development CSS size:", devCSS.length, "bytes")
console.log("Production CSS size:", prodCSS.length, "bytes")

const devRules = devCSS.match(/[^}]+\{[^}]+\}/g) || []
const prodRules = prodCSS.match(/[^}]+\{[^}]+\}/g) || []

console.log("Development CSS rules:", devRules.length)
console.log("Production CSS rules:", prodRules.length)

const devOnlyRules = devRules.filter((rule) => !prodRules.includes(rule))
const prodOnlyRules = prodRules.filter((rule) => !devRules.includes(rule))

console.log("Rules only in development:", devOnlyRules.length)
console.log("Rules only in production:", prodOnlyRules.length)

if (devOnlyRules.length > 0) {
  console.log("\nRules only in development:")
  devOnlyRules.forEach((rule) => console.log(rule))
}

if (prodOnlyRules.length > 0) {
  console.log("\nRules only in production:")
  prodOnlyRules.forEach((rule) => console.log(rule))
}
