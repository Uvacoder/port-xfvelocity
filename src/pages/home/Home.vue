<template>
  <v-container class="home-content">
    <v-row
      class="align-center"
      :class="windowWidth > 1500 ? 'justify-space-between' : 'justify-center'"
    >
      <v-col v-if="!isTablet" cols="12">
        <transition name="slide-fade-right">
          <img v-show="inView" :src="dynamicImage('saturn.svg')" alt="" />
        </transition>
      </v-col>

      <v-col
        class="justify-center"
        :class="isTablet ? '' : 'mt-10'"
        :cols="isTablet ? 'auto' : 12"
      >
        <transition name="slide-fade-left">
          <div v-show="inView" class="text">
            <h1>Alex <span v-if="!hideSensitiveData">Long</span></h1>
            <div>
              <h4>front end</h4>
              <h4 class="typewriter">software engineer</h4>
            </div>
          </div>
        </transition>
      </v-col>

      <v-col v-if="isTablet" cols="6">
        <transition name="slide-fade-right">
          <img v-show="inView" :src="dynamicImage('saturn.svg')" alt="" />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from "vue";
import { dynamicImage } from "../../shared/helpers/utils";

export default defineComponent({
  name: "Home",
  props: {
    hideSensitiveData: {
      type: Boolean,
      default: false,
    },
    inView: {
      type: Boolean,
      default: false,
    },
    windowWidth: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const isTablet = computed<boolean>(() => props.windowWidth >= 768);

    watch(
      () => props.inView,
      (val) => console.log(val)
    );

    return {
      isTablet,
      dynamicImage,
    };
  },
});
</script>

<style lang="scss">
.home-content {
  max-width: 1400px !important;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .text {
    max-width: 275px;
    margin: 0 auto;

    h1 {
      margin: 0;
      letter-spacing: 0.2rem;
    }

    h4 {
      margin: 0;
      letter-spacing: 0.2rem;
    }
  }

  @media (min-width: 550px) {
    width: 90% !important;
    margin: 0 auto;

    .text {
      max-width: 350px;

      .typewriter {
        max-width: 235px;
      }
    }

    img {
      max-width: 400px;
    }
  }

  @media (min-width: 769px) {
    img {
      max-width: 650px;
    }
  }

  @media (min-width: 1400px) {
    .text {
      max-width: none;

      h1 {
        font-size: 80px;
      }
    }
  }
}
</style>
