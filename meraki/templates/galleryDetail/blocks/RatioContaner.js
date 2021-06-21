
export const RatioContaner = ({ variant = 'verticle', ratio, children }) => {
  if (ratio) return <div className="relative">
    <div style={{ paddingTop: `${ratio * 100}%` }}>{children}</div>
  </div>
  switch (variant) {
    case 'horizontal':
      return <div className="relative">
        <div style={{ paddingTop: `${1440 / 2048 * 100}%` }}>{children}</div>
      </div>;
    case 'square':
      return <div className="relative">
        <div style={{ paddingTop: `100%` }}>{children}</div>
      </div>;
    case 'verticle':
    default:
      return <div className="relative">
        <div style={{ paddingTop: `${2048 / 1440 * 100}%` }}>{children}</div>
      </div>;
  }
  return null;
};

