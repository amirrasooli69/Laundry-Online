"use client";
import styles from "@/template/SignupPage.module.css";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import singup_pic from "@/image/signup.jpg";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    setloading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setloading(false);

    if (data.status === 201) {
      toast.success(data.message);
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };
  return (
    <div className={styles.form}>
      <h4> ورود:</h4>
      <form>
    {/* <Image src={singup_pic} width={200} height={200} alt="person" /> */}

        <label>ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit" onClick={signupHandler}>
            ورود
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟ <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
