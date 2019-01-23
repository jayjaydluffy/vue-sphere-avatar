<template>
    <div :aria-label="name || initials" :class="sphereColorClass">
      <div class="sphere-avatar--inner" :style="innerStyle">
        <img :src="src" :alt="name" v-if="src" :style="imageStyle">
        <div v-else>
            <sphere-text :max="maxFontSize" :min="minFontSize">
                {{ sphereText }}
            </sphere-text>
        </div>
      </div>
    </div>
</template>
<script>
import SphereText from './SphereText.vue'
import tinycolor from 'tinycolor2'
import { getColorByString, getInitials } from '../shared/utilities.js'
export default {
    props: {
        src: {
            type: String,
            default: null
        },
        size: {
            type: Number,
            default: 50
        },
        name: String,
        initials: String,
        color: [String, Object],
        maxFontSize: {
            type: Number,
            default: 512
        },
        minFontSize: {
            type: Number,
            default: 16
        },
    },
    computed: {
        newSize: function () {
            return this.src ? this.size : this.size * 0.8;
        },
        newPadding: function () {
            return this.src ? this.size : this.size * 0.2;
        },
        background: function () {
            return this.color ? tinycolor(this.color) : tinycolor(getColorByString(this.name || this.initials));
        },
        innerStyle: function () {
            const size = this.newSize + 'px';
            return {
                lineHeight: size,
                textAlign: 'center',
                borderRadius: '100%',
                padding: this.src ? 0 : this.newPadding / 2 + 'px',
                boxSizing: 'content-box',
                width: size,
                maxWidth: size,
                height: size,
                maxHeight: size,
                backgroundColor: this.src ? 'none' : this.background
            }
        },
        imageStyle: function () {
            if (!this.src) {
                return;
            }
            const size = this.newSize + 'px';
            return {
                display: 'block',
                borderRadius: '100%',
                width: size,
                height: size,
            };
        },
        sphereText: function () {
            return this.initials || getInitials(this.name)
        },
        sphereColorClass: function () {
            return ` sphere-avatar sphere-avatar--${tinycolor(this.innerStyle.backgroundColor).isDark() ? 'dark' : 'light'}`
        }
    },
    components: {
        SphereText
    }
}
</script>
<style>
    .sphere-avatar--dark {
        color: #FFF;
    }
    .sphere-avatar--light {
        color: #2C3E50;
    }
</style>


