import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <div>
    {/* <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
    <br /> */}

    <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" />
    </ReactTyped>
  </div>
);
export default MyComponent