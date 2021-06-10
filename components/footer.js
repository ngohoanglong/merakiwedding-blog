import Container from "./container";

export default function Footer() {
  return (
    <footer style={{ fontSize: '15px', lineHeight: '1.857', padding: '40px 0', }}>
      <Container >
        <div className="md:flex text-center justify-center space-y-3 md:space-y-0">
          <div >
            Copyright © 2021 <span >Meraki Wedding Planner</span>
          </div >
        </div>
      </Container>
    </footer>
  )
}
