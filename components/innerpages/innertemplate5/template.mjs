import helpers from "./../../helpers.mjs";
//import Modal from '../../modal/modal.mjs'; // Import modal module

import Modalmenu from '../../modal/modalheadermenu.mjs'; // Import modal module


const html = String.raw;

const template = html`
  <section
    class="editable"
  >
    <div :id="item.id" class="editable inner-container text-left text-white" data-fields="Page_name=txt&amp;Bg_Image=img&amp;title=txt&amp;Upload_Video1=vidfile&amp;youtube_url=vid" >
      <div class="row">
        <div class="col-lg-4 padding_10 temp_5">
          <div class="pageItem contents__sidebar">
            <div class="contents__title">
              <h1 class="heading">
                <span>{{item.title}}</span>
              </h1>
            </div>
            <div class="contents__button-group">

              <div class="clickable contents__button" role="button" tabindex="0">
                <br><br>
              </div>

              <!-- Dynamically render items from the 'all_entires' array -->
              <div class="pageItem desktop programs-grid__cell sidebar vspan5 scroll-bar no-click" ><div class="piWrap"><p class=""><span class="FontPrimaryBold">English Language Programs:<br></span> Whether improving your conversational, academic or business English skills, our courses are designed to help you enhance your language abilities.</p></div><div class="piWrap"><p class="mb-0"><span class="FontPrimaryBold">Accelerated Certificate Programs<br> (+ Internship Experiences, +OPT):<br></span> With options ranging from Data Science to International Finance to TEFL, update your skills in just 3 months. Internship experiences and OPT available!</p></div></div>

            </div>
          </div>
        </div>
        <div class="col-lg-8 pl-0">
          <div class="pageItem dps__grid" data-ref="pi_85674896" id="pid_pi_85674896">
            <!---->
            <div class="pageItem dps__grid-item image hspan2 max-h417" id="pid_pi_85674883">
                <video 
                  class="video-left" 
                  v-if="item.Upload_Video1" 
                  autoplay 
                  muted 
                  loop 
                  playsinline 
                  :src="item.Upload_Video1">
                </video>
            </div>
            <!---->
            <div class="pageItem dps__grid-item image max-h332" id="pid_pi_85674885">
                <div class="responsive-container">
                  <iframe width="100%" height="332" :src="'https://www.youtube.com/embed/' + youtube_parser(item.youtube_url) + '?autoplay=1&mute=1&controls=0&loop=1&rel=0&fs=0&modestbranding=0&playsinline=1'"  :title="item.title + ' ' + 'Video'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <!---->
            <div class="pageItem dps__grid-item image max-h332" id="pid_pi_85674887">
              <img :src="def(item.Bg_Image) || '/components/default_no.jpg'" class="img-fluid" :alt="item.title + 'Image'" />
            </div>

            <!----><!---->
          </div>
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
      Upload_Video1: ''  // Placeholder for video URL
    },
  },

  data() {
    return {};
  },

  methods: {
    showModal2(Item) {
      // Create and show the modal with dynamic content passed as arguments
      const modal = Modalmenu({
        item: Item,  
        onClose: () => {
          console.log('Modal closed');
        }
      });
    },
    setVideoUrl(videoUrl) {
      const videoRegex = /\.(mp4|webm|ogg)$/i;
      if (videoRegex.test(videoUrl)) {
        this.item.Upload_Video1 = videoUrl;
      } else {
        console.error("Invalid video URL:", videoUrl);
      }
    },
  },

  created() {
    this.def = helpers.def;
    this.youtube_parser = helpers.youtube_parser;
  },

  mounted() {
    // console.log('Banner component mounted.')
  },
};
