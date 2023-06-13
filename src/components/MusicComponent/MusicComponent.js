import React, { Component } from 'react'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player';

export class MusicComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         audioData : []
      }
    }
    
    componentDidMount(){
        axios
        .get('http://localhost:3500/api/v1/music')
        .then(response =>{
            console.log(response)
            this.setState({audioData:response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMessage: 'Error in Retrieving Data'})
        })
    }


  render() {
    const {audioData} = this.state
    return (
        <div className='h-screen'>
      <div className='flex justify-center mt-10'>
        <div className='grid grid-cols-2 gap-5'>
        {audioData.map(audio=>
            <div key={audio.id} className='border border-black max-w-[500px] min-w-[300px]'>
            <h1>Title: <span>{audio.title}</span> <br/></h1>                   
            <h1>Artist: <span>{audio.artist}</span></h1>
             
            <ReactAudioPlayer src={audio.audioSource} controls />
            <audio src={audio.audioSource} ref={audio.audioSource}/>
                     
            </div>
            
            )
        }
        </div>
        </div>
            
        </div>
      
    )
  }
}

export default MusicComponent