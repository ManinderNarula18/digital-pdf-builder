import Picker from "./components/fa-picker.mjs";
import Add from "./components/add-content.mjs";
import Image from "./components/image-resize.mjs";
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

          <input
            v-if="val == 'vidfile'"
            type="file"
            class="form-control"
            @change="handleVideoUpload($event, key)"
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

        <!--- <button class="btn btn-outline-success mb-5 w-100 save" @click="save">
          Save
        </button>-->
      </div>
    </div>
  </transition>

  <add-content v-bind:layouts="layouts" v-bind:innerlayouts="innerlayouts" v-bind:footerlayouts="footerlayouts" v-bind:headerlayouts="headerlayouts" v-bind:entries="localEntries"></add-content>
`;

export default {
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
    "image-resize": Image,
    
  },
  
  methods: {
    save: function () {
      try {
        // Save updated entries to localStorage
        localStorage.setItem("entries", JSON.stringify(this.entries));
        console.log("Entries saved:", this.entries);
      } catch (e) {
        console.error("Failed to save entries:", e);
      }
      
      this.item = false;  // Close the editor
      location.reload();   // Reload the page after saving
    },
    
    // Method to handle video file upload
    handleVideoUpload(event, key) {
      const file = event.target.files[0]; // Get the uploaded file
      if (file && file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // After the video is read as a URL, update the item with the video URL
          this.item[key] = reader.result; // This stores the video as a data URL
          console.log("Video uploaded:", reader.result);
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      } else {
        alert("Please select a valid video file.");
      }
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
      try {
        this.localEntries = JSON.parse(storedEntries);  // Parse the JSON data from localStorage
      } catch (e) {
        console.error("Failed to parse stored entries:", e);  // Handle JSON parse error
      }
    }

    // Event listener for click events on editable elements
    document.body.addEventListener("click", (e) => {
      if (e.target.closest(".editable")) {
        let el = e.target.closest(".editable");
        let id = el.id;  // Get the ID of the clicked element

        // Find the corresponding item in localEntries using its ID
        this.item = this.entries.find((x) => x.id === id);  // Set app.item from localEntries

        // Retrieve custom fields for the editor (if any)
        let myfields = el.getAttribute("data-fields");
        let params = new URLSearchParams(myfields);
        myfields = Object.fromEntries(params.entries());

        this.fields = myfields;  // Set the fields object for the editor
      }
    });
  },
};
