import { Link } from "react-router-dom";
import { Paragraph, Span } from "../../components";
import { SignInButton } from "@clerk/clerk-react";
import OauthPopup from "react-oauth-popup";
import { useEffect, useState } from "react";
import {
  CLIENT_SECRET,
  REDIRECT_URI,
  YANDEX_CLIENT_ID,
} from "../../utils/constants";
import axios from "axios";

interface IRegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

const RegistrationInfo = ({
  linkText,
  hasAccountText,
  authWithText,
  navigatePath,
}: IRegistrationInfo) => {
  // const YANDEX_AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  // const handleLogin = () => {
  //   window.location.href = YANDEX_AUTH_URL;
  // };
  // const [token, setToken] = useState<string | null>(null);

  // useEffect(() => {
  //   console.log("token", token);
  // }, [token]);

  // const handleCode = async (code: string) => {
  //   try {
  //     const response = await axios.post(
  //       "https://oauth.yandex.ru/token",
  //       {
  //         grant_type: "authorization_code",
  //         code,
  //         client_id: YANDEX_CLIENT_ID,
  //         client_secret: CLIENT_SECRET,
  //         redirect_uri: REDIRECT_URI,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //       }
  //     );
  //     setToken(response.data.access_token);
  //   } catch (error) {
  //     console.error("Ошибка при получении токена:", error);
  //   }
  // };

  // const handleClose = () => console.log("Окно авторизации закрыто");

  return (
    <div className="registration">
      <Span>
        {hasAccountText} <Link to={navigatePath}>{linkText}</Link>
      </Span>
      <Paragraph>{authWithText}</Paragraph>
      <div className="icons-wrapper">
        <SignInButton
          children={
            <Link className="reg__link google-link" to="/">
              <img src="./img/icons/google.svg" alt="Google" />
            </Link>
          }
        />
        {/* <Link className="reg__link yandex-link" to="#" onClick={handleLogin}>
          <img src="./img/icons/yandex.svg" alt=".ru" />
        </Link> */}
        {/* <OauthPopup
          url={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}
          onCode={handleCode}
          onClose={handleClose}
        >
         
          <Link className="reg__link yandex-link" to="#">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </Link>
        </OauthPopup> */}
      </div>
    </div>
  );
};

export default RegistrationInfo;
