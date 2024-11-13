export default function Modal(options = {}) {
  // Create the modal container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-mask');

  // Create the modal wrapper
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');

  // Default image fallback if not provided
  const imageUrl = options.image ? options.image : '/components/default_img.jpg'; // No need for url() in this case


  // Create modal content with dynamic title, body, and image
  const modalContent = `
    <div class="modal-container">
      <div class="modal-header">
        <h4 class="text-primary text-uppercase">${options.title || 'Modal Title'}</h4>
        <button type="button" class="close-button close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-lg-6 border-right">
            <div class="text-info">${options.body || '<p>Modal content goes here...</p>'}</div>
          </div>
          <div class="col-lg-6">
            <div>
               <img v-if="imageUrl" src="${imageUrl}" :alt="${options.title || 'Modal Image'}" class="img-fluid" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  `;

  modalWrapper.innerHTML = modalContent;
  modalContainer.appendChild(modalWrapper);

  // Append modal to the body
  document.body.appendChild(modalContainer);

  // Focus on the modal when opened
  modalWrapper.setAttribute('tabindex', -1);  // Ensure the modal can be focused
  modalWrapper.focus();

  // Event listeners for closing the modal
  const closeButtons = modalContainer.querySelectorAll('.close-button');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeModal(modalContainer);
    });
  });

  // Close modal function
  function closeModal(modal) {
    modal.remove();
    if (options.onClose) {
      options.onClose();
    }
  }

  // Optional: close modal when clicking outside the modal content
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      closeModal(modalContainer);
    }
  });

  // Optional: Close modal when pressing 'Escape'
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(modalContainer);
    }
  });

  // Styling for the modal (can be customized)
  modalContainer.style.zIndex = '9999';
  modalContainer.style.position = 'fixed';
  modalContainer.style.top = '0';
  modalContainer.style.left = '0';
  modalContainer.style.right = '0';
  modalContainer.style.bottom = '0';
  modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  modalContainer.style.display = 'flex';
  modalContainer.style.alignItems = 'center';
  modalContainer.style.justifyContent = 'center';

  return modalContainer;
}
