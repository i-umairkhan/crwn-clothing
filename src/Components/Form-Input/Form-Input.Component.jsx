import "./Form-Input.Styles.scss";

const FormInput = ({ lable, ...otherprops }) => {
  return (
    <div className="group">
      <input {...otherprops} className="form-input" />
      {lable && (
        <label
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {lable}
        </label>
      )}
    </div>
  );
};

export default FormInput;
