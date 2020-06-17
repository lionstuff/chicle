'use strict';

export const useFocus = (context) => {
  const focus = (item) => {
    context.refs[item].focus();
  };

  return {
    focus,
  };
};
