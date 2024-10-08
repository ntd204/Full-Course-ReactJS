import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";
import { PostContentButtons } from "./PostContentButtons";

export function PostContent({ data }) {
  const userContextData = useContext(UserContext);
  return (
    <div>
      <div>
        <span>PostContent</span>
      </div>
      <PostContentButtons />
      {userContextData.email}
    </div>
  );
}
