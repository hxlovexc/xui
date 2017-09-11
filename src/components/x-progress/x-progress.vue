<template>
  <div
    :class="[ 'x-progress' + (circle ? '-circle-box' : '') ]"
  >
    <!--环形-->
    <div v-if="circle" class="x-progress-circle">
      <svg viewBox="0 0 100 100">
        <path
          d="M 50, 50 m 0, -47 a 47, 47 0 1 1 0, 94 a 47, 47 0 1 1 0, -94"
          stroke="#e4eaec"
          stroke-width="6"
          fill-opacity="0"
        ></path>
        <path
          d="M 50, 50 m 0, -47 a 47, 47 0 1 1 0, 94 a 47, 47 0 1 1 0, -94"
          :stroke="typesColor[type]"
          stroke-width="6"
          fill-opacity="0"
          :style="'stroke-dasharray:' + length + ', 295.31px;'"
        ></path>
      </svg>
      <!--text-box-->
      <div class="x-progress-circle-text">
        <span>
          <slot>
            <p class="x-progress-text">{{curPercentage}}%</p>
          </slot>
        </span>
      </div>
    </div>
    <div
      v-else
      class="x-progress-bar-box"
      :class="[
        'x-progress-' + type,
        'x-progress-' + size,
        {
          'x-radius': radius
        }
      ]"
    >
      <div
        class="x-progress-bar"
        v-if="curPercentage > 0"
        :style="{
          width: curPercentage + '%'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'default'
      },
      radius: {
        type: Boolean,
        default: false
      },
      percentage: {
        type: Number,
        default: 0
      },
      circle: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        typesColor: {
          primary: '#4399ff',
          success: '#46be8a',
          warning: '#f2a654',
          danger: '#f96868',
          dark: '#667180'
        }
      };
    },
    computed: {
      // 限制最大100
      curPercentage () {
        return this.percentage > 100 ? 100 : this.percentage;
      },
      length () {
        return (295.31 * (this.curPercentage / 100)) + 'px';
      }
    }
  };
</script>

