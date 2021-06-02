
export default function Intro() {
  const text = "we are here not only for just stories and photos but also useful information that you might need for the big day"
  return (
    <>
      <section style={{
        marginTop: 'calc(0px - var(--header-height))',
      }} className="relative hidden md:block  w-full">
        <div style={{ width: '100%', paddingTop: `${737 / 1439 * 100}%` }}></div>
        <div className='w-full absolute inset-0 bg-gray-100'>
          <img style={{ objectPosition: 'bottom' }} className="w-full h-full object-cover" src={"/intro-web.png"} />
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 p-12">
          <Container >
            <div className="space-y-6  text-white">
              <div style={{ fontWeight: 100 }} className="text-center text-prata max-w-md mx-auto text-6xl font-bold" >Blog</div>
              <div className="text-center max-w-md mx-auto text-roboto font-light">{text}</div>
            </div>
          </Container>
        </div> */}
      </section>
      <section style={{
        marginTop: 'calc(0px - var(--header-height))',
      }} className="relative block md:hidden w-full">
        <div style={{ width: '100%', paddingTop: `${800 / 600 * 100}%` }}></div>
        <div className='w-full absolute inset-0 bg-gray-100'>
          <img style={{ objectPosition: 'bottom' }} className="w-full h-full object-cover" src={"/intro.png"} />
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 p-12">
          <Container >
            <div className="space-y-6  text-white">
              <div style={{ fontWeight: 100 }} className="text-center text-prata max-w-md mx-auto text-6xl font-bold" >Blog</div>
              <div className="text-center max-w-md mx-auto text-roboto font-light">{text}</div>
            </div>
          </Container>
        </div> */}
      </section>
    </>
  )
}
