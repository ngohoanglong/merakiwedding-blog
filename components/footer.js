import { useSource } from "@providers/source";
import { Link } from "meraki/components/Link";
import Button from "./button";
import Container from "./container";

export default function Footer() {
  const { get } = useSource()
  return (
    <footer className='space-y-6 py-12' style={{ fontSize: '15px', lineHeight: '1.857', background: "#fdf6f0" }}>
      <div className="px-12 w-full flex justify-center space-x-6 pt-6 lg:pt-0">
        <a target="_blank" href={get('app.data.socials.facebook')} title="facebook" className="text-5xl hover:shadow-lg rounded-full" rel="noreferrer">
          <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.66 85.66" style={{ color: 'white', fill: 'currentColor' }}><g id="About"><path className="cls-1" d="M85.66,42.83A42.83,42.83,0,1,0,36.14,85.14V55.21H25.26V42.83H36.14V33.39c0-10.73,6.39-16.66,16.17-16.66a65.58,65.58,0,0,1,9.59.84V28.11H56.5c-5.32,0-7,3.3-7,6.69v8H61.4L59.5,55.21h-10V85.14A42.83,42.83,0,0,0,85.66,42.83Z" style={{ fill: 'gray' }} /><path className="cls-2" d="M59.5,55.21l1.9-12.38H49.52v-8c0-3.39,1.66-6.69,7-6.69h5.4V17.57a65.58,65.58,0,0,0-9.59-.84c-9.78,0-16.17,5.93-16.17,16.66v9.44H25.26V55.21H36.14V85.14a43.29,43.29,0,0,0,13.38,0V55.21Z" /></g></svg>
        </a>
        <a target="_blank" href={get('app.data.socials.pinterest')} title="pinterest" className="text-5xl hover:shadow-lg rounded-full" rel="noreferrer">
          <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.66 85.66" style={{ color: 'white' }}><title>web-icon-socialmedia</title><g id="About"><path className="cls-1" d="M42.83,0A42.82,42.82,0,0,0,25.35,81.91c-.05-1.21-.1-2.41-.06-3.62.14-4.16.66-5.6,6-28.18a1.52,1.52,0,0,0-.12-.94,15.92,15.92,0,0,1-.42-10.55c2.43-7.7,11.17-8.29,12.69-1.94.94,3.93-1.55,9.08-3.45,16.68-1.59,6.27,5.8,10.73,12.11,6.15C57.94,55.29,60.2,45.17,59.77,38c-.85-14.3-16.53-17.4-26.48-12.79-11.41,5.27-14,19.41-8.85,25.87.65.83,1.16,1.33.94,2.16-.33,1.3-.62,2.6-1,3.89a1.38,1.38,0,0,1-2,.91,11.7,11.7,0,0,1-4.77-3.57c-4.37-5.42-5.62-16.13.16-25.2,6.41-10,18.32-14.11,29.2-12.88,13,1.48,21.21,10.36,22.75,20.43.7,4.59.2,15.91-6.25,23.9-7.41,9.19-19.42,9.8-25,4.16-.43-.43-.77-.94-1.19-1.45l-.16.56c-2.66,10.42-3,12.74-5.69,17.58-.42.74-.89,1.45-1.34,2.17A42.83,42.83,0,1,0,42.83,0Z" style={{ fill: 'gray' }} /><path className="cls-2" d="M37.15,64l.16-.56c.42.51.76,1,1.19,1.45,5.54,5.64,17.55,5,25-4.16,6.45-8,6.95-19.31,6.25-23.9C68.17,26.75,60,17.87,47,16.39c-10.88-1.23-22.79,2.84-29.2,12.88-5.78,9.07-4.53,19.78-.16,25.2A11.7,11.7,0,0,0,22.37,58a1.38,1.38,0,0,0,2-.91c.36-1.29.65-2.59,1-3.89.22-.83-.29-1.33-.94-2.16-5.15-6.46-2.56-20.6,8.85-25.87C43.24,20.6,58.92,23.7,59.77,38c.43,7.17-1.83,17.29-7.65,21.51-6.31,4.58-13.7.12-12.11-6.15,1.9-7.6,4.39-12.75,3.45-16.68-1.52-6.35-10.26-5.76-12.69,1.94a15.92,15.92,0,0,0,.42,10.55,1.52,1.52,0,0,1,.12.94c-5.36,22.58-5.88,24-6,28.18,0,1.21,0,2.41.06,3.62a43.48,43.48,0,0,0,4.77,1.83c.45-.72.92-1.43,1.34-2.17C34.19,76.73,34.49,74.41,37.15,64Z" style={{ fill: 'currentColor' }} /></g></svg>
        </a>
        <a target="_blank" href={get('app.data.socials.instagram')} title="instagram" className="text-5xl hover:shadow-lg rounded-full" rel="noreferrer">
          <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.66 85.66" style={{ color: 'white', fill: 'currentColor' }}><title>web-icon-socialmedia</title><g id="About"><circle className="cls-1" cx="42.83" cy="42.83" r="42.83" style={{ fill: 'gray' }} /><path className="cls-2" d="M56.12,26.63a2.95,2.95,0,1,0,3,2.94A2.94,2.94,0,0,0,56.12,26.63Z" /><path className="cls-2" d="M43,30.4A12.37,12.37,0,1,0,55.4,42.77,12.39,12.39,0,0,0,43,30.4Zm0,20.29A7.92,7.92,0,1,1,51,42.77,7.93,7.93,0,0,1,43,50.69Z" /><path className="cls-2" d="M52.85,67.88H32.8A15.11,15.11,0,0,1,17.72,52.79v-20A15.1,15.1,0,0,1,32.8,17.66H52.85A15.11,15.11,0,0,1,67.94,32.74v20A15.11,15.11,0,0,1,52.85,67.88ZM32.8,22.39A10.37,10.37,0,0,0,22.44,32.74v20A10.37,10.37,0,0,0,32.8,63.15H52.85A10.36,10.36,0,0,0,63.21,52.79v-20A10.36,10.36,0,0,0,52.85,22.39Z" /></g></svg>
        </a>
      </div>
      <div className="text-center leading-relaxed lg:hidden ">
        <div className="uppercase">{get('app.data.name', 'Meraki Wedding Planner')}</div>
        <div className="">{get('app.data.address', '353/2 Nguyen Trai, District 1, HCMC')}</div>
      </div>
      <div className="flex justify-center lg:hidden py-6">
        <Link href="/contact">
          <Button style={{ padding: "0 6px" }} size="large">Contact us</Button>
        </Link>
      </div>
      <div className="h-6 lg:hidden" />
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
