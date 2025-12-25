import "../global.css";

function PrimaryBtn(props) {
  return (
    <>
      <div
        className="px-6 py-2 rounded-xl hover:cursor-pointer hover:opacity-50 hover:transition-all hover:ease-in-out hover:duration-300"
        style={{ backgroundColor: props.colour }}
      >
        <h4 className="text-white">{props.btnname}</h4>
      </div>
    </>
  );
}

export default PrimaryBtn;
