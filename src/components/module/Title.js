import styles from "@/module/Title.module.css";

function Title({children}) {
    return (
        <div>
            <h3 className={styles.title}>{children}</h3>
        </div>
    );
}

export default Title;