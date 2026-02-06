import { CardField } from './CardField';
import { StatsBox } from './StatsBox';
import type { CharacterData } from '../types/CharacterData';
import type { StatsData } from '../types/StatsData';
import './CharacterCard.css'

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

