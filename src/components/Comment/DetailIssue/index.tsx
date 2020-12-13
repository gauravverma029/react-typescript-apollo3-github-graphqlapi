import React from "react";

type Props = {
  issueDetail: any;
};

const DetailIssue: React.FC<Props> = ({ issueDetail }) => {
  return (
    <article className="hover:bg-gray-200 group block cursor-pointer rounded-md border border-gray-300">
      <div className="flex bg-gray-700 text-lg font-semibold text-white p-4">
        {issueDetail?.title}
      </div>
      <div className="min-w-0 p-4 relative flex-auto  break-all">
        <div dangerouslySetInnerHTML={{ __html: issueDetail?.bodyHTML }} />
      </div>
    </article>
  );
};
export default DetailIssue;
