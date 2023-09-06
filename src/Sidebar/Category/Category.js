import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">সার্ভিস সমূহ
</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Auideo"
          title="Auideo"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Noise"
          title="Noise"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Vocals"
          title="Vocals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Podcast"
          title="Podcast"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
