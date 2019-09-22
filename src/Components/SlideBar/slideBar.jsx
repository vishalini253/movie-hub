import React from 'react'
import { Slide } from 'react-slideshow-image'
import './styles.css'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
  }

class SlideBar extends React.Component {
    renderSlideShow = () => {
        const { slideImages } = this.props
        const slideShowView = slideImages.map((image, index) => {
          return (
            <div className="each-slide" key={index} >
              <img src={image} />
            </div>
          )
        })
      return slideShowView
    }
    render() {
        return (
          <div className="slide-container">
            <Slide {...properties}>
                {this.renderSlideShow()}
              </Slide>
          </div>
        )
    }
}

export { SlideBar }
export default SlideBar
