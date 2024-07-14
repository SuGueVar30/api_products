import { execSync } from "child_process";
import fs from "fs";

const versionFilePath = "./update/Version.txt";
let versionNumber = 0;

if (fs.existsSync(versionFilePath)) {
  versionNumber = parseInt(fs.readFileSync(versionFilePath, "utf8"), 10);
}

versionNumber += 1;
fs.writeFileSync(versionFilePath, versionNumber.toString());
const commitMessage = `Actualización_${versionNumber.toString().padStart(2, "0")}`;

try {
  execSync("git add .");
  execSync(`git commit -m "${commitMessage}"`);
  execSync("git pull origin main");
  execSync("git push origin main");
  console.log(`Repositorio actualizado con commit: ${commitMessage}`);
} catch (error) {
  console.error("Error al actualizar el repositorio:", error);
}
