import { useRouter } from "next/router";
import { useState } from "react";
import {
  Menu,
  MenuItem,
  MenuSurfaceAnchor,
  TopAppBar,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from "rmwc";
import { AuthenticationService } from "../api/auth.service";

const AppBar = () => {
  const [showMenu, setMenu] = useState<boolean>(false);

  const router = useRouter();

  const onLogout = () => {
    signout();
  };

  const signout = () => {
    AuthenticationService.signout(
      (res: any) => {
        if (window) {
          window.localStorage.clear();
        }
        router.push("/");
      },
      (err: Error) => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>Todo App</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem
              icon="S"
              onClick={() => setMenu(!showMenu)}
            />
            {showMenu && (
              <MenuSurfaceAnchor>
                <Menu open={true} onClose={() => setMenu(!showMenu)}>
                  <MenuItem onClick={() => onLogout()}>Logout</MenuItem>
                </Menu>
              </MenuSurfaceAnchor>
            )}
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  );
};

export default AppBar;
