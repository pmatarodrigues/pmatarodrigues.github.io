import React from "react"
import '../styles/styles.css'
import { Parallax } from 'react-spring'


class Paralax extends React.Component {
    render(){
        return(
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <Parallax.Layer offset={0} speed={0} factor={3} style={{ backgroundImage: 'https://images.unsplash.com/photo-1538442505947-b81af9724604?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6962054cb91cf723be3854e10e608f0&auto=format&fit=crop&w=1100&q=80', backgroundSize: 'cover' }} />

            <Parallax.Layer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={'https://image.flaticon.com/icons/svg/1010/1010627.svg'} style={{ width: '15%', marginLeft: '70%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={'https://image.flaticon.com/icons/svg/1010/1010627.svg'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={'https://image.flaticon.com/icons/svg/1010/1010627.svg'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </Parallax.Layer>

            <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={'https://image.flaticon.com/icons/svg/1010/1010627.svg'} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={'https://image.flaticon.com/icons/svg/1010/1010627.svg'} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </Parallax.Layer>
        </Parallax>
        );
    }
}

export default Paralax;