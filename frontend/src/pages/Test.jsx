import "./Test.css";
import CheckboxCard from "../components/CheckboxCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";

function Test() {
  const navigate = useNavigate();

  const [displayTest, setDisplayTest] = useState(false);
  const [testChoiceContainer, setTestChoiceContainer] = useState("block");

  function handleClickSms() {
    navigate("/test/sms/number=1");

    setDisplayTest(true);
    setTestChoiceContainer("none");
  }

  function handleClickPhone() {
    navigate("/test/telefon/number=1");

    setDisplayTest(true);
    setTestChoiceContainer("none");
  }
  return (
    <div id="test-container" className="primary-color">
      <Card
        variant="outlined"
        sx={{
          width: "500px",
          display: testChoiceContainer,
          justifyContent: "space-between",
          border: "1px solid blue",
        }}
      >
        <CardContent>
          <CardHeader
            sx={{ textAlign: "center" }}
            title="Test angående sms eller telefon?"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="contained"
              color="contrast"
              size="medium"
              sx={{
                ":hover": { bgcolor: "contrast.light" },
                fontWeight: 600,
                padding: "10px",
                flexGrow: "auto",
                minWidth: "125px",
              }}
              onClick={handleClickSms}
            >
              SMS
            </Button>
            <Button
              variant="contained"
              color="contrast"
              size="medium"
              sx={{
                ":hover": { bgcolor: "contrast.light" },
                fontWeight: 600,
                padding: "10px",
                flexGrow: "auto",
                minWidth: "125px",
              }}
              onClick={handleClickPhone}
            >
              Telefon
            </Button>
          </Box>
        </CardContent>
      </Card>

      {displayTest && <CheckboxCard />}
    </div>
  );
}
export default Test;
