import React from 'react';
import Moment from 'react-moment';

import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Scatter from './scatter';

let size = '';
let repo = '';
let total = 0;
const SortedList = (props) => {

    
  if (props.repitems) {
    return (
        <div>
          {props.repitems.map((repitem, index) =>
                <Card style={{ backgroundColor:"blue"}} key={repitem.id}>
                    <Card.Heading style={{ backgroundColor: "#D0F0C0" }}>
                        <Row className="show-grid" >
                      <Col xs={52} md={9}>
                                <Card.Title componentClass="h1">
                                    <a href={repitem.html_url} target="_blank">{index + 1}) {repitem.name} </a>
                                
                                      
                                    
                                </Card.Title>
                                

                      </Col>
                      <Col xs={12} md={3}>
                        Started <Moment from={new Date()}>{repitem.created_at}</Moment>
                            </Col>
                    </Row>

                    </Card.Heading>
                    <Card.Body style={{ backgroundColor: "#F0FFF0" }}>
                  <div>
                    <b>Description: </b>{repitem.description}
                  </div>
                  <div>
                    <b>Language: </b>{repitem.language}<b>  Watchers: </b>{repitem.watchers_count}<b>  Forks: </b>{repitem.forks_count}
                            <div>   {console.log(size = size + repitem.size + ',')}</div>
                            <div>   {console.log(repo = repo + repitem.name + ',')}</div>
                            <div>   {console.log(total += repitem.size)}</div>

                        </div>
                    </Card.Body>

                </Card>

            )}
            <Scatter repoSize={size.split(',')} repoNames={repo.split(',')} label={'Size of Repos'} total={total} />

            {size = ''}
            {repo = ''}
            {total= 0}
        </div>
      )
  } else { return null;}
  };

export default SortedList;
//            <scatter repoSize={size.split(',')} repoNames={repo.split(',')} label={' Representation'} />
