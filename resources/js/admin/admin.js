/**
 * DigiBlocks Admin JavaScript
 */
(function () {
    "use strict";

    // Wait for DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", init);

    // DOM elements
    let blockCards;
    let saveBlocksButton;
    let settingsForm;
    let togglePasswordButtons;
    let newsletterPlatformSelect;

    /**
     * Initialize the admin page functionality
     */
    function init() {
        // Get DOM elements
        blockCards = document.querySelectorAll(".digiblocks-block-card");
        saveBlocksButton = document.getElementById("digiblocks-save-blocks");
        settingsForm = document.getElementById("digiblocks-settings-form");
        togglePasswordButtons = document.querySelectorAll(".digiblocks-toggle-password");
        newsletterPlatformSelect = document.getElementById("newsletter_platform");

        if (blockCards.length && saveBlocksButton) {
            initBlocksManager();
        }

        if (settingsForm) {
            initSettingsForm();
        }

        if (togglePasswordButtons.length) {
            initPasswordToggle();
        }

        if (newsletterPlatformSelect) {
            initNewsletterPlatformToggle();
        }
    }

    /**
     * Initialize blocks manager functionality
     */
    function initBlocksManager() {
        // Add event listeners to block toggles
        blockCards.forEach((card) => {
            const toggle = card.querySelector('input[type="checkbox"]');

            if (toggle) {
                toggle.addEventListener("change", function () {
                    card.classList.toggle("is-active", this.checked);
                });

                // Initialize card state
                card.classList.toggle("is-active", toggle.checked);
            }
        });

        // Save blocks settings
        saveBlocksButton.addEventListener("click", saveBlocksSettings);
    }

    /**
     * Save blocks settings via REST API
     */
	function saveBlocksSettings() {
		const saveStatus = document.querySelector(".digiblocks-save-status");
		const activeBlocks = {};

		// Show loading status
		saveStatus.textContent = wp.i18n.__("Saving...", "digiblocks");
		saveStatus.classList.remove("success", "error");
		saveStatus.classList.add("visible");

		// Collect active status for all blocks
		blockCards.forEach((card) => {
			const blockName = card.dataset.blockName;
			const toggle = card.querySelector('input[type="checkbox"]');

			if (blockName && toggle) {
				activeBlocks[blockName] = toggle.checked;
			}
		});

		// Send data to REST API
		fetch(digiBlocksAdmin.apiUrl + "update-blocks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-WP-Nonce": digiBlocksAdmin.apiNonce,
			},
			body: JSON.stringify(activeBlocks),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					saveStatus.textContent = data.message;
					saveStatus.classList.add("success");

					// Hide status after 3 seconds
					setTimeout(() => {
						saveStatus.classList.remove("visible");
					}, 3000);
				} else {
					throw new Error(
						data.message || "Error saving blocks settings"
					);
				}
			})
			.catch((error) => {
				saveStatus.textContent = error.message;
				saveStatus.classList.add("error");
			});
	}

    /**
     * Initialize settings form functionality
     */
    function initSettingsForm() {
        settingsForm.addEventListener("submit", function (e) {
            e.preventDefault();
            saveSettings();
        });
    }

    /**
     * Save settings via REST API
     */
    function saveSettings() {
        const saveStatus = document.querySelector(".digiblocks-save-status");
        const formData = new FormData(settingsForm);
        const settings = {};

        // Show loading status
        saveStatus.textContent = wp.i18n.__("Saving...", "digiblocks");
        saveStatus.classList.remove("success", "error");
        saveStatus.classList.add("visible");

        // Convert form data to object
        for (const [key, value] of formData.entries()) {
            if (key.endsWith('_double_optin') || key.endsWith('_local')) {
                // Handle checkboxes - they only appear in FormData if checked
                settings[key] = true;
            } else {
                settings[key] = value;
            }
        }

        // Handle unchecked checkboxes by explicitly setting them to false
        const checkboxFields = ['mailchimp_double_optin', 'google_fonts_local'];
        checkboxFields.forEach(field => {
            if (!settings.hasOwnProperty(field)) {
                settings[field] = false;
            }
        });

        // Send data to REST API
        fetch(digiBlocksAdmin.apiUrl + "update-settings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-WP-Nonce": digiBlocksAdmin.apiNonce,
            },
            body: JSON.stringify(settings),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    saveStatus.textContent = data.message;
                    saveStatus.classList.add("success");

                    // Hide status after 3 seconds
                    setTimeout(() => {
                        saveStatus.classList.remove("visible");
                    }, 3000);
                } else {
                    throw new Error(data.message || "Error saving settings");
                }
            })
            .catch((error) => {
                saveStatus.textContent = error.message;
                saveStatus.classList.add("error");
            });
    }

    /**
     * Toggle password field visibility for all password fields with toggle buttons
     */
    function initPasswordToggle() {
        togglePasswordButtons.forEach(button => {
            button.addEventListener("click", function () {
                // Find the closest input field sibling within the same input group
                const inputGroup = this.closest('.digiblocks-input-group');
                if (!inputGroup) return;
                
                const passwordField = inputGroup.querySelector('input[type="password"], input[type="text"]');
                if (!passwordField) return;
                
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

    /**
     * Initialize newsletter platform toggle functionality
     */
    function initNewsletterPlatformToggle() {
        // Hide all platform fields initially
        const platformFields = document.querySelectorAll('.newsletter-platform-fields');
        platformFields.forEach(field => {
            field.style.display = 'none';
        });

        // Show current platform fields
        const currentPlatform = newsletterPlatformSelect.value;
        if (currentPlatform) {
            const currentFields = document.getElementById(currentPlatform + '-fields');
            if (currentFields) {
                currentFields.style.display = 'flex';
            }
        }

        // Add event listener for platform change
        newsletterPlatformSelect.addEventListener('change', function() {
            // Hide all platform fields
            platformFields.forEach(field => {
                field.style.display = 'none';
            });

            // Show selected platform fields
            const selectedPlatform = this.value;
            if (selectedPlatform) {
                const selectedFields = document.getElementById(selectedPlatform + '-fields');
                if (selectedFields) {
                    selectedFields.style.display = 'flex';
                }
            }
        });
    }
})();