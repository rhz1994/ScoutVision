import "./Test.css";
import QuestionCard from "../components/QuestionCard";
import CheckboxCard from "../components/CheckboxCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ResultContext } from "../contexts/ResultContext";

function Test() {
  const { pathname } = useLocation();

  const { data, isPending, error } = useQuery({
    queryKey: ["questions"],
    staleTime: 1000 * 60 * 30,
    queryFn: () => fetch("/api/testQuestion").then((r) => r.json()),
  });

  const questionNumber = pathname.split("=")[1] - 1;

  return (
    <div id="test-container" className="primary-color">
      {isPending && (
        <CircularProgress color="contrast" thickness={7} size={75} />
      )}
      {error && <span>Något gick fel med att hämta datan.</span>}

      {data && (
        <CheckboxCard
          key={data[questionNumber].id}
          question={data[questionNumber].question}
          id={data[questionNumber].id}
        />
      )}
    </div>
  );
}
export default Test;
