import './HeroSection.css'
import downArrow from '../../assets/down-arrow.png'
import Button from '../UI/Button/Button'

const HeroSection = () => {


    return (
        <section id='home'>
            <div className='container'>
                <div data-aos="fade-up">
                    <div className='hero_section'>
                        <div>
                            <h1 className='hero_title'>
                                Hi, I`m <span>Eraly</span>
                                </h1>
                            <p className='hero_text'>
                                I create stellar web experiences with
                                modern technologies. Specializing in
                                full-stuck web development, I build 
                                interfaces that are both beautiful and 
                                functional.
                            </p>
                            <Button>
                                View My Work
                            </Button>
                        </div>
                        <div className='down-arrow'>
                            <p>Scroll</p>
                            <img
                            className='arrow'
                            src={downArrow}
                            alt='arrow'
                            />      
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroSection