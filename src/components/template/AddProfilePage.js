"use client";
import TextInput from "@/module/TextInput";
import styles from "@/template/AddProfilePage.module.css";
import { useState } from "react";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler = ()=> {
    console.log(profileData)
  }
  return (
    <div>
      <h3>ثبت آگهی</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={true}
      />

      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfiledata={setProfileData}
        textarea={false}
      />

      <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
      <h3>------------------</h3>
      <h3>------------------</h3>

      <h3>------------------</h3>

    </div>
  );
}

export default AddProfilePage;
