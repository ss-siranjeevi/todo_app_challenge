import { useRouter } from "next/router";
import { useState } from "react";
import { Button, TextField, Typography } from "rmwc";
import { AuthenticationService } from "../api/auth.service";
import "../styles/login.module.css";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(false);
  const [pwdError, setPwdError] = useState<boolean>(false);

  const [loginErr, setLoginErr] = useState<string>("");

  const onLogin = () => {
    if (!email && !password) {
      setEmailError(true);
      setPwdError(true);
    } else if (!email) {
      setEmailError(true);
    } else if (!password) {
      setPwdError(true);
    } else {
      login();
    }
  };

  const login = async () => {
    AuthenticationService.signin(
      email,
      password,
      (res: any) => {
        if (res) {
          console.log(res);
          if (res?.user?.uid) {
            localStorage.setItem("userId", res.user.uid);
            router.push("/home");
          }
        }
      },
      (err: Error) => {
        setLoginErr("Invalid Email/Password!");
        console.log(err);
      }
    );
  };

  const onInputChange = (value: string, key: string) => {
    switch (key) {
      case "EMAIL":
        if (emailError) {
          setEmailError(false);
        }
        setEmail(value);
        break;

      case "PASSWORD":
        if (pwdError) {
          setPwdError(false);
        }
        setPassword(value);
        break;
    }
  };

  const getErrorText = () => {
    if (emailError && pwdError) {
      return "Email/Password cannot be empty!";
    }

    if (emailError) {
      return "Email cannot be empty!";
    }

    if (pwdError) {
      return "Password cannot be empty!";
    }

    return loginErr || "";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "25vh 0",
          padding: "70px",
          border: "1px solid #6200EE",
          boxShadow: "10px",
          borderRadius: "20px",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <Typography style={{ color: "#6200EE" }} use="headline4">
            Welcome to Todo-App
          </Typography>
        </div>
        <div style={{ margin: "22px 5px" }}>
          <TextField
            invalid={emailError}
            label="Email Address"
            outlined
            style={{ width: "20vw", height: "40px" }}
            onChange={(e: any) => onInputChange(e.target.value, "EMAIL")}
          />
        </div>
        <div style={{ margin: "28px 5px", marginBottom: "0" }}>
          <TextField
            invalid={pwdError}
            label="Password"
            type="password"
            outlined
            style={{ width: "20vw", height: "40px" }}
            onChange={(e: any) => onInputChange(e.target.value, "PASSWORD")}
          />
        </div>
        {
          <Typography
            use="caption"
            style={{ color: "#FF0000", marginLeft: "10px" }}
          >
            {getErrorText()}
          </Typography>
        }
        <div
          style={{
            marginTop: emailError || pwdError ? "10px" : "0",
            marginRight: "15px",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <Button raised onClick={() => onLogin()}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
