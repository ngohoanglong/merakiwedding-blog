import { Layout1, layout1_template } from "./Layout1";
import { Layout10, layout10_template } from "./Layout10";
import { Layout11, layout11_template } from "./Layout11";
import { Layout12, layout12_template } from "./Layout12";
import { Layout13, layout13_template } from "./Layout13";
import { Layout14, layout14_template } from "./Layout14";
import { Layout15, layout15_template } from "./Layout15";
import { Layout16, layout16_template } from "./Layout16";
import { Layout17, layout17_template } from "./Layout17";
import { Layout18, layout18_template } from "./Layout18";
import { Layout19, layout19_template } from "./Layout19";
import { Layout2, layout2_template } from "./Layout2";
import { Layout20, layout20_template } from "./Layout20";
import { Layout21, layout21_template } from "./Layout21";
import { Layout22, layout22_template } from "./Layout22";
import { Layout23, layout23_template } from "./Layout23";
import { Layout24, layout24_template } from "./Layout24";
import { Layout25, layout25_template } from "./Layout25";
import { Layout26, layout26_template } from "./Layout26";
import { Layout3, layout3_template } from "./Layout3";
import { Layout4, layout4_template } from "./Layout4";
import { Layout5, layout5_template } from "./Layout5";
import { Layout6, layout6_template } from "./Layout6";
import { Layout7, layout7_template } from "./Layout7";
import { Layout8, layout8_template } from "./Layout8";
import { Layout9, layout9_template } from "./Layout9";
const createBlock = (title, children) => {
  return (
    <div className="py-12">
      <div className="font-garamond text-6xl py-12 px-6 text-center">
        {title}
      </div>
      {children}
    </div>

  )
}

const ShowCase = () => {
  return <div className="w-full space-y-12">
    {createBlock('Layout1', <Layout1 {...layout1_template.defaultItem}></Layout1>)}
    {createBlock('Layout2', <Layout2 {...layout2_template.defaultItem}></Layout2>)}
    {createBlock('Layout3', <Layout3 {...layout3_template.defaultItem}></Layout3>)}
    {createBlock('Layout4', <Layout4 {...layout4_template.defaultItem}></Layout4>)}
    {createBlock('Layout5', <Layout5 {...layout5_template.defaultItem}></Layout5>)}
    {createBlock('Layout6', <Layout6 {...layout6_template.defaultItem}></Layout6>)}
    {createBlock('Layout7', <Layout7 {...layout7_template.defaultItem}></Layout7>)}
    {createBlock('Layout8', <Layout8 {...layout8_template.defaultItem}></Layout8>)}
    {createBlock('Layout9', <Layout9 {...layout9_template.defaultItem}></Layout9>)}
    {createBlock('Layout10', <Layout10 {...layout10_template.defaultItem}></Layout10>)}
    {createBlock('Layout11', <Layout11 {...layout11_template.defaultItem}></Layout11>)}
    {createBlock('Layout12', <Layout12 {...layout12_template.defaultItem}></Layout12>)}
    {createBlock('Layout13', <Layout13 {...layout13_template.defaultItem}></Layout13>)}
    {createBlock('Layout14', <Layout14 {...layout14_template.defaultItem}></Layout14>)}
    {createBlock('Layout15', <Layout15 {...layout15_template.defaultItem}></Layout15>)}
    {createBlock('Layout16', <Layout16 {...layout16_template.defaultItem}></Layout16>)}
    {createBlock('Layout17', <Layout17 {...layout17_template.defaultItem}></Layout17>)}
    {createBlock('Layout18', <Layout18 {...layout18_template.defaultItem}></Layout18>)}
    {createBlock('Layout19', <Layout19 {...layout19_template.defaultItem}></Layout19>)}
    {createBlock('Layout20', <Layout20 {...layout20_template.defaultItem}></Layout20>)}
    {createBlock('Layout21', <Layout21 {...layout21_template.defaultItem}></Layout21>)}
    {createBlock('Layout22', <Layout22 {...layout22_template.defaultItem}></Layout22>)}
    {createBlock('Layout23', <Layout23 {...layout23_template.defaultItem}></Layout23>)}
    {createBlock('Layout24', <Layout24 {...layout24_template.defaultItem}></Layout24>)}
    {createBlock('Layout25', <Layout25 {...layout25_template.defaultItem}></Layout25>)}
    {createBlock('Layout26', <Layout26 {...layout26_template.defaultItem}></Layout26>)}
  </div>;
};
export default ShowCase