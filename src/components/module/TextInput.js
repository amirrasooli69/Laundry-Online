import styles from "@/module/TextInput.module.css";
import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfiledata,
  textarea = false,
}) {
  const changeHnadler = (e) => {
    const { name, value } = e.target;
    setProfiledata({...profileData, [name]: p2e(value)})
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHnadler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHnadler}
        />
      )}
    </div>
  );
}

export default TextInput;
