import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import styles from "@/template/DetailsPage.module.css";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

function DetailsPage({ data }) {
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <Title>توضیحات</Title>
        <p>{data.description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={data.amenities}/>
        <Title>قوانین</Title>
        <ItemList data={data.rules}/>
      </div>
      <div className={styles.sidebar}></div>
    </div>
  );
}

export default DetailsPage;
