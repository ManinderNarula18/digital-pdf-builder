import helpers from "./../../helpers.mjs";
import Modalmenu from '../../modal/modalheadermenu.mjs'; // Import modal module

const html = String.raw;

const template = html`
  <section
    class="editable"
    :style="{ 
      background: (item.Bg_Image ? 'url(' + def(item.Bg_Image) + ')' : 'url(/components/default_img.jpg)'),
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center', 
    }"
    
  >
    <div :id="item.id" class="editable inner-container p-8 text-left" data-fields="Page_name=txt&amp;Bg_Image=img&amp;title=txt&amp;sec1_title=txt&amp;sec1_content=rte&amp;sec2_title=txt&amp;sec2_content=rte&amp;">
      <h2 class="mb-3 text-primary">{{item.title}}</h2>
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
        htmlContent += `<p class="text-info">${line}</p>`;
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
