export function initDrawerMenu() {
  class DrawerMenu {
    constructor() {
      this.button = document.querySelector('[is="js-drawer-button"]');
      this.drawer = document.getElementById("navigation");
      this.focusableElements =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      this.firstFocusableElement = null;
      this.lastFocusableElement = null;
      this.mediaQuery = window.matchMedia("(min-width: 768px)");

      this.init();
    }

    init() {
      this.button.addEventListener("click", () => this.toggleDrawer());
      document.addEventListener("keydown", (e) => this.handleKeyDown(e));
      this.mediaQuery.addListener(() => this.handleResize());
      this.setFocusableElements();
    }

    toggleDrawer() {
      const isExpanded = this.button.getAttribute("aria-expanded") === "true";
      this.setDrawerState(!isExpanded);
    }

    setDrawerState(isOpen) {
      this.button.setAttribute("aria-expanded", isOpen);
      this.drawer.classList.toggle("is-active", isOpen);
      this.drawer.toggleAttribute("inert", !isOpen);

      if (isOpen) {
        this.lockScroll();
        this.setFocusableElements();
        this.firstFocusableElement.focus();
      } else {
        this.unlockScroll();
        this.button.focus();
      }

      this.button.setAttribute(
        "aria-label",
        isOpen ? "メニューを閉じる" : "メニューを開く"
      );
    }

    setFocusableElements() {
      const focusableContent = this.drawer.querySelectorAll(
        this.focusableElements
      );
      this.firstFocusableElement = focusableContent[0];
      this.lastFocusableElement = focusableContent[focusableContent.length - 1];
    }

    handleKeyDown(e) {
      if (
        e.key === "Escape" &&
        this.button.getAttribute("aria-expanded") === "true"
      ) {
        this.setDrawerState(false);
      }

      if (this.button.getAttribute("aria-expanded") === "true") {
        const isTabPressed = e.key === "Tab";

        if (!isTabPressed) return;

        if (e.shiftKey) {
          if (document.activeElement === this.firstFocusableElement) {
            e.preventDefault();
            this.lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === this.lastFocusableElement) {
            e.preventDefault();
            this.firstFocusableElement.focus();
          }
        }
      }
    }

    handleResize() {
      if (
        this.mediaQuery.matches &&
        this.button.getAttribute("aria-expanded") === "true"
      ) {
        this.setDrawerState(false);
      }
    }

    lockScroll() {
      document.body.style.overflow = "hidden";
    }

    unlockScroll() {
      document.body.style.overflow = "";
    }
  }

  return new DrawerMenu();
}
