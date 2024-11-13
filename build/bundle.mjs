var helpers = {
  def: function (key, val) {
    if (key) {
      return key;
    } else {
      return val;
    }
  },
  youtube_parser: function (url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  },
};

const html$b = String.raw;

const template$b = html$b`
  <section
    :id="item.id"
    class="editable text-center"
    :style="{ 
      background: (item.image2 ? 'url(' + def(item.image2) + ')' : 'url(/components/default_img.jpg)'),
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center', 
    }"
    data-fields="title=txt&amp;image=img&amp;image2=img&amp;subtitle=txt&amp;button_text=txt&amp;button_link=txt"
  >
    <div class="inner-container">
      <template v-if="item.image">
        <img class="brand-logo" :src="item.image" class="img-fluid" :alt="item.title + 'Logo image'" />
        
      </template>
      <div class="container-fluid pt-5">
        <h1 class="text-white col-md-7 pt-5 ml-auto display-4 text-left">
          <span class="h1">{{ item.subtitle }}</span><br>
          {{ item.title }}
        </h1>
      </div>
      <a
        :href="item.button_link"
        class="btn btn-secondary"
        v-if="item.button_text"
      >{{ item.button_text }}</a>
    </div>
  </section>
`;

var template1 = {
  template: template$b,
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.def = helpers.def;
  },
  mounted() {
    // console.log('Banner component mounted.')
  },
};

const html$a = String.raw;

const template$a = html$a`
  <section
    :id="item.id"
    class="editable text-center"
    data-fields="icon=icon&amp;title=txt&amp;subtitle=txt&amp;button_text=txt&amp;button_link=txt"
  >
    <div class="container">
      <i :class="item.icon+' fa-big'"></i>

      <h1>{{item.title}}</h1>
      <p>{{item.subtitle}}</p>

      <a
        :href="item.button_link"
        class="btn btn-secondary"
        v-if="item.button_text"
        >{{item.button_text}}</a
      >
    </div>
  </section>
`;

var template2 = {
  template: template$a,
  props: ["item"],
  mounted() {
    //console.log('Banner component mounted.')
  },
};

const html$9 = String.raw;

const template$9 = html$9`
  <section
    :id="item.id"
    class="editable text-center"
    :style="{ 
      background: (item.Bg_Image ? 'url(' + def(item.Bg_Image) + ')' : 'url(/components/default_img.jpg)'),
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center', 
    }"
    data-fields="image=img&amp;Bg_Image=img&amp;phone=txt&amp;email=txt&amp;website=txt&amp;Facebook_Url=txt&amp;Twitter_Url=txt&amp;Youtube_Url=txt&amp;Linkdin_Url=txt&amp;Instagram_Url=txt&amp;description=rte&amp;title=txt&amp;"
  >
    <div class="inner-container">
      <div class="row">
        <div class="col-md-10 mx-auto text-white py-3">
          <div class="col-4 mx-auto">
            <div class="text-center py-3">
              <img :src="item.image || '/components/default_logo.png'" class="img-fluid" :alt="item.title + 'Logo image'" />
            </div>
          </div>
          <div class="text-center text-white px-5 py-3">
            <h2>Contact</h2>
            <div class="mb-1" v-if="item.phone">
              <span class="width-2 d-inline-block">P</span>
                {{ item.phone }}
            </div>
            <div class="mb-1" v-if="item.email">
              <span class="width-2 d-inline-block">E</span>
                {{ item.email }}
            </div>
            <div class="mb-1" v-if="item.website">
              <span class="width-2 d-inline-block">W</span>
                {{ item.website }}
            </div>
          </div>
          <div class="text-center mt-5">
            <h2>Find us at</h2>
            <div class="col-md-5 mx-auto">
              <ul class="list-unstyled d-flex justify-content-between">
                <li class="px-2" v-if="item.Facebook_Url">
                  <a :href="item.Facebook_Url" class="currenColor" target="_blank">
                    <i class="fab fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li class="px-2" v-if="item.Twitter_Url">
                  <a :href="item.Twitter_Url" class="currenColor" target="_blank">
                    <i class="fab fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li class="px-2" v-if="item.Youtube_Url">
                  <a :href="item.Youtube_Url" class="currenColor" target="_blank">
                    <i class="fab fa-youtube fa-2x"></i>
                  </a>
                </li>
                <li class="px-2" v-if="item.Linkdin_Url">
                  <a :href="item.Linkdin_Url" class="currenColor" target="_blank">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </li>
                <li class="px-2" v-if="item.Instagram_Url">
                  <a :href="item.Instagram_Url" class="currenColor" target="_blank">
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-center mt-5">
            <div v-html="item.description"></div>
          </div>
          <div class="text-center mt-3 display-4">{{ item.title }}</div>
        </div>
      </div>
      <a
        :href="item.button_link"
        class="btn btn-secondary"
        v-if="item.button_text"
      >{{ item.button_text }}</a>
    </div>
  </section>
`;

var ftemplate1 = {
  template: template$9,
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.def = helpers.def;
  },
  mounted() {
    // console.log('Banner component mounted.')
  },
};

const html$8 = String.raw;

const template$8 = html$8`
  <section
    :id="item.id"
    class="editable text-center"
    data-fields="icon=icon&amp;title=txt&amp;subtitle=txt&amp;button_text=txt&amp;button_link=txt"
  >
    <div class="container">
      <i :class="item.icon+' fa-big'"></i>

      <h1>{{item.title}}</h1>
      <p>{{item.subtitle}}</p>

      <a
        :href="item.button_link"
        class="btn btn-secondary"
        v-if="item.button_text"
        >{{item.button_text}}</a
      >
    </div>
  </section>
`;

var ftemplate2 = {
  template: template$8,
  props: ["item"],
  mounted() {
    //console.log('Banner component mounted.')
  },
};

function Modalmenu({ item, all_entires, options = {} }) {
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

const html$7 = String.raw;
const template$7 = html$7`
  <section
    :id="item.id"
    class="editable text-center"
    :style="{ 
      background: (item.Bg_Image ? 'url(' + def(item.Bg_Image) + ')' : 'url(/components/default_img.jpg)'),
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
    }"
    data-fields="Page_name=txt&amp;Bg_Image=img&amp;title=txt&amp;description=rte&amp;Professor=img&amp;Professor_name=txt&amp;"
  >
    <div class="inner-container p-4 text-left">
      <div class="row">
        <h1 class="text-white col-md-7"><span class="h1">DEMO WORLD</span><br>
          {{ item.title }}
        </h1>
      </div>
      <div class="row pt-5">
        <div class="col-md-10 mb-3 text-white">
          <div class="mobileBox">
            <div v-html="processContent(item.description)"></div>
          </div>
        </div>
        <div class="col-md-4">
          <img :src="item.Professor || '/components/default_no.jpg'" class="img-fluid" :alt="item.title + 'Logo image'" />
          <div class="mt-2 text-white">
            <div v-html="item.Professor_name"></div>
          </div>
        </div>
      </div>
    </div>
    
    <button class="MenuButton pageItem clickable dps__contents-button ZI5" 
      @click="showModal(item, item.Page_name  )">
      <svg version="1.1" id="Layer_1" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
        <polygon class="ContentsIconBG" points="0,0 100,100 100,0 "></polygon>
        <rect x="58.2" y="21.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="28.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="35.2" class="ContentsIconFG" width="25" height="2.5"></rect>
      </svg>
    </button>
    
  </section>
`;


var innertemplate1 = {
  template: template$7,
  
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.def = helpers.def;
  },
  methods: {
    // Method to process the sec2_content string and return HTML
    processContent(content) {
      if (!content) return '';
      
      // Split the content into lines and wrap each line in a <p> tag
      const lines = content.split(/\r?\n/);
      let htmlContent = '';

      lines.forEach(line => {
        htmlContent += `<p class="">${line}</p>`;
      });

      return htmlContent;
    },
    showModal(Item) {
      // Create and show the modal with dynamic content passed as arguments
      Modalmenu({
        item: Item,  
        onClose: () => {
          console.log('Modal closed');
        }
      });
    },
  },
  mounted() {
    // console.log('Banner component mounted.')
  },
};

const html$6 = String.raw;

const template$6 = html$6`
  <section
    :id="item.id"
    class="editable text-center"
    data-fields="Page_name=txt&amp;title=txt&amp;sec1_title=txt&amp;sec1_content=rte&amp;sec1_img=img&amp;sec2_title=txt&amp;sec2_content=rte&amp;sec2_img=img&amp;sec3_title=txt&amp;sec3_content=rte&amp;sec3_img=img&amp;"
  >
    <div class="inner-container p-4 text-left">
      <h1 class="text-primary mb-3">{{item.title}}</h1>
      <div class="d-flex flex-column gap-30">
        <div class="row content" id="mel">
          <div class="col-md-8">
            <h5 class="text-uppercase active" data-href="#mel">{{item.sec1_title}}</h5>
            <p>{{item.sec1_content}}</p>
          </div>
          <div class="col-md-4">
            <div class="position-relative videolink">
              
              <a class="vlink" data-toggle="modal" data-target="#videoP">						
              </a>
              <img :src="def(item.sec1_img) || '/components/default_no.jpg'" class="img-fluid" :alt="item.sec1_title + 'Image'" />
            </div>
          </div>
        </div>
        <div class="row content" id="ade">
          <div class="col-md-4 mb-3">
            <img :src="def(item.sec2_img) || '/components/default_no.jpg'" class="img-fluid" :alt="item.sec1_title + 'Image'" />
          </div>
          <div class="col-md-8">
            <h5 class="text-uppercase" data-href="#ade">{{item.sec2_title}}</h5>
            <p>{{item.sec2_content}}</p>
          </div>
        </div>
        <div class="row content" id="bris">
          <div class="col-md-8">
            <h5 class="text-uppercase" data-href="#bris">{{item.sec3_title}}</h5>
            <p>{{item.sec3_content}}</p>
          </div>
          <div class="col-md-4">
            <img :src="def(item.sec3_img) || '/components/default_no.jpg'" class="img-fluid" :alt="item.sec1_title + 'Image'" />
          </div>
        </div>
      </div>  
    </div>

    <button class="MenuButton pageItem clickable dps__contents-button ZI5" 
      @click="showModal(item, item.Page_name  )">
      <svg version="1.1" id="Layer_1" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
        <polygon class="ContentsIconBG" points="0,0 100,100 100,0 "></polygon>
        <rect x="58.2" y="21.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="28.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="35.2" class="ContentsIconFG" width="25" height="2.5"></rect>
      </svg>
    </button>
  </section>
`;

var innertemplate2 = {
  template: template$6,
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.def = helpers.def;
  },
  methods: {
    // Method to process the sec2_content string and return HTML
    processContent(content) {
      if (!content) return '';
      
      // Split the content into lines and wrap each line in a <p> tag
      const lines = content.split(/\r?\n/);
      let htmlContent = '';

      lines.forEach(line => {
        htmlContent += `<p class="">${line}</p>`;
      });

      return htmlContent;
    },
    showModal(Item) {
      // Create and show the modal with dynamic content passed as arguments
      Modalmenu({
        item: Item,  
        onClose: () => {
          console.log('Modal closed');
        }
      });
    },
  },
  mounted() {
    // console.log('Banner component mounted.')
  },
};

const html$5 = String.raw;

const template$5 = html$5`
  <section
    :id="item.id"
    class="editable text-center"
    :style="{ 
      background: (item.Bg_Image ? 'url(' + def(item.Bg_Image) + ')' : 'url(/components/default_img.jpg)'),
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center', 
    }"
    data-fields="Page_name=txt&amp;Bg_Image=img&amp;title=txt&amp;sec1_title=txt&amp;sec1_content=rte&amp;sec2_title=txt&amp;sec2_content=rte&amp;"
  >
    <div class="inner-container p-4 text-left">
      <h2 class="mb-3 text-primary">About Melbourne</h2>
      <div class="melContent pt-5">
        <div class="row mb-5">
          <div class="col-md-8 ml-auto">
            <div class="p-4 bg-white-90">
              <h4 v-html="item.sec1_title" class="text-primary text-uppercase"></h4>
              <div v-html="processContent(item.sec1_content)"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mr-auto">
            <div class="p-4 bg-white-90">
              <h4 v-html="item.sec2_title" class="text-primary text-uppercase"></h4>
              <div v-html="processContent(item.sec2_content)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="MenuButton pageItem clickable dps__contents-button ZI5" 
      @click="showModal(item, item.Page_name  )">
      <svg version="1.1" id="Layer_1" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
        <polygon class="ContentsIconBG" points="0,0 100,100 100,0 "></polygon>
        <rect x="58.2" y="21.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="28.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="35.2" class="ContentsIconFG" width="25" height="2.5"></rect>
      </svg>
    </button>
  </section>
`;

var innertemplate3 = {
  template: template$5,
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.def = helpers.def;
  },
  methods: {
    // Method to process the sec2_content string and return HTML
    processContent(content) {
      if (!content) return '';
      
      // Split the content into lines and wrap each line in a <p> tag
      const lines = content.split(/\r?\n/);
      let htmlContent = '';

      lines.forEach(line => {
        htmlContent += `<p class="text-info">${line}</p>`;
      });

      return htmlContent;
    },
    showModal(Item) {
      // Create and show the modal with dynamic content passed as arguments
      Modalmenu({
        item: Item,  
        onClose: () => {
          console.log('Modal closed');
        }
      });
    },
  },
  mounted() {
    // console.log('Banner component mounted.')
  },
};

function Modal(options = {}) {
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

const html$4 = String.raw;

const template$4 = html$4`
  <section
    :id="item.id"
    class="editable text-center"
    :style="{ 
      background: (item.Bg_Image ? 'url(' + def(item.Bg_Image) + ')' : 'url(/components/default_img.jpg)'),
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
    }"
    data-fields="Page_name=txt&amp;Bg_Image=img&amp;title=txt&amp;button_text=txt&amp;modal_Image=img&amp;modal_content=rte&amp;button2_text=txt&amp;modal_Image2=img&amp;modal_content_2=rte&amp;"
  >

    <div class="inner-container p-4 text-left text-white">
      <h2 class="mb-3 text-primary bg-white-50 py-3 px-3 d-inline-block">{{item.title}}</h2>
      <div class="row mt-3">
        <div class="col-auto ml-auto">

          <!-- Button to trigger modal with dynamic content -->
          <button @click="showModal(item.button_text, item.modal_content, item.modal_Image)" class="btn btn-primary btn-lg btn-block rounded-0 text-uppercase">
            {{ item.button_text }}
          </button>

          <!-- Button to trigger modal with dynamic content -->
          <button @click="showModal(item.button2_text, item.modal_content_2, item.modal_Image2)" class="btn btn-primary btn-lg btn-block rounded-0 text-uppercase">
            {{ item.button2_text }}
          </button>

        </div>
      </div>
    </div> 


     <button class="MenuButton pageItem clickable dps__contents-button ZI5" 
      @click="showModal2(item, item.Page_name  )">
      <svg version="1.1" id="Layer_1" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
        <polygon class="ContentsIconBG" points="0,0 100,100 100,0 "></polygon>
        <rect x="58.2" y="21.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="28.2" class="ContentsIconFG" width="25" height="2.5"></rect>
        <rect x="58.2" y="35.2" class="ContentsIconFG" width="25" height="2.5"></rect>
      </svg>
    </button>
  </section>
`;

var innertemplate4 = {
  template: template$4,
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {
    showModal(buttonText, modalContent, modalImage) {
      // Create and show the modal with dynamic content passed as arguments
      Modal({
        title: buttonText,  // Use button text as the modal title
        body: modalContent,  // Use the passed content as the modal body
        image: modalImage,  // Use the passed image as the modal image
        onClose: () => {
          console.log('Modal closed');
        }
      });
    },
    showModal2(Item) {
      // Create and show the modal with dynamic content passed as arguments
      Modalmenu({
        item: Item,  
        onClose: () => {
          console.log('Modal closed');
        }
      });
    },
  },

  created() {
    this.def = helpers.def;
  },

  mounted() {
    // console.log('Banner component mounted.')
  },
};

const html$3 = String.raw;
const template$3 = html$3`
  <button
    :id="'launchIconPicker-'+mykey"
    class="btn btn-outline-secondary"
    :data-iconpicker-input="'#iconPicker-'+mykey"
    :data-iconpicker-preview="'#icon-preview-'+mykey"
  >
    <i :id="'icon-preview-'+mykey" :class="value"></i>
    &nbsp;Choose Icon
  </button>
  <input type="hidden" :id="'iconPicker-' + mykey" class="form-control" />
`;

var Picker = {
  template: template$3,
  props: ["mykey", "value"],
  emits: ["input"],
  mounted() {
    var app = this;
    IconPicker.Init({
      // Required: You have to set the path of IconPicker JSON file to "jsonUrl" option. e.g. '/content/plugins/IconPicker/dist/iconpicker-1.5.0.json'
      jsonUrl: "/editor/js/iconpicker/iconpicker-1.5.0.json",
      // Optional: Change the buttons or search placeholder text according to the language.
      searchPlaceholder: "Search Icon",
      showAllButton: "Show All",
      cancelButton: "Cancel",
      noResultsFound: "No results found.", // v1.5.0 and the next versions
      borderRadius: "20px", // v1.5.0 and the next versions
    });
    IconPicker.Run("#launchIconPicker-" + app.mykey, function () {
      //app.value = document.querySelector('#iconPicker').value;
      app.$emit("input", {
        key: app.mykey,
        value: document.querySelector("#iconPicker-" + app.mykey).value,
      });
    });
  },
};

const html$2 = String.raw;

const template$2 = html$2`
  <transition name="slide-left">
    <div class="slidein-left" id="adder" v-if="add">
      <div class="editor-header">
        <h4 class="float-left">Add Content</h4>
        <div class="close" @click="add = false">&times;</div>
      </div>
      <div class="editor-content mt-4">
        <div class="editor-content-head mb-4">
          <h5 class="float-left mb-2">Front Page</h5>
          <div class="editor-template">
            <img
              @click="addLayout"
              v-for="headerlayout in headerlayouts"
              
              :data-headerlayout="headerlayout"
              class="box img-fluid"
              :src="'components/header/'+headerlayout+'/preview.png'"
            />
          </div>
        </div>
        <div class="editor-content-body mb-4">
          <h5 class="float-left mb-2">Inner Pages</h5>
          <div class="editor-template">
            <img
              @click="addLayout"
              v-for="innerlayout in innerlayouts"
              :data-innerlayout="innerlayout"
              class="box img-fluid"
              :src="'components/innerpages/'+innerlayout+'/preview.png'"
            />
          </div>
        </div>
        <div class="editor-content-footer mb-4">
          <h5 class="float-left mb-2">Last Page</h5>
          <div class="editor-template">
            <img
              @click="addLayout"
              v-for="footerlayout in footerlayouts"
              :data-footerlayout="footerlayout"
              class="box img-fluid"
              :src="'components/footer/'+footerlayout+'/preview.png'"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>

  <transition name="slide-left">
    <div class="slidein-left" id="designer" v-if="designer">
      <div class="editor-header">
        <h4 class="float-left">Change Design</h4>
        <div class="close" @click="designer = false">&times;</div>
      </div>

      <div class="editor-content">
        <div class="label">Font</div>
        <div class="list-group">
          <a class="list-group-item" @click="setFont('Rubik')">
            <i class="fas fa-check mr-2" v-if="font == 'Rubik'"></i> Default
          </a>
          <a class="list-group-item" @click="setFont('Lobster')">
            <i class="fas fa-check mr-2" v-if="font == 'Lobster'"></i> Lobster
          </a>
          <a class="list-group-item" @click="setFont('Playfair Display')">
            <i class="fas fa-check mr-2" v-if="font == 'Playfair Display'"></i> Playfair Display
          </a>
          <a class="list-group-item" @click="setFont('Raleway')">
            <i class="fas fa-check mr-2" v-if="font == 'Raleway'"></i> Raleway
          </a>
          <a class="list-group-item" @click="setFont('Cutive Mono')">
            <i class="fas fa-check mr-2" v-if="font == 'Cutive Mono'"></i> Cutive Mono
          </a>
          <a class="list-group-item" @click="setFont('Helvetica')">
            <i class="fas fa-check mr-2" v-if="font == 'Helvetica'"></i> Helvetica
          </a>
          <a class="list-group-item" @click="setFont('Georgia')">
            <i class="fas fa-check mr-2" v-if="font == 'Georgia'"></i> Georgia
          </a>
        </div>
      </div>
    </div>
  </transition>

  <transition name="slide-left">
    <div class="slidein-left" id="saver" v-if="save">
      <div class="editor-header">
        <h4 class="float-left">Save</h4>
        <div class="close" @click="save = false">&times;</div>
      </div>
      <div class="editor-content mt-1">
        <div class="label">
          <span>Download</span>
          <span class="badge badge-pill badge-success float-right">free</span>
        </div>

        <p class="info">
          Download your design as an HTML file, so you can tweak it further and
          upload it to any hosting you like.
        </p>

        <button class="btn btn-outline-dark w-100" @click="downloadFile">
          <i class="fa fa-download"></i> &nbsp;Download
        </button>
      </div>
    </div>
  </transition>

  <div id="dock">
    <img
      src="editor/img/add.png"
      class="grow"
      @click="add = true; designer = false; save= false;"
    />
    <img
      src="editor/img/settings.png"
      class="grow"
      @click="designer = true; add = false; save = false;"
    />
    <img
      src="editor/img/save.png"
      class="grow"
      @click="save = true; designer = false; add = false;"
    />
  </div>
`;

var Add = {
  template: template$2,

  props: ["layouts","headerlayouts", "footerlayouts", "innerlayouts"], // Removed 'entries' from props
  
  data() {
    return {
      add: false,
      designer: false,
      choose: false,
      save: false,
      color: "#F7FAFC",
      font: "Rubik",
      entries: [], // Define a local entries array
      spacing: "-0.04em",
      colors: [
        "#1CA085", "#27AF60", "#1FBC9C", "#2ECC70", "#3398DB", "#2980B9",
        "#575fcf", "#3D556E", "#222F3D", "#ffdd59", "#F2C511", "#F39C19",
        "#E84B3C", "#C0382B", "#BDC3C8", "#DDE6E8", "#F7FAFC", "#FFFFFF",
      ],
    };
  },

  methods: {
    addLayout(event) {
      let layout = event.target.getAttribute("data-layout");
      let headerlayout = event.target.getAttribute("data-headerlayout");
      let innerlayout = event.target.getAttribute("data-innerlayout");
      let footerlayout = event.target.getAttribute("data-footerlayout");
      let newItem = {
        id: "item-" + Date.now(),
        layout: layout,
        headerlayout: headerlayout,
        innerlayout: innerlayout,
        footerlayout: footerlayout,
        title: "Lorem Ipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend ligula ut augue scelerisque venenatis."
      };
      this.entries.unshift(newItem);
      this.add = false;
      this.updateLocalStorage();
      location.reload();
    },
    setColor(hex) {
      this.color = hex;
      let hex2 = colorContrast(hex);
      let root = document.documentElement;
      root.style.setProperty("--bg-color", hex);
      root.style.setProperty("--fg-color", hex2);
      localStorage.setItem("bg-color", hex);
      localStorage.setItem("fg-color", hex2);
    },
    setFont(font) {
      this.font = font;
      let spacing = font === "Rubik" ? "-0.04em" : "0";
      let root = document.documentElement;
      root.style.setProperty("--font", font);
      root.style.setProperty("--spacing", spacing);
      localStorage.setItem("font", font);
      localStorage.setItem("spacing", spacing);
    },
    updateLocalStorage() {
      localStorage.setItem("entries", JSON.stringify(this.entries));
    },
    downloadFile() {
      var css = `<style>`;
      if (localStorage.getItem("bg-color") !== null) {
        css += `:root {--bg-color:${localStorage.getItem(
          "bg-color"
        )};--fg-color:${localStorage.getItem("fg-color")};`;
      }
      if (localStorage.getItem("font") !== null) {
        css += `--font:${localStorage.getItem(
          "font"
        )};--spacing:${localStorage.getItem("spacing")};`;
      }
      css += `}
      </style>`;

      let header = `<!DOCTYPE html>
    		<html lang="en">
        <head>
          <meta charset="utf-8">
          <title>My Website</title>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
          <link rel="stylesheet" href="https://vue-pagebuilder.vercel.app/style.css">

          ${css}

          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;600&family=Lobster&family=Playfair+Display&family=Raleway&family=Cutive+Mono&display=swap" rel="stylesheet">

        </head>
    		<body>\n\n`;
      let html = document.querySelector("#page").innerHTML;
      let footer = `\n\n</body>
    		</html>`;
      dl(
        "index.html",
        html_beautify(header + html.replaceAll("<!---->", "") + footer)
      );
    },
  },

  mounted() {
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      this.entries = JSON.parse(storedEntries);
    }

    this.color = localStorage.getItem("bg-color") || "#F7FAFC";
    this.font = localStorage.getItem("font") || "Rubik";
    this.setColor(this.color);
    this.setFont(this.font);
  },
};

function colorContrast(hex) {
  var threshold = 150; 
  var hRed = hexToR(hex);
  var hGreen = hexToG(hex);
  var hBlue = hexToB(hex);

  function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16);
  }
  function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16);
  }
  function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16);
  }
  function cutHex(h) {
    return h.charAt(0) === "#" ? h.substring(1, 7) : h;
  }

  var cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  return cBrightness > threshold ? "#000000" : "#ffffff";
}

function dl(filename, data) {
  var blob = new Blob([data], { type: "text/html" });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}

const html$1 = String.raw;
const template$1 = html$1`
  <input
    type="file"
    ref="fileInput"
    class="fileInput"
    accept="image/png, image/jpeg, image/gif, image/jpg,"
    style="display: none;"
    @change="handleFileChange"
  />
  <button class="btn btn-outline-secondary" @click="choose">Upload</button>
`;

var Image$1 = {
  template: template$1,

  props: {
    mykey: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },
  methods: {
    choose() {
      this.$refs.fileInput.click(); // Use Vue's ref to trigger file input
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;
    
      const img = new Image();
      img.onload = () => {
        const base64Image = this.resizeImage(img, file.type);
    
        // Try to store the base64 image in localStorage
        try {
          localStorage.setItem("entries", base64Image); // Attempt to store the image in localStorage
          console.log("Image successfully saved to localStorage."); // Optional: log success
        } catch (e) {
          if (e.name === "QuotaExceededError") {
            console.error("Storage quota exceeded. Please try again later.");
            // Optionally, alert the user or offer an alternative storage option
            alert("Sorry, you've exceeded the localStorage limit. Please try again later.");
          } else {
            console.error("An error occurred while saving the image.", e);
          }
        }
    
        // Emit the image data (base64 or Blob) to the parent component
        this.$emit("image", {
          key: this.mykey,
          value: base64Image, // Emit the base64 image (you can later use it for UI or other purposes)
        });
      };
      img.onerror = () => {
        console.error("Failed to load image");
      };
      img.src = URL.createObjectURL(file);
    },

    resizeImage(img, fileType) {
      const imgWidth = 1110;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
    
      canvas.width = imgWidth;
      canvas.height = (imgWidth * img.height) / img.width;
    
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
      // Determine the image format based on the file type
      let format = "image/png"; // Default to PNG
      if (fileType === "image/jpeg" || fileType === "image/jpg") {
        format = "image/jpeg";
      }
    
      // Convert to base64 with the appropriate format and quality for JPEG
      return canvas.toDataURL(format, format === "image/jpeg" ? 0.7 : 1); // For JPEG, apply 70% quality
    },
  },
  mounted() {
    // Any setup needed on mount can be done here
  },
};

const html = String.raw;

const template = html`
  <transition name="slide-right">
    <div class="editor slidein-right" v-if="item" spellcheck="false">
      <div class="editor-header">
        <h4 class="float-left">Edit</h4>
        <div class="close" @click="item = false">&times;</div>
      </div>
      <div class="editor-content">
        <div v-for="(val, key) in fields" :key="key">
          <div class="label">
            {{key.replace('_', ' ')}}
          </div>

          <input
            type="text"
            class="form-control"
            v-if="val == 'txt'"
            v-model="item[key]"
          />

          <input
            type="checkbox"
            class="form-control"
            v-if="val == 'chek'"
            v-model="item[key]"
          />

          <textarea
            class="form-control"
            v-if="val == 'rte'"
            v-model="item[key]"
          ></textarea>

          <fa-picker
            v-if="val == 'icon'"
            v-bind:mykey="key"
            v-bind:value="item[key]"
            @input="setIcon"
          ></fa-picker>

          <image-resize
            v-if="val == 'img'"
            v-bind:mykey="key"
            @image="setImage"
          ></image-resize>
          
          <input
            v-if="val == 'vid'"
            type="text"
            class="form-control"
            v-model="item[key]"
          />

        </div>

        <span v-if="item.header != 'header'">
          <div class="label">Options</div>
          <div class="btn-group w-100">
            <button
              class="btn btn-outline-secondary w-50"
              @click="moveItem(item.id)"
            >
              Move Down
            </button>
            <button
              class="btn btn-outline-secondary w-50"
              @click="deleteItem(item.id)"
            >
              Delete
            </button>
          </div>
        </span>

        <button class="btn btn-outline-success mb-5 w-100 save" @click="save">
          Save
        </button>
      </div>
    </div>
  </transition>

  <add-content v-bind:layouts="layouts" v-bind:innerlayouts="innerlayouts" v-bind:footerlayouts="footerlayouts" v-bind:headerlayouts="headerlayouts" v-bind:entries="localEntries"></add-content>
`;

var Editor = {
  template,

  props: ["layouts", "entries", "headerlayouts", "footerlayouts", "innerlayouts"],

  data() {
    return {
      item: false,
      fields: false,
      localEntries: [], // Local copy of entries
      textFields: [],
    };
  },
  components: {
    "fa-picker": Picker,
    "add-content": Add,
    "image-resize": Image$1,
    
  },
  
  methods: {
    save: function () {
      // Save entries to local storage
      localStorage.setItem("entries", JSON.stringify(this.localEntries));
      console.log("Entries saved:", this.localEntries);
      this.item = false;
      location.reload();
    },
    setIcon: function (e) {
      this.item[e.key] = e.value;
    },
    setImage: function (e) {
      this.item[e.key] = e.value;
    },
    deleteItem: function (id) {

      let r = confirm("Are you sure you want to delete this item?");
      if (r == true) {
        this.localEntries.splice(
          this.localEntries.findIndex((x) => x.id === id),
          1
        );
        this.item = false;
        // Update local storage
        localStorage.setItem("entries", JSON.stringify(this.localEntries));
      }
      location.reload();
    },
    moveItem: function (id) {

      // Check if headerlayout has a value, if so disable move
      const currentItem = this.localEntries.find((item) => item.id === id);
      // If the headerlayout is not null or empty, block the move
      if (currentItem && currentItem.headerlayout) {
        alert("Moving is disabled for items with a header layout.");
        return;
      }

      // If the item has a footerlayout, ensure it's moved to the end of the array
      if (currentItem && currentItem.footerlayout) {
        // Remove the item from its current position
        const index = this.localEntries.findIndex((x) => x.id === id);
        const itemToMove = this.localEntries.splice(index, 1)[0];
        // Push the item to the end of the array
        this.localEntries.push(itemToMove);
        // Update local storage
        localStorage.setItem("entries", JSON.stringify(this.localEntries));
        console.log("Item moved to the end due to footerlayout.");
        return; // Exit the function early since we handled this special case
      }

      const from = this.localEntries.findIndex((x) => x.id == id);
      const to = from + 1;
      if (to < this.localEntries.length) {
        const itemToMove = this.localEntries.splice(from, 1)[0];
        this.localEntries.splice(to, 0, itemToMove);
        // Update local storage
        localStorage.setItem("entries", JSON.stringify(this.localEntries));
      }
      location.reload();
    },
    addTextField() {
      this.textFields.push(''); // Add a new empty text field
    },
  },
  
  mounted() {
    // Load entries from local storage if available
    
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      this.localEntries = JSON.parse(storedEntries);
    }

    var app = this;
    document.body.addEventListener("click", function (e) {
      if (e.target.closest(".editable")) {
        let el = e.target.closest(".editable");
        let id = el.id;
        app.item = app.localEntries.filter((x) => x.id === id)[0];

        let myfields = el.getAttribute("data-fields");
        let params = new URLSearchParams(myfields);
        myfields = Object.fromEntries(params.entries());
        app.fields = myfields;
      }
    });
  },
};

const { createApp } = Vue;
const App = createApp({
  data() { 

    this.loadEntries();

    return {
      editing: true,
      headerlayouts: ["template1"],
      innerlayouts: ["innertemplate1", "innertemplate2", "innertemplate3", "innertemplate4"],
      layouts: ["featured", "post", "news", "newsleft", "features"],
      footerlayouts: ["ftemplate1"],
      entries: this.loadEntries(), // Load from local storage
    };
  },

  methods: {
    defaultVal(key, def) {
      return key === "" ? def : key;
    },
    
    loadEntries() {
       
      const storedEntries = localStorage.getItem("entries");
      return storedEntries ? JSON.parse(storedEntries) : [
        {
          id: "item-1",
          layout: "header",
          title: "Vue Pagebuilder",
          subtitle: "Lorem ipsum dolor site amet.",
          button_text: "Contact Us",
          button_link: "#",
          icon: "fas fa-bolt",
        },
        {
          id: "item-2",
          layout: "post",
          title: "Mauris eleifend ligula",
          body: "Vivamus in nisi commodo, auctor magna vel, viverra turpis.",
        },
      ];
    },

    saveEntries() {
      localStorage.setItem("entries", JSON.stringify(this.entries));
    },

    addEntry(newEntry) {
      this.entries.push(newEntry);
      this.saveEntries();
    },
    
  },

  watch: {
    entries: {
      handler(newEntries) {
        this.saveEntries();
      },
      deep: true, // Watch deeply to catch nested changes
    },
  },

  components: {  
    "wdgt-header": template1,

    "wdgt-template1": template1,
    "wdgt-template2": template2,

    "wdgt-ftemplate1": ftemplate1,
    "wdgt-ftemplate2": ftemplate2,

    "wdgt-innertemplate1": innertemplate1,
    "wdgt-innertemplate2": innertemplate2,
    "wdgt-innertemplate3": innertemplate3,
    "wdgt-innertemplate4": innertemplate4,
    
    "page-editor": Editor,
  },
});

window.addEventListener("load", () => {
  App.mount("main");
  // console.log(App);
});
