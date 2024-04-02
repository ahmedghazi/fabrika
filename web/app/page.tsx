import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getHome, homeQuery } from "./utils/sanity-queries";
import { getClient } from "./utils/sanity-client";
import { Home } from "./types/schema";
import website from "./config/website";
import ContentHome from "./components/ContentHome";

export const revalidate = 3600; // revalidate every hour
export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getHome();
  return {
    title: `${data?.seo?.metaTitle || data?.title || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const Home: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const { isEnabled: preview } = draftMode();
  let data: Home | any = null;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      homeQuery,
      params
    );
  } else {
    data = await getHome();
  }

  if (!data) return <div>please edit page</div>;
  return (
    <div className='template template--home' data-template='home'>
      <ContentHome input={data} />
    </div>
  );
};

export default Home;
