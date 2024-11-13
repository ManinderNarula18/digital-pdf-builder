import helpers from "./../../helpers.mjs";

const html = String.raw;

const template = html`
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
  mounted() {
    // console.log('Banner component mounted.')
  },
};
