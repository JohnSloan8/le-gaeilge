interface OverlayProps {
  children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return <div className="absolute h-screen w-screen bg-primary-400"></div>;
};

export default Overlay;
