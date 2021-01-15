<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Inés <span class="light-blue--text text--lighten-3">Marcarian</span>
        </h1>
        <span>
          {{ $t("message.career") }}
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  class="col"
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
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
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
              text: 'marcarianines@gmail.com',
            },
            {
              name: this.$t("message.birth_date"),
              icon: 'mdi-cake-variant',
              text: 'Feb 15, 2000',
            },
            {
              name: this.$t("message.living"),
              icon: 'mdi-map-marker',
              text: 'Buenos Aires, Argentina',
            },
            {
              name: this.$t("message.telephone"),
              icon: 'mdi-phone',
              text: '+54 11 4927 9383',
            },
          ],
        },
        socials: {
          title: this.$t("message.social").toUpperCase(),
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/inesmarca',
              link: 'https://github.com/inesmarca',
            },
          ],
        },
        hobbies: {
          title: this.$t("message.hobbies").toUpperCase(),
          items: [
            {
              icon: 'mdi-puzzle',
              text: this.$t("message.puzzles"),
            },
            {
              icon: 'mdi-soccer',
              text: this.$t("message.football"),
            },
            {
              icon: 'mdi-gamepad-variant',
              text: this.$t("message.play")
            }
          ],
        },
        languages: {
          title: this.$t("message.languages").toUpperCase(),
          items: [
            {
              text: this.$t("message.spanish"),
              value: 100,
            },
            {
              text: this.$t("message.english"),
              value: 95,
            },
            {
              text: this.$t("message.chinese"),
              value: 30,
            },
          ],
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
