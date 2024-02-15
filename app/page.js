import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div class="wrapper">
        <Navbar/>
        <Main/>
        <Sidebar/>
        <Content cname='content1'/>
        <Content cname='content2'/>
        <Content cname='content3'/>
        <Content cname='content4'/>
        <Footer/>       
      </div>
    </>
  );
}
