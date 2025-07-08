import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
// manage the state of data using useState hook of form data
  const [formData, setFormData] = useState({
    name: "",
  email: "",
   course: "web-development",
  });    

// handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can add logic to send formData to a server or process it further
    setFormData({
      name: "",
      email: "",
      course: "web-development",    
        
    });
  };    

    
  useEffect(() => {
    let fetcthData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let l = await response.json();
        console.log(l);
        setData(l);
      } catch (e) {
        console.log(e);
      }
    };
    fetcthData();
  }, []);
  return (
    <>
      <div>
        <h2>Say hi Rahul !</h2>
        {/* write code to show data inside   */}
        <div className="data-container">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="data-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )
          }
          </div>
{/* create form take data through user for admission  */}
        <form className="admission-form">
          <h2>Admission Form</h2>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Course:
            <select name="course" required>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="graphic-design">Graphic Design</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
