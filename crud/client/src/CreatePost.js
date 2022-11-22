 import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function CreatePost() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post("/create", post)
      .then((res) => console.log("oh god"))
      .catch((err) => console.log(err));

    navigate("posts");
  };

  return (
    <div style={{ textAlign: "center", width: "90%", margin: "auto auto" }}>
      {
          isAuthenticated&&<>
          <h1>Create post page</h1>
           <h2>
            Welcome {user.name}
           </h2>
          </>
      }
   
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            value={post.title}
            onChange={handleChange}
            style={{ marginBottom: "1rem" }}
            placeholder="title"
          />
          <Form.Control
            onChange={handleChange}
            name="description"
            value={post.description}
            style={{ marginBottom: "1rem" }}
            placeholder="description"
          />
        </Form.Group>
        <Button
          onClick={createPost}
          variant="outline-success"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          CREATE POST
        </Button>
      </Form>
      <Button
        onClick={() => navigate("posts")}
        variant="outline-success"
        style={{ width: "100%" }}
      >
        ALL POSTS
      </Button>
    </div>
  );
}

export default CreatePost;
