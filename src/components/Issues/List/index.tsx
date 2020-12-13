import React from "react";
import Filters from "../Filters";

type Props = {
  children?: React.ReactNode;
  handleFilterStates: (props: FiterStateProps) => void;
};

const List: React.FC<Props> = ({ children, handleFilterStates }) => {
  return (
    <div className="w-full grid grid-cols-1 hover:bg-light-blue-500 rounded-md border border-gray-300">
      <div className="divide-y divide-gray-300">
        <Filters handleFilterStates={handleFilterStates} />
        {children}
      </div>
    </div>
  );
};
export default List;
