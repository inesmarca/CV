<template>
  <v-layout class="my-4 ml-3">
    <v-flex
      v-if="hasIcon"
      xs2
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-flex>
    <v-flex
      :xs10="hasIcon"
      :xs12="!hasIcon"
    >
      <div>
        <h3 class="font-weight-medium">{{ item.name }}</h3>
      </div>
      <p>
        <a
          v-if="item.link"
          class="grey--text"
          :href="item.link"
          target="_blank"
        >
          {{ item.text }}
        </a>
        <span
          v-else
          class="grey--text"
        >
          {{ item.text }}
        </span>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name    : 'SidebarSectionItem',
  props   : { item: { type: Object, default: () => {} } },
  computed: {
    hasIcon () {
      return !!this.item.icon
    },
  },
}
</script>

<style scoped>
 p {
   margin: 0;
 }
</style>
