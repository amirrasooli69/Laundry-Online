"use client";
import CustomDatePicker from "@/module/CustomDatePicker";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import styles from "@/template/AddProfilePage.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  const submitHandler = async () => {
    // console.log(profileData);
    const res = await fetch("/api/profile",{
      method: "POST",
      body: JSON.stringify(profileData),
      headers: {"Content-type": "application/json"}
    });
    const data = await res.json();
    if(data.error){
      toast.error(data.error)
    } else {
      toast.success(data.message);
    }
  };
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
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />

      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
        // calendarPosition="bottom-right"
      />
      <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
      <Toaster />
      <h3>------------------</h3>
      <h3>------------------</h3>

      <h3>------------------</h3>
    </div>
  );
}

export default AddProfilePage;
