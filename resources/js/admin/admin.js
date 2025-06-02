/**
 * DigiBlocks Admin JavaScript
 * Complete admin functionality for DigiBlocks plugin
 */

// Define reusable SVG icon
const REGENERATE_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="rotate-icon" width="18" height="18"><path d="M94 187.1C120.8 124.1 183.3 80 256 80c39.7 0 77.8 15.8 105.9 43.9L414.1 176 360 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 54.1L395.9 89.9C358.8 52.8 308.5 32 256 32C163.4 32 83.9 88.2 49.8 168.3c-5.2 12.2 .5 26.3 12.7 31.5s26.3-.5 31.5-12.7zm368 157c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6C391 388.1 328.6 432 256 432c-39.7 0-77.8-15.8-105.9-43.9L97.9 336l54.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 288c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-54.1 52.1 52.1C153.2 459.2 203.5 480 256 480c92.5 0 171.8-56 206-135.9z"/></svg>';

document.addEventListener('DOMContentLoaded', function() {
	
	// Settings form handling
	const settingsForm = document.getElementById('digiblocks-settings-form');
	const saveStatus = document.querySelector('.digiblocks-save-status');

	if (settingsForm) {
		settingsForm.addEventListener('submit', function(e) {
			e.preventDefault();
			saveSettings();
		});
	}

	/**
	 * Save plugin settings
	 */
	function saveSettings() {
		const formData = new FormData(settingsForm);
		const settings = {};
		
		// Get all form elements to handle checkboxes properly
		const formElements = settingsForm.querySelectorAll('input, select, textarea');
		
		// Process all form elements
		formElements.forEach(function(element) {
			const name = element.name;
			if (!name) return; // Skip elements without names
			
			if (element.type === 'checkbox') {
				// Explicitly set checkbox values (true/false)
				settings[name] = element.checked;
			} else if (element.type !== 'submit' && element.type !== 'button') {
				// Handle other input types
				settings[name] = element.value;
			}
		});
	
		// Show saving status
		if (saveStatus) {
			saveStatus.innerHTML = '<span class="digiblocks-saving">' + (digiBlocksAdmin.strings?.saving || 'Saving...') + '</span>';
		}
	
		// Make API request
		fetch(digiBlocksAdmin.apiUrl + 'update-settings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': digiBlocksAdmin.apiNonce
			},
			body: JSON.stringify(settings)
		})
		.then(response => response.json())
		.then(data => {
			if (saveStatus) {
				if (data.success) {
					saveStatus.innerHTML = '<span class="digiblocks-saved">' + (data.message || 'Settings saved successfully!') + '</span>';
				} else {
					saveStatus.innerHTML = '<span class="digiblocks-error">' + (data.message || 'Error saving settings.') + '</span>';
				}
				
				// Clear status after 3 seconds
				setTimeout(function() {
					saveStatus.innerHTML = '';
				}, 3000);
			}
		})
		.catch(error => {
			if (saveStatus) {
				saveStatus.innerHTML = '<span class="digiblocks-error">' + (digiBlocksAdmin.strings?.networkError || 'Network error occurred.') + '</span>';
				setTimeout(function() {
					saveStatus.innerHTML = '';
				}, 3000);
			}
			console.error('Settings save error:', error);
		});
	}

	// Newsletter platform toggle functionality
	const newsletterPlatformSelect = document.getElementById('newsletter_platform');
	if (newsletterPlatformSelect) {
		newsletterPlatformSelect.addEventListener('change', function() {
			// Hide all platform fields
			const platformFields = document.querySelectorAll('.newsletter-platform-fields');
			platformFields.forEach(function(field) {
				field.style.display = 'none';
			});

			// Show selected platform fields
			const selectedPlatform = this.value;
			if (selectedPlatform) {
				const selectedFields = document.getElementById(selectedPlatform + '-fields');
				if (selectedFields) {
					selectedFields.style.display = 'block';
				}
			}
		});
	}

	// Password toggle functionality
	const passwordToggles = document.querySelectorAll('.digiblocks-toggle-password');
	passwordToggles.forEach(function(toggle) {
		toggle.addEventListener('click', function() {
			const input = this.parentElement.querySelector('input[type="password"], input[type="text"]');
			const icon = this.querySelector('.dashicons');
			
			if (input.type === 'password') {
				input.type = 'text';
				icon.classList.remove('dashicons-visibility');
				icon.classList.add('dashicons-hidden');
			} else {
				input.type = 'password';
				icon.classList.remove('dashicons-hidden');
				icon.classList.add('dashicons-visibility');
			}
		});
	});

	// Regenerate Assets functionality
	const regenerateButton = document.getElementById('digiblocks-regenerate-assets');
	const progressContainer = document.getElementById('digiblocks-regenerate-progress');
	const progressFill = document.querySelector('.digiblocks-progress-fill');
	const progressText = document.querySelector('.digiblocks-progress-text');
	const resultContainer = document.getElementById('digiblocks-regenerate-result');

	if (regenerateButton) {
		regenerateButton.addEventListener('click', function() {
			regenerateAssets();
		});
	}

	/**
	 * Show custom confirmation modal
	 */
	function showConfirmModal(message, onConfirm, onCancel) {
		// Create modal HTML
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

		// Add modal to body
		document.body.insertAdjacentHTML('beforeend', modalHtml);
		
		const modal = document.getElementById('digiblocks-confirm-modal');
		const confirmBtn = document.getElementById('digiblocks-modal-confirm');
		const cancelBtn = document.getElementById('digiblocks-modal-cancel');

		// Show modal with animation
		setTimeout(() => {
			modal.classList.add('is-visible');
		}, 10);

		// Focus the confirm button
		setTimeout(() => {
			confirmBtn.focus();
		}, 300);

		// Handle confirm
		confirmBtn.addEventListener('click', function() {
			hideModal(modal);
			if (typeof onConfirm === 'function') {
				onConfirm();
			}
		});

		// Handle cancel
		cancelBtn.addEventListener('click', function() {
			hideModal(modal);
			if (typeof onCancel === 'function') {
				onCancel();
			}
		});

		// Handle backdrop click
		modal.addEventListener('click', function(e) {
			if (e.target === modal) {
				hideModal(modal);
				if (typeof onCancel === 'function') {
					onCancel();
				}
			}
		});

		// Handle escape key
		const handleEscape = function(e) {
			if (e.key === 'Escape') {
				hideModal(modal);
				if (typeof onCancel === 'function') {
					onCancel();
				}
				document.removeEventListener('keydown', handleEscape);
			}
		};
		document.addEventListener('keydown', handleEscape);

		// Hide modal function
		function hideModal(modalElement) {
			modalElement.classList.remove('is-visible');
			setTimeout(() => {
				if (modalElement.parentNode) {
					modalElement.parentNode.removeChild(modalElement);
				}
			}, 300);
			document.removeEventListener('keydown', handleEscape);
		}
	}

	/**
	 * Regenerate all DigiBlocks assets
	 */
	function regenerateAssets() {
		// Show custom confirmation modal
		const confirmMessage = digiBlocksAdmin.strings?.confirmRegenerate || 'This will regenerate all DigiBlocks assets including builder elements. This may take a few moments. Continue?';
		
		showConfirmModal(confirmMessage, function() {
			// User confirmed - proceed with regeneration
			startRegeneration();
		}, function() {
			// User cancelled - do nothing
			return;
		});
	}

	/**
	 * Start the actual regeneration process
	 */
	function startRegeneration() {
		// Disable button and show progress
		regenerateButton.disabled = true;
		regenerateButton.innerHTML = REGENERATE_ICON_SVG + (digiBlocksAdmin.strings?.regenerating || 'Regenerating...');
		
		if (progressContainer) {
			progressContainer.style.display = 'block';
		}
		
		if (resultContainer) {
			resultContainer.innerHTML = '';
			resultContainer.className = 'digiblocks-regenerate-result';
		}
		
		// Reset progress
		if (progressFill) {
			progressFill.style.width = '0%';
		}
		
		if (progressText) {
			progressText.textContent = digiBlocksAdmin.strings?.regenerating || 'Regenerating assets...';
		}
	
		// Animate progress bar
		let progress = 0;
		const progressInterval = setInterval(function() {
			progress += 1;
			if (progress <= 90 && progressFill) {
				progressFill.style.width = progress + '%';
			}
		}, 100);
	
		// Make AJAX request
		fetch(digiBlocksAdmin.apiUrl + 'regenerate-assets', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': digiBlocksAdmin.apiNonce
			}
		})
		.then(response => response.json())
		.then(data => {
			clearInterval(progressInterval);
			
			if (progressFill) {
				progressFill.style.width = '100%';
			}
			
			setTimeout(function() {
				// Hide progress and show result
				if (progressContainer) {
					progressContainer.style.display = 'none';
				}
				
				// Reset button
				regenerateButton.disabled = false;
				regenerateButton.innerHTML = REGENERATE_ICON_SVG + (digiBlocksAdmin.strings?.regenerateButton || 'Regenerate All Assets');
				
				if (resultContainer) {
					if (data.success) {
						resultContainer.className = 'digiblocks-regenerate-result active success';
						resultContainer.innerHTML = data.message;
						
						// Show details if available
						if (data.details) {
							const details = data.details;
							let detailsHtml = '<br><small>';
							
							// Show posts and builders separately
							if (details.posts > 0) {
								detailsHtml += (digiBlocksAdmin.strings?.postsProcessed || 'Posts processed: ') + details.posts + '<br>';
							}
							if (details.builders > 0) {
								detailsHtml += (digiBlocksAdmin.strings?.buildersProcessed || 'Builders processed: ') + details.builders + '<br>';
							}
							
							detailsHtml += (digiBlocksAdmin.strings?.cssFiles || 'CSS files: ') + details.css_files + '<br>';
							detailsHtml += (digiBlocksAdmin.strings?.jsFiles || 'JS files: ') + details.js_files + '<br>';
							detailsHtml += (digiBlocksAdmin.strings?.fontFiles || 'Font files: ') + details.font_files;
							
							if (details.errors && details.errors.length > 0) {
								detailsHtml += '<br><strong>' + (digiBlocksAdmin.strings?.errors || 'Errors:') + '</strong><br>';
								details.errors.forEach(function(error) {
									detailsHtml += '• ' + error + '<br>';
								});
							}
							
							detailsHtml += '</small>';
							resultContainer.innerHTML += detailsHtml;
						}
					} else {
						resultContainer.className = 'digiblocks-regenerate-result active error';
						resultContainer.innerHTML = data.message || (digiBlocksAdmin.strings?.regenerateError || 'An error occurred while regenerating assets.');
					}
					
					// Hide result after 15 seconds
					setTimeout(function() {
						if (resultContainer) {
							resultContainer.innerHTML = '';
							resultContainer.className = 'digiblocks-regenerate-result';
						}
					}, 15000);
				}
			}, 500);
		})
		.catch(error => {
			clearInterval(progressInterval);
			
			if (progressContainer) {
				progressContainer.style.display = 'none';
			}
			
			// Reset button
			regenerateButton.disabled = false;
			regenerateButton.innerHTML = REGENERATE_ICON_SVG + (digiBlocksAdmin.strings?.regenerateButton || 'Regenerate All Assets');
			
			if (resultContainer) {
				resultContainer.className = 'digiblocks-regenerate-result active error';
				resultContainer.innerHTML = digiBlocksAdmin.strings?.networkError || 'Network error occurred. Please try again.';
				
				// Hide result after 10 seconds
				setTimeout(function() {
					resultContainer.innerHTML = '';
					resultContainer.className = 'digiblocks-regenerate-result';
				}, 10000);
			}
			
			console.error('Regenerate assets error:', error);
		});
	}

	// CORRECTED BLOCK MANAGEMENT FUNCTIONALITY
	// Block management functionality (if on dashboard page)
	const saveBlocksButton = document.getElementById('digiblocks-save-blocks');
	const blockSaveStatus = document.querySelector('.digiblocks-admin-section .digiblocks-save-status');

	// Add event listener for the Save Changes button
	if (saveBlocksButton) {
		saveBlocksButton.addEventListener('click', function() {
			saveBlockSettings();
		});
	}

	// Optional: Also save on individual toggle changes (auto-save)
	const blockCheckboxes = document.querySelectorAll('.digiblocks-block-toggle input[type="checkbox"]');
	if (blockCheckboxes.length > 0) {
		blockCheckboxes.forEach(function(checkbox) {
			checkbox.addEventListener('change', function() {
				// Update the visual state of the card
				const blockCard = checkbox.closest('.digiblocks-block-card');
				if (blockCard) {
					if (checkbox.checked) {
						blockCard.classList.add('is-active');
					} else {
						blockCard.classList.remove('is-active');
					}
				}
				// Uncomment the line below if you want auto-save on each change
				saveBlockSettings();
			});
		});
	}

	/**
	 * Save block activation settings
	 */
	function saveBlockSettings() {
		const blocks = {};
		
		// Get all block checkboxes - select the actual input elements
		const checkboxes = document.querySelectorAll('.digiblocks-block-card input[type="checkbox"]');
		
		checkboxes.forEach(function(checkbox) {
			// Get the block name from the parent card's data attribute
			const blockCard = checkbox.closest('.digiblocks-block-card');
			if (blockCard) {
				const blockName = blockCard.getAttribute('data-block-name');
				if (blockName) {
					blocks[blockName] = checkbox.checked;
				}
			}
		});

		// Show saving status
		if (blockSaveStatus) {
			blockSaveStatus.innerHTML = '<span class="digiblocks-saving">' + (digiBlocksAdmin.strings?.saving || 'Saving...') + '</span>';
		}

		// Make API request
		fetch(digiBlocksAdmin.apiUrl + 'update-blocks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': digiBlocksAdmin.apiNonce
			},
			body: JSON.stringify(blocks)
		})
		.then(response => response.json())
		.then(data => {
			if (blockSaveStatus) {
				if (data.success) {
					blockSaveStatus.innerHTML = '<span class="digiblocks-saved">' + (data.message || 'Block settings saved successfully!') + '</span>';
				} else {
					blockSaveStatus.innerHTML = '<span class="digiblocks-error">' + (data.message || 'Error saving block settings.') + '</span>';
				}
				
				// Clear status after 3 seconds
				setTimeout(function() {
					blockSaveStatus.innerHTML = '';
				}, 3000);
			}
		})
		.catch(error => {
			if (blockSaveStatus) {
				blockSaveStatus.innerHTML = '<span class="digiblocks-error">' + (digiBlocksAdmin.strings?.networkError || 'Network error occurred.') + '</span>';
				setTimeout(function() {
					blockSaveStatus.innerHTML = '';
				}, 3000);
			}
			console.error('Block settings save error:', error);
		});
	}

	/**
	 * Handle plugin/theme action buttons
	 */
	document.addEventListener('click', function(e) {
		if (e.target.closest('.digiblocks-plugin-action')) {
			e.preventDefault();

			const button = e.target.closest('.digiblocks-plugin-action');
			const action = button.dataset.action;
			const type = button.dataset.type; // 'plugin' or 'theme'
			
			// Don't process if it's a learn more button (has URL)
			if (button.dataset.url) {
				window.open(button.dataset.url, '_blank');
				return;
			}

			// Disable button and show loading state
			button.disabled = true;
			const spanElement = button.querySelector('span');
			const originalText = spanElement.textContent;
			
			if (action === 'install') {
				spanElement.textContent = digiBlocksAdmin.strings.installing;
				if (type === 'plugin') {
					const plugin = button.dataset.plugin;
					installPlugin(plugin, button, originalText);
				} else if (type === 'theme') {
					const theme = button.dataset.theme;
					installTheme(theme, button, originalText);
				}
			} else if (action === 'activate') {
				spanElement.textContent = digiBlocksAdmin.strings.activating;
				if (type === 'plugin') {
					const plugin = button.dataset.plugin;
					activatePlugin(plugin, button, originalText);
				} else if (type === 'theme') {
					const theme = button.dataset.theme;
					activateTheme(theme, button, originalText);
				}
			}
		}
	});

	/**
	 * Install plugin via AJAX
	 */
	function installPlugin(plugin, button, originalText) {
		const formData = new FormData();
		formData.append('action', 'digiblocks_install_plugin');
		formData.append('plugin', plugin);
		formData.append('nonce', digiBlocksAdmin.nonce);

		fetch(digiBlocksAdmin.ajaxUrl, {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				showNotification(data.data.message, 'success');
				updateButton(button, data.data.status, plugin, 'plugin');
			} else {
				showNotification(data.data || digiBlocksAdmin.strings.error, 'error');
				resetButton(button, originalText);
			}
		})
		.catch(error => {
			console.error('Error:', error);
			showNotification(digiBlocksAdmin.strings.error || 'An error occurred. Please try again.', 'error');
			resetButton(button, originalText);
		});
	}

	/**
	 * Activate plugin via AJAX
	 */
	function activatePlugin(plugin, button, originalText) {
		const formData = new FormData();
		formData.append('action', 'digiblocks_activate_plugin');
		formData.append('plugin', plugin);
		formData.append('nonce', digiBlocksAdmin.nonce);

		fetch(digiBlocksAdmin.ajaxUrl, {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				showNotification(data.data.message, 'success');
				updateButton(button, data.data.status, plugin, 'plugin');
			} else {
				showNotification(data.data || digiBlocksAdmin.strings.error, 'error');
				resetButton(button, originalText);
			}
		})
		.catch(error => {
			console.error('Error:', error);
			showNotification(digiBlocksAdmin.strings.error || 'An error occurred. Please try again.', 'error');
			resetButton(button, originalText);
		});
	}

	/**
	 * Install theme via AJAX
	 */
	function installTheme(theme, button, originalText) {
		const formData = new FormData();
		formData.append('action', 'digiblocks_install_theme');
		formData.append('theme', theme);
		formData.append('nonce', digiBlocksAdmin.nonce);

		fetch(digiBlocksAdmin.ajaxUrl, {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				showNotification(data.data.message, 'success');
				updateButton(button, data.data.status, theme, 'theme');
			} else {
				showNotification(data.data || digiBlocksAdmin.strings.error, 'error');
				resetButton(button, originalText);
			}
		})
		.catch(error => {
			console.error('Error:', error);
			showNotification(digiBlocksAdmin.strings.error || 'An error occurred. Please try again.', 'error');
			resetButton(button, originalText);
		});
	}

	/**
	 * Activate theme via AJAX
	 */
	function activateTheme(theme, button, originalText) {
		const formData = new FormData();
		formData.append('action', 'digiblocks_activate_theme');
		formData.append('theme', theme);
		formData.append('nonce', digiBlocksAdmin.nonce);

		fetch(digiBlocksAdmin.ajaxUrl, {
			method: 'POST',
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				showNotification(data.data.message, 'success');
				updateButton(button, data.data.status, theme, 'theme');
			} else {
				showNotification(data.data || digiBlocksAdmin.strings.error, 'error');
				resetButton(button, originalText);
			}
		})
		.catch(error => {
			console.error('Error:', error);
			showNotification(digiBlocksAdmin.strings.error || 'An error occurred. Please try again.', 'error');
			resetButton(button, originalText);
		});
	}

	/**
	 * Update button based on plugin/theme status
	 */
	function updateButton(button, status, item, type) {
		button.disabled = false;
		button.classList.remove('button-primary', 'button-secondary');
		button.classList.add(status.button_class);
		button.querySelector('span').textContent = status.button_text;

		// Update data attributes based on status
		if (status.status === 'active') {
			button.dataset.action = 'learn_more';
			button.dataset.url = status.url;
		} else if (status.status === 'inactive') {
			button.dataset.action = 'activate';
			delete button.dataset.url;
		} else {
			button.dataset.action = 'install';
			delete button.dataset.url;
		}
	}

	/**
	 * Reset button to original state
	 */
	function resetButton(button, originalText) {
		button.disabled = false;
		button.querySelector('span').textContent = originalText;
	}

	/**
	 * Show notification message
	 */
	function showNotification(message, type) {
		// Remove existing notifications
		const existingNotifications = document.querySelectorAll('.digiblocks-notification');
		existingNotifications.forEach(notification => notification.remove());

		const notificationClass = type === 'success' ? 'notice-success' : 'notice-error';
		const notificationHTML = `
			<div class="notice ${notificationClass} is-dismissible digiblocks-notification" style="margin: 1rem 0;">
				<p>${message}</p>
				<button type="button" class="notice-dismiss">
					<span class="screen-reader-text">Dismiss this notice.</span>
				</button>
			</div>
		`;

		// Insert notification before the admin content
		const adminContent = document.querySelector('.digiblocks-admin-content');
		if (adminContent) {
			adminContent.insertAdjacentHTML('beforebegin', notificationHTML);
			
			// Handle dismiss button - get the notification that was just inserted
			const newNotification = adminContent.previousElementSibling;
			if (newNotification && newNotification.classList.contains('digiblocks-notification')) {
				const dismissButton = newNotification.querySelector('.notice-dismiss');
				
				dismissButton.addEventListener('click', function() {
					fadeOut(newNotification, 300, function() {
						newNotification.remove();
					});
				});

				// Auto-dismiss success notifications after 5 seconds
				if (type === 'success') {
					setTimeout(function() {
						if (newNotification && newNotification.parentNode) {
							fadeOut(newNotification, 300, function() {
								newNotification.remove();
							});
						}
					}, 5000);
				}
			}
		}
	}

	/**
	 * Fade out animation helper
	 */
	function fadeOut(element, duration, callback) {
		element.style.transition = `opacity ${duration}ms`;
		element.style.opacity = '0';
		
		setTimeout(function() {
			if (callback) callback();
		}, duration);
	}
});

// Global functions that might be needed
window.digiBlocksAdmin = window.digiBlocksAdmin || {};

/**
 * Show admin notice
 */
window.digiBlocksAdmin.showNotice = function(message, type = 'success') {
	const notice = document.createElement('div');
	notice.className = `notice notice-${type} is-dismissible digiblocks-notice`;
	notice.innerHTML = `<p>${message}</p>`;
	
	const adminNotices = document.querySelector('#wpbody-content .wrap h1');
	if (adminNotices) {
		adminNotices.parentNode.insertBefore(notice, adminNotices.nextSibling);
		
		// Auto dismiss after 5 seconds
		setTimeout(function() {
			if (notice.parentNode) {
				notice.parentNode.removeChild(notice);
			}
		}, 5000);
	}
};

/**
 * Confirm dialog wrapper
 */
window.digiBlocksAdmin.confirm = function(message, callback) {
	if (confirm(message)) {
		if (typeof callback === 'function') {
			callback();
		}
		return true;
	}
	return false;
};