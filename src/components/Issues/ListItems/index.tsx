import React from "react";
import formatDistance from "date-fns/formatDistance";
import { Link } from "react-router-dom";
import { SearchIssues_search_edges } from "../../../utils/types/SearchIssues";

type Props = {
  item: SearchIssues_search_edges | null;
  today: Date;
};

const ListItems: React.FC<Props> = ({ item, today }) => {
  const createdAt = formatDistance(new Date(item?.node?.createdAt), today, {
    addSuffix: true,
  });

  return (
    <div className="border-b-1 border-gray-400 hover:bg-gray-200 group block p-4 cursor-pointer">
      <Link
        to={`/${item?.node?.number}`}
        className="divide-y-2 divide-gray-400"
      >
        <div className="flex flex-col justify-between lg:space-x-32 md:flex-row md:space-x-4">
          <div className="flex-2">
            <div className="flex flex-col">
              <div className="text-md font-semibold text-black mb-0.5 break-all lg:text-md">
                {`${item?.node?.repository?.nameWithOwner} - ${item?.node?.title}`}
              </div>
              <div className="text-gray-400 font-light flex flex-wrap text-sm whitespace-pre truncate md:overflow-clip">
                {`#${item?.node?.number} ${createdAt}`}
              </div>
            </div>
          </div>

          <div className="flex flex-row py-2 lg:py-0.5">
            <div className="text-gray-600 p-2 mx-2 h-9 flex items-center justify-center bg-gray-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <div>{item?.node?.comments.totalCount}</div>
            </div>
            <div className="bg-gray-100 text-gray-600 w-20 p-2 mx-2 h-9 flex items-center justify-center rounded-lg">
              {item?.node?.state}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ListItems;
