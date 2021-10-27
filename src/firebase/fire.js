import { collection, onSnapshot } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db from "./firebase";
import { doc, addDoc } from "@firebase/firestore";
import { app } from "./firebase";

const Fire = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");

  const getData = async () => {
    await onSnapshot(collection(db, "user"), (snapshot) =>
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  const pushData = async () => {
    const collectionRef = collection(db, "user");
    const payload = { name, occupation, location };
    await addDoc(collectionRef, payload);
    await addDoc(collection(db, "user"), {
      name,
      occupation,
      location,
    });
    setName("");
    setLocation("");
    setOccupation("");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <input
        placeholder="Full name"
        name="fname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="location"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        placeholder="Occupation"
        name="occupation"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <button onClick={pushData}>Submit</button>

      {data.map((db, i) => (
        <Wrapper key={i}>
          <h1>{db.name}</h1>
          <p>{db.location}</p>
          <span>{db.occupation}</span>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Fire;
const Wrapper = styled.div``;
const Container = styled.div``;
