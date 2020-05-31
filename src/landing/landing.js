import React from 'react';
import StepCard from '../components/stepCard';
import Card from '../components/card';

import './landing.css'
function Landing() {
    return (
        <main>
            <section>
                <div class='mainScreen' >
                    <div class='titlePart'>
                        <h1 class='title'>FABYEON BURGESS, Lawyer</h1>

                        <h3>Your help when You need it</h3>
                        <div class='button-wraper' >
                            <button class='actionButton red' >Call</button>
                        <button class='actionButton yellow' >Leave an email</button>
                        </div>
                        
                    </div>
                    <div class='greenPart'>
                        <h2>
                            We revolutionize the help to the people. Lawyer is not a headache, but a friend. We protect your interests and provide transparency in every move.
                    </h2>
                    </div>
                </div>
            </section>
            <section class='howItWorks'>
                <h4>
                    HOW IT WORKS
            </h4>
                <StepCard number='1' bckg='#f2c94c' margin='0 auto 1vw 13.5vw' color='black' stepTitle='First Contact:' text='You call us or write an email. We analyze
                and then listen to your story. If we think we can
                help to you - we schedule a meeting. ' ></StepCard>
                <StepCard number='2' bckg='#56ccf2' margin='0 auto 1vw 46vw' color='black' stepTitle='Meeting:' text='You tell us your story and we gather facts. We ask question for better understanding, talk about your desired outcome and gather maximun information possible from a minimum time.' ></StepCard>
                <StepCard number='3' bckg='#eb5757' margin='0 auto 1vw 13vw' stepTitle='Analysis:' text=' Here we analize your story, provide amount of hours case approximately will take, hourly price and our strategy.' ></StepCard>
                <StepCard number='4' bckg='#27ae60' margin='0 auto 1vw 31vw' stepTitle='Start of the work:' text='We sign the contract, start our work and defending you in the court.' ></StepCard>
            </section>
            <section class='reviewSection'>
                <Card title='Title' text='Short description' ></Card>
                <Card title='Title' text='Short description' ></Card>
                <Card title='Title' text='Short description' ></Card>
            </section>
            <section id='lorem'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, turpis convallis consectetur urna viverra sem enim mi ut. Nunc pulvinar sit laoreet id sit tincidunt vulputate libero. Habitant fringilla semper vel amet, tellus magna id sed mattis. Viverra vitae augue sed integer. Enim aliquet metus lectus vel nec id ac risus, bibendum. Duis consectetur proin semper nisi, odio. Interdum magna maecenas platea nisi quis viverra. At tortor, quisque accumsan, sagittis quam vulputate. Augue aliquam pretium ultricies ut. Euismod quisque massa ut sed nulla lacus ullamcorper ac feugiat. Odio lacus viverra risus sollicitudin cras id pellentesque. A pharetra commodo elit lacus amet et in interdum mattis. Mauris et, tincidunt venenatis cursus condimentum laoreet. Vitae odio hendrerit egestas feugiat purus.
            </section>
        
        <section>
            <div class='button-wraper' >
                            <button class='lowActionButton green' >Call</button>
                        <button class='lowActionButton yellow-2' >Leave an email</button>
                        </div>
        </section></main>
    )
}

export default Landing;
