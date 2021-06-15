import Container from "@components/container";
import classNames from 'classnames';

export const Block = ({ title, description, children, small = true }) => {
  return <Container>
    <div className={classNames('w-full flex flex-col items-center  mx-auto py-8 lg:py-14', small && "max-w-5xl")}>
      <h2 className="text-5xl font-kinfolk text-center">{title}</h2>
      <div className="mt-2 text-center">{description}</div>
      {children}
    </div>
  </Container>;
};
