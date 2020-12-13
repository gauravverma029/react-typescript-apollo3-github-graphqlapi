import React from "react";

const ErrorMessage: React.FC = () => {
  return (
    <div className="px-4 py-3 flex bg-gray-100">
      <div className="flex-auto flex space-x-6">
        <div className="flex items-center justify-center text-gray-400">
          Something Wrong with Github Graphql Api. Please Try After sometime.
        </div>
      </div>
    </div>
  );
};
export default ErrorMessage;
