import React, { Component } from 'react'
import { Header, Form, Segment, Radio, Grid } from 'semantic-ui-react'
import { isNullishCoalesce } from 'typescript'
import  { Redirect } from 'react-router-dom'
const axios = require('axios')

const genreOptions = [
  { key: 'alternative', text: 'Alternative', value: 'alternative' },
  { key: 'blues', text: 'Blues', value: 'blues' },
  { key: 'classical', text: 'Classical', value: 'classical' },
  { key: 'country', text: 'Country', value: 'country' },
  { key: 'dance', text: 'Dance', value: 'dance' },
  { key: 'electronic', text: 'Electronic', value: 'electronic' },
  { key: 'hip hop', text: 'Hip Hop', value: 'hip hop' },
  { key: 'instrumental', text: 'Instrumental', value: 'instrumental' },
  { key: 'jazz', text: 'Jazz', value: 'jazz' },
  { key: 'orchestra', text: 'Orchestra', value: 'orchestra' },
  { key: 'pop', text: 'Pop', value: 'pop' },
  { key: 'punk', text: 'Punk', value: 'punk' },
  { key: 'reggae', text: 'Reggae', value: 'reggae' },
  { key: 'rock', text: 'Rock', value: 'rock' },
  { key: 'soul', text: 'Soul', value: 'soul' }
]

const skillOptions = [
  { key: 'acoustic guitar', text: 'Acoustic Guitar', value: 'acoustic guitar' },
  { key: 'bass guitar', text: 'Bass Guitar', value: 'bass guitar' },
  { key: 'cello', text: 'Cello', value: 'cello' },
  { key: 'clarinet', text: 'Clarinet', value: 'clarinet' },
  { key: 'double bass', text: 'Double Bass', value: 'double bass' },
  { key: 'drums', text: 'Drums', value: 'drums' },
  { key: 'electric guitar', text: 'Electric Guitar', value: 'electric guitar' },
  { key: 'flute', text: 'Flute', value: 'flute' },
  { key: 'mastering', text: 'Mastering', value: 'mastering' },
  { key: 'mixing', text: 'Mixing', value: 'mixing' },
  { key: 'piano', text: 'Piano', value: 'piano' },
  { key: 'production', text: 'Production', value: 'production' },
  { key: 'rapping', text: 'Rapping', value: 'rapping' },
  { key: 'singing', text: 'Singing', value: 'singing' },
  { key: 'trumpet', text: 'Trumpet', value: 'trumpet' },
  { key: 'violin', text: 'Violin', value: 'violin' }
]

class SignupForm extends Component {
  state = {
    username: null,
    firstName: null,
    lastName: null,
    genres: null,
    skills: null,
    experience: null,
    bio: null
  }

  handleChange = (key, value) => {
    console.log('setting state')
    this.setState({ [key]: value })
  }

  postUser = async () => {
    const { username, firstName, lastName, genres, skills, experience, bio } = this.state
    
    if (username && firstName && lastName && genres && skills && experience && bio) {
      let res
      try {
        res = await axios.get('https://cadence-ycbhlxrlga-uc.a.run.app/api/profiles')
      } catch (error) {
        alert('error')
      }
      this.props.setUser({ username, firstName, lastName, genres, skills, experience, bio })
      console.log(res)
    } else {
      alert('Please ensure all fields are filled')
    }

    // this.props.history.push('/explore')
    const { history } = this.props;
    history.push("/explore")
  }

  render() {
    const { value } = this.state
    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
        <Header as='h2' color='blue' textAlign='center'>
          Sign Up today!
        </Header>
        <Segment padded stacked >
          <Form >
            {/* basic information */}
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username' placeholder='User Name' onChange={(e, { value }) => {this.handleChange('username', value)}}/>
              <Form.Input fluid label='First Name' placeholder='First Name' onChange={(e, { value }) => {this.handleChange('firstName', value)}}/>
              <Form.Input fluid label='Last Name' placeholder='Last Name' onChange={(e, { value }) => {this.handleChange('lastName', value)}}/>
            </Form.Group>

            {/* genre music  */}
            <Form.Select
              fluid label='What kind of music do you make?' placeholder='You can select multiple genres' fluid multiple selection options={genreOptions} onChange={(e, { value }) => {this.handleChange('genres', value)}}/>

            {/* skills */}
            <Form.Select
              fluid label='What are your musical skills?' placeholder='You can select multiple skills' fluid multiple selection options={skillOptions} onChange={(e, { value }) => {this.handleChange('skills', value)}}/>

            {/* level of experience */}
            <Form.Field fluid label='What is your level of experience?'/>
            <Form.Group >
              <Form.Field
                control={Radio}
                label='Beginner'
                value='1'
                checked={this.state.experience === '1'}
                onChange={(e, { value }) => {this.handleChange('experience', value)}}
              />
              <Form.Field
                control={Radio}
                label='Novice'
                value='2'
                checked={this.state.experience === '2'}
                onChange={(e, { value }) => {this.handleChange('experience', value)}}
              />
              <Form.Field
                control={Radio}
                label='Intermediate'
                value='3'
                checked={this.state.experience === '3'}
                onChange={(e, { value }) => {this.handleChange('experience', value)}}
              />
              <Form.Field
                control={Radio}
                label='Advance'
                value='4'
                checked={this.state.experience === '4'}
                onChange={(e, { value }) => {this.handleChange('experience', value)}}
              />
              <Form.Field
                control={Radio}
                label='Expert'
                value='5'
                checked={this.state.experience === '5'}
                onChange={(e, { value }) => {this.handleChange('experience', value)}}
              />
            </Form.Group>

            <Form.TextArea label='Bio' placeholder='Tell us more about you...' onChange={(e, { value }) => {this.handleChange('bio', value)}}/>
            <Form.Checkbox style={{ paddingTop: '2em' }} label='I agree to the Terms and Conditions' />
            <Form.Button color='green' onClick={this.postUser} fluid size='large'>Submit</Form.Button>
            
          </Form>
        </Segment>
        
      </Grid.Column>
      </Grid>
    )
  }
}

export default SignupForm
