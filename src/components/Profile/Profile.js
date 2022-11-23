import React from 'react';
// import {
//   Box,
//   Button,
//   Text,
//   Avatar,

//   Stack,
//   Column,
//   Heading,
// } from 'gestalt';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import 'gestalt/dist/gestalt.css';
import { auth } from '../../firebase/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser } from '../../firebase/firebaseSlice';
import { resetSignee } from '../Assign/AssignSlice';
import { navigate, Link } from '@reach/router';
import './Profile.css';
import PageTitle from "../common/PageTitle";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { displayName, photoURL, email } = user;

  return (
    <Container fluid className="main-content-container px-4">

     <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Document" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
          <Col span={3}>
        <Row padding={1}>
          <Row>

            {/* <Stack>
              <Text weight="bold">{displayName}</Text>
              <Text>{email}</Text>
            </Stack> */}
            <Row padding={1}>
              <button
                onClick={() => {
                  auth.signOut();
                  dispatch(setUser(null));
                  dispatch(resetSignee())
                  navigate('/');
                }}
                accessibilityLabel="Sign out of your account"
                text="Sign out"
              >
              Sign out
              </button>
            </Row>
          </Row>
        </Row>
      </Col>

          </CardBody>
          </Card>
          </Col>









    </Container>
  );
};
export default ProfilePage;
