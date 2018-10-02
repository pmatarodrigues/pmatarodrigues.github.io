import React from "react"
import '../styles/styles.css'
import Header from "../components/header"
import { Parallax } from 'react-spring'


class Paralax extends React.Component {
    render(){
        return(
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <Parallax.Layer offset={0.9} speed={0.3} style={{ backgroundColor: '#F5F5F5' }} />
            <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#212121' }} />
            
            <Parallax.Layer offset={1} speed={0.1} style={{fontSize: '80px'}}>
                <strong>This is me</strong>
            </Parallax.Layer>
            <Parallax.Layer offset={1.1}
                speed={0.5}>
                <img src={'https://image.ibb.co/bAgr6z/personal_pic.png'} style={{ width: '30%' ,marginRight: '80%', borderRadius: '10%', marginLeft: '5%' }} />
            </Parallax.Layer>
            <Parallax.Layer offset={0.97}
                speed={0.1}
                onClick={() => this.parallax.scrollTo(1)}
                style={{   display: 'grid', alignItems: 'center', justifyContent: 'center', marginLeft: '40%', width: '70%'}}>
                    <p class="paragraph">
                    I'm a technology lover since I was a little kid and a passionate learner, 
                    as I like to read and discover new things everyday. <br/> <br/>
                    I always try to understand everything that's around me and I'm always looking for ways to improve 
                    the quality and effectiveness of every small thing that surrounds me. <br/> <br/>
                    Created some innovative projects on social media, and will keep trying to make something different 
                    and memorable in every project. <br/> <br/>
                    </p>
            </Parallax.Layer>

            <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            </Parallax.Layer>

            <Parallax.Layer offset={1.75} speed={0.2} style={{ opacity: 0.05 }}>
            <img src={'https://image.flaticon.com/icons/svg/993/993552.svg'} style={{ display: 'block', width: '5%', marginLeft: '70%' }} />
            <img src={'https://image.flaticon.com/icons/svg/897/897219.svg'} style={{ display: 'block', width: '10%', marginLeft: '40%' }} />
            <img src={'https://image.flaticon.com/icons/svg/1087/1087038.svg'} style={{ display: 'block', width: '7%', marginLeft: '60%' }} />
            <img src={'https://image.flaticon.com/icons/svg/155/155447.svg'} style={{ display: 'block', width: '5%', marginLeft: '23%' }} />
            <img src={'https://image.flaticon.com/icons/svg/902/902765.svg'} style={{ display: 'block', width: '2%', marginLeft: '10%' }} />
            <img src={'https://image.flaticon.com/icons/svg/149/149195.svg'} style={{ display: 'block', width: '5%', marginLeft: '70%' }} />

            </Parallax.Layer>
        </Parallax>
        );
    }
}

export default Paralax;