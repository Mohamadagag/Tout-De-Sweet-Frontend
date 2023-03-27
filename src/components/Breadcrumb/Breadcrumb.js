import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, useNavigate } from "react-router-dom";
import "./Breadcrumb.css";
import axios from "axios";

const Breadcrumb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [name, setName] = useState("");

  const pathnames = pathname.split("/").filter(Boolean);

  useEffect(() => {
    getName();
  }, []);

  const getName = async (id) => {
    const res = await axios.get(
      `https://tout-de-sweet-backend.vercel.app/api/products/${id}`
    );
    try {
      setName(res.data.response.name);
    } catch (error) {
      console.log(error);
    }
  };

  const onlyLetters = (string) => {
    if (string.length < 9) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map((param, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          getName(param);

          return isLast ? (
            <Typography key={param}>
              {onlyLetters(param) ? param : name}
            </Typography>
          ) : (
            <Link key={param} onClick={() => navigate(routeTo)}>
              {param}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
