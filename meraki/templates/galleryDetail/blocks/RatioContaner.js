
export const RatioContaner = ({ variant = 'verticle', ratio, children }) => {
  if (ratio) return <div className="relative grid" style={{ paddingBottom: `${ratio * 100}%` }}>{children}</div>
  switch (variant) {
    case 'horizontal':
      return <div className="relative grid" style={{ paddingBottom: `${1440 / 2048 * 100}%` }}>{children}</div>
    case 'square':
      return <div className="relative grid" style={{ paddingBottom: `100%` }}>{children}</div>
    case 'verticle':
    default:
      return <div className="relative grid" style={{ paddingBottom: `${2048 / 1440 * 100}%` }}>{children}</div>
  }
  return null;
};

