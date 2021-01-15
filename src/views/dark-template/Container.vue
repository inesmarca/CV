<template>
  <v-app id="dark-template">
    <v-fade-transition
      mode="out-in"
      type="animation"
    >
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              md10
              sm12
            >
              <v-layout wrap>
                <v-flex
                  md4
                >
                  <sidebar-container class="fill-height" />
                </v-flex>
                <v-flex
                  md8
                >
                  <content-container class="fill-height" />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-fade-transition>
    <v-speed-dial
        v-model="fab"
        bottom
        right
        direction="top"
        open-on-hover
        transition="slide-y-reverse-transition"
        fixed
        class="ma-md-4"
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
        <v-icon>mdi-download</v-icon>
      </v-btn>
      <v-btn
          fab
          dark
          color="blue-grey darken-1"
          @click="changeLang()"
      >
        {{ language }}
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script>
import SidebarContainer from '@/views/dark-template/sidebar/Container'
import ContentContainer from '@/views/dark-template/content/Container'
import TimelinePrimary from '@/views/dark-template/timeline/Primary'
import TimelineEndless from '@/views/dark-template/timeline/Endless'

export default {
  name      : 'DarkTemplateContainer',
  components: {
    TimelineEndless,
    TimelinePrimary,
    ContentContainer,
    SidebarContainer,
  },
  data() {
    return {
      fab: false,
      lan: undefined
    }
  },
  mounted () {
    if (localStorage.getItem('lang') !== null) {
      this.lan = localStorage.getItem('lang')
    } else {
      this.lan = this.$i18n.locale
      this.updateLang()
    }
    this.$i18n.locale = this.lan
  },
  computed: {
    language() {
      if (this.lan === "es") {
        return "ES"
      } else {
        return "EN"
      }
    }
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
    }
  }
}
</script>

<style scoped>
#dark-template {
  height: 100%;
  background: #66668d;
  background: -webkit-linear-gradient(to left, #66668d, #4389a2);
  background: linear-gradient(to left, #66668d, #4389a2);
  background-size: cover;
}
</style>
