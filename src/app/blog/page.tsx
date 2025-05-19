import React from "react";

async function getBlogs() {
  const res = await fetch("http://localhost:1337/api/articulos/?populate=*", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 0879147bc3c7706f453420ba7d9df3e911948c613b54095df9520bf9504a911d1409077218a17d1eabc0a6572c8bce701d279ec652e7e0230a2c608adb7fbad3931977e6ef43f0d6f623aaefe4ec6e4cb7a6252f7589358f07dd4418a71ed0754b846558fc466683ce504eaa4c6baf7759999208e3f1bac708625502cccfbe17",
    },
  });

  if (!res.ok) {
    console.log("Error fetching blogs:", res);
  }
  return res.json();
}

export default async function Blog() {
  const blogsData = await getBlogs();
  return <div>{JSON.stringify(blogsData)}</div>;
}
