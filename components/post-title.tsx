import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="max-w-2xl mx-auto text-4xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-3">
      {children}
    </h1>
  );
};

export default PostTitle;
