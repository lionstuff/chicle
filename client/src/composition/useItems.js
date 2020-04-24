'use strict';

import { ref, computed, reactive } from '@vue/composition-api';

export const useItems = () => {
  const coords = computed(() => [Math.random() * 1e2, Math.random() * 1e2]);
  const currency = computed(() => `руб`);

  const description = ref({});

  const getDescription = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id <= 100 ? id : 100}`)
      .then(res => res.json())
      .then(data => {
        description.value = data;
      });
  };

  const hasGift = computed(() => Math.random() > 0.62);

  const priceOld = computed(() => (Math.round(Math.random() * 1e3) + Math.random() * 1).toFixed(2));

  const price = reactive({
    old: priceOld.value,
    new: computed(() => (priceOld.value - Math.floor(Math.random() * `1e${(priceOld.value.split('.')[0].length - 1)}`)).toFixed(2)),
  });

  const getItemProps = (id) => {
    if (!Object.keys(description.value).length || description.value.id !== id) {
      getDescription(id);
    }

    return {
      coords: coords.value,
      currency: currency.value,
      description: description.value,
      hasGift: hasGift.value,
      id,
      price,
    };
  };

  return {
    getItemProps,
  };
};
