
import classnames from 'classnames'
export default function Button({ children, size, reverse, ...rest }) {
  const sizeClassNames = classnames({
    ['px-6 pt-2 py-1']: size === 'large',
    ['text-xs']: !size
  })
  if (reverse) {
    return <button className={classnames(sizeClassNames, "px-2 py-1  bg-white text-primary font-sweetsans uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out")} {...rest}>
      {children}
    </button>
  }
  return (
    <button className={classnames(sizeClassNames, "px-2  py-1  bg-primary text-white font-sweetsans uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out")} {...rest}>
      {children}
    </button>
  )
}
