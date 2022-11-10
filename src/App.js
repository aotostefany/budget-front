import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
   <Container>
    <Header as='h1'>Budget</Header>
    <Statistic size='small'>
      <Statistic.Label>your balance:</Statistic.Label>
      <Statistic.Value>2.555.555.555,00</Statistic.Value>
    </Statistic>

    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Statistic size='tiny' color='green'>
              <Statistic.Label style={{textAlign: "left"}}>
                Income:
              </Statistic.Label>
              <Statistic.Value style={{textAlign: "left"}}>
                3000000
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
          <Statistic size='tiny' color='red'>
              <Statistic.Label style={{textAlign: "left"}}>
                Expenses:
              </Statistic.Label>
              <Statistic.Value style={{textAlign: "left"}}>
                30
              </Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Header as='h3'>History</Header>
    <Segment color='red'>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">somethig</Grid.Column>
          <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered/>
            <Icon name='trash'/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Header as='h3'>Add new transaction</Header>
    <Form unstackable>
      <Form.Group>
        <Form.Input 
          placeholder="new shine thing" 
          icon="tags" 
          width={12} 
          label="description"/>
        <Form.Input 
          label="value"
          placeholder="100,00"
          width={4} 
          icon='dollar'
          iconPosition='left'/>
      </Form.Group>
      <Button.Group style={{marginTop: 20}}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>Ok</Button>
      </Button.Group>
    </Form>
   </Container>
  );
}

export default App;
