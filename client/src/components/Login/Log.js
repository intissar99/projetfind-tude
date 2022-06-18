import "./login.css";
import { React, useState } from "react";
import SignupForm from "./SignupForm";
import SigninForm  from "./SigninForm";
import { AccountContext } from "./AccountContext";
import { motion } from "framer-motion";
const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};
export default function Log() {
  
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };
  return (
    <AccountContext.Provider value={contextValue}>
    <div className="BoxContainer">
      <div className="TopContainer">
        <motion.div  className="BackDrop"
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition={expandingTransition}
        />
         {active === "signin" && (
        <div className="HeaderContainer">
          <h2 className="HeaderText"> Welcome </h2>
          <h2 className="HeaderText"> back </h2>
          <h5 className="SmallText">Please sign-in to continue!</h5>
        </div>
         )}
          {active === "signup" && (
        <div className="HeaderContainer">
          <h2 className="HeaderText"> Create </h2>
          <h2 className="HeaderText"> Account </h2>
          <h5 className="SmallText">Please sign-up to continue!</h5>
        </div>
         )}
      </div>
      <div className="InnerContainer">
      {active === "signin" && <SigninForm />}
      {active === "signup" && <SignupForm />}
      </div>
    </div>
    </AccountContext.Provider>
  );
}
