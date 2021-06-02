import { pages } from "../const";
import Container from "./container";

export default function Footer() {
  return (
    <footer style={{ fontSize: '15px', lineHeight: '1.857', padding: '40px 0', backgroundColor: "#3a3a3a ", color: 'white' }}>
      <Container >
        <div className="md:flex text-center text-prata justify-between space-y-3 md:space-y-0">
          <div >
            Copyright © 2021 <span >Meraki Wedding Planner</span>
          </div >
          <div className="px-3 flex justify-center flex-wrap">
            {
              pages.map(({ title, href }) => {
                return <a className="px-4 text-prata hover:text-primary" href={href}>{title}</a>
              })
            }
          </div>
        </div>
      </Container>
    </footer>
  )
}
