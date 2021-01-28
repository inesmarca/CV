<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <v-row class="justify-center mt-2 mb-7">
        <avatar/>
      </v-row>
      <v-row class="mb-4 mt-3 justify-center">
        <h1>
          Inés <span class="light-blue--text text--lighten-3">Marcarian</span>
        </h1>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="11">
          <p class="body-1 mt-2 text-center mx-3">
            {{ $t("message.career") }}
          </p>
        </v-col>
      </v-row>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip class="ma-2">
            <v-icon left>
              {{ item.icon }}
            </v-icon>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-row
              class="text-xs-center justify-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-col
                  :key="i"
                >
                  <v-progress-circular
                    rotate="360"
                    size="90"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-col>
              </template>
            </v-row>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
import {global} from "@/plugins/i18n";

export default {
  name: 'Sidebar',
  components: { SidebarSection, Avatar },
  computed: {
    sections() {
      return {
        info: {
          title: this.$t("message.info").toUpperCase(),
          items: [
            {
              name: this.$t("message.email"),
              icon: 'mdi-email',
              text: global.email,
            },
            {
              name: this.$t("message.birth_date_title"),
              icon: 'mdi-cake-variant',
              text: this.$t('message.birth_date'),
            },
            {
              name: this.$t("message.living"),
              icon: 'mdi-map-marker',
              text: global.residence,
            },
            {
              name: this.$t("message.telephone"),
              icon: 'mdi-phone',
              text: global.phone,
            },
          ],
        },
        socials: {
          title: this.$t("message.social").toUpperCase(),
          items: global.social_items
        },
        hobbies: {
           title: this.$t("message.hobbies").toUpperCase(),
           items: this.$t("message.hobbies_items")
         },
        languages: {
          title: this.$t("message.languages").toUpperCase(),
          items: this.$t("message.languages_items")
        },
      }
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
