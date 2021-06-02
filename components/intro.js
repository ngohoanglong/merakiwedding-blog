
export default function Intro() {
  return (
    <section style={{
      marginTop: 'calc(0px - var(--header-height))',
      height: 'calc(100vh)'
    }} className="relative  w-full">
      <div style={{ height: '100%' }} className='w-full relative bg-gray-100'>
        <img className="w-full h-full object-cover" src={"/intro.png"} />
      </div>
      {/* <div className=" absolute bottom-0 left-0 w-full">
        <Container>
          <div style={{ padding: '6vw' }} className=" bg-accent-1 font-light font-serif text-center text-xl md:text-2xl lg:text-3xl">
            <h4>Written by The Planners, this blog page is a reliable source that gives you helpful information for planning a wedding.</h4>
          </div>
        </Container>
      </div> */}
    </section>
  )
}
