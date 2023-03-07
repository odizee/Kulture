/* eslint-disable node/no-missing-import */
import Head from "next/head";
import { useState } from "react";
import Footer from "./Footer/Index";
import SignupModal from "./Signin/Index";
import Navbar from "./Navbar/Index";

function Page({ title, description, children, type }) {
  // const editTitle = title?includes(undefined) ? 'loading...' : title;
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(!showModal);
  };

  console.log(showModal);
  return (
    <>
      <Head>
        {/* <title>{editTitle ? `${editTitle}` : 'Kulture'}</title> */}
        <title>Kulture</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Navbar type={type} toggleModal={onShowModal} />
      <div
        style={{
          display: showModal === true ? "flex" : "none",
          maxWidth: "514px",
          height: "100vh",
          zIndex: "1000000",
          margin: "auto",
          alignItems: "center",
        }}
      >
        {/* <SignupModal toggleModal={onShowModal} /> */}
      </div>
      {children}
      <Footer type={type} />
    </>
  );
}

export default Page;
