import checkBoxStyle from './style'

export default function Checkbox ({checked, text}) {
    return (
        <div className="check-container">
            <input type="checkbox" checked={!!checked} readOnly/> 
            <span style={{textDecorationLine: checked ? 'line-through' : 'none' }}>{text}</span>

            <style jsx>
                { checkBoxStyle }
            </style>
        </div>
    );
}
