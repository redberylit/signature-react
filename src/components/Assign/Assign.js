import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
// import { Route, Link, BrowserRouter, withRouter } from "react-router-dom";
import {
  Box,
  Button,
  // Container,
  Heading,
  TextField,
  Table,
  Text,
  Toast,
} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { addSignee, selectAssignees } from './AssignSlice';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../common/PageTitle";


const Assign = (props) => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const assignees = useSelector(selectAssignees);
  const dispatch = useDispatch();

  const prepare =() => {
    console.log(' running');
    if (assignees.length > 0) {
      console.log('assignees');
     // let path = `/blog-overview`;
     // history.push("/prepare-document");
navigate(`/prepare-document`,{ replace: true });
window.location.reload();

    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000);
    }
  };

  const addUser = (name, email) => {
    const key = `${new Date().getTime()}${email}`;
    if (name !== '' && email !== '') {
      dispatch(addSignee({ key, name, email }));
      setEmail('');
      setDisplayName('');
    }
  };

  return (
    <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New User" subtitle="Assign" className="text-sm-left" />
    </Row>

    <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
    <div>
      <Box padding={3}>
        <Container>
          <Box padding={3}>
            <Heading size="md">Who needs to sign?</Heading>
          </Box>
          <Box padding={2}>
            <TextField
              id="displayName"
              onChange={event => setDisplayName(event.value)}
              placeholder="Enter recipient's name"
              label="Name"
              value={displayName}
              type="text"
            />
          </Box>
          <Box padding={2}>
            <TextField
              id="email"
              onChange={event => setEmail(event.value)}
              placeholder="Enter recipient's email"
              label="Email"
              value={email}
              type="email"
            />
          </Box>
          <Box padding={2}>
            <Button
              onClick={event => {
                addUser(displayName, email);
              }}
              text="Add user"
              color="blue"
              inline
            />
          </Box>
          <Box padding={2}>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    <Text weight="bold">Name</Text>
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <Text weight="bold">Email</Text>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {assignees.map(user => (
                  <Table.Row key={user.key}>
                    <Table.Cell>
                      <Text>{user.name}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text>{user.email}</Text>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Box>
          <Box padding={2}>
            <Button onClick={prepare} text="Continue" color="blue" inline />
          </Box>
          <Box
            fit
            dangerouslySetInlineStyle={{
              __style: {
                bottom: 50,
                left: '50%',
                transform: 'translateX(-50%)',
              },
            }}
            paddingX={1}
            position="fixed"
          >
            {showToast && (
              <Toast color="red" text={<>Please add at least one user</>} />
            )}
          </Box>
        </Container>
      </Box>
    </div>
    </CardBody>
    </Card>
    </Container>
  );
};

export default Assign;
