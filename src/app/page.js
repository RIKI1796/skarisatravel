import Image from "next/image";
import Navbar from "../components/navbar";
import Body from "../components/body";
import Wisata from "../components/wisata";

export default function Home() {
  return (
    <>
      <Navbar />
      <Body />
      <Wisata />
    </>
  );
}
