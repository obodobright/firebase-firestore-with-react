import React, { useState } from "react";
import styled from "styled-components";
import { collection, addDoc, onSnapshot } from "@firebase/firestore";
import db from "./firebase";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const PushData = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");

  // to autogenerate an id, it's very useful to use, addDoc function, if you use the set doc fuction, it ,means you are going to manualyy fix in ur id- an unique id

  const onPushData = async () => {
    const collectionRef = collection(db, "churchuser");
    const payload = { name, gender, location };
    await addDoc(collectionRef, payload);

    setName("");
    setGender("");
    setLocation("");
  };

  return (
    <Container>
      <Wrapper>
        <h1>Pushing Data</h1>
        <input
          type="text"
          placeholder="Enter Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Link to="/successpage">
          <button onClick={onPushData}>Submit</button>
        </Link>
      </Wrapper>
    </Container>
  );
};
export default PushData;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    margin: 10px 0;
  }
`;
const Container = styled.div``;
