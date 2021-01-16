<template>
  <v-fade-transition mode="out-in" type="animation">
    <v-row class="justify-center my-8">
      <v-col cols="10">
        <v-row no-gutters>
          <v-col md="4" sm="12">
            <sidebar-container class="fill-height"/>
          </v-col>
          <v-col md="8" sm="12">
            <content-container class="fill-height"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-fade-transition>
</template>

<script>
import SidebarContainer from '@/views/dark-template/sidebar/Container'
import ContentContainer from '@/views/dark-template/content/Container'
import TimelinePrimary from '@/views/dark-template/timeline/Primary'
import TimelineEndless from '@/views/dark-template/timeline/Endless'

export default {
  name: 'DarkTemplateContainer',
  components: {
    TimelineEndless,
    TimelinePrimary,
    ContentContainer,
    SidebarContainer,
  },
}
</script>
