export default function Container({ children, ...props }) {
  return <div className="px-6 lg:px-12 xl:px-24 w-full mx-auto max-w-screen-2xl" {...props}>{children}</div>
}
