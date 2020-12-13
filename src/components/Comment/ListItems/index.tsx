import React from "react";
import formatDistance from "date-fns/formatDistance";

import { Comments_repository_issue_comments_edges } from "../../../utils/types/Comments";

type Props = {
  item: Comments_repository_issue_comments_edges | null;
  today: Date;
};

const ListItems: React.FC<Props> = ({ item, today }) => {
  const createdAt = formatDistance(new Date(item?.node?.createdAt), today, {
    addSuffix: true,
  });

  return (
    <article className="hover:bg-gray-200 group block cursor-pointer rounded-md border border-gray-300">
      <div className="px-4 py-3 flex bg-gray-100 text-lg font-semibold text-black mb-0.5 break-all">
        {`${item?.node?.author?.login}  ${createdAt}`}
      </div>
      <div className="min-w-0 p-4 relative flex-auto  break-all">
        <div dangerouslySetInnerHTML={{ __html: item?.node?.bodyHTML }} />
      </div>
    </article>
  );
};
export default ListItems;
