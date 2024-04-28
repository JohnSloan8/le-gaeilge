interface LoadingSpinnerProps {
  size?: string;
  color?: string;
}

const LoadingSpinner = ({
  size = "large",
  color = "light",
}: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className={`animate-spin rounded-full border-t-2 border-r-2 ${size === "large" ? "spinner-large" : "spinner-small"} ${color === "light" ? "spinner-light" : "spinner-dark"}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
