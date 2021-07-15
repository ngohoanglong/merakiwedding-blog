import { useSource } from "@providers/source";
import { NextSeo } from "next-seo";

const Seo = ({ title, path, ...props }) => {
  const { get } = useSource()
  return <NextSeo
    title={path ? get(path, title) : title}
    {...props}
  />;
};
export default Seo