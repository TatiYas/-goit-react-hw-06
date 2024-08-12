import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="75"
      width="75"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}
export default Loader;