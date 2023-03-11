import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Form from "./Form";

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
  const data = await getServerSession(authOptions);
  console.log("🚀 ~ file: page.tsx:23 ~ Add ~ data:", data?.user?.email);

  return (
    <>
      <section>
        <Form />
      </section>
    </>
  );
};

export default Add;
