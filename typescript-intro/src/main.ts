import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { name, age } from "./bases/01-types.ts";
import { numbers } from "./bases/02-objects.ts";
import { daniel } from "./bases/03-clases.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hello ${name}!</h1>
    <h2>Age: ${age}</h2>
    <h3>Numbers: ${numbers.join(",")}</h3>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
