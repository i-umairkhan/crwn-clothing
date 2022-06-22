import "./Directory.Styles.scss";
import CategoryItem from "../Category-Item/Category-Item.Components";

const Directory = (props) => {
  const catagories = props.catagories;
  return (
    <div className="directory-container">
      {catagories.map((Category) => (
        <CategoryItem Category={Category} key={Category.id} />
      ))}
    </div>
  );
};

export default Directory;
