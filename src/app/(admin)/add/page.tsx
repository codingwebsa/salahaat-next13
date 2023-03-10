import { Metadata } from "next";
import { getSession } from "next-auth/react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Add = async () => {
  const session = await getSession();
  console.log(session);
  return <div>Add</div>;
};

export default Add;
