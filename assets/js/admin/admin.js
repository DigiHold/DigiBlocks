(() => {
  // resources/js/admin/admin.js
  var REGENERATE_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="rotate-icon" width="18" height="18"><path d="M94 187.1C120.8 124.1 183.3 80 256 80c39.7 0 77.8 15.8 105.9 43.9L414.1 176 360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 54.1L395.9 89.9C358.8 52.8 308.5 32 256 32C163.4 32 83.9 88.2 49.8 168.3c-5.2 12.2 .5 26.3 12.7 31.5s26.3-.5 31.5-12.7zm368 157c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6C391 388.1 328.6 432 256 432c-39.7 0-77.8-15.8-105.9-43.9L97.9 336l54.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 288c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-54.1 52.1 52.1C153.2 459.2 203.5 480 256 480c92.5 0 171.8-56 206-135.9z"/></svg>';
  document.addEventListener("DOMContentLoaded", function() {
    const settingsForm = document.getElementById("digiblocks-settings-form");
    const saveStatus = document.querySelector(".digiblocks-save-status");
    if (settingsForm) {
      settingsForm.addEventListener("submit", function(e) {
        e.preventDefault();
        saveSettings();
      });
    }
    function saveSettings() {
      const formData = new FormData(settingsForm);
      const settings = {};
      const formElements = settingsForm.querySelectorAll("input, select, textarea");
      formElements.forEach(function(element) {
        const name = element.name;
        if (!name)
          return;
        if (element.type === "checkbox") {
          settings[name] = element.checked;
        } else if (element.type !== "submit" && element.type !== "button") {
          settings[name] = element.value;
        }
      });
      if (saveStatus) {
        saveStatus.innerHTML = '<span class="digiblocks-saving">' + (digiBlocksAdmin.strings?.saving || "Saving...") + "</span>";
      }
      fetch(digiBlocksAdmin.apiUrl + "update-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": digiBlocksAdmin.apiNonce
        },
        body: JSON.stringify(settings)
      }).then((response) => response.json()).then((data) => {
        if (saveStatus) {
          if (data.success) {
            saveStatus.innerHTML = '<span class="digiblocks-saved">' + (data.message || "Settings saved successfully!") + "</span>";
          } else {
            saveStatus.innerHTML = '<span class="digiblocks-error">' + (data.message || "Error saving settings.") + "</span>";
          }
          setTimeout(function() {
            saveStatus.innerHTML = "";
          }, 3e3);
        }
      }).catch((error) => {
        if (saveStatus) {
          saveStatus.innerHTML = '<span class="digiblocks-error">' + (digiBlocksAdmin.strings?.networkError || "Network error occurred.") + "</span>";
          setTimeout(function() {
            saveStatus.innerHTML = "";
          }, 3e3);
        }
        console.error("Settings save error:", error);
      });
    }
    const newsletterPlatformSelect = document.getElementById("newsletter_platform");
    if (newsletterPlatformSelect) {
      newsletterPlatformSelect.addEventListener("change", function() {
        const platformFields = document.querySelectorAll(".newsletter-platform-fields");
        platformFields.forEach(function(field) {
          field.style.display = "none";
        });
        const selectedPlatform = this.value;
        if (selectedPlatform) {
          const selectedFields = document.getElementById(selectedPlatform + "-fields");
          if (selectedFields) {
            selectedFields.style.display = "block";
          }
        }
      });
    }
    const imageApiProviderSelect = document.getElementById("image_api_provider");
    if (imageApiProviderSelect) {
      imageApiProviderSelect.addEventListener("change", function() {
        const imageApiFields = document.querySelectorAll(".image-api-provider-fields");
        imageApiFields.forEach(function(field) {
          field.style.display = "none";
        });
        const selectedProvider = this.value;
        if (selectedProvider) {
          const selectedFields = document.getElementById(selectedProvider + "-fields");
          if (selectedFields) {
            selectedFields.style.display = "block";
          }
        }
      });
    }
    const passwordToggles = document.querySelectorAll(".digiblocks-toggle-password");
    passwordToggles.forEach(function(toggle) {
      toggle.addEventListener("click", function() {
        const input = this.parentElement.querySelector('input[type="password"], input[type="text"]');
        const icon = this.querySelector(".dashicons");
        if (input.type === "password") {
          input.type = "text";
          icon.classList.remove("dashicons-visibility");
          icon.classList.add("dashicons-hidden");
        } else {
          input.type = "password";
          icon.classList.remove("dashicons-hidden");
          icon.classList.add("dashicons-visibility");
        }
      });
    });
    const regenerateButton = document.getElementById("digiblocks-regenerate-assets");
    const progressContainer = document.getElementById("digiblocks-regenerate-progress");
    const progressFill = document.querySelector(".digiblocks-progress-fill");
    const progressText = document.querySelector(".digiblocks-progress-text");
    const resultContainer = document.getElementById("digiblocks-regenerate-result");
    if (regenerateButton) {
      regenerateButton.addEventListener("click", function() {
        regenerateAssets();
      });
    }
    function showConfirmModal(message, onConfirm, onCancel) {
      const modalHtml = `
			<div class="digiblocks-modal-overlay" id="digiblocks-confirm-modal">
				<div class="digiblocks-modal">
					<div class="digiblocks-modal-header">
						<h3 class="digiblocks-modal-title">Confirm Action</h3>
					</div>
					<div class="digiblocks-modal-body">
						<p class="digiblocks-modal-message">${message}</p>
					</div>
					<div class="digiblocks-modal-actions">
						<button type="button" class="digiblocks-modal-button is-secondary" id="digiblocks-modal-cancel">
							Cancel
						</button>
						<button type="button" class="digiblocks-modal-button is-primary" id="digiblocks-modal-confirm">
							Continue
						</button>
					</div>
				</div>
			</div>
		`;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
      const modal = document.getElementById("digiblocks-confirm-modal");
      const confirmBtn = document.getElementById("digiblocks-modal-confirm");
      const cancelBtn = document.getElementById("digiblocks-modal-cancel");
      setTimeout(() => {
        modal.classList.add("is-visible");
      }, 10);
      setTimeout(() => {
        confirmBtn.focus();
      }, 300);
      confirmBtn.addEventListener("click", function() {
        hideModal(modal);
        if (typeof onConfirm === "function") {
          onConfirm();
        }
      });
      cancelBtn.addEventListener("click", function() {
        hideModal(modal);
        if (typeof onCancel === "function") {
          onCancel();
        }
      });
      modal.addEventListener("click", function(e) {
        if (e.target === modal) {
          hideModal(modal);
          if (typeof onCancel === "function") {
            onCancel();
          }
        }
      });
      const handleEscape = function(e) {
        if (e.key === "Escape") {
          hideModal(modal);
          if (typeof onCancel === "function") {
            onCancel();
          }
          document.removeEventListener("keydown", handleEscape);
        }
      };
      document.addEventListener("keydown", handleEscape);
      function hideModal(modalElement) {
        modalElement.classList.remove("is-visible");
        setTimeout(() => {
          if (modalElement.parentNode) {
            modalElement.parentNode.removeChild(modalElement);
          }
        }, 300);
        document.removeEventListener("keydown", handleEscape);
      }
    }
    function regenerateAssets() {
      const confirmMessage = digiBlocksAdmin.strings?.confirmRegenerate || "This will regenerate all DigiBlocks assets including builder elements. This may take a few moments. Continue?";
      showConfirmModal(confirmMessage, function() {
        startRegeneration();
      }, function() {
        return;
      });
    }
    function startRegeneration() {
      regenerateButton.disabled = true;
      regenerateButton.innerHTML = REGENERATE_ICON_SVG + (digiBlocksAdmin.strings?.regenerating || "Regenerating...");
      if (progressContainer) {
        progressContainer.style.display = "block";
      }
      if (resultContainer) {
        resultContainer.innerHTML = "";
        resultContainer.className = "digiblocks-regenerate-result";
      }
      if (progressFill) {
        progressFill.style.width = "0%";
      }
      if (progressText) {
        progressText.textContent = digiBlocksAdmin.strings?.regenerating || "Regenerating assets...";
      }
      let progress = 0;
      const progressInterval = setInterval(function() {
        progress += 1;
        if (progress <= 90 && progressFill) {
          progressFill.style.width = progress + "%";
        }
      }, 100);
      fetch(digiBlocksAdmin.apiUrl + "regenerate-assets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": digiBlocksAdmin.apiNonce
        }
      }).then((response) => response.json()).then((data) => {
        clearInterval(progressInterval);
        if (progressFill) {
          progressFill.style.width = "100%";
        }
        setTimeout(function() {
          if (progressContainer) {
            progressContainer.style.display = "none";
          }
          regenerateButton.disabled = false;
          regenerateButton.innerHTML = REGENERATE_ICON_SVG + (digiBlocksAdmin.strings?.regenerateButton || "Regenerate All Assets");
          if (resultContainer) {
            if (data.success) {
              resultContainer.className = "digiblocks-regenerate-result active success";
              resultContainer.innerHTML = data.message;
              if (data.details) {
                const details = data.details;
                let detailsHtml = "<br><small>";
                if (details.posts > 0) {
                  detailsHtml += (digiBlocksAdmin.strings?.postsProcessed || "Posts processed: ") + details.posts + "<br>";
                }
                if (details.builders > 0) {
                  detailsHtml += (digiBlocksAdmin.strings?.buildersProcessed || "Builders processed: ") + details.builders + "<br>";
                }
                detailsHtml += (digiBlocksAdmin.strings?.cssFiles || "CSS files: ") + details.css_files + "<br>";
                detailsHtml += (digiBlocksAdmin.strings?.jsFiles || "JS files: ") + details.js_files + "<br>";
                detailsHtml += (digiBlocksAdmin.strings?.fontFiles || "Font files: ") + details.font_files;
                if (details.errors && details.errors.length > 0) {
                  detailsHtml += "<br><strong>" + (digiBlocksAdmin.strings?.errors || "Errors:") + "</strong><br>";
                  details.errors.forEach(function(error) {
                    detailsHtml += "\u2022 " + error + "<br>";
                  });
                }
                detailsHtml += "</small>";
                resultContainer.innerHTML += detailsHtml;
              }
            } else {
              resultContainer.className = "digiblocks-regenerate-result active error";
              resultContainer.innerHTML = data.message || (digiBlocksAdmin.strings?.regenerateError || "An error occurred while regenerating assets.");
            }
            setTimeout(function() {
              if (resultContainer) {
                resultContainer.innerHTML = "";
                resultContainer.className = "digiblocks-regenerate-result";
              }
            }, 15e3);
          }
        }, 500);
      }).catch((error) => {
        clearInterval(progressInterval);
        if (progressContainer) {
          progressContainer.style.display = "none";
        }
        regenerateButton.disabled = false;
        regenerateButton.innerHTML = REGENERATE_ICON_SVG + (digiBlocksAdmin.strings?.regenerateButton || "Regenerate All Assets");
        if (resultContainer) {
          resultContainer.className = "digiblocks-regenerate-result active error";
          resultContainer.innerHTML = digiBlocksAdmin.strings?.networkError || "Network error occurred. Please try again.";
          setTimeout(function() {
            resultContainer.innerHTML = "";
            resultContainer.className = "digiblocks-regenerate-result";
          }, 1e4);
        }
        console.error("Regenerate assets error:", error);
      });
    }
    const saveBlocksButton = document.getElementById("digiblocks-save-blocks");
    const blockSaveStatus = document.querySelector(".digiblocks-admin-section .digiblocks-save-status");
    if (saveBlocksButton) {
      saveBlocksButton.addEventListener("click", function() {
        saveBlockSettings();
      });
    }
    const blockCheckboxes = document.querySelectorAll('.digiblocks-block-toggle input[type="checkbox"]');
    if (blockCheckboxes.length > 0) {
      blockCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
          const blockCard = checkbox.closest(".digiblocks-block-card");
          if (blockCard) {
            if (checkbox.checked) {
              blockCard.classList.add("is-active");
            } else {
              blockCard.classList.remove("is-active");
            }
          }
          saveBlockSettings();
        });
      });
    }
    function saveBlockSettings() {
      const blocks = {};
      const checkboxes = document.querySelectorAll('.digiblocks-block-card input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        const blockCard = checkbox.closest(".digiblocks-block-card");
        if (blockCard) {
          const blockName = blockCard.getAttribute("data-block-name");
          if (blockName) {
            blocks[blockName] = checkbox.checked;
          }
        }
      });
      if (blockSaveStatus) {
        blockSaveStatus.innerHTML = '<span class="digiblocks-saving">' + (digiBlocksAdmin.strings?.saving || "Saving...") + "</span>";
      }
      fetch(digiBlocksAdmin.apiUrl + "update-blocks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": digiBlocksAdmin.apiNonce
        },
        body: JSON.stringify(blocks)
      }).then((response) => response.json()).then((data) => {
        if (blockSaveStatus) {
          if (data.success) {
            blockSaveStatus.innerHTML = '<span class="digiblocks-saved">' + (data.message || "Block settings saved successfully!") + "</span>";
          } else {
            blockSaveStatus.innerHTML = '<span class="digiblocks-error">' + (data.message || "Error saving block settings.") + "</span>";
          }
          setTimeout(function() {
            blockSaveStatus.innerHTML = "";
          }, 3e3);
        }
      }).catch((error) => {
        if (blockSaveStatus) {
          blockSaveStatus.innerHTML = '<span class="digiblocks-error">' + (digiBlocksAdmin.strings?.networkError || "Network error occurred.") + "</span>";
          setTimeout(function() {
            blockSaveStatus.innerHTML = "";
          }, 3e3);
        }
        console.error("Block settings save error:", error);
      });
    }
    document.addEventListener("click", function(e) {
      if (e.target.closest(".digiblocks-plugin-action")) {
        e.preventDefault();
        const button = e.target.closest(".digiblocks-plugin-action");
        const action = button.dataset.action;
        const type = button.dataset.type;
        if (button.dataset.url) {
          window.open(button.dataset.url, "_blank");
          return;
        }
        button.disabled = true;
        const spanElement = button.querySelector("span");
        const originalText = spanElement.textContent;
        if (action === "install") {
          spanElement.textContent = digiBlocksAdmin.strings.installing;
          if (type === "plugin") {
            const plugin = button.dataset.plugin;
            installPlugin(plugin, button, originalText);
          } else if (type === "theme") {
            const theme = button.dataset.theme;
            installTheme(theme, button, originalText);
          }
        } else if (action === "activate") {
          spanElement.textContent = digiBlocksAdmin.strings.activating;
          if (type === "plugin") {
            const plugin = button.dataset.plugin;
            activatePlugin(plugin, button, originalText);
          } else if (type === "theme") {
            const theme = button.dataset.theme;
            activateTheme(theme, button, originalText);
          }
        }
      }
    });
    function installPlugin(plugin, button, originalText) {
      const formData = new FormData();
      formData.append("action", "digiblocks_install_plugin");
      formData.append("plugin", plugin);
      formData.append("nonce", digiBlocksAdmin.nonce);
      fetch(digiBlocksAdmin.ajaxUrl, {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          showNotification(data.data.message, "success");
          updateButton(button, data.data.status, plugin, "plugin");
        } else {
          showNotification(data.data || digiBlocksAdmin.strings.error, "error");
          resetButton(button, originalText);
        }
      }).catch((error) => {
        console.error("Error:", error);
        showNotification(digiBlocksAdmin.strings.error || "An error occurred. Please try again.", "error");
        resetButton(button, originalText);
      });
    }
    function activatePlugin(plugin, button, originalText) {
      const formData = new FormData();
      formData.append("action", "digiblocks_activate_plugin");
      formData.append("plugin", plugin);
      formData.append("nonce", digiBlocksAdmin.nonce);
      fetch(digiBlocksAdmin.ajaxUrl, {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          showNotification(data.data.message, "success");
          updateButton(button, data.data.status, plugin, "plugin");
        } else {
          showNotification(data.data || digiBlocksAdmin.strings.error, "error");
          resetButton(button, originalText);
        }
      }).catch((error) => {
        console.error("Error:", error);
        showNotification(digiBlocksAdmin.strings.error || "An error occurred. Please try again.", "error");
        resetButton(button, originalText);
      });
    }
    function installTheme(theme, button, originalText) {
      const formData = new FormData();
      formData.append("action", "digiblocks_install_theme");
      formData.append("theme", theme);
      formData.append("nonce", digiBlocksAdmin.nonce);
      fetch(digiBlocksAdmin.ajaxUrl, {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          showNotification(data.data.message, "success");
          updateButton(button, data.data.status, theme, "theme");
        } else {
          showNotification(data.data || digiBlocksAdmin.strings.error, "error");
          resetButton(button, originalText);
        }
      }).catch((error) => {
        console.error("Error:", error);
        showNotification(digiBlocksAdmin.strings.error || "An error occurred. Please try again.", "error");
        resetButton(button, originalText);
      });
    }
    function activateTheme(theme, button, originalText) {
      const formData = new FormData();
      formData.append("action", "digiblocks_activate_theme");
      formData.append("theme", theme);
      formData.append("nonce", digiBlocksAdmin.nonce);
      fetch(digiBlocksAdmin.ajaxUrl, {
        method: "POST",
        body: formData
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          showNotification(data.data.message, "success");
          updateButton(button, data.data.status, theme, "theme");
        } else {
          showNotification(data.data || digiBlocksAdmin.strings.error, "error");
          resetButton(button, originalText);
        }
      }).catch((error) => {
        console.error("Error:", error);
        showNotification(digiBlocksAdmin.strings.error || "An error occurred. Please try again.", "error");
        resetButton(button, originalText);
      });
    }
    function updateButton(button, status, item, type) {
      button.disabled = false;
      button.classList.remove("button-primary", "button-secondary");
      button.classList.add(status.button_class);
      button.querySelector("span").textContent = status.button_text;
      if (status.status === "active") {
        button.dataset.action = "learn_more";
        button.dataset.url = status.url;
      } else if (status.status === "inactive") {
        button.dataset.action = "activate";
        delete button.dataset.url;
      } else {
        button.dataset.action = "install";
        delete button.dataset.url;
      }
    }
    function resetButton(button, originalText) {
      button.disabled = false;
      button.querySelector("span").textContent = originalText;
    }
    function showNotification(message, type) {
      const existingNotifications = document.querySelectorAll(".digiblocks-notification");
      existingNotifications.forEach((notification) => notification.remove());
      const notificationClass = type === "success" ? "notice-success" : "notice-error";
      const notificationHTML = `
			<div class="notice ${notificationClass} is-dismissible digiblocks-notification" style="margin: 1rem 0;">
				<p>${message}</p>
				<button type="button" class="notice-dismiss">
					<span class="screen-reader-text">Dismiss this notice.</span>
				</button>
			</div>
		`;
      const adminContent = document.querySelector(".digiblocks-admin-content");
      if (adminContent) {
        adminContent.insertAdjacentHTML("beforebegin", notificationHTML);
        const newNotification = adminContent.previousElementSibling;
        if (newNotification && newNotification.classList.contains("digiblocks-notification")) {
          const dismissButton = newNotification.querySelector(".notice-dismiss");
          dismissButton.addEventListener("click", function() {
            fadeOut(newNotification, 300, function() {
              newNotification.remove();
            });
          });
          if (type === "success") {
            setTimeout(function() {
              if (newNotification && newNotification.parentNode) {
                fadeOut(newNotification, 300, function() {
                  newNotification.remove();
                });
              }
            }, 5e3);
          }
        }
      }
    }
    function fadeOut(element, duration, callback) {
      element.style.transition = `opacity ${duration}ms`;
      element.style.opacity = "0";
      setTimeout(function() {
        if (callback)
          callback();
      }, duration);
    }
  });
  window.digiBlocksAdmin = window.digiBlocksAdmin || {};
  window.digiBlocksAdmin.showNotice = function(message, type = "success") {
    const notice = document.createElement("div");
    notice.className = `notice notice-${type} is-dismissible digiblocks-notice`;
    notice.innerHTML = `<p>${message}</p>`;
    const adminNotices = document.querySelector("#wpbody-content .wrap h1");
    if (adminNotices) {
      adminNotices.parentNode.insertBefore(notice, adminNotices.nextSibling);
      setTimeout(function() {
        if (notice.parentNode) {
          notice.parentNode.removeChild(notice);
        }
      }, 5e3);
    }
  };
  window.digiBlocksAdmin.confirm = function(message, callback) {
    if (confirm(message)) {
      if (typeof callback === "function") {
        callback();
      }
      return true;
    }
    return false;
  };
})();
