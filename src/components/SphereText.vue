<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
import fitty from 'fitty'
export default {
  props: ['max', 'min'],
  mounted () {
    fitty (this.$el, {
      multiLine: false,
      minSize: this.min,
      maxSize: this.max
    });
  },
}
</script>
