import React from "react";

async function getCountry(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/all?filedlsname=${name}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Page = ({ params }: { params: { country: string } }) => {
  return <div>{params.country}</div>;
};

export default Page;
