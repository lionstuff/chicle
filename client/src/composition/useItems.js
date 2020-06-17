'use strict';

import { ref, computed, reactive } from '@vue/composition-api';

import apiVersions from '@/api';
const api = apiVersions['v0.1'];

export const useItems = () => {
  const comments = ref({});
  const coords = computed(() => [ `5${Math.round(Math.random() * 1e1)}`, `4${Math.round(Math.random() * 1e1)}`]);
  const currency = computed(() => `руб`);
  const info = ref({});

  const getComments = async (id) => { // v2
    const responce = await api.get(`/posts/${id <= 100 ? id : 100}/comments`);
    comments.value = responce.data;
  };

  const getInfo = async (id) => { // v2
    const responce = await api.get(`/posts/${id <= 100 ? id : 100}`);
    info.value = responce.data;
  };

  const priceOld = computed(() => (Math.round(Math.random() * 1e3) + Math.random() * 1).toFixed(2));

  const price = reactive({
    old: priceOld.value,
    new: computed(() => (priceOld.value - Math.floor(Math.random() * `1e${(priceOld.value.split('.')[0].length - 1)}`)).toFixed(2)),
  });

  const hasGift = computed(() => Math.random() > 0.62);
  const hasSale = computed(() => price.new !== price.old);

  const getItemProps = (id) => {
    if (!Object.keys(info.value).length && info.value.id !== id) {
      getInfo(id);
      getComments(id);
    }

    return {
      comments: comments.value,
      coords: coords.value,
      currency: currency.value,
      hasGift: hasGift.value,
      hasSale: hasSale.value,
      id,
      info: info.value,
      price,
    };
  };

  return {
    getItemProps,
  };
};
