
<template>
  <!-- <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" /> -->
  <Icon :icon="icon" />
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  // import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

  export default {
    name: 'font-awesome-icon-comp',
    components: {icon: FontAwesomeIcon},
    props: {
      icon: {
        type: String,
        default: 'house'
      }
    }
  }
</script>