import { useSource } from "@providers/source";
import classNames from 'classnames';
import { cloneElement } from "react";

export const LG = ({ children }) => {
  const { get } = useSource();
  const element = children((path, fallbackValue) => get(`${path}.lg`, get(`${path}.xs`, fallbackValue)));
  return cloneElement(element, {
    ...element.props,
    className: classNames(element.className, "hidden lg:block")
  });
};
