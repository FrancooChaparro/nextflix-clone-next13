import { Footer } from "@/components/Footer";
import styles from "./page.module.css";
import { Navbar } from "@/components/Nav";
import Banner from "@/components/Banner";
import { ContainerLands } from "@/components/ContainerLands";

export default function Home() {
 
  
  return (
    <>
      <Navbar />
      <Banner />
      <ContainerLands />
      <br /><br /><br /> <br />
      <br /><br /><br />
      <Footer />
    </>
  );
}
