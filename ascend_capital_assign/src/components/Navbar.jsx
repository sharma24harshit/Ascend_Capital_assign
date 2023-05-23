import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <Box className="navbar">
        <Link to="/">
          <Box>
            <Button>Home</Button>
          </Box>
        </Link>
        <Box>
         
            <Link to="/login">
              <Button>Login</Button>
            </Link>
         
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;