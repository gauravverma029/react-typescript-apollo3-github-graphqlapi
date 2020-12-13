import React, { useState } from "react";

type Props = {
  handleFilterStates: (props: FiterStateProps) => void;
};

const Filters: React.FC<Props> = ({ handleFilterStates }) => {
  const [isActive, setIsActive] = useState("");

  const onSelectFilter = ({ type, value }: FiterStateProps) => {
    handleFilterStates({ type, value });
    setIsActive(value);
  };

  return (
    <div className="px-4 py-3 flex bg-gray-100">
      <div className="flex-auto flex space-x-6">
        <div
          className={`flex items-center justify-center  cursor-pointer ${
            isActive === "" ? "text-gray-400" : "text-gray-600"
          }`}
          onClick={() => onSelectFilter({ type: "state", value: "" })}
        >
          All
        </div>
        <div
          className={`flex items-center justify-center cursor-pointer  ${
            isActive === "is:open" ? "text-gray-400" : "text-gray-600"
          }`}
          onClick={() => onSelectFilter({ type: "state", value: "is:open" })}
        >
          Open
        </div>
        <div
          className={`flex items-center justify-center cursor-pointer ${
            isActive === "is:closed" ? "text-gray-400" : "text-gray-600"
          }`}
          onClick={() => onSelectFilter({ type: "state", value: "is:closed" })}
        >
          Closed
        </div>
      </div>
    </div>
  );
};
export default Filters;
