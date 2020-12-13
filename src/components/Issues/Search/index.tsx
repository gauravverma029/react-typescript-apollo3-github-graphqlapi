import React from "react";

type Props = {
  handleFilterStates: (props: FiterStateProps) => void;
};

const Search: React.FC<Props> = ({ handleFilterStates }) => {
  const handleInputChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (event.key === "Enter") {
      let target = event.target as HTMLInputElement;
      handleFilterStates({ type: "searchString", value: target.value });
    }
  };

  return (
    <div className="p-4">
      <form
        data-testid="form"
        className="relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <svg
          id="svg"
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search all Issues"
          className="px-4 border-2 rounded-md border-gray-600 focus:outline-none py-2 pl-10 w-full"
          onKeyDown={handleInputChange}
        />
      </form>
    </div>
  );
};
export default Search;
