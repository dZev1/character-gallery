import './CardField.css'

interface FieldData {
    fieldName: string,
    fieldVal: string
}

export function CardField({ fieldName, fieldVal }: FieldData) {
    return (
        <div className='cardfield-container'>
            <span className='label'>{fieldName}</span>
            <span className='value'>{fieldVal}</span>
        </div>
    )
}