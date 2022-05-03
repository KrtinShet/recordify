import React from "react";
import CodeEditor from "../../Components/CodeEditor";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();
  return (
    <div className="screen-center">
      <div className="editor-header">
        <h2>Code Snippet</h2>

        <Button
          onClick={() => {
            navigate("/record");
          }}
        >
          Record
        </Button>
      </div>
      <CodeEditor />
    </div>
  );
};

export default IndexPage;
