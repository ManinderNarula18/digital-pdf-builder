export default function Modalmenu({ item, all_entires, options = {} }) {
  // Ensure all_entires is parsed from localStorage if not passed in
  if (!all_entires) {
    all_entires = JSON.parse(localStorage.getItem("entries") || '[]');
  }

  // Create the modal container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-mask');

  // Create the modal wrapper
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper', 'p-0');

  // Default image fallback if not provided
  const imageUrl = item.image ? item.image : '/components/modal_image.jpg'; // Use default image if not provided

  // Create modal content with dynamic title, body, and image
  const modalContent = `
    <div class="modal-container modal_menuheader">

      <button class="dps__contents-button position-absolute btnclose" data-dismiss="modal" aria-label="Close">
        <svg version="1.1" class="btn-popup-close" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">
          <polygon class="CloseIconBG" points="0,0 100,100 100,0 "></polygon>
          <rect x="61.1" y="27.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 0.3429 58.4279)" class="CloseIconFG" width="19.2" height="2"></rect>
          <rect x="69.7" y="19.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 0.3424 58.4267)" class="CloseIconFG" width="2" height="19.2"></rect>
        </svg>
      </button>

      <div class="modal-body">
        <div class="row">
          <div class="col-lg-4 padding_10">
            <div class="pageItem contents__sidebar">
              <div class="contents__title">
                <h1>Contents</h1>
              </div>
              <div class="contents__button-group">

                <div class="clickable contents__button" role="button" tabindex="0">
                  <br><br>
                </div>

                <!-- Dynamically render items from the 'all_entires' array -->
                ${all_entires.map(all_entire => {
                  // Check if Page_name exists and is not empty
                  if (all_entire.Page_name && all_entire.Page_name.trim() !== '') {
                    return `
                      <div class="clickable contents__button" role="button" tabindex="0">
                        <a href="#${all_entire.id}" class="contents__button-text">${all_entire.Page_name}</a><br>
                      </div>
                    `;
                  }
                  // If Page_name is empty, return nothing
                  return '';
                }).join('')}

              </div>
            </div>
          </div>
          <div class="col-lg-8 pl-0">
            <div class="contents__image">
              <img src="${imageUrl}" alt="${item.title || 'Modal Image'}" class="img-fluid" />
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
  const closeButtons = modalContainer.querySelectorAll('.btnclose');
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
