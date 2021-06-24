import classNames from "classnames";
import React from 'react';
export const Space = ({
  variant,
}) => {

  return <div className={classNames("block", {
    "h-3": variant === "small",
    "h-6": variant === "medium",
    "h-12": variant === "large",
  })} />;
};
export const space_template = {
  defaultItem: {
    variant: 'medium',
  },

  fields: [
    {
      name: 'variant',
      label: 'horizontal image',
      component: 'select',
      options: [{
        value: 'small',
        label: 'small',
      }, {
        value: 'medium',
        label: 'medium',
      }, {
        value: 'large',
        label: 'large',
      }]
    },

  ]
}