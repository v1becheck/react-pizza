import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== "") {
      setShowButton(true);
      setIsExiting(false);
    } else if (showButton) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShowButton(false);
        setIsExiting(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [username, showButton]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {showButton && (
        <div className={isExiting ? "button-exit" : "button-enter"}>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
