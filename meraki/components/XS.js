import { useSource } from "@providers/source";
import classNames from 'classnames';
import { cloneElement } from "react";

export const XS = ({ children }) => {
  const { get } = useSource();
  const element = children((path, ...args) => get(`${path}.xs`, ...args));
  return cloneElement(element, {
    ...element.props,
    className: classNames(element.props.className, "lg:hidden")
  });
};
