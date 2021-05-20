//import Vue from 'vue';
//import { Context, Middleware } from '@nuxt/types';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

/*declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    layout? : string | ((ctx: Context) => string) | undefined,
    middleware?: Middleware | Middleware[];
  }
}*/

declare module 'vue-slick-carousel';


