import CategoryCard from "@/module/CategoryCard";
import styles from "@/template/HomePage.module.css";
import { FiCircle } from "react-icons/fi";
function HomePage() {
  const services = ["دفتر", "مغازه", "آپارتمان", "ویلا"];
  const cities = [
    "تهران",
    "اصفهان",
    "تبریز",
    "شیراز",
    "مشهد",
    "مازندران",
    "رشت",
    "زاهدان",
    "بندرعباس",
  ];
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و فروش ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
      </div>
      <div className={styles.city}>
        <h3>شهرهای پر بازدید</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
