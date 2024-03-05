// pages/[...page].tsx
import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Medical from '../assets/medical-section.png';
import Shop from '../assets/shop.png';
import Image from "next/image";

const API_KEY = "c90ef157ba3440838c28bdc754799554"
// Replace with your Public API Key
builder.init(API_KEY);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const section = await builder
    .get("medical-pdp", {
      apiKey: API_KEY,
      // userAttributes: {
      //   urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      // },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      section: section || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};



// Define the Page component
export default function Page({ section }: { section: BuilderContent | null }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();


  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        Medical
      </Head>
      {/* Render the Builder page */}
      <Layout>
        <Image src={Shop} />
        <Image src={Medical} />
        <BuilderComponent model="medical-pdp" content={section || undefined} apiKey={API_KEY} />
      </Layout>
    </>
  );
}