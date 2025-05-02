(() => {
  // resources/js/admin/admin.js
  (function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", init);
    let blockCards;
    let saveBlocksButton;
    let settingsForm;
    let togglePasswordButtons;
    function init() {
      blockCards = document.querySelectorAll(".digiblocks-block-card");
      saveBlocksButton = document.getElementById("digiblocks-save-blocks");
      settingsForm = document.getElementById("digiblocks-settings-form");
      togglePasswordButtons = document.querySelectorAll(".digiblocks-toggle-password");
      if (blockCards.length && saveBlocksButton) {
        initBlocksManager();
      }
      if (settingsForm) {
        initSettingsForm();
      }
      if (togglePasswordButtons.length) {
        initPasswordToggle();
      }
    }
    function initBlocksManager() {
      blockCards.forEach((card) => {
        const toggle = card.querySelector('input[type="checkbox"]');
        if (toggle) {
          toggle.addEventListener("change", function() {
            card.classList.toggle("is-active", this.checked);
          });
          card.classList.toggle("is-active", toggle.checked);
        }
      });
      saveBlocksButton.addEventListener("click", saveBlocksSettings);
    }
    function saveBlocksSettings() {
      const saveStatus = document.querySelector(".digiblocks-save-status");
      const activeBlocks = {};
      saveStatus.textContent = wp.i18n.__("Saving...", "digiblocks");
      saveStatus.classList.remove("success", "error");
      saveStatus.classList.add("visible");
      blockCards.forEach((card) => {
        const blockName = card.dataset.blockName;
        const toggle = card.querySelector('input[type="checkbox"]');
        if (blockName && toggle) {
          activeBlocks[blockName] = toggle.checked;
        }
      });
      fetch(digiBlocksAdmin.apiUrl + "update-blocks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": digiBlocksAdmin.apiNonce
        },
        body: JSON.stringify(activeBlocks)
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          saveStatus.textContent = data.message;
          saveStatus.classList.add("success");
          setTimeout(() => {
            saveStatus.classList.remove("visible");
          }, 3e3);
        } else {
          throw new Error(
            data.message || "Error saving blocks settings"
          );
        }
      }).catch((error) => {
        saveStatus.textContent = error.message;
        saveStatus.classList.add("error");
      });
    }
    function initSettingsForm() {
      settingsForm.addEventListener("submit", function(e) {
        e.preventDefault();
        saveSettings();
      });
    }
    function saveSettings() {
      const saveStatus = document.querySelector(".digiblocks-save-status");
      const formData = new FormData(settingsForm);
      const settings = {};
      saveStatus.textContent = wp.i18n.__("Saving...", "digiblocks");
      saveStatus.classList.remove("success", "error");
      saveStatus.classList.add("visible");
      for (const [key, value] of formData.entries()) {
        settings[key] = value;
      }
      fetch(digiBlocksAdmin.apiUrl + "update-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": digiBlocksAdmin.apiNonce
        },
        body: JSON.stringify(settings)
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          saveStatus.textContent = data.message;
          saveStatus.classList.add("success");
          setTimeout(() => {
            saveStatus.classList.remove("visible");
          }, 3e3);
        } else {
          throw new Error(data.message || "Error saving settings");
        }
      }).catch((error) => {
        saveStatus.textContent = error.message;
        saveStatus.classList.add("error");
      });
    }
    function initPasswordToggle() {
      togglePasswordButtons.forEach((button) => {
        button.addEventListener("click", function() {
          const inputGroup = this.closest(".digiblocks-input-group");
          if (!inputGroup)
            return;
          const passwordField = inputGroup.querySelector('input[type="password"], input[type="text"]');
          if (!passwordField)
            return;
          const icon = this.querySelector(".dashicons");
          if (passwordField.getAttribute("type") === "password") {
            passwordField.setAttribute("type", "text");
            icon.classList.remove("dashicons-visibility");
            icon.classList.add("dashicons-hidden");
          } else {
            passwordField.setAttribute("type", "password");
            icon.classList.remove("dashicons-hidden");
            icon.classList.add("dashicons-visibility");
          }
        });
      });
    }
  })();
})();
