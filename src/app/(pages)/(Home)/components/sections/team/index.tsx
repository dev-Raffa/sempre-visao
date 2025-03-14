import Image from "next/image"
import { TeamCard, TeamCardArgs } from "../../cards/team"
import './styles.scss'
import Camila from "../../../../../../../public/images/WhatsApp Image 2025-03-13 at 14.50.26.jpeg"
import Barbara from "../../../../../../../public/images/WhatsApp Image 2025-03-13 at 14.59.57.jpeg"
import Breno  from "../../../../../../../public/images/WhatsApp Image 2025-03-13 at 17.42.56.jpeg"

const team: TeamCardArgs[] = [
    {
        name:'Dr. Breno Reis Almeida ',
        crm: '180.109',
        imageUrl: Breno.src
    },
    {
        name:'Dra. Camila Cardoso Salume Brigagão Alcântara ',
        crm: '174.084',
        imageUrl: Camila.src
    },
    {
        name:'Dra. Bárbara Freitas de Oliveira',
        crm: '193.098',
        imageUrl: Barbara.src
    },
    /*
    {
        name:'Dra. Vanessa Giachetto Bender',
        crm: '197.798',
        imageUrl: ''
    },
    {
        name:'Dra. Ana Carolina Hatsuia Ferreira',
        crm: '242.930',
        imageUrl: ''
    },
    {
        name:'Dr. Gabriel Ricci Pupo',
        crm: '223.337',
        imageUrl: ''
    },
    {
        name:'Dr. Emanuel Ferreira Goulart',
        crm: '254.478',
        imageUrl: ''
    }
    */
]

export const TeamSection = ()=>{
    return(
        <section id="Team"> 
            <div>
                <h2>Conheça o nosso corpo clínico</h2>
            </div>
                <ul>
                    {team.map((member, index)=>{
                        return(
                            <TeamCard 
                                key={`team-member-${index}`}
                                name={member.name}
                                crm={member.crm}
                                imageUrl={member.imageUrl} 
                            />
                        )
                    })}
                </ul>
        </section>
    )
}