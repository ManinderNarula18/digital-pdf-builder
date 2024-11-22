import helpers from "./../../helpers.mjs";
import Modalmenu from '../../modal/modalheadermenu.mjs'; // Import modal module

const html = String.raw;
const template = html`
  <section
    :style="{ 
      background: (item.Bg_Image ? 'url(' + def(item.Bg_Image) + ')' : 'url(/components/default_img.jpg)'),
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
    }"
    class="editable"
  >
    <div :id="item.id" class="editable inner-container p-8 text-left" data-fields="Page_name=txt&amp;Bg_Image=img&amp;title=txt&amp;description=rte&amp;Professor=img&amp;Professor_name=txt&amp;">
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


export default {
  template,
  
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
      const modal = Modalmenu({
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
