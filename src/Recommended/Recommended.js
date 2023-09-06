import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />        
          <Button onClickHandler={handleClick} value="Auideo" title="Auideo" />
          <Button onClickHandler={handleClick} value="Podcast" title="Podcast" />
          <Button onClickHandler={handleClick} value="Noise" title="Noise" />
          <Button onClickHandler={handleClick} value="Vocals" title="Vocals" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
