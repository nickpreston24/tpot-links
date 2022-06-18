<script>
import { show, hide, className } from "./useSection";

export default {
  data() {
    return {
      show,
      hide,
      className,
    };
  },
};
</script>

<template>
  <transition name="bounce">
    <section v-if="show" class="" :class="className">
      <slot></slot>

      <!-- <pre>hide? {{ hide }}</pre>
      <pre>show? {{ show }}</pre>
      <pre>className? {{ className }}</pre> -->
    </section>
  </transition>
</template>

<style scoped>
/* fade */
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* bounce */

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.075);
  }
  100% {
    transform: scale(1);
  }
}
</style>
