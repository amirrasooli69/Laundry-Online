"use client";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import { useState } from "react";
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className={styles.form}>
      <h4>ثبت نام:</h4>
      <form>
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
        <label>تکرار رمز عبور:</label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <button type="submit">ثبت نام</button>
      </form>
      <p>حساب کاربری دارید؟ <Link href="/signin">ورود</Link></p>
    </div>
  );
}

export default SignupPage;
