<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section class="mt-2"
        :title="$t('message.who')"
      >
        <p>{{ $t('message.personal') }}</p>
      </content-section>
      <content-section
        v-if="jobs"
        :title="$t('message.jobs')"
      >
        <v-row
          v-for="(job, i) in jobs"
          :key="i"
        >
          <v-col cols="12">
            <h3>{{ job.title }}</h3>
            <p class="mt-2"><i>{{ job.time }}</i></p>
            <p style="margin-top: -5px">{{ job.description }}</p>
          </v-col>
        </v-row>
      </content-section>
      <content-section
        v-if="educations"
        :title="$t('message.education')"
      >
        <v-row
          v-for="(education, i) in educations"
          :key="i"
          class="mb-2"
        >
          <v-col cols="12" md="4">
            <h3 class="font-weight-regular">{{ education.from }} - {{ education.to }}</h3>
          </v-col>
          <v-col cols="12" md="8">
            <h3 v-if="education.title">{{ education.title }}</h3>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-col>
          <v-col>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        :title="$t('message.skills')"
      >
        <template slot="actions">
          <p class="font-weight-regular caption">({{ $t('message.percentage') }})</p>
        </template>
        <v-row wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-col
              v-if="skill.divider"
              :key="i"
              cols="12"
              mb-4
            />
            <v-col
              v-else
              :key="i"
              md="6"
              cols="12"
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                    color="blue darken-3"
                    height="3"
                    :value="skill.value"
                    rounded
                />
              </div>
            </v-col>
          </template>
        </v-row>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-help-rhombus-outline',
        text  : 'Answered 10M+ questions!',
        source: '(Bytegate.ir post views)',
      },
      {
        icon  : 'mdi-library-music',
        text  : 'Made people enjoy and learn a new language for equivalent of 29+ years (older than myself!)',
        source: '(Bobet.ir and its channel downloads)',
      },
      {
        icon  : 'mdi-timer-sand',
        text  : 'Saved +110 days of time of students, writers and etc!',
        source: '(Delix.ir service usages)',
      },
      {
        icon  : 'mdi-account-multiple',
        text  : 'Tried to cover small part of 7 people expenses.',
        source: '(My awesome colleagues)',
      },
    ],
    skills: [
      {
        title: 'C',
        icon : 'mdi-language-c',
        value: 100,
      },
      {
        title: 'Java',
        icon : 'mdi-language-java',
        value: 100,
      },
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 90,
      },
      {
        title: 'Python',
        icon : 'mdi-language-python',
        value: 80,
      },
      {
        title: 'PostgreSQL',
        icon : 'mdi-database-search',
        value: 80,
      },
      {
        title: 'Vue.js',
        icon : 'mdi-vuejs',
        value: 70,
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 60,
      },
    ],
  }),
  computed: {
    educations() {
      return [
        this.$t("message.school"),
        this.$t("message.university")
      ]
    },
    jobs() {
      return [
          this.$t("message.country_job"),
          this.$t("message.website_job")
      ]
    }
  }
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
