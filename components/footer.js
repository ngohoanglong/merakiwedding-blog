import Container from "./container";

export default function Footer() {
  return (
    <footer style={{ fontSize: '15px', lineHeight: '1.857', padding: '40px 0', backgroundColor: "#3a3a3a ", color: 'white' }}>
      <Container className="ast-small-footer footer-sml-layout-2">
        <div >
          Copyright © 2021 <span >Meraki Wedding Planner</span>
        </div >
      </Container>
    </footer>
  )
}
