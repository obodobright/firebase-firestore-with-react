import React, { useState } from "react";
import styled from "styled-components";
import db from "./firebase";
import { onSnapshot, collection } from "@firebase/firestore";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
const Homescreen = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMyData = async () => {
    await onSnapshot(collection(db, "churchuser"), (snapshot) =>
      setMyData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    setLoading(false);
  };

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            Loading...
          </h1>
        ) : (
          <CardHolder>
            {myData?.map((data, i) => (
              <Card key={i}>
                <Name>{data?.name}</Name>
                <Gender>{data?.gender}</Gender>
                <Location>{data?.location}</Location>
              </Card>
            ))}
          </CardHolder>
        )}

        <div>
          Who you wan to join us, then <Button to="/pushdata">Register here</Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Homescreen;
const Button = styled(Link)``;

const Location = styled.div``;
const Gender = styled.div``;
const Name = styled.div``;
const Card = styled.div`
  width: 150px;
  height: 60px;
  background: transparent;
  box-shadow: -6px -1px 30px -14px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px 20px;
`;
const CardHolder = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
