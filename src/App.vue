<template>
  <v-app id="dark-template">
    <container></container>
    <v-speed-dial
        v-model="fab"
        bottom
        right
        direction="top"
        open-on-hover
        transition="slide-y-reverse-transition"
        fixed
        class="ma-md-4"
        v-show="true"
    >
      <template v-slot:activator>
        <v-btn
            v-model="fab"
            dark
            fab
            large
            class="mt-2"
        >
          <v-icon v-if="fab">
            mdi-arrow-up
          </v-icon>
          <v-icon v-else>
            mdi-arrow-down
          </v-icon>
        </v-btn>
      </template>
      <v-btn
          fab
          dark
          color="blue-grey darken-2"
      >
        <a :href="downloadPdf" style="color: white" download>
          <v-icon>mdi-download</v-icon>
        </a>
      </v-btn>
      <v-btn
          fab
          dark
          color="blue-grey darken-2"
          @click="changeLang()"
      >
        {{ language }}
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script>
import Container from "@/views/dark-template/Container";

export default {
  name: 'App',

  components: {
    Container,
  },
  data() {
    return {
      fab: false,
      lan: undefined
    }
  },
  mounted() {
    if (localStorage.getItem('lang') !== null) {
      this.lan = localStorage.getItem('lang')
    } else {
      this.lan = this.$i18n.locale
      this.updateLang()
    }
    this.$i18n.locale = this.lan
  },
  methods: {
    changeLang() {
      if (this.lan === "es") {
        this.lan = "en"
        this.$i18n.locale = 'en'
      } else {
        this.lan = "es"
        this.$i18n.locale = 'es'
      }
      this.updateLang()
    },
    updateLang() {
      localStorage.setItem('lang', this.lan)
    },
  },
  computed: {
    language() {
      if (this.lan === "es") {
        return "ES"
      } else {
        return "EN"
      }
    },
    downloadPdf() {
      return "pdfs/" + this.$t('message.filename')
    }
  },
};
</script>

<style>
  #dark-template {
    height: 100%;
    background: #66668d;
    background: -webkit-linear-gradient(to left, #66668d, #4389a2);
    background: linear-gradient(to left, #66668d, #4389a2);
    background-size: cover;
  }

  body p {
    font-size: 16px;
  }
</style>
