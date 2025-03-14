import Image from 'next/image'
import './styles.scss'

export interface TeamCardArgs {
    name: string,
    crm: string,
    imageUrl: string
}

export const TeamCard = (args: TeamCardArgs)=>{
    return (
        <figure className='TeamCard'>
            <Image src={args.imageUrl} alt={`Dr(a) ${args.name}`} fill />
            <figcaption>
                <h4>{args.name}</h4>
                <p> CRM: {args.crm}</p>
            </figcaption>
        </figure>
    )
}