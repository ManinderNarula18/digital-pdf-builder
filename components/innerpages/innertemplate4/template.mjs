import helpers from "./../../helpers.mjs";
import Modal from '../../modal/modal.mjs'; // Import modal module

import Modalmenu from '../../modal/modalheadermenu.mjs'; // Import modal module

const html = String.raw;

const template = html`
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

export default {
  template,
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
      const modal = Modal({
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
      const modal = Modalmenu({
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
