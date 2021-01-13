<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        :title="$t('message.who')"
      >
        I'm a developer born in Iran and founder of <a href="http://delix.ir/?utm_source=portiflo&utm_medium=link&utm_content=intro&utm_campaign=delix">Delix.ir</a>, <a href="https://bytegate.ir/?utm_source=portiflo&utm_medium=link&utm_content=intro&utm_campaign=bytegate">Bytegate.ir</a> and <a href="http://bobet.ir/?utm_source=portiflo&utm_medium=link&utm_content=intro&utm_campaign=bobet">Bobet.ir</a> and co-founder of <a href="https://smo.li/?utm_source=portiflo&utm_medium=link&utm_content=intro&utm_campaign=smoli">Smo.li</a>.<br>
        I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security.
      </content-section>
      <content-section
        v-if="prouds"
        :title="$t('message.jobs')"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.source }}</small>
            </p>
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
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
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
    educations: [
      {
        from       : '2015',
        to         : '2019 (not finished yet)',
        title      : 'Bachelor\'s degree, Information Technology',
        location   : 'Seraj University',
        description: 'Became a member of University Academic Association of Computer Science',
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
