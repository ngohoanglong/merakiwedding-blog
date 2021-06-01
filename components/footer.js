import Container from "./container";

export default function Footer() {
  return (
    <footer >
    <Container className="ast-small-footer footer-sml-layout-2">
      <div >
        <div >
          <div >
            <div className="ast-row ast-flex">
              <div >
                Copyright © 2021 <span >Meraki Wedding Planner</span>						</div>
              <div >
               					</div>
            </div> {/* .ast-row.ast-flex */}
          </div>{/* .ast-small-footer-wrap */}
        </div>{/* .ast-container */}
      </div>{/* .ast-footer-overlay */}
    </Container>{/* .ast-small-footer*/}
  </footer>
  )
}
