import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">ফ্রিল্যান্সার মামুন</h2>
       
        <h4 className="location">এ ধরনের সার্ভিস পেতে আমাদের সাথে যোগাযোগ করুন</h4>
        <p className="location">ঠিকানা : মামুন রেকর্ডিং হাউস </p>
        <p className="location">নাগেশ্বরী কুড়িগ্রাম</p>
       
        

        <div className="recommended-flex">
          <Button
            onClickHandler={handleClick}
            value=""
            title="আমাদের সকল সার্ভিস সমূহ
"
          />
          <Button
            onClickHandler={handleClick}
            value="Auideo"
            title="বিজ্ঞাপন "
          />
          <Button
            onClickHandler={handleClick}
            value="Podcast"
            title=" ভয়েজ রেকডিং"
          />
          <Button
            onClickHandler={handleClick}
            value="Noise"
            title="মাইক ভাড়া"
          />
          <Button onClickHandler={handleClick} value="Vocals" title="আবৃত্তি" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
