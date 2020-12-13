import React from "react";

type Props = {
  onClickLoadMore: () => void;
};

const Pagination: React.FC<Props> = ({ onClickLoadMore }) => {
  return (
    <div className="w/3 flex m-auto justify-center py-4">
      <div
        className="text-violet-700 text-base font-semibold px-6 py-2 border-2 border-gray-500 rounded-lg cursor-pointer hover:bg-gray-200"
        onClick={onClickLoadMore}
      >
        Load More
      </div>
    </div>
  );
};
export default Pagination;
