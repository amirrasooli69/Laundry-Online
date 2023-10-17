import Link from "next/link";
import styles from "@/module/Sidebar.module.css";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";
function Sidebar() {

  return (
    <div className={styles.container}>
      <p>
        <HiFilter /> دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>

      {Object.keys(categories).map((i, index) => (
        <p key={index}>
          <Link
            href={{
              pathname: "/buy-residential",
              query: { category: i },
            }}
          >
            {categories[i]}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Sidebar;
