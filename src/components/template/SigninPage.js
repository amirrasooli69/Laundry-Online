"use client";
import styles from "@/template/SignupPage.module.css";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import singup_pic from "@/image/signup.jpg";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Loader from "@/module/Loader";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();

    setloading(true);
    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    });

    setloading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      // toast.success(res.message);
      router.push("/");
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
          <Loader />
        ) : (
          <button type="submit" onClick={signinHandler}>
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
