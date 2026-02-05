import { CardField } from './CardField';
import { StatsBox } from './StatsBox';
import './CharacterCard.css'

export interface CharacterData {
    id: number;
    name: string;
    body_type: string;
    species: string;
    class: string;
    stats: StatsData;
    customization: CustomizationData;
}

export interface StatsData {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

interface CustomizationData {
    hair: number;
    face: number;
    shirt: number;
    pants: number;
    shoes: number;
}

interface CharacterProps {
    data: CharacterData;
}

export interface StatsProps {
    data: StatsData
}

export function CharacterCard({ data }: CharacterProps) {
    const stats = data.stats;
    const bodyType = data.body_type == "type_a" ? "Type A" : "Type B"

    return (
        <div className="chcard-container">
            <div className="chcard-lcol">
                <img src='https://unavatar.io/distortion2' className='chcard-lcol-avatar'>
                </img>
                <span className='chcard-lcol-id'>ID: {String(data.id).padStart(8, '0')}</span>
            </div>
            <div className='chcard-rcol'>
                <CardField fieldName='NAME' fieldVal={data.name} />
                <CardField fieldName='SPECIES' fieldVal={data.species} />
                <CardField fieldName='CLASS' fieldVal={data.class} />
                <CardField fieldName='BODY TYPE' fieldVal={bodyType} />

                <StatsBox data={stats} />
            </div>
        </div>
    )
}

