interface Props {
  children: JSX.Element | JSX.Element[];
  isLoading: boolean;
  fallback: JSX.Element;
}

const LoadingContainer = ({ isLoading, fallback, children }: Props) => {
  if (isLoading) return fallback;
  return <>{children}</>;
};

export default LoadingContainer;
