
import classnames from 'classnames'
export default function Button({ children, size = 'medium', reverse, className, ...rest }) {
  const sizeClassNames = classnames({
    ['px-2 py-1 ']: size === 'medium',
    ['px-6 pt-1 py-1']: size === 'large',
    ['text-xs']: !size,
  })
  if (reverse) {
    return <button className={classnames(sizeClassNames, "bg-white text-primary font-sweetsans uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out", className)} {...rest}>
      {children}
    </button>
  }
  return (
    <button className={classnames(sizeClassNames, "bg-primary text-white font-sweetsans uppercase hover:bg-opacity-70 focus:ring focus:outline-none ring-element-4 ring-offset-2 transition-all duration-300 ease-in-out", className)} {...rest}>
      {children}
    </button>
  )
}
