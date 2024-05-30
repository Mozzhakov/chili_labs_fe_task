import { useRouter } from "next/navigation";
import { StyledBackButtonIcon, StyledBackButton } from "./StyledBackButton";

export const BackButton: React.FC = () => {
  const router = useRouter();
  return (
    <StyledBackButton onClick={() => router.back()}>
      <StyledBackButtonIcon />
    </StyledBackButton>
  );
};
