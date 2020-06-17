'use strict';

import { reactive, computed } from '@vue/composition-api';

export const useBreakpoints = (context) => {
  const breakpoints = reactive({
    small: computed(() => context.root.$vuetify.breakpoint.smAndDown),
    large: computed(() => !context.root.$vuetify.breakpoint.smAndDown),
  });

  return {
    breakpoints,
  };
};
