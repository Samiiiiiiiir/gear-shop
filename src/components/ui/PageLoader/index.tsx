import { RotatingLines } from 'react-loader-spinner';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-49 flex h-full w-full items-center justify-center bg-black/20">
      <RotatingLines
        visible={true}
        width="100"
        strokeColor="#32bde8"
        strokeWidth="5"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};
