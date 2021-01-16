<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        :title="$t('message.who')"
      >
        {{ $t('message.personal') }}
      </content-section>
      <content-section
        v-if="prouds"
        :title="$t('message.jobs')"
      >
        <v-layout
          v-for="(job, i) in jobs"
          :key="i"
        >
          <v-flex md12>
            <h4>{{ job.title }}</h4>
            <p class="mt-2"><i>{{ job.time }}</i></p>
            <p style="margin-top: -5px">{{ job.description }}</p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        :title="$t('message.education')"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        :title="$t('message.skills')"
      >
        <template slot="actions">
          ({{ $t('message.percentage') }})
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
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
            </v-flex>
          </template>
        </v-layout>
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
