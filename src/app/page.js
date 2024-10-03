import Image from "next/image";
import styles from '../styles/startbutton.module.css'
import CurtainButton from "@/components/curtainButton";

export default function Home() {
  const handleClick = () => {
    alert('Tombol diklik!');
  };
  return (
    <main >
     <CurtainButton/>
    </main>
  );
}
