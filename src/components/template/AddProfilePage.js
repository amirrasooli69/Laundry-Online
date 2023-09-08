"use client";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
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
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities"/>
      <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules"/>

      <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
      <h3>------------------</h3>
      <h3>------------------</h3>

      <h3>------------------</h3>

    </div>
  );
}

export default AddProfilePage;
