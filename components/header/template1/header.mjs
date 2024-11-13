import helpers from "./../../helpers.mjs";

const html = String.raw;

const template = html`
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
