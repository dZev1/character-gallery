import { type StatsProps } from './CharacterCard'
import './StatsBox.css'

export function StatsBox({ data }: StatsProps) {
    return (
        <div className='stats-box-container'>
            <span className='stats-box-title'>STATS</span>
            <div className='stats-box-grid'>
                <div className='stats-box-grid-col'>
                    <span><strong>STR:</strong> {data.strength}</span>
                    <span><strong>DEX:</strong> {data.dexterity}</span>
                    <span><strong>CON:</strong> {data.constitution}</span>
                </div>
                <div className='stats-box-grid-col'>
                    <span>
                        <strong>INT:</strong> {data.intelligence}
                    </span>
                    <span>
                        <strong>WIS:</strong> {data.wisdom}
                    </span>
                    <span>
                        <strong>CHR:</strong> {data.charisma}
                    </span>
                </div>
            </div>
        </div>
    );
}
