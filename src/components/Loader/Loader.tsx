import { DNA } from "react-loader-spinner";
import { StyledLoaderWrapper } from "./StyledLoader";
export const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        overflow: "hidden",
      }}
    >
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
