<template id="v-tabs">
  <div class="tabs" :class="cssClasses" :style="cssVars">
    <ul>
      <li :title="tab.name" v-for="tab of tabs" :key="tab.name">
        <label role="button" v-on:click="unselect($event, tab)">
          <input
            type="radio"
            :value="tab.value"
            v-model="value"
            v-on:input="$emit('input', tab.value)"
          />
          <span>{{ tab.name }}</span>
        </label>
      </li>
    </ul>
    <div class="slider">
      <div class="indicator"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: null,
    tabs: Array,
    allowUnselect: Boolean,
  },
  template: '#v-tabs',
  data() {
    return {
      lastValidIndex: -1,
      currentTab: 'feautures',
      items: [
        { name: 'Features', value: 'feautures' },
        { name: 'Delivery', value: 'delivery' },
        { name: 'Shipping', value: 'shipping' },
        { name: 'About', value: 'about' },
      ],
    };
  },
  computed: {
    activeIndex() {
      let index = this.tabs.findIndex((tab) => tab.value === this.value);
      // if (index !== -1) {
      //   this.lastValidIndex = index;
      // }
      return index;
    },
    cssClasses() {
      return {
        unselected: this.activeIndex === -1,
      };
    },
    cssVars() {
      return {
        '--tabs-count': this.tabs.length,
        '--tab-index': this.lastValidIndex,
      };
    },
  },
  methods: {
    unselect(e, tab) {
      if (!this.allowUnselect) return;
      if (tab.value === this.value) {
        e.preventDefault();
        this.$emit('input', null);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bourbon';

@import 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400';

/* colors */
$blue: #428bff;
$red: #ff4a53;
$dark: #333;

$accent: $blue;
$accent-inactive: desaturate($accent, 85%);
$secondary: $accent-inactive;

body {
  background-color: #fff;
}

.tabs {
  position: relative;
  padding: 5px;
  max-width: 500px;
  margin: 50px auto;
  border-radius: 5px;
  background: #f3f3f3;

  > ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    margin: 0;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    li {
      box-sizing: border-box;
      flex: 1;
      text-align: center;

      label {
        font-family: 'Montserrat';
        font-size: 18px;
        color: #a8a8a8;
        transition: all 0.3s ease-in-out;
        color: $secondary;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-touch-callout: none;
        @include user-select(none);

        input {
          display: none;
          &:checked ~ span {
            color: #428bff;
          }
        }

        &:hover,
        &:focus,
        &:active {
          outline: 0;
          color: #5a5a5a;
        }
      }
    }
  }

  > .slider {
    position: relative;
    z-index: 0;
    width: calc(100% / var(--tabs-count));
    transform: translateX(calc(100% * var(--tab-index)));
    transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
    > .indicator {
      max-width: 100%;
      margin: 0 auto;
      background: #fff;
      width: 100%;
      height: 40px;
      bottom: 0;
      position: absolute;
      z-index: -1;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 2px 7px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      transition: transform 0.3s;
    }
  }
  &.unselected > .slider {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
