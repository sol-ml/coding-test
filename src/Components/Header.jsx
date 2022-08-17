import { useNavigate } from "react-router-dom";
import Counter from "./Counter";

function Header() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const navigate = useNavigate();

  return (
    <div className="mt-2.5">
      <button onClick={() => navigate(-1)}>
        <img src="/vector.png" className="w-4" alt="vector.png" />
      </button>

      <div className="flex justify-between items-center my-10 text-white text-center px-8">
        <div className="block">
          <img
            src="/beginner_indicator.png"
            className="w-32"
            alt="beginner_indicator.png"
          />
          <span className="font-semibold text-3xl">Beginner</span>
        </div>
        <h1 className="font-bold text-4xl">Test de Nivelación</h1>
        <Counter expiryTimestamp={time} />
      </div>
    </div>
  );
}

export default Header;
