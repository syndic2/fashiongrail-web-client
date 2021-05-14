import { Plugin } from '@nuxt/types';
import { initializeAxios } from '~/utilities/api';

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor;
