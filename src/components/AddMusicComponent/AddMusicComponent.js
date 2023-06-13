import React, { Component } from 'react'

export class AddMusicComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title : '',
         artist : '',
         audioSource : ''
      }
    }

    titleHandler = (event)=>{
        this.setState({
            title : event.target.value
        })
    }

    artistHandler = (event) =>{
        this.setState({
            artist : event.target.value
        })
    }

    audioSourceHandler = (event) =>{
        this.setState({
            audioSource : event.target.value
        })
    }

    formSubmitHandler = (event) =>{
        event.preventDefault()
        console.log(
            this.state.artist,
            this.state.title,
            this.state.audioSource
        )

        fetch("http://localhost:3500/api/v1/music",{
            method : 'POST',
            crossDomain : true,  //doubt
            headers : {
                'Content-type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'     //doubt
            },
            body : JSON.stringify({
                artist : this.state.artist,
                title : this.state.title,
                audioSource : this.state.audioSource
            })
        }
        )
        .then((response) => response.json())
        .then((data)=>console.log(data))
    }

  render() {
    const {title, artist, audioSource} = this.state
    return (
      <form onSubmit={this.formSubmitHandler} className='flex justify-center '>
        <div className='mt-20 border border-black p-10'>
        {/* <div></div> */}
        <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
            <input
                type='text'
                placeholder='Enter the Title of  Audio'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={title}
                onChange={this.titleHandler}
                required
            />
        </div>

        <div>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Artist</label>
            <input
                type='text'
                placeholder='Enter the Artist of Audio'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={artist}
                onChange={this.artistHandler}
                required
            />
        </div>

        <div>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Artist</label>
            <input
                type='file'
                placeholder='Enter the Artist of Audio'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={audioSource}
                onChange={this.audioSourceHandler}
                required
            />
        </div>

        <div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'>Submit</button>
        </div>

        </div>
      </form>
    )
  }
}

export default AddMusicComponent