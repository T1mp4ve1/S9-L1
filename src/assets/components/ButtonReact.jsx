const ButtonReact = (props) => {
  return (
    <>
    <button className={props.className}>
      {props.buttonContent}
    </button>
    </>
  );
};
export default ButtonReact;