const html = String.raw;
const template = html`
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

export default {
  template,

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
