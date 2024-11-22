import helpers from "./../../helpers.mjs";
import Modalmenu from '../../modal/modalheadermenu.mjs'; // Import modal module

const html = String.raw;

const template = html`
  <section
    class="editable"
    
  >
    <div :id="item.id" class="editable inner-container p-8 text-left" data-fields="Page_name=txt&amp;title=txt&amp;sec1_title=txt&amp;sec1_content=rte&amp;sec1_img=img&amp;sec2_title=txt&amp;sec2_content=rte&amp;sec2_img=img&amp;sec3_title=txt&amp;sec3_content=rte&amp;sec3_img=img&amp;">
      <h1 class="text-primary mb-3">{{item.title}}</h1>
      <div class="d-flex flex-column gap-30 pt-4">
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
