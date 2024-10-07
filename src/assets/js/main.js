import { toggleSidebar } from "./components/sidebar.js";
import { initDrawerMenu } from "./components/drawer.js";
import { initializeAnimations } from "./components/animation.js";

document.addEventListener("DOMContentLoaded", () => {
  adjustViewport();
  initializeAnimations();
  initDrawerMenu();
  toggleSidebar();
});

//360px未満は表示倍率を変更
export function adjustViewport() {
  const viewport = document.querySelector('meta[name="viewport"]');

  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? "width=device-width,initial-scale=1"
        : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }

  window.addEventListener("resize", switchViewport);
  switchViewport();

  return () => {
    window.removeEventListener("resize", switchViewport);
  };
}
