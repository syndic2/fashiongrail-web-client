import Vue from 'vue';
import { thousandSeparators } from '../utilities/helpers';

declare module 'vue/types/vue' {
  interface Vue {
    $thousandSeparators(number: number): string
  }
}

Vue.prototype.$thousandSeparators = thousandSeparators;
