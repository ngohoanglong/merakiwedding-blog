export default function Button({ children, reverse, ...rest }) {
  if (reverse) {
    return <button className="px-2 py-1 bg-white text-primary font-sweetsans text-sm uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out" {...rest}>
      {children}
    </button>
  }
  return (
    <button className="px-2 py-1 bg-primary text-white font-sweetsans text-sm uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out" {...rest}>
      {children}
    </button>
  )
}
